import React,{ useState } from 'react'

//함수형 컴포넌트에는 상태를 만들지 못하는데
// Hook으로 사용 가능하다
// Hook -> useXXXX
//useState 매서드 사용
// React.useXXXX

// const Form  = () =>{


//     // const [userid,setUserid] = useState('')
//     // const [password,setPassword] = useState('') 합치기 ->

//     const [values,setValues] = useState({userid:'',password:''})

//     const handleSubmit = e =>{
//         e.preventDefault()
//     }

//     const handleChange = e => {
//         const value = e.target.value
//         const name = e.target.name

//         // {userid:'',password:'',userid:'asdas',password:'123'}
//         setValues({...values,[name]:value})
//     }

//     // const changeUserid = e => {
//     //     const value = e.target.value
//     //     setValues({userid:value})
//     // }

//     // const changePassword = e => {
//     //     const value=e.target.value
//     //     setValues({password:value})
//     // }
//     return(
//         <form onSubmit={handleSubmit} >
//             {/* userid상태와 password상태값을 alert띄우고싶어요 */}
//             <h2>회원가입</h2>
//             <ul>
//                 <li>
//                     <label htmlFor='userid'>아이디</label>
//                     <input type="text" name="userid" onChange={handleChange} value={values.userid} />
//                     {/* onChange할때마다 상태를 최신으로 해주고싶어요 */}
//                 </li>
//                 <li>
//                     <label htmlFor='password'>패스워드</label>
//                     <input type="password" name="password" onChange={handleChange} value={values.password} />
//                     {/* onChange할때마다 상태를 최신으로 해주고싶어요 */}
//                 </li>
//                 <li><input type="submit" value="가입" /></li>
//             </ul>

//         </form>
//     )
// }

//HOOKS

//hook을 만들때 use를 붙여야하는 규칙이 있습니다
//defaultvalue 매개변수로 초기값 설정이 가능합니다.
const useInput = (defaultvalue) => {
    const [value,setValue] = useState(defaultvalue)

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}


const Form  = () =>{

    const id = useInput('')
    const pw = useInput('')

    const handleSubmit = e =>{
        e.preventDefault()
    }

    //Hook의 장점
    //어떠한 함수든 함수안에서 상태를 만들수있다

    return(
        <form onSubmit={handleSubmit} >
            {/* userid상태와 password상태값을 alert띄우고싶어요 */}
            <h2>회원가입</h2>
            <ul>
                <li>
                    <label htmlFor='userid'>아이디</label>
                    <input type="text" name="userid" {...id} />
                    {/* onChange할때마다 상태를 최신으로 해주고싶어요 */}
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input type="password" name="password" {...pw} />
                    {/* onChange할때마다 상태를 최신으로 해주고싶어요 */}
                </li>
                <li><input type="submit" value="가입" /></li>
            </ul>

        </form>
    )
}



export default Form