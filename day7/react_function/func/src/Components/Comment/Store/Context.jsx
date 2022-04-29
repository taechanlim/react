import { createContext } from "react";

export const initialState = {
    commentItem:[],
    loading:false,
    errors:null
}

const Store = createContext()

export default Store
// export const a = 10 이렇게 보내면 {a:10}형태로 보내진다.