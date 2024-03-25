import Header from '../Header'
import SideBar from '../SideBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundAppContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundAppContainer isDarkTheme={isDarkTheme}>
            <SideBar />
            <NotFoundContainer>
              <NotFoundImage src={notFoundImg} alt="not found" />
              <NotFoundTitle isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundTitle>
              <NotFoundText isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </NotFoundAppContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default NotFound
