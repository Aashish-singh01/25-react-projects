import { useState } from "react";
import "./App.css";
import {QRCode} from "react-qr-code";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQr() {
    setQrCode(input);
    setInput('')
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter Your Value Here"
        />
        <button disabled={!input.trim()} onClick={handleQr}>
          Generate
        </button>
      </div>
      <div>
    
        {qrCode ? (
          <QRCode
            id="qr-code-values"
            value={qrCode}
            size={300}
            
            // bgColor="#fff"
          />
        ) : (
          <p>Enter a value and click Generate to show the QR code.</p>
        )}
      </div>
    </div>
  );
}

export default App;
