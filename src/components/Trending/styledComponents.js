import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const TrendingAppContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const TrendingVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 77%;
  }
`

export const TrendingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  padding: 5px 25px 5px 25px;
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
export const TrendingText = styled.h1`
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
export const TrendingListContainer = styled.ul`
  padding-left: 0px;
`
export const ListItem = styled.li`
  list-style-type: none;
  @media (min-width: 576px) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 20px;
  }
  @media (min-width: 768px) {
    padding: 40px 60px;
  }
`
export const Image = styled.img`
  width: 100%;
  @media (min-width: 576px) {
    width: 50%;
    margin-top: 10px;
  }
`
export const TrendingDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 15px 10px 20px;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    justify-content: flex-start;
  }
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
    padding-top: 0px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Name = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
  margin-right: 10px;
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
