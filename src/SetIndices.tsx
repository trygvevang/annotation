import { ChangeEvent, FC, useState } from "react";

interface Props {
  set: (indices: number[]) => void;
}
export const SetIndices: FC<Props> = ({ set }) => {
  const [indices, setIndices] = useState<number[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={() => set(indices)}>Oppdater indekser</button>
    </>
  );
};
