import { FC } from "react";
import { Observation } from "../types";
import Papa from "papaparse";

interface Props {
  setData: (data: Observation[]) => void;
}
export const UploadFile: FC<Props> = ({ setData }) => {
  const handleFileChange = (event: any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {
        setData(results.data);
      },
    });
  };

  return (
    <>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleFileChange}
      />
    </>
  );
};
