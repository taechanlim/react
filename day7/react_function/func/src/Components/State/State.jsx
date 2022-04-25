import React,{useState} from 'react'

// const State = () => {
//     const [count,setCount] = useState(0)
//     // const state = useState(0) 위 코드를 풀어쓴것.
//     // const count = state[0]
//     // const setCount = state[1]

//     const [value,setValue] = useState('aaaa')
//     const [obj,setObj] = useState({name:'이름1',content:'안녕'})
    

//     const handleClick = () => {
//         setValue('bbbb')
//     }

//     return(
//         <div>
//             <button onClick={handleClick}>버튼</button>
//             {value}
//         </div>
//     )
// }

const State = () => {
    const [count,setCount] = useState(0)

    
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ ()=>{ setCount(count+1) } }>
                Click me
            </button>
        </div>
    )
}

export default State