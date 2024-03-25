import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  @media (min-width: 576px) and (max-width: 767px) {
    width: 46%;
    margin-left: 11px;
    margin-right: 11px;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  @media (min-width: 768px) {
    width: 30%;
    margin-left: 13px;
    margin-right: 13px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
`
export const Image = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 15px 10px 20px;
  @media (min-width: 576px) {
    padding: 10px;
  }
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#231f20')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  margin-top: 0px;
  line-height: 1.5;
  margin-bottom: 0px;
  @media (min-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 768px) {
    font-weight: 500;
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
  font-size: 11px;
  margin-right: 10px;
  font-weight: 500;
  @media (min-width: 576px) {
    font-size: 13px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
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
  font-size: 11px;
  margin-left: 6px;
  margin-right: 12px;
  font-weight: 500;
  @media (min-width: 576px) {
    margin-left: 0px;
    margin-right: 20px;
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 400;
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
    font-size: 14px;
  }
`
