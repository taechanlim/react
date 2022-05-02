import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export  const StyledButton =  styled.button`
    display:inline-block;
    align-items: center;
    justify-content: center;
    outline:none;
    border:none;
    border-radius: 4px;
    color:#fff;
    font-weight: bold;

    padding:0.1rem;
    height:2.25rem;
    font-size:1rem;
    background:#228be6;

    &:hover{
        background:#339af0;
    }
    & + & {
        margin-left:1rem;
    }

    /* ${ (props)=>{
        if(props.fullWidth === true){
            return`
                margin-top:0.75rem;
                padding:0 0.75rem;
                width:100%;
                font-size:1.125rem;
            `
        }
    } } */

    ${ props=>
        props.fullWidth &&
            `
                margin-top:0.75rem;
                padding:0 0.75rem;
                width:100%;
                font-size:1.125rem;
            `
        }
     
`
// 버튼은 링크이동이 많다
const Button = ({children ,to, ...rest}) => {
    const navigate = useNavigate()
    const onClick= (e) => {
        if(to){
            navigate(to)
        }
    }
    return(
        <StyledButton {...rest} onClick={onClick}>{children}</StyledButton>
    )
}

export default Button