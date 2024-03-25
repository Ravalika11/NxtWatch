import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LinkItem,
  GamingAppContainer,
  GamingVideoContainer,
  GamingContainer,
  Icon,
  GamingText,
  GamingListContainer,
  GamingListItem,
  Image,
  Title,
  Text,
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

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

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
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideosData()
  }

  renderSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingVideoContainer>
              <GamingContainer isDarkTheme={isDarkTheme}>
                <Icon isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming size={30} color=" #ff0000" />
                </Icon>
                <GamingText isDarkTheme={isDarkTheme}>Gaming</GamingText>
              </GamingContainer>
              <GamingListContainer>
                {gamingVideosList.map(eachItem => (
                  <GamingListItem key={eachItem.id}>
                    <LinkItem to={`/videos/${eachItem.id}`}>
                      <Image
                        src={eachItem.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <Title isDarkTheme={isDarkTheme}>{eachItem.title}</Title>
                      <Text>{eachItem.viewCount} Watching Worldwide</Text>
                    </LinkItem>
                  </GamingListItem>
                ))}
              </GamingListContainer>
            </GamingVideoContainer>
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

  renderGamingVideos = () => {
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
              <GamingAppContainer
                data-testid="gaming"
                isDarkTheme={isDarkTheme}
              >
                <SideBar />
                {this.renderGamingVideos()}
              </GamingAppContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Gaming
