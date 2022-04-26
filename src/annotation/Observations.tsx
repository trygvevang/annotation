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

  const nextIndex = (id: string, label: Label) => {
    // Finn ut om det eksisterer en tilhørende label til id. Hvis det er tilfelle oppdater til denne label
    if (!annotations.find((x) => x.id === id)) {
      setAnnotations([...annotations, { id, label }]);
    } else {
      setAnnotations(
        annotations.map((x) =>
          x.id === id ? { id: x.id, label } : { id: x.id, label: x.label }
        )
      );
    }

    if (currentIndexToLabel < observations.length) {
      // ikke length - 1 fordi jeg definerer "ferdig" current >= len(observations) conditional rendering på linje 22.
      setCurrentIndexLabel(currentIndexToLabel + 1);
    }
  };

  const previousIndex = () => {
    if (currentIndexToLabel > 0) {
      setCurrentIndexLabel(currentIndexToLabel - 1);
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
            submit={nextIndex}
            label={
              annotations.find(
                (x) => x.id === observations[currentIndexToLabel].id
              )?.label
            }
          />
          <button onClick={previousIndex}>Forrige melding</button>
        </>
      )}
      <p>Progress: {(currentIndexToLabel / observations.length) * 100} %</p>
      {isFinished && <DownloadFile annotations={annotations} />}
    </>
  );
};
