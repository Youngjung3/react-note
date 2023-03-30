import React from 'react';
import {connect} from 'react-redux';
import { incrementCounter,decrementCounter } from "./actions";

function App({count,incrementCounter,decrementCounter}) {
  return (
    <div>
      <h1>카운터:{count}</h1>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return{
    count:state.count,
  }
}

export default connect(mapStateToProps,{incrementCounter,decrementCounter})(App);
// export default App;
