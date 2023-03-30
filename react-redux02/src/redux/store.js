import {createStore} from 'redux';
import rootReducer from "./rootReducer";
// import productReducer from "./products/reducer";

// const store=createStore(productReducer);
const store=createStore(rootReducer);
export default store;