import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  margin: auto;
  background-color: ${props => (props.isDarkTheme ? ' #181818' : '#f9f9f9')};
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 350px;
  padding: 20px;
  box-shadow: 0px 4px 16px 0px
    ${props => (props.isDarkTheme ? '#000000' : '#ebebeb')};
`
export const Image = styled.img`
  width: 50%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`
export const Label = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#7e858e')};
`

export const InputElement = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#d7dfe9')};
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  align-self: flex-start;
`
export const Input = styled.input`
  width: 20px;
  height: 20px;
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 10px;
  font-weight: 500;
`
export const Button = styled.button`
  width: 100%;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  padding: 12px 20px 12px 20px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 30px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
