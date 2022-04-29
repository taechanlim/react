import React,{useContext,useState,useRef} from 'react'
import Store from './Store/Context'
import { Create_Comment } from './Store/Reducer'

/*
    전역상태를 어떻게 가지고 올거냐,
        1. useContext
        2. createContext
        3. 가져오기
    handleSubmit

    useRef -> DOM조작
*/


const CommentForm = () => {
    const [content,setContent] = useState()
    const {state,dispatch} = useContext(Store) //전역상태 가져온것
    const handleSubmit = e => {
        e.preventDefault()
        //상태를 전역상태에다가 데이터를 넣어야겠다!
        //{userid:'eqweqw',content:'eqwewq',date:'2022-04-29'}

        // dispatch를 reducer에게 줄때 객체로 넘긴다
        //{type:Create_Comment,payload:{userid:'eqweqw',content:'eqwewq',date:'2022-04-29'}}
        dispatch({type:Create_Comment,payload:{userid:'eqweqw',content:content,date:'2022-04-29'}})
        setContent('')
        //Content에 넣을 내용을 input내용에서 가져와서 넣어야한다!

        input.current.focus() //글 submit하면  다시 인풋박스에 포커싱
    }

    const handleChange = e => {
        const {value} = e.target
        setContent(value)
        
    }

    const input = useRef()
    

    return(
        <li>
            <form onSubmit={handleSubmit}> 
                <input ref={input} type="text" value={content} onChange={handleChange} />
                <input type="submit" value="댓글작성" />
            </form>
        </li>
    )
}

export default CommentForm