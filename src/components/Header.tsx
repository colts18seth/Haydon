import logo from '../images/logo.png'
import styled from 'styled-components'

const Logo = styled.div`
  background: white;
  border-radius: 5px;
  border-bottom: 2px solid #0055a5;
  padding: 20px 0;
`

function Header() {
    return (
        <Logo>
            <img src={logo} alt="haydon materials logo" />
        </Logo>
    );
}

export default Header;