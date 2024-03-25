import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {RiCloseFill} from 'react-icons/ri'
import {IoIosSearch} from 'react-icons/io'

import Header from '../Header'
import Videos from '../Videos'
import SideBar from '../SideBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HomeContainer,
  Container,
  BannerContainer,
  CloseButton,
  BannerDetails,
  Logo,
  BannerText,
  GetNowButton,
  SearchContainer,
  SearchInputElement,
  SearchButton,
  VideosList,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    displayBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickClose = () => {
    this.setState({displayBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
    }
  }

  onClickSearchIcon = () => {
    this.getVideosData()
  }

  onClickRetry = () => {
    this.getVideosData()
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return videosList.length !== 0 ? (
            <VideosList>
              {videosList.map(eachItem => (
                <Videos videoDetails={eachItem} key={eachItem.id} />
              ))}
            </VideosList>
          ) : (
            <NoSearchResultContainer>
              <NoSearchResultImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoSearchResultHeading isDarkTheme={isDarkTheme}>
                No Search results found
              </NoSearchResultHeading>
              <NoSearchResultText>
                Try different key words or remove search filter
              </NoSearchResultText>
              <RetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </RetryButton>
            </NoSearchResultContainer>
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

  renderVideos = () => {
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
    const {displayBanner, searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const logoImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <>
              <Header />
              <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
                <SideBar />
                <Container>
                  <BannerContainer
                    displayBanner={displayBanner}
                    data-testid="banner"
                  >
                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={this.onClickClose}
                    >
                      <RiCloseFill size={20} />
                    </CloseButton>
                    <BannerDetails>
                      <Logo src={logoImageUrl} alt="nxt watch logo" />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetNowButton>GET IT NOW</GetNowButton>
                    </BannerDetails>
                  </BannerContainer>
                  <SearchContainer>
                    <SearchInputElement
                      isDarkTheme={isDarkTheme}
                      type="search"
                      value={searchInput}
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      onKeyDown={this.onEnterSearchInput}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      isDarkTheme={isDarkTheme}
                      onClick={this.onClickSearchIcon}
                    >
                      <IoIosSearch
                        size={14}
                        color={isDarkTheme ? '#909090' : '#212121'}
                      />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderVideos()}
                </Container>
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Home
