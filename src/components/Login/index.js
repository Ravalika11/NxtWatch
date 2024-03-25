import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LoginFormContainer,
  Image,
  LoginForm,
  InputContainer,
  Label,
  InputElement,
  ShowPasswordContainer,
  Input,
  CheckBoxLabel,
  Button,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {
      showPassword,
      username,
      password,
      showSubmitError,
      errorMsg,
    } = this.state

    const passwordType = showPassword ? 'text' : 'password'

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const logoImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginFormContainer isDarkTheme={isDarkTheme}>
              <LoginForm isDarkTheme={isDarkTheme} onSubmit={this.submitForm}>
                <Image src={logoImageUrl} alt="website logo" />
                <InputContainer>
                  <Label htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </Label>
                  <InputElement
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                    isDarkTheme={isDarkTheme}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </Label>
                  <InputElement
                    type={passwordType}
                    id="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                    isDarkTheme={isDarkTheme}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <Input
                    type="checkbox"
                    id="checkbox"
                    checked={showPassword}
                    onChange={this.onToggleShowPassword}
                    value={showPassword}
                  />
                  <CheckBoxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                    Show Password
                  </CheckBoxLabel>
                </ShowPasswordContainer>
                <Button type="submit">Login</Button>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginFormContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
