import React,{ useState,useEffect } from 'react'


//input상태
//submit실행내용
// 폼체크부분

//defaultValue = {userid:'',password:''}
const useForm = (defaultValue,onSubmit,validate) => {
    const [values,setValues] = useState(defaultValue)
    const [submit,setSubmit] = useState(false)
    const [errors,setErrors] = useState({})


    const onChange = e => {
        const{name,value} = e.target
        setValues({...values,[name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)
        setErrors(validate(values))  //validate
    }

    useEffect(()=>{
        if(submit){
            if(Object.keys(errors).length === 0){
                // 성공적일때 코드를 처리할 영역
                onSubmit(values)
            }
            setSubmit(false)
        }
    },[errors])

    return {
        ...Object.keys(defaultValue).reduce((acc,v)=>{
            acc[v] = {
                value:values[v],
                onChange
            }
            return acc
        },{}),
        handleSubmit,
        errors,
        submit
    }
}


export default useForm