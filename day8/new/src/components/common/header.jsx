import styled from 'styled-components'
import Responsive from './responsive'
import {Link} from 'react-router-dom'
import Button from './button'

const HeaderTemplate = styled.div`
    position:fixed;
    width:100%;
    background:white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`

const Wrapper = styled(Responsive)`
    height:4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        font-size:1.125rem;
    }
    .menu{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > li{
            margin-left:0.75rem;

            & > a {
                font-size:1.2rem
            }
        }
        
    }
`

// & > li 는 .menu > li 와 같다

const Spacer = styled.div`
    height:4rem;
`

const Header = () => {
    return(
        <>
            <HeaderTemplate>
                <Wrapper>
                    <h1>LOGO</h1>
                    <ul className="menu">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/comment">Comment</Link></li>
                        <li>
                            
                            <Button to="/login" fullWidth>Login</Button>
                        </li>
                    </ul>
                </Wrapper>
            </HeaderTemplate>
            <Spacer />
        </>
    )
}

export default Header