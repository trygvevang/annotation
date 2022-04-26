import { FC } from "react";
import { Label, LABELS } from "../types";

import "./AnnotateObservation.scss";

interface Props {
  id: string;
  message: string;
  submit: (id: string, label: Label) => void;
  label?: Label;
}
export const AnnotateObservation: FC<Props> = ({
  id,
  message,
  submit,
  label,
}) => {
  return (
    <div className="annotation">
      <p className="message">{message}</p>
      <ul className="categories">
        {LABELS.map((x) => (
          <li
            onClick={() => {
              submit(id, x);
            }}
            key={x}
            className={label === x ? "categories-selected" : ""}
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
