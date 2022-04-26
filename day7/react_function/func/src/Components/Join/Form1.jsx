import React,{ useState,useEffect } from 'react'

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

//폼만들때 폼체크 설정(비밀번호가 너무 짧다~ 등등)

const validate = (input) => {
    const {userid,password} = input
    const errors = {}

    if(!userid){ //userid가 비어있으면
        errors.userid = "이메일이 입력되지 않았습니다"
    }else if(!/^[a-zA-Z0-9%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userid) ){
        //정규표현식
            // !/^[a-zA-Z0-9%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userid)  // -> 결과가 true/false로 떨어짐
            //web7722@gmail.com

        errors.userid = "입력된 이메일이 유효하지 않습니다."
    }
    if(!password){
        errors.password = "비밀번호가 입력되지 않았습니다"
    }else if(password.length < 8){
        errors.password = "8자리 이상 입력해주세요"
    }

    return errors
}




const Form  = () =>{

    const id = useInput('')
    const pw = useInput('')
    const [submit,setSubmit] = useState(false)
    const [errors,setErrors] = useState({}) 
    //errors = {} 에러객체가 비어있으면 정상적인 값
    //errors = { userid : '글자수 6자리이상해줘' }
    //errors = { password: '패스워드 더 강하게 설정해줘' }
    //errors = { userid : '글자수 6자리이상해줘',password: '패스워드 더 강하게 설정해줘' }

    const handleSubmit = e =>{
        e.preventDefault()
        // e.target.name === 'userid'
        // e.target.name === 'password'
        // id.value
        // pw.value

        setSubmit(true)

        const input = {
            userid:id.value,
            password:pw.value
        }

        // validate(input)

        // let obj = {}
        
        // if(id.value.length < 8){
        //     obj.userid = '글자수 8자리이상 해줘'
        // }
        // if(pw.value.length < 8){
        //     obj.password = '비밀번호 자릿수 8자리이상 해줘'
        // }
        // console.log(obj)

        
        setErrors(validate(input))
    }

    
    //뒤에 배열이 바뀔때마다 함수실행 -> update역할 
    // 그런데 조건을 안달면 componentDidMount역할로인해 최초로딩때 한번 실행을 해버리므로
    // 조건문을 달아줘야한다
    //useEffect는 다른 코드가 다 로딩후에 실행된다. (DOMContentLoaded와 비슷)
    //정확한명칭 : sideEffect
    //즉 이 코드는 side에서 돈다~ 로 이해하면 됨 (background로 빠짐)

    useEffect(()=>{
        //조건문이 달림
        // if(id.value != ''){
        //     console.log('componentdidupdate')
        // }else{
        //     console.log('componentdidmount')
        // }
        if(submit){
            // console.log('회원가입~') //submit버튼을 누를때만 실행되게끔
            // console.log(Object.keys(errors)) errors배열의 길이가 0 이여야 오류가없다는 뜻
            if(Object.keys(errors).length === 0){
                alert('성공적으로 가입되었어')
                //가입성공시 axios로 보내주는 곳
            }

            setTimeout(()=>{
                setSubmit(false)
            },1000) //1초뒤에 다시 false로 변환
        }
    },[errors])

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
                    {errors.userid && <span>{errors.userid}</span>} 
                    {/* 에러에 userid값이 존재하면 span 출력! */}

                    {/* onChange할때마다 상태를 최신으로 해주고싶어요 */}
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input type="password" name="password" {...pw} />
                    {errors.password && <span>{errors.password}</span>}
                    {/* onChange할때마다 상태를 최신으로 해주고싶어요 */}
                </li>
                <li><input type="submit" value="가입" disabled={submit}/></li>
            </ul>

        </form>
    )
}



export default Form