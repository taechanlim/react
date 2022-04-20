import React,{Component} from 'react'
import Guguform from './Guguform'
import GuguList from './GuguList'


//guguclass
//guguform
//gugulist


class GuguClass extends Component{

    state={
        value:null
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log(e.target.gugu.value)
        this.setState({
            ...this.state,
            value:parseInt(e.target.gugu.value)
        })
    }


    render(){
        return(
            <>
                <Guguform 
                    onSubmit={this.handleSubmit}
                />
                <GuguList 
                    value={this.state.value}
                />
            </>
        )
    }
}

export default GuguClass