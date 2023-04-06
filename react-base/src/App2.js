import React from "react";
import Test from "./Test";
import "./mango.css";

// js
function App() {
  const name="🐧딴딴딴";
  const style={
    backgroundColor:"black",
    color:"pink",
    fontSize:24,
    padding:"1rem",
  }
  return (
    // ui 만 넣기
    <div>
      {/* 여기에 쓰는거 X */}
      <Test
        // 열린태그에 줄바꿈을 하고 씀
      ></Test>
      <Test 
        // 줄바꿈을 꼭해
      />
      <h3 className="mango">{name}</h3>
      <h3 style={style}>{name}</h3>
    </div>
    
  );
}

export default App;
