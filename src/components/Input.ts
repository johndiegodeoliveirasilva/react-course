import styled from "styled-components";


export const Input = styled.input`
  padding: 10px 30px;
  outline: none;
  transition: all 1s;
  border: 1px solid transparent;
  background-color: ${props => props.theme.primary};

  &:focus {
    border-color: 2px 2px red;
  }

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
  
`