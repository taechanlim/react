import Responsive from "../../components/common/responsive"
import { useSelector,useDispatch } from "react-redux"
import {up,down} from "../../reducers/index.js"

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector( (state)=>state )

    const onUp = () => {
        dispatch(up())
    }
    const onDown = () => {
        dispatch(down())
    }


    return(
        <>
        <Responsive>
            <h1>Counter : {counter.number}</h1>
            <button onClick={onUp}>+1</button>
            <button onClick={onDown}>-1</button>
        </Responsive>
        </>
    )
}

export default Counter