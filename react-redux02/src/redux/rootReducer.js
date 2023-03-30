import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartsReducer from "./carts/reducer";

const rootReducer=combineReducers({
    carts:cartsReducer,
    products:productReducer
})
export default rootReducer;