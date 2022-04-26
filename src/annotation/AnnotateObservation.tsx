import { FC, useState } from "react";
import { Label, LABELS } from "../types";

import "./AnnotateObservation.scss";

interface Props {
  id: string;
  message: string;
  submit: (id: string, label: Label) => void;
}
export const AnnotateObservation: FC<Props> = ({ id, message, submit }) => {
  const [selected, setSelected] = useState<Label>();

  const handleSubmit = () => {
    if (selected) {
      submit(id, selected);
    }
  };

  return (
    <div>
      <p className="message">{message}</p>
      <ul className="categories">
        {LABELS.map((x) => (
          <li
            onClick={() => {
              setSelected(x);
            }}
            key={x}
            className={selected === x ? "categories-selected" : ""}
          >
            {x}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Annoter</button>
    </div>
  );
};
