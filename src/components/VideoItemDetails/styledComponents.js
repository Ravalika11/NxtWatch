import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 77%;
    padding: 30px 20px;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`
export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#231f20')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  line-height: 1.5;
  margin-bottom: 0px;
  padding: 0px 5px;
  @media (min-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const ViewsCountListItem = styled.li`
  list-style-type: disc;
  color: #64748b;
  @media (min-width: 576px) {
    list-style-type: none;
  }
`
export const ViewsCount = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
  margin-right: 20px;
  font-weight: 400;
  @media (min-width: 576px) {
    margin-right: 20px;
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
export const PublishedListItem = styled(ViewsCountListItem)`
  list-style-type: disc;
`

export const Published = styled(ViewsCount)`
  @media (min-width: 576px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const LikedText = styled.p`
  color: ${props => (props.isLiked ? ' #2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 15px;
`
export const DisLikedText = styled(LikedText)`
  color: ${props => (props.isDisLiked ? ' #2563eb' : '#64748b')};
`
export const SaveText = styled(LikedText)`
  color: ${props => (props.isSaved ? ' #2563eb' : '#64748b')};
`
export const HrLine = styled.hr`
  border: 0.5px solid #cccccc;
  width: 100%;
`
export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const Name = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 4px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`
export const Subscribers = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 4px;
`
export const DesktopDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#64748b')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 767px) {
    display: none;
  }
`
export const Description = styled.p`
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#64748b')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  @media (min-width: 768px) {
    display: none;
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
  font-weight: 500;
  line-height: 1.6;
  margin-top: 0px;
  width: 80%;
  @media (min-width: 768px) {
    font-size: 20px;
    width: 55%;
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
