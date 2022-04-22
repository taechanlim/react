// const React = require('react')
// const {Component} = React

import React,{Component} from 'react'

import './assets/a.css'
// import './assets/b.css'

import styles from './assets/App.module.css'
import styless from './assets/test.module.css'
// import styles from './assets/a.module.css'

import styled from 'styled-components'

import GuguClass from './component/gugu/GuguClass'  //구구단

import Comment from './component/comment/comment' //댓글
import CommentForm from './component/comment/CommentForm'
import CommentList from './component/comment/CommentList'

// require <-- 먼저 나옴 (노드나오면서)
// import <-- 나중에 나옴 (ES6)

const Button = styled.button`
    background:#000;
    border:none;
    color:#fff;
    padding:7px 14px;
`
const HoverButton = styled(Button)`
    background:#007bff;
    :hover{
        background:#0069d9;
    }
`

const ActiveButton = styled(Button)`
    background:${ (props) => props.background }; //컴포넌트 안의 prop값 받아와서 사용하는것
    display:${ (props)=>{
        let flag
        if(props.background === '#333')  flag='none';
        return flag;  //js문법 적용해서 백그라운드컬러가 #333이면 안보이게 처리
    } };
`


class App extends Component{
    state = {
        value:'hello world!!!@@',    
        list:[
            
        ]
    }

    //생명주기 함수
    componentDidMount(){ //최초실행
        this.setState({
            ...this.state,
            list:[  
                    {userid:'web7722',content:'안녕하세요1',date:'2022-04-21',updateFlag:true},
                    {userid:'web7722',content:'안녕하세요2',date:'2022-04-21',updateFlag:true},
                    {userid:'web7722',content:'안녕하세요3',date:'2022-04-21',updateFlag:true}
                ]
        })

        
    }

    addList = (obj) => {
        this.setState({
            ...this.state,
            list:[...this.state.list,obj]
        })
    }

    updateList = list => {
        this.setState({
            ...this.state,
            list
        })
    }


    render(){
        const {list} = this.state
        
        return(
            <>
                {/* <div className="color">{this.state.value}</div>
                <div className={styles.color}>여기는 module css</div>
                <div className={styless.color}>여기는 test module css</div>
                <div><Button>하이 버튼</Button></div>
                <HoverButton>하이 hover버튼</HoverButton>
                <ActiveButton background="#333">하이버튼2</ActiveButton>
                
                {this.state.value} */}

                {/* <GuguClass /> */}

                
                <Comment>
                    <CommentForm addList={this.addList}/>
                    <CommentList 
                        list={list}
                        updateList={this.updateList}
                    />  
                </Comment>
                {/* children 활용해서 상태나 props값을 수월하게 넘겨줄수있다 */}
            </>
        )
    }
}

// module.exports = App

export default App;
