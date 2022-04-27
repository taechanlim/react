const validate = (input) => {
    const {userid,password} = input
    const errors = {}

    if(!userid){
        errors.userid = "이메일이 입력되지 않았습니다"
    }else if(!/^[a-zA-Z0-9%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userid) ){
        

        errors.userid = "입력된 이메일이 유효하지 않습니다."
    }
    if(!password){
        errors.password = "비밀번호가 입력되지 않았습니다"
    }else if(password.length < 8){
        errors.password = "8자리 이상 입력해주세요"
    }

    /*
        return값:
        errors:{
            userid:'입력된 이메일이 유효하지 않습니다',
            password:'8자리 이상 입력해주세요'
        }
    */
    return errors
}

export default validate