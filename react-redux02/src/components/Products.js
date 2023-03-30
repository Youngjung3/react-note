import React from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct } from "../redux";

// const Products =(props)=>{
const Products = ({ count, addProduct, removeProduct }) => {
  return (
    <div className="items">
      {/* <p>상품갯수:{props.count}</p> */}
      <p>상품갯수:{count}</p>
      <button
        onClick={() => {
          addProduct();
          // props.addProduct();
        }}
      >
        등록하기
      </button>
      <button
        onClick={
          () => removeProduct()
          // props.removeProduct();
        }
      >
        삭제하기
      </button>
      {/* <button
        onClick={
          () => {}
        }
      >
        0
      </button> */}
    </div>
  );
};
const mapStateToProps = ({products}) => {
    // console.log(state);
    return { count: products.count };
}
/* 
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: () => dispatch(addProduct()),
    removeProduct: () => dispatch(removeProduct()),
  };
};
 */
const mapDispatchToProps = {
    addProduct,
    removeProduct,
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
