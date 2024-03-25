import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'
import {RiPlayListAddLine} from 'react-icons/ri'

import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  AppContainer,
  VideoItemDetailsContainer,
  DetailsContainer,
  Title,
  VideoDetails,
  ListContainer,
  ViewsCountListItem,
  ViewsCount,
  PublishedListItem,
  Published,
  ButtonsContainer,
  Button,
  LikedText,
  DisLikedText,
  SaveText,
  HrLine,
  ProfileDetailsContainer,
  ProfileContainer,
  ProfileImage,
  Container,
  Name,
  Subscribers,
  DesktopDescription,
  Description,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: {},
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const videoDetails = fetchedData.video_details
      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: (videoDetails.channel = {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        }),
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoItemData()
  }

  onClickLike = () => {
    this.setState(prevValue => ({
      isLiked: !prevValue.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevValue => ({
      isDisLiked: !prevValue.isDisLiked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => {
    const {videoItemDetails, isLiked, isDisLiked} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoItemDetails
    const date = new Date(publishedAt)
    const published = formatDistanceToNow(
      new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    )

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, addVideoItem, savedList} = value
          const onClickSave = () => {
            addVideoItem(videoItemDetails)
          }
          const index = savedList.findIndex(eachIem => eachIem.id === id)
          const isSaved = index !== -1
          const text = isSaved ? 'Saved' : 'Save'
          return (
            <VideoItemDetailsContainer>
              <ReactPlayer url={videoUrl} width="100%" />
              <DetailsContainer>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <VideoDetails>
                  <ListContainer>
                    <ViewsCountListItem>
                      <ViewsCount>{viewCount} views</ViewsCount>
                    </ViewsCountListItem>
                    <PublishedListItem>
                      <Published>{publishedAt}</Published>
                    </PublishedListItem>
                  </ListContainer>
                  <ButtonsContainer>
                    <Button type="button" onClick={this.onClickLike}>
                      <FiThumbsUp
                        size={20}
                        color={isLiked ? ' #2563eb' : '#64748b'}
                      />
                      <LikedText isLiked={isLiked}>Like</LikedText>
                    </Button>
                    <Button type="button" onClick={this.onClickDisLike}>
                      <FiThumbsDown
                        size={20}
                        color={isDisLiked ? ' #2563eb' : '#64748b'}
                      />
                      <DisLikedText isDisLiked={isDisLiked}>
                        Dislike
                      </DisLikedText>
                    </Button>
                    <Button type="button" onClick={onClickSave}>
                      <RiPlayListAddLine
                        size={20}
                        color={isSaved ? ' #2563eb' : '#64748b'}
                      />
                      <SaveText isSaved={isSaved}> {text}</SaveText>
                    </Button>
                  </ButtonsContainer>
                </VideoDetails>
              </DetailsContainer>
              <HrLine />
              <ProfileDetailsContainer>
                <ProfileContainer>
                  <ProfileImage
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <Container>
                    <Name isDarkTheme={isDarkTheme}>{channel.name}</Name>
                    <Subscribers>
                      {channel.subscriberCount} subscribers
                    </Subscribers>
                    <DesktopDescription isDarkTheme={isDarkTheme}>
                      {description}
                    </DesktopDescription>
                  </Container>
                </ProfileContainer>
                <Description isDarkTheme={isDarkTheme}>
                  {description}
                </Description>
              </ProfileDetailsContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureContainer>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <AppContainer
                data-testid="videoItemDetails"
                isDarkTheme={isDarkTheme}
              >
                <SideBar />
                {this.renderVideoItemDetails()}
              </AppContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default VideoItemDetails
