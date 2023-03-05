import { useState } from "react";
import "./App.css";
import { QrReader, OnResultFunction, QrReaderProps } from "react-qr-reader";

interface IResult {
  text: string;
}

function App() {
  const [qrCodeProducer, setqrCodeProducer] = useState("No-result");

  function handleResult(result: IResult, error: any) {
    if (!!result) {
      setqrCodeProducer(result?.text);
    }
    if (!!error) {
      console.info(error);
    }
  }

  return (
    <div className="App">
      <QrReader className="main" onResult={handleResult} />
      <p>{qrCodeProducer}</p>
    </div>
  );
}

export default App;
