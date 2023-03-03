import { useState } from "react";
import "./App.css";
import { QrReader } from "react-qr-reader";

function App() {
  const [data, setData] = useState("No-result");

  function handleResult(result, error) {
    if (!!result) {
      setData(result?.text);
    }
    if (!!error) {
      console.info(error);
    }
  }

  return (
    <div className="App">
      <QrReader
        className="main"
        onResult={handleResult}
        style={{ maxWidth: "100%", width: 460, height: 500 }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;
