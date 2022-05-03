const redux = require('redux')
const {createStore} = redux //createStore : useReducer같이 상태를 만들어주는 함수

// userid바꾸는거,comment하나 추가하는거,maincd에서 서브카테 하나추가
const Change_Id = "change_id"
const Add_Comment="add_comment"
const Add_Subcate="add_subcate"

const change_id = (payload) => {
    return{
        type:Change_Id,
        payload
    }
}
const add_comment = (payload) => {
    return{
        type:Add_Comment,
        payload
    }
}
const add_subcate = (payload) => {
    return{
        type:Add_Subcate,
        payload
    }
}



const initialState = {
    user:{
        userid:'web7722',
        username:'ingoo'
    },
    comment:{
        list:[{ idx:0, content:'asdf', date:'2022-05-03' }]
    },
    category:{
        mainCd:[ 
            {  
                idx:0,
                name:'board',
                subCate:[
                    {
                        idx:0,
                        name:'notice'
                    },
                    {
                        idx:1,
                        name:'freeboard'
                    },
                ]
            }
        ]
    },
}


const reducer = (state=initialState,action) => {
    
    switch (action.type){
        case Change_Id:
            return{
                ...state,
                user:{
                    ...state.user,
                    userid:action.payload
                }
            }

        // case Add_Comment
            
        

        default:
            return state
    }
}

const store = createStore(reducer)

store.dispatch(change_id('아이디바꿈'))
store.dispatch(add_comment())
store.dispatch(add_subcate())

console.log(store.getState())

