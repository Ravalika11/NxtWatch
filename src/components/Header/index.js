import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import {BsBoxArrowRight} from 'react-icons/bs'
import {RiCloseFill} from 'react-icons/ri'

import SideBar from '../SideBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavHeader,
  Image,
  NavMenuContainer,
  NavItem,
  ThemeButton,
  MobileNavItem,
  DesktopNavItem,
  ProfileImg,
  LogoutButton,
  PopupContainer,
  PopupText,
  PopupButtonsContainer,
  CancelButton,
  ConfirmButton,
  MenuPopupContainer,
  CloseButton,
  MenuContainer,
  MobileMenuList,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onSelectTheme = () => {
        toggleTheme()
      }

      const logoImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeLogo = isDarkTheme ? (
        <FiSun size={25} color="#f9f9f9" />
      ) : (
        <FaMoon size={25} color="#181818" />
      )

      const onConfirmLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavHeader isDarkTheme={isDarkTheme}>
          <Link to="/">
            <Image src={logoImageUrl} alt="website logo" />
          </Link>
          <NavMenuContainer>
            <NavItem isDarkTheme={isDarkTheme}>
              <ThemeButton
                data-testid="theme"
                type="button"
                onClick={onSelectTheme}
              >
                {themeLogo}
              </ThemeButton>
            </NavItem>
            <Popup
              contentStyle={{
                height: '100vh',
                width: '100%',
                backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
                border: '0px',
              }}
              modal
              trigger={
                <MobileNavItem isDarkTheme={isDarkTheme}>
                  <BiMenu size={30} />
                </MobileNavItem>
              }
              className="popup-content"
            >
              {close => (
                <>
                  <MenuPopupContainer>
                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={() => close()}
                    >
                      <RiCloseFill
                        size={30}
                        color={isDarkTheme ? '#f9f9f9' : '#181818'}
                      />
                    </CloseButton>
                    <MenuContainer>
                      <MobileMenuList>
                        <SideBar isActive />
                      </MobileMenuList>
                    </MenuContainer>
                  </MenuPopupContainer>
                </>
              )}
            </Popup>
            <Popup
              contentStyle={{
                width: '300px',
                borderRadius: '5px',
                backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
                border: '0px',
              }}
              modal
              trigger={
                <MobileNavItem isDarkTheme={isDarkTheme}>
                  <BsBoxArrowRight size={30} />
                </MobileNavItem>
              }
              className="popup-content"
            >
              {close => (
                <>
                  <PopupContainer>
                    <PopupText isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout"
                    </PopupText>
                    <PopupButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onConfirmLogout}>
                        Confirm
                      </ConfirmButton>
                    </PopupButtonsContainer>
                  </PopupContainer>
                </>
              )}
            </Popup>

            <DesktopNavItem>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </DesktopNavItem>
            <Popup
              contentStyle={{
                width: '300px',
                borderRadius: '5px',
                backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
                border: '0px',
              }}
              modal
              trigger={
                <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <>
                  <PopupContainer>
                    <PopupText isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout
                    </PopupText>
                    <PopupButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onConfirmLogout}>
                        Confirm
                      </ConfirmButton>
                    </PopupButtonsContainer>
                  </PopupContainer>
                </>
              )}
            </Popup>
          </NavMenuContainer>
        </NavHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
