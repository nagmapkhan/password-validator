// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #24263c;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #383a4e;
  width: 50vh;
  height: 60vh;
  border-radius: 2px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f8fafc;
`
export const Input = styled.input`
  box-shadow: #434451;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ef4444;
`
