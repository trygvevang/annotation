import { useState } from "react";
import "./App.css";
import { UploadFile } from "./io/UploadFile";
import { Observations } from "./annotation/Observations";
import { Observation } from "./types";

function App() {
  const [data, setData] = useState<Observation[]>();

  return (
    <div className="App">
      <header className="App-header">
        {!data && (
          <>
            <p>Last opp datasett</p>
            <UploadFile setData={setData} />
          </>
        )}
        {data && <Observations observations={data} />}
      </header>
    </div>
  );
}

export default App;
