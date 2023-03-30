import { ADD_CART } from "./types";

const initState = {
  count: 0,
};

const cartsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
export default cartsReducer;
