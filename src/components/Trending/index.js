import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LinkItem,
  TrendingAppContainer,
  TrendingVideoContainer,
  TrendingContainer,
  LoaderContainer,
  Icon,
  TrendingText,
  TrendingListContainer,
  ListItem,
  Image,
  TrendingDetailsContainer,
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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideosData()
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingVideoContainer>
              <TrendingContainer isDarkTheme={isDarkTheme}>
                <Icon isDarkTheme={isDarkTheme}>
                  <HiFire size={30} color=" #ff0000" />
                </Icon>
                <TrendingText isDarkTheme={isDarkTheme}>Trending</TrendingText>
              </TrendingContainer>
              <TrendingListContainer>
                {trendingVideosList.map(eachItem => {
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
                        <TrendingDetailsContainer>
                          <ProfileImage src={eachItem.profileImageUrl} />
                          <DetailsContainer>
                            <Title isDarkTheme={isDarkTheme}>
                              {eachItem.title}
                            </Title>
                            <Container>
                              <Name>{eachItem.name}</Name>
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
                            </Container>
                          </DetailsContainer>
                        </TrendingDetailsContainer>
                      </ListItem>
                    </LinkItem>
                  )
                })}
              </TrendingListContainer>
            </TrendingVideoContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

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

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingVideos = () => {
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
              <TrendingAppContainer
                data-testid="trending"
                isDarkTheme={isDarkTheme}
              >
                <SideBar />
                {this.renderTrendingVideos()}
              </TrendingAppContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
