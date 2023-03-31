import { useState } from "react";
import Section3 from "./useEffect/useEffect1";
import Timer from "./useEffect/useEffect2";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >정지</button>
      <Section3 />
      {show && <Timer />}
    </div>
  );
}

export default App;
