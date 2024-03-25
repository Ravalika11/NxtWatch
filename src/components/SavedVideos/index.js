import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LinkItem,
  SavedVideosAppContainer,
  SavedVideoContainer,
  SavedContainer,
  Icon,
  SavedText,
  SavedVideosListContainer,
  ListItem,
  Image,
  VideoDetailsContainer,
  Title,
  Name,
  ListContainer,
  ViewsCountListItem,
  ViewsCount,
  PublishedListItem,
  Published,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosTitle,
  NoSavedVideosText,
} from './styledComponents'

const SavedVideos = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, savedList} = value

        return (
          <>
            <Header />
            <SavedVideosAppContainer
              data-testid="savedVideos"
              isDarkTheme={isDarkTheme}
            >
              <SideBar activeTrending />
              {savedList.length > 0 ? (
                <SavedVideoContainer>
                  <SavedContainer isDarkTheme={isDarkTheme}>
                    <Icon isDarkTheme={isDarkTheme}>
                      <HiFire size={30} color=" #ff0000" />
                    </Icon>
                    <SavedText isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </SavedText>
                  </SavedContainer>
                  <SavedVideosListContainer>
                    {savedList.map(eachItem => {
                      const date = new Date(eachItem.publishedAt)
                      const published = formatDistanceToNow(
                        new Date(
                          date.getFullYear(),
                          date.getMonth(),
                          date.getDate(),
                        ),
                      )
                      return (
                        <LinkItem to={`/videos/${eachItem.id}`}>
                          <ListItem key={eachItem.id}>
                            <Image
                              src={eachItem.thumbnailUrl}
                              alt="video thumbnail"
                            />
                            <VideoDetailsContainer key={eachItem.id}>
                              <Title isDarkTheme={isDarkTheme}>
                                {eachItem.title}
                              </Title>
                              <Name>{eachItem.channel.name}</Name>
                              <ListContainer>
                                <ViewsCountListItem>
                                  <ViewsCount>
                                    {eachItem.viewCount} views
                                  </ViewsCount>
                                </ViewsCountListItem>
                                <PublishedListItem>
                                  <Published>{eachItem.publishedAt}</Published>
                                </PublishedListItem>
                              </ListContainer>
                            </VideoDetailsContainer>
                          </ListItem>
                        </LinkItem>
                      )
                    })}
                  </SavedVideosListContainer>
                </SavedVideoContainer>
              ) : (
                <NoSavedVideosContainer>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosTitle isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </NoSavedVideosTitle>
                  <NoSavedVideosText isDarkTheme={isDarkTheme}>
                    You can save your videos while watching them
                  </NoSavedVideosText>
                </NoSavedVideosContainer>
              )}
            </SavedVideosAppContainer>
          </>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default SavedVideos
