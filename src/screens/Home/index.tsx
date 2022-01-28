// External libraries
import React, { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Components
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import LittleCard from './components/LittleCard'
import MediumCard from './components/MediumCard'
import BigCard from './components/BigCard'

// Services
import api from '../../services/api'

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

interface DataProps {
  id: number
  name: string
  description: string
  appears: [string]
  streaming: [string]
  review: number
}

const Home = () => {
  const navigation = useNavigation()
  const [characteresData, setCharacteresData] = useState<DataProps[]>([])
  
  useEffect(() => {
    api.get('characteres').then(({data}) => setCharacteresData(data))
  }, [])

  console.log(characteresData)

  return (
    <Container>
      <Header />
      <RowContent>
        <Sidebar />
        <ColumnContent>
          <Title>Top 10 - Personagens Populares</Title>
          <BigCard />
          <SmallText>
            {/* {characteresData[0]} */}
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
