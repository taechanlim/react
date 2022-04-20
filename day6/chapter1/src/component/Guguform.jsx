import React,{Component} from 'react'

class Guguform extends Component{
    render(){
        return(
            <>
                <h2>몇단할거니?</h2>
                <form onSubmit={this.props.onSubmit}>
                    <input type="number" name="gugu" placeholder="숫자를 입력하세요" />
                    <input type="submit" value="조회" />
                </form>
            </>
        )
    }
}

export default Guguform