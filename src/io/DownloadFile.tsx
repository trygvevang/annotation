import { FC } from "react";
import { Annotation } from "../types";
import { CSVLink } from "react-csv";

import "./DownloadFile.scss";

interface Props {
  annotations: Annotation[];
}

export const DownloadFile: FC<Props> = ({ annotations }) => {
  return (
    <CSVLink
      data={annotations}
      filename="annotations.csv"
      className="downloadBtn"
    >
      Lagre annotasjoner
    </CSVLink>
  );
};
