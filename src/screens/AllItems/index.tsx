// External libraries
import React, { useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'

// Services
import api from '../../services/api'

// Assets
import Return from '../../assets/images/return.png'

// Styled
import {
  Container,
  Content,
  RowContainer,
  Title
} from './styles'
import ItemHero from './components/ItemHero'

interface DataProps {
  id: number
  name: string
  description: string
  appears: [string]
  streaming: [string]
  review: number
}

const AllItems = () => {
  const [characteresData, setCharacteresData] = useState<DataProps[]>([])
  
  useEffect(() => {
    api.get('characteres').then(async ({data}) => setCharacteresData(data))
  })

  const list = [
    {id: 1, name: 'joao'},
    {id: 2, name: 'hugo'},
    {id: 3, name: 'juca'},
    {id: 4, name: 'yasmin'},
  ]

  return (
    <Container>
      <Content>
        <RowContainer style={{ justifyContent: 'flex-start' }}>
          <Image source={Return} />
          <Title>Personagens</Title>
        </RowContainer>
        <FlatList 
          data={list} 
          renderItem={({ item }) => <ItemHero data={item} />} 
        />
      </Content>
    </Container>
  )
}

export default AllItems
