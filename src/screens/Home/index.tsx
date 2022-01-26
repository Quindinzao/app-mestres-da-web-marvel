// External libraries
import React from 'react'
import { Image } from 'react-native'

// Components
import Marvel from '../../components/Marvel'
import Sidebar from '../../components/Sidebar'
import LittleCard from './components/LittleCard'
import MediumCard from './components/MediumCard'
import BigCard from './components/BigCard'

// Assets
import Menu from '../../assets/images/menu.png'

// Styled
import {
  ColumnContent,
  Container,
  Content,
  RowContainer,
  RowContent,
  SmallText,
  SmallTitle,
  Title
} from './styles'

const Home = () => {
  return (
    <Container>
      <Content>
        <RowContainer>
          <Image source={Menu} />
          <Marvel fontSize={30} />
        </RowContainer>
        <RowContent>
          <Sidebar />
          <ColumnContent>
            <Title>Top 10 - Personagens Populares</Title>
            <BigCard />
            <SmallText>
              Wanda Maximoff foi sequestrada da Sérvia e 
              trazida para a Montanha Wundagore, base do 
              Alto Evolucionário. 
            </SmallText>
            <SmallTitle>Aparições:</SmallTitle>
            <LittleCard />
            <SmallTitle>Personagens:</SmallTitle>
            <MediumCard />
          </ColumnContent>
        </RowContent>
      </Content>
    </Container>
  )
}

export default Home
