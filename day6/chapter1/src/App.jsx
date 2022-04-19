const React = require('react')
const {Component} = React

// import React,{Component} from 'react'

// require <-- 먼저 나옴 (노드나오면서)
// import <-- 나중에 나옴 (ES6)

class App extends Component{
    state = {
        value:'hello world!!!'
    }
    render(){
        return(
            <>
                {this.state.value}
            </>
        )
    }
}

module.exports = App
