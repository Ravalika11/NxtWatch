import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const SideBarContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #181818 ' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23%;
  height: 130vh;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ListContainer = styled.ul`
  padding-left: 0px;
`
export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.isDarkTheme && props.isActive ? '#383838' : ''};
  background-color: ${props =>
    props.isLightTheme && props.isActive ? '#e2e8f0' : ''};
  padding: 0px 30px;
  cursor: pointer;
  font-weight: ${props => (props.isActive ? 500 : '')};
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#231f20')};
  font-family: 'Roboto';
  font-size: 17px;
  @media (max-width: 767px) {
    padding-left: 120px;
  }
`
export const Text = styled.p`
  margin-left: 20px;
`
export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 15px;
`
export const Heading = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  font-family: 'Roboto';
  font-size: 16px;
`
export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`
export const Description = styled.p`
  color: ${props => (props.isDarkTheme ? ' #f1f1f1' : '#00306e')};
  font-family: 'Roboto';
  font-size: 17px;
  line-height: 1.5;
  font-weight: 500;
`
