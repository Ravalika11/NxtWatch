import styled from 'styled-components'

export const NavHeader = styled.nav`
  background-color: ${props => (props.isDarkTheme ? ' #181818 ' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 10px;
  @media (min-width: 768px) {
    padding: 10px 30px 10px 30px;
  }
`
export const Image = styled.img`
  width: 100px;
  height: 30px;
`
export const NavMenuContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? ' #f9f9f9 ' : '#181818')};
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const MobileNavItem = styled.li`
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? ' #f9f9f9 ' : '#181818')};
  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopNavItem = styled.li`
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  border-radius: 5px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 5px 15px 5px 15px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PopupText = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#00306e')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
export const CancelButton = styled.button`
  border: 1px solid #475569;
  background-color: transparent;
  padding: 12px 24px 12px 24px;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
`
export const ConfirmButton = styled.button`
  border: none;
  background-color: #3b82f6;
  padding: 12px 24px 12px 24px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
`
export const MenuPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 30px;
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MobileMenuList = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
