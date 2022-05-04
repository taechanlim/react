const { createStore,compose,applyMiddleware } = require('redux')
const rootReducer = require('./reducers/index.js')
const reduxSaga = require('redux-saga')
// import saga from 'redux-saga'
const { takeEvery,takeLatest,call,put } = require('redux-saga/effects')

function loginAPI(id,pw){
    return axios.get('http://localhost:3000')
}

function* change(action){
    console.log(action)
    const {payload:{id,pw}}=action
    console.log(id,pw)
    //비동기코드
    //call : 함수를 호출하기위해 사용
    try{
        const result = yield call(loginAPI,id,pw)
        //성공
        //put = dispatch
        yield put({type:'성공'})
    }catch (e){
        //실패
        yield put({type:'실패'})
    }
}
function* change2(action){
    console.log(action)
}

function* rootSaga(){
    //1. action 상태를 확인하고 싶다.
    //takeEvery : 액션값이 같을경우 특정함수를 호출하는 아이.
    //takeEvery의 1번째 인자값:TYPE내용, 2번째인자값:호출할 제너레이터 함수명.
    yield takeEvery('abc1',change)

    //takeLatest : 마지막 상태변경만 실행하겠다.
    yield takeLatest('abc2',change2)
}

const sagaMiddleware = reduxSaga.default()

const middleware = [sagaMiddleware]

const enhancer = process.env.NODE_ENV !== 'production'
? compose(applyMiddleware(...middleware))
: composeWithDevTool(applyMiddleware(...middleware))

const store = createStore(rootReducer,enhancer)
sagaMiddleware.run(rootSaga)

store.dispatch({type:'abc1',payload:{id:'web7722',pw:'1234'}})
store.dispatch({type:'abc2'})
store.dispatch({type:'abc3'})



