import React,{ useState,useEffect } from 'react'
import useForm from '../Form/useForm.js'
import validate from '../Form/validate.js'

const request = async (items) => {
    
    const result = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(items)
        },1000)
    })
    alert(JSON.stringify(result)) //result -> {"userid":"dwqdqw","password":"dqwdqw"} 이형태로온다
    //axios
    //join -> input의 상태를 전부다 알아야함 async함수에 매개변수를 정해주고 보내준다
    // body:{
    //     userid:'dqwdwq',
    //     password:'dwqdqw'
    // }
    
}


const Form  = () =>{

    const {userid,password,errors,submit,handleSubmit} = useForm({userid:'',password:''},request,validate)

    return(
        <form onSubmit={handleSubmit} >
            
            <h2>회원가입</h2>
            <ul>
                <li>
                    <label htmlFor='userid'>아이디</label>
                    <input type="text" name="userid" {...userid} className={errors.userid && 'error'}/> {/*에러가뜨면 error라고 클래스명을 부여해서 css를 다르게 설정할수있다*/}
                    {errors.userid && <span>{errors.userid}</span>}
                    
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input type="password" name="password" {...password} />
                    {errors.password && <span>{errors.password}</span>}
                    
                </li>
                <li><input type="submit" value="가입" disabled={submit}/></li>
            </ul>

        </form>
    )
}



export default Form

// 회원가입 폼 완성해보기.