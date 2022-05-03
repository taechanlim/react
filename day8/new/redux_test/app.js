const redux = require('redux')
const {createStore} = redux //createStore : useReducer같이 상태를 만들어주는 함수

//console.log(redux) // 객체반환 ,CreateStore:함수,applyMiddleware:함수,CombineReducers:함수 사용할듯?

const Change_name = "change_name"
const Mega_Coffee_Up = "megacoffeeUp"
const Set_Up = "setup"
const ORDER = "order"

const change_name = () => {
    return{
        type:Change_name
    }
}

const mega_coffee_up = () => {
    return{
        type:Mega_Coffee_Up
    }
}

const set_up = () => {
    return{
        type:Set_Up
    }
}
const order = (payload) => {
    return{
        type:ORDER,
        payload
    }
}

//initialState의 역할 : 상태를 바꿔주는 함수.
//initialState 함수가 return 되면 상태가 바뀝니다.
// const initialState = (state,action) => {
//     // console.log(action.type)
//     if(action.type === "change_name"){
//         return {
//             ...state,
//             name:'hihi2'
//         }
//     }else if (action.type === "megacoffeeUp"){
//         return {
//             ...state,
//             megacoffee:state.megacoffee+1
//         }
//     }
//     else{
//         return {
//             name:'hihi',
//             megacoffee:0
//         }
//     }

    
// }

const initialState = (state,action) => {
    switch (action.type){
        case Change_name:
            return{
                ...state,
                name:'hihi2'
            }
        case Mega_Coffee_Up:
            return{
                ...state,
                megacoffee:state.megacoffee+1
            }
        case Set_Up:
            return{
                ...state,
                name:'hihi',
                megacoffee:0
            }
        case ORDER:
            return{
                ...state,
                megacoffee:action.payload
            }

        default:
            return{
                name:'hihi',
                megacoffee:0
            }
    }

    
}

//store 인자값 2가지 -> 1.reducer 2.devtools
const store = createStore(initialState)
// console.log('스토어',store)
/*
    dispatch
    subscribe
    getState
*/

console.log(store.getState()) // { name: 'hihi' } 출력 (state값)

store.dispatch(change_name()) // action값
//dispatch: 스토어의 첫번째 인자값을 호출하는 행위

//console.log(store.getState()) // { name: 'hihi2' } 출력

store.dispatch(mega_coffee_up())

//console.log(store.getState()) //{ name: 'hihi2', megacoffee: 1 } 출력

// subscribe인자값 : 함수표현(콜백)
const log = () => {
    console.log('hello world')
}
store.subscribe(log) //이벤트 등록개념
store.dispatch(mega_coffee_up()) //dispatch를 호출하면 subscribe의 log 함수가 실행
console.log(store.getState()) //{ name: 'hihi2', megacoffee: 2 } 다시 메가커피숫자가 오른것을 확인

//reset 
store.dispatch(set_up())
console.log(store.getState())

//메가커피수를 가변적으로 만들고싶을때 (payload 활용)
store.dispatch(order(11))
console.log(store.getState())
