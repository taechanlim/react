// const React = require('react')
// const {Component} = React

import React,{Component} from 'react'

import './assets/a.css'
// import './assets/b.css'

import styles from './assets/App.module.css'
import styless from './assets/test.module.css'
// import styles from './assets/a.module.css'

import styled from 'styled-components'

import GuguClass from './component/GuguClass'

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
        value:'hello world!!!@@'
    }
    render(){
        return(
            <>
                {/* <div className="color">{this.state.value}</div>
                <div className={styles.color}>여기는 module css</div>
                <div className={styless.color}>여기는 test module css</div>
                <div><Button>하이 버튼</Button></div>
                <HoverButton>하이 hover버튼</HoverButton>
                <ActiveButton background="#333">하이버튼2</ActiveButton>
                
                {this.state.value} */}

                <GuguClass />

            </>
        )
    }
}

// module.exports = App

export default App;
