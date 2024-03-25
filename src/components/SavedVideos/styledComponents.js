import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const SavedVideosAppContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const SavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 77%;
  }
`
export const SavedContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  padding: 10px 25px 10px 25px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`
export const Icon = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#d7dfe9')};
  border-radius: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
    margin-left: 30px;
  }
`
export const SavedText = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
  @media (min-width: 768px) {
    font-size: 26px;
    margin-left: 30px;
  }
`
export const SavedVideosListContainer = styled.ul`
  padding-left: 0px;
`
export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 10px 20px 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 30px 10px 30px 40px;
  }
`
export const Image = styled.img`
  width: 50%;
`
export const VideoDetailsContainer = styled.div`
  width: 50%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#231f20')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-top: 0px;
  line-height: 1.5;
  margin-bottom: 0px;
  @media (min-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const Name = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media (min-width: 576px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
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
  margin-left: 6px;
  margin-right: 12px;
  font-weight: 500;
  @media (min-width: 576px) {
    margin-left: 0px;
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
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  @media (min-width: 768px) {
    width: 77%;
  }
`
export const NoSavedVideosImage = styled.img`
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const NoSavedVideosTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#231f20')};
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0px;
  margin-top: 40px;
`
export const NoSavedVideosText = styled.p`
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#64748b')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`
