import { FC, useState } from "react";
import { AnnotateObservation } from "./AnnotateObservation";
import { Observation, Label, Annotation } from "../types";
import { DownloadFile } from "../io/DownloadFile";

interface Props {
  observations: Observation[];
}
export const Observations: FC<Props> = ({ observations }) => {
  const [currentIndexToLabel, setCurrentIndexLabel] = useState(0);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const isFinished = currentIndexToLabel >= observations.length;

  const updateIndex = (id: string, label: Label) => {
    setAnnotations([...annotations, { id, label }]);

    if (currentIndexToLabel < observations.length) {
      // ikke length - 1 fordi jeg definerer "ferdig" current >= len(observations) conditional rendering på linje 22.
      setCurrentIndexLabel(currentIndexToLabel + 1);
    }
  };

  return (
    <>
      {!isFinished && (
        <>
          <p>
            Melding {currentIndexToLabel + 1} / {observations.length}
          </p>
          <AnnotateObservation
            id={observations[currentIndexToLabel].id}
            key={observations[currentIndexToLabel].id}
            message={observations[currentIndexToLabel].message}
            submit={updateIndex}
          />
        </>
      )}
      <p>Progress: {(currentIndexToLabel / observations.length) * 100} %</p>
      {isFinished && <DownloadFile annotations={annotations} />}
    </>
  );
};
