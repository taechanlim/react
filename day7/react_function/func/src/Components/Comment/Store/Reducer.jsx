export const GET_COMMENT = "GET_COMMENT"
export const Create_Comment = "Create_Comment"
export const Update_Comment = "Update_Comment"
const reducer = (state,action) => {
    //action {type:'',payload:''}
    const {type,payload} = action
    switch(type){
        case GET_COMMENT:
            return{
                ...state
            }
        
        case Create_Comment:
            return{
                ...state,
                commentItem:[...state.commentItem,payload]
            }

        case Update_Comment:
            const {index,content} = payload
            const commentItem = [...state.commentItem]
            commentItem[index].content = content
            return{
                ...state,
                commentItem
            }
        default:
            return state
    }
}

export default reducer