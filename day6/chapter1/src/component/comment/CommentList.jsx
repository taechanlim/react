import React,{Component} from 'react'

class CommentList extends Component{
    state = {
        value:'',
        update:null
    }
    /*
        CommentList에서 상태를 만들었다면,
        데이터를 뿌리는데 엄청쉽다!
         but, 
        CommentForm이랑 같이 생각해봐야함.
    */
    

    // update
    //1.span onClick시 event매개변수에서 innerHTML 추출 -> 클릭했을때 해당 내용정보를 가져올수있다
    //클릭했을때는 CommentList의 state에게 저장을 시켜줍니다.

    handleClick = i => e => {
        // console.log(e.target.innerHTML,i)
        this.setState({
            ...this.state,
            value:e.target.innerHTML,
            update:i
        })
    }

    // handleClick = (i) => {
        
    //     const eventClick = e => {
    //         console.log(e.target.innerHTML ,i )
    //     }
    //      return eventClick
    // }


    handleChange = e => {
        const {value} = {...e.target}

        this.setState({
            ...this.state,
            value:value
        })
    }

    updateKeyDown = i => e => {
        
        if(e.key !== 'Enter') return //엔터가 아니면 함수종료
        
        const { updateList,list } = this.props

        const newList = [...list]
        newList[i].content = this.state.value

        this.setState({
            ...this.state,
            update:null
        })
        
        updateList(newList)
   
    }
    
    deleteClick = k => {
        const { updateList,list } = this.props
        const newList = [...list].filter( (v,i) => {
            return i !== k
        } )
        
        updateList(newList)

        // const deleteArr = []
        // for(let i=0; i<newList.length; i++){
        //     if(i !== k){
        //         deleteArr.push(newList[i])
        //     }
        // }
        // console.log(deleteArr)
    }

    

    /* 생명주기함수
    componentDidUpdate(){

    }//컴포넌트가 리랜딩 되었을때 (상태가바뀌었을때)

    componentDidMount(){
        
    }//최초로 컴포넌트가 랜더가 완료되었을때 (소켓연결)

    componentDidWillMount(){
        
    }//컴포넌트가 사라질때에요,socket할때 많이쓰는 (소켓종료)
    */


    items = () => this.props.list.map((v,k)=>{ 
        return (
            <ul className="comment-row" key={k}>
                <li className="comment-id">{v.userid}</li>
                <li className="comment-content">
                    {
                        this.state.update === k
                        ? <input 
                                type="text" 
                                value={this.state.value} 
                                onChange={this.handleChange}
                                onKeyDown={this.updateKeyDown(k)}
                                className="comment-update-input"

                            />
                        : <span onClick={this.handleClick(k)}>{v.content}</span>
                    }
                    <span 
                        className="comment-delete-btn"
                        onClick={()=>this.deleteClick(k)}
                    >
                        X
                    </span>
                </li>
                <li className="comment-date">{v.date}</li>
            </ul>
        )
    })

    render(){
        return(
            <li>
                {this.items()}
            </li>
        )
    }
}

export default CommentList