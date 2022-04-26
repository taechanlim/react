import React,{useState,useEffect} from 'react'

const Login = () => {

    const [values,setValues] = useState({email:'',password:''})
    const [submit,setSubmit] = useState(false)
    const [isLogin,setisLogin] = useState()

    const handleChange = (e) => {
        // console.log(e.target.name,e.target.value)
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const logout = e => {
        setisLogin(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        
        setTimeout(()=>{
            const result=true //const [result] = await axios.post('http://localhost:4000/api/user/login)
            if(result === true){
                setisLogin(true)
                alert(`
                    이메일은 : ${values.email}
                `)
            }else{
                alert('로그인실패')
            }
            setSubmit(false)
        },1000)
    }

    useEffect(()=>{
        // console.log('helloworld')
         
    },[isLogin]) //isLogin이 바뀔때마다 코드실행

    return( 
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>이메일</label>
                    <input type="email" name="email" onChange={handleChange} />
                    {
                    //삼항연산자
                    //조건 ? true : false
                        // true && "hello world! q보여라"  -> true 일때만 보인다
                        // false && "hello world! q보여라" -> 이러면 안보임
                    }
                </li>
                <li>
                    <label>패스워드</label>
                    <input type="password" name="password" onChange={handleChange} />
                    
                </li>
                <li>
                {isLogin ? <button onClick={logout}>로그아웃</button> : <input type="submit" value="로그인" disabled={submit} />}
                </li>
            </ul>

           
        </form>
    )
}

export default Login