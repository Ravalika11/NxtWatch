import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818 ' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 77%;
  }
`
export const BannerContainer = styled.div`
  display: ${props => (props.displayBanner ? 'flex' : 'none')};
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
`

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const BannerDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`
export const Logo = styled.img`
  width: 130px;
  height: 30px;
`
export const BannerText = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
`
export const GetNowButton = styled.button`
  border: 1px solid #1e293b;
  background-color: transparent;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  margin-top: 12px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  margin-top: 20px;
  @media (min-width: 576px) and (max-width: 767px) {
    width: 75%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInputElement = styled.input`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  color: #0f172a;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  border: 0.5px solid #606060;
  outline: none;
  flex-grow: 1;
  padding: 5px 15px 5px 15px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : ' #7e858e')};
`

export const SearchButton = styled.button`
  border: 0.5px solid #606060;
  border-left: none;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '')};
  outline: none;
  cursor: pointer;
  padding: 5px 20px;
`
export const VideosList = styled.ul`
  padding-left: 0px;
  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`
export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
`
export const FailureImage = styled.img`
  width: 70%;
  @media (min-width: 768px) {
    width: 40%;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
export const FailureText = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 20px;
    width: 60%;
  }
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 34px 12px 34px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
`
export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
`
export const NoSearchResultImage = styled.img`
  width: 70%;
  @media (min-width: 768px) {
    width: 40%;
  }
`
export const NoSearchResultHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
export const NoSearchResultText = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 20px;
    width: 60%;
  }
`
