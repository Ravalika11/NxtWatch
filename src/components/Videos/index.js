import {formatDistanceToNow} from 'date-fns'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LinkItem,
  ListItem,
  Image,
  VideoDetailsContainer,
  ProfileImage,
  DetailsContainer,
  Title,
  Container,
  Name,
  ListContainer,
  ViewsCountListItem,
  ViewsCount,
  PublishedListItem,
  Published,
} from './styledComponents'

const Videos = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails
  const date = new Date(publishedAt)
  const published = formatDistanceToNow(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
  )
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <LinkItem to={`/videos/${id}`}>
              <ListItem>
                <Image src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <DetailsContainer>
                    <Title isDarkTheme={isDarkTheme}>{title}</Title>
                    <Container>
                      <Name>{name}</Name>
                      <ListContainer>
                        <ViewsCountListItem>
                          <ViewsCount>{viewCount} views</ViewsCount>
                        </ViewsCountListItem>
                        <PublishedListItem>
                          <Published>{publishedAt}</Published>
                        </PublishedListItem>
                      </ListContainer>
                    </Container>
                  </DetailsContainer>
                </VideoDetailsContainer>
              </ListItem>
            </LinkItem>
          </>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default Videos
