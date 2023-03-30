import React from "react";
import { connect } from "react-redux";
import { addCart } from "../redux/carts/actions";

const Carts = ({ count, addCart }) => {
  const [number,setNumber]=React.useState(1);
  return (
    <div className="items">
      <p>장바구니수:{count}</p>
      <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <button
        onClick={() => {
          addCart(number);
        }}
      >
        장바구니 추가하기
      </button>
    </div>
  );
};
const mapStateToProps = ({carts}) => {
  console.log(carts);
  return { count: carts.count };
  };

const mapDispatchToProps = {
    addCart:(number)=>addCart(number),
};
export default connect(mapStateToProps, mapDispatchToProps)(Carts);
