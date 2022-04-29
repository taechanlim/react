import Store,{initialState} from "./Store/Context";
import React,{useReducer,useMemo} from "react";
import reducer,{ GET_COMMENT } from "./Store/Reducer"
import CommentLayout from "./CommentLayout";

// 상태와 dispatch 값 -> reducer 사용

const Comment = () => {

    const [state,dispatch] = useReducer(reducer,initialState)
    // dispatch({type:GET_COMMENT})
    

    const defaultValue = useMemo(()=>({
        state,
        dispatch
    }),[state])

    

    return(
        <Store.Provider value={defaultValue}>
            <CommentLayout />
        </Store.Provider>
    )
}

export default Comment
