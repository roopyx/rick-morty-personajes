import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 22px;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;

  & input {
    outline: none;
    border: solid 1px #eee;
    padding: 10px 5px;
    border-radius: 4px;
  }
`

export default Header