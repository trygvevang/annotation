import { useState } from "react";
import "./App.css";
import { UploadFile } from "./io/UploadFile";
import { Observations } from "./annotation/Observations";
import { Observation } from "./types";

function App() {
  const [data, setData] = useState<Observation[]>();
  const [indices, setIndices] = useState<number[]>([0, 1, 2]);

  return (
    <div className="App">
      <header className="App-header">
        {!data && (
          <>
            <p>Last opp datasett</p>
            <UploadFile setData={setData} />
          </>
        )}
        {!indices && <></>}
        {data && indices && (
          <Observations observations={data.filter((_, i) => i in indices)} />
        )}
      </header>
    </div>
  );
}

export default App;
