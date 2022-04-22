import React,{Component} from 'react'

class CommentForm extends Component{

    state={
        value:''
    }

    handleChange = e => {

        const {value} = {...e.target}
        this.setState({
            value
        })
        
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state.value)
        //axios가 발동.
        //결과물을 줄떄 그때 상태를 바꾸면된다.
        //then 콜백함수 안에서 상태를 바꾸면된다.
        const obj = {userid:'web7722',content:this.state.value,date:"2022-04-21",updateFlag:true}
        this.props.addList(obj)
        this.setState({
            value:''
        })
        //Submit 버튼을 눌렀을때 input 박스에 있는 내용을 쉽게 가져올수있게 처리함
        // input.value는 쉽게 가지고 올수있는 상태

        // App 컴포넌트에있는 list라는 값을 push해줘야하는 상황.
        // App 컴포넌트에서 상태를 바꿀수있는 함수를 만들고 
        // App컴포넌트에서 상태바꾸는함수는 commentform컴포넌트에게 props로 함수를 전달하고 
        // handlesubmit함수가호출되었을때 props로 전달받은 함수를 실행시킨다.
        //props로 전달받은 함수는 commentform에서 받은 상태 value값을 인자값으로 넣어준다.
        //commentform에 있는 value라는 상태값을 '' 빈 문자열로 상태를 바꾼다.
    }

    render(){
        return(
            <li className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <span className="ps_box">
                        <input 
                            type="text"
                            className="int"
                            placeholder="댓글을 입력해주세요" 
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                    </span>
                    <input type="submit" className="btn" value="등록" />
                </form>
            </li>
        )
    }
}

export default CommentForm