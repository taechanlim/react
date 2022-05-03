const initialState = {
    list:[{ idx:0, content:'asdf', date:'2022-05-03' }],
    value:''
}

const ADD = 'COMMENT/ADD'
const COMMENT_ADD = (payload) => ({
    type:ADD,
    payload
})


const comment = (state=initialState,action) => {
    switch(action.type){
        case ADD:
            return{
                ...state,
                list:[...state.list,action.payload]
            }
        default:
            return state
    }
}

module.exports = {comment,COMMENT_ADD}