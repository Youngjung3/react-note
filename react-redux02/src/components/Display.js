import React from "react";
import { connect } from "react-redux";

const Display = ({ count }) => {
  return (
    <div className="items">
      <p>Display 카테고리 상품갯수:{count}</p>
    </div>
  );
};
const mapStateToProps = ({products}) =>{ return { count: products.count }};

export default connect(mapStateToProps)(Display);
