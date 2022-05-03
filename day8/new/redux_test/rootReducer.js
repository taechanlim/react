const redux = require('redux')
const {createStore,combineReducers} = redux 
const {user,USER_ADD} = require('./reducer/user.js')
const {comment,COMMENT_ADD} = require('./reducer/comment.js')
const category = require('./reducer/category.js')


// userid바꾸는거,comment하나 추가하는거,maincd에서 서브카테 하나추가


const  rootReducer = combineReducers({
    user,
    comment,
    category
})

const store = createStore(rootReducer)

store.dispatch(USER_ADD('아이디바꿀거야'))
store.dispatch(COMMENT_ADD({ idx:1, content:'pluscomment', date:'2022-05-03' }))
console.log(store.getState())

