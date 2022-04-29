import React,{useContext,useState} from 'react'
import Store from './Store/Context'
import { Update_Comment } from './Store/Reducer'

/*
    -댓글 추가-
    1.상태가져오기 -> Context에 있는 상태
        // 1.1 useContext
        // 1.2 Store
    2. 상태 뿌리기 -> map 사용

    -댓글 수정-
    1. 수정할수있는 화면을 만드는것이 1순위 (어떤 구분값을 주거나 어떤 방식으로 구현할지)
        1.1 k값 활용 !
        전역변수에 기본값을 null -> 클릭시 null값을 해당 k 값으로 변경
    
    2. enter를 눌렀을때 input내용을 null로 바꾼다
        2.1 input에 onKeydown 활용
        이벤트 체크완료 ('Enter')
        2.2 다시 컨텐츠를 보여주기 -> input 상태를 다시 null로 변경
        
*/

const CommentList = () => {
    const {state:{commentItem},dispatch} = useContext(Store) 
    const [input,setInput] =  useState(null)


    const handleClick = k => { 
        // console.log(k)
        setInput(k)
    }

    const handleKeydown = e => {
        // console.log(e.key)
        if(e.key === 'Enter'){
            setInput(null)
            //console.log(input,e.target.value) // input:해당 k값 , e.target.value:수정하는 인풋의 밸류 값
            dispatch({type:Update_Comment,payload:{index:input,content:e.target.value}}) //{type:Update_Comment,payload:index:input,content:e.target.value}

        }
    }

    const getList = () => {
        return commentItem.map((v,k)=>{
            return (
                <ul key={k}>
                    <li>{v.userid}</li>
                    <li onClick={()=>{ handleClick(k) }}>
                        { input===k
                         ? <input 
                            defaultValue={v.content}
                            
                            onKeyDown={handleKeydown}
                         /> 
                         : v.content }
                    </li>
                    <li>{v.date}</li>
                </ul>
            )
        })
    }
    /*
        state : {
            commentItem:[],

        }
    */


    return(
        <li>
            {getList()}
        </li>
    )
}

export default CommentList