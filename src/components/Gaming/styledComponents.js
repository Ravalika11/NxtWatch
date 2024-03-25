import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const GamingAppContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const GamingVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 77%;
  }
`
export const GamingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  padding: 13px 25px 13px 25px;
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

export const GamingText = styled.h1`
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
export const GamingListContainer = styled.u`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding: 30px 10px 30px 40px;
  }
`
export const GamingListItem = styled.li`
  list-style-type: none;
  width: 46%;
  margin: 20px 10px;
  text-decoration: none;
  @media (min-width: 576px) {
    width: 30%;
    margin: 20px 8px;
  }
  @media (min-width: 768px) {
    width: 31%;
    margin: 20px 10px;
  }
`
export const Image = styled.img`
  width: 100%;
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
export const Text = styled.p`
  margin-top: 5px;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 0px 5px;
  @media (min-width: 768px) {
    font-size: 16px;
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
