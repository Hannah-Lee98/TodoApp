import styled from 'styled-components'
const Input = styled.input`
  width: ${props => props.width ? props.width : 100}%;
  font-size: 20px;
  padding: 12px 15px;
  border-radius: 3px;
  background: white;
  border: solid 2px lightgray;
  outline: none;
  transition: border-color .5s;
  &:focus {
    border-color: lightblue;
  }
  
`
export default Input;