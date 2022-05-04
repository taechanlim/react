const { createStore,compose,applyMiddleware } = require('redux')
const rootReducer = require('./reducers/index.js')


//미들웨어
// thunk
    // 10줄짜리,간단하고 설정쉽고 사용도 쉽지만 잘못짜면 터진다.
// saga
    // 설정도 귀찮고 사용도 귀찮지만 실수가 적어진다


const thunk = ({dispatch,getState}) => (next) => (action) => {
    
    // if(typeof action === 'function'){
    //     return action(dispatch)
    // }else{
    //     return next(action)
    // }

    return(
        typeof action === 'function'
        ? action(dispatch)
        : next(action)
    )
}

const middleware = [thunk]
// const enhancer = compose(applyMiddleware(...middleware))
const enhancer = process.env.NODE_ENV === 'production'
? compose(applyMiddleware(...middleware))
: composeWithDevTool(applyMiddleware(...middleware))

const store = createStore(rootReducer,enhancer)

//redux_devtool

console.log(store.getState())
store.dispatch({type:'asdqw'})
// store.dispatch({type:'asdqw'})
// store.dispatch({type:'asdqw'})
// store.dispatch({type:'asdqw'})

// const loginAPI = () => async dispatch => {
//     // try
//     // const result = await axios
//     // result.data -> success
//     //      dispatch({type:로그인성공})
//     // catch
//     // error
//     //      dispatch({type:로그인실패})

// }

// const aa = () => {
//     const bb = (dispatch) => {
//         dispatch({type:'나는 로그인을 할거야'})
//     }
//     return bb
// }

const aaa = () => async (dispatch) =>{
    dispatch({type:'로그인시도함?'})
    try{
        const result = await axiot.get(url,{
            credential:true
        }) //실행이된다면 dispatch를 던짐
        dispatch({type:'로그인성공함',payload:true})
    }catch(e){
        dispatch({type:'로그인실패함',payload:false})
    }
}

store.dispatch(aaa())
