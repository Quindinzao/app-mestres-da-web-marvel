// External libraries
import React from 'react'
import { Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Components
import Marvel from '../../components/Marvel'
import Sidebar from '../../components/Sidebar'
// Assets
import Menu from '../../assets/images/menu.png'

// Styled
import {
  Container
} from './styles'

const Header = () => {
  return (
    <Container>
      <Image source={Menu} />
      <Marvel fontSize={30} />
    </Container>
  )
}

export default Header
