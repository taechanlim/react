import React,{useReducer} from 'react'

const reducer = (state,action) => {
    console.log(state,action) // 2번째인자값 : dispatch의 첫번째인자값
    console.log(action.type)

    // if(action.type === '유저아이디바꿀래'){
    //     return{
    //         ...state,
    //         user:{
    //             ...state.user,
    //             username:'이름2'
    //         }
    //     }
    // }

    switch(action.type){
        case "changeId":
            return{
                ...state,
                user:{
                    ...state.user,
                    userid:'아이디1'
                }
            }
        case "changeName":
            return{
                ...state,
                user:{
                    ...state.user,
                    username:'이름1'
                }
            }

        case "Add_List":
            return{
                ...state,
                notice:[
                    ...state.notice,
                    {idx:1,subject:'dwq11',content:'eqwe11',date:'2022-04-28'}
                ]
            }
    }

    return state
}

const initialState = {
    user:{
        userid:'',
        username:'',
        userlevel:''
    },
    notice:[
        {idx:0,subject:'dwq',content:'eqwe',date:'2022-04-28'}
    ],
}


const Reduce = () => {

    const [state,dispatch] = useReducer(reducer,initialState)

    // console.log(state) -> initialState값
    // useReducer 목적은 상태바꾸는 코드를 하나의 함수에서 몰아넣기 위함.
    // dispatch 목적은 상태를 바꾸기 위함.
    // 상태가 하나다
    // 상태를 바꾸는 함수도 하나다 -> Context와 잘 어울린다.

    const handleClick = () => {
        dispatch({type:'changeId'}) //얘를 호출하니까 reducer를 실행시켜줍니다.
    }
    const handleClick2 = () => {
        dispatch({type:'changeName'})
    }

    const addList = () => {
        dispatch({type:'Add_List'})
    }

    return(
        <>  
            <h3>useReducer 배우기</h3>
            <p>
                <button onClick={handleClick}>아이디바꾸는 버튼</button>
                <button onClick={handleClick2}>이름 바꾸는 버튼</button>

                <button onClick={addList}>리스트 추가</button>
                {JSON.stringify(state)}
            </p>
            
        </>
    )
}

/*
    useReducer를 사용하는 목적:상태바꾸는 코드를 한공간에 몰아넣고 싶어서
    상태를 만들수 있는 메서드가 useReducer입니다.
    
    useReducer는 상태를 만들고 상태를 변경할수있는 함수를 제공해줍니다 -> dispatch

    ex) const [state,dispatch] = useReducer(함수,initialState)  -> initialState=기본값


    복습:useReducer,useContext 같이 써보기
*/

export default Reduce