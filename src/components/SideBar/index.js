import {Component} from 'react'

import {RiPlayListAddLine} from 'react-icons/ri'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LinkItem,
  SideBarContainer,
  ListContainer,
  ListItem,
  Text,
  ContactDetails,
  Heading,
  LogosContainer,
  Image,
  Description,
} from './styledComponents'

class SideBar extends Component {
  renderMenuItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTabId, changeTabId} = value

        const onClickHome = () => {
          changeTabId('Home')
        }

        const onClickTrending = () => {
          changeTabId('Trending')
        }

        const onClickGaming = () => {
          changeTabId('Gaming')
        }

        const onClickSavedVideos = () => {
          changeTabId('Saved')
        }

        return (
          <ListContainer>
            <LinkItem to="/">
              <ListItem
                key="home"
                onClick={onClickHome}
                isActive={activeTabId === 'Home'}
                isDarkTheme={isDarkTheme}
                isLightTheme={!isDarkTheme}
              >
                <IoMdHome
                  size={22}
                  color={activeTabId === 'Home' ? ' #ff0000' : '#606060'}
                />
                <Text>Home</Text>
              </ListItem>
            </LinkItem>
            <LinkItem to="/trending">
              <ListItem
                key="trending"
                onClick={onClickTrending}
                isActive={activeTabId === 'Trending'}
                isDarkTheme={isDarkTheme}
                isLightTheme={!isDarkTheme}
              >
                <HiFire
                  size={22}
                  color={activeTabId === 'Trending' ? ' #ff0000' : '#606060'}
                />
                <Text>Trending</Text>
              </ListItem>
            </LinkItem>
            <LinkItem to="/gaming">
              <ListItem
                key="gaming"
                onClick={onClickGaming}
                isActive={activeTabId === 'Gaming'}
                isDarkTheme={isDarkTheme}
                isLightTheme={!isDarkTheme}
              >
                <SiYoutubegaming
                  size={22}
                  color={activeTabId === 'Gaming' ? ' #ff0000' : '#606060'}
                />
                <Text>Gaming</Text>
              </ListItem>
            </LinkItem>
            <LinkItem to="/saved-videos">
              <ListItem
                key="saved"
                onClick={onClickSavedVideos}
                isActive={activeTabId === 'Saved'}
                isDarkTheme={isDarkTheme}
                isLightTheme={!isDarkTheme}
              >
                <RiPlayListAddLine
                  size={22}
                  color={activeTabId === 'Saved' ? ' #ff0000' : '#606060'}
                />
                <Text>Saved videos</Text>
              </ListItem>
            </LinkItem>
          </ListContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    const {isActive} = this.props
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              {isActive ? this.renderMenuItems() : ''}
              <SideBarContainer isDarkTheme={isDarkTheme}>
                {this.renderMenuItems()}
                <ContactDetails>
                  <Heading isDarkTheme={isDarkTheme}>CONTACT US</Heading>
                  <LogosContainer>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                      alt=" facebook logo"
                    />
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                      alt="twitter logo"
                    />
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                      alt="linked in logo"
                    />
                  </LogosContainer>
                  <Description isDarkTheme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </Description>
                </ContactDetails>
              </SideBarContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default SideBar
