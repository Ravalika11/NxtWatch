import styled from 'styled-components'

export const NotFoundAppContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px 40px 20px;
  @media (min-width: 768px) {
    width: 77%;
  }
`
export const NotFoundImage = styled.img`
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const NotFoundTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#231f20')};
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0px;
  margin-top: 40px;
`
export const NotFoundText = styled.p`
  color: #64748b;
  width: 60%;
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`
