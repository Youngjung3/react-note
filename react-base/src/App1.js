import React, {Fragment} from "react";

// import React from "react";

// import Child from "./Child";
// import "./Comp2.css";

// js
function FruitsFn({name}){
  return <h1>내가 좋아하는{name}</h1>
}
let fruits=[
  {
    name:'banana',
    image:'http://qwerew.cafe24.com/images/banana.png',
  },
  {
    name:'orange',
    image:'http://qwerew.cafe24.com/images/orange.png',
  },
]

function App1() {
  return (
    // ui 만 넣기
    <>
      {fruits.map((o)=>{
        return <FruitsFn name={o.name} />;
      })}
    </>
  );
}

export default App1;
