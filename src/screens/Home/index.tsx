// External libraries
import React from 'react'
import { Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Components
import Header from '../../components/Header'
import LittleCard from './components/LittleCard'
import MediumCard from './components/MediumCard'
import BigCard from './components/BigCard'

// Assets
import Menu from '../../assets/images/menu.png'

// Styled
import {
  ColumnContent,
  Container,
  RedButton,
  RowContent,
  SmallText,
  SmallTitle,
  SmallTitleButton,
  Title
} from './styles'
import Sidebar from '../../components/Sidebar'

const Home = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Header />
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
          <RedButton><Text>Ver mais</Text></RedButton>
          <SmallTitle>Aparições:</SmallTitle>
          <LittleCard />
          <RowContent style={{ width: 300 }}>
            <SmallTitle>Personagens:</SmallTitle>
            <SmallTitleButton onPress={() => navigation.navigate('AllItems')}>
              <SmallTitle>+ Ver todos</SmallTitle>
            </SmallTitleButton>
          </RowContent>
          <MediumCard />
        </ColumnContent>
      </RowContent>
    </Container>
  )
}

export default Home
