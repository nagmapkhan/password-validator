// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  Text,
  Input,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassHandler = event => setPassword(event.target.value)

  const ShowError = password === '' || password.length < 8

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Input
          type="password"
          value={password}
          onChange={onChangePassHandler}
        />
        {ShowError && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}
export default PasswordValidator
