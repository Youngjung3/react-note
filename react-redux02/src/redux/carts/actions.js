import { ADD_CART } from "./types";
export const addCart=(number)=>{
    console.log(number);
    return {
        type:ADD_CART,
        payload:Number(number) // 전송데이터
    };
};

