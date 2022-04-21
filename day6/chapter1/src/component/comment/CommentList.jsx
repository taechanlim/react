import React,{Component} from 'react'

class CommentList extends Component{

    /*
        CommentList에서 상태를 만들었다면,
        데이터를 뿌리는데 엄청쉽다!
         but, 
        CommentForm이랑 같이 생각해봐야함.
    */
    
    items = () => this.props.list.map((v,k)=>{
        return (
            <ul className="comment-row">
                <li className="comment-id">{v.userid}</li>
                <li className="comment-content">{v.content}</li>
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