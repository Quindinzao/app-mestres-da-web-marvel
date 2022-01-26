// External libraries
import React from 'react'

// Comonents
import SidebarItem from '../SidebarItem'

// Styled
import theme from '../../styles/theme'
import { Container } from './styles'

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem 
        onPress={() => null} 
        width='104px'
        height='49.5px'
        marginTop='0px'
        marginBottom='36px'
        marginLeft='0px'
        marginRight='0px'
        paddingHorizontal='0px'
        paddingVertical='0px'
        borderRadius='17.5px'
        fontSize='12px'
        color={theme.colors.text}
      >
        Personagens
      </SidebarItem>
      <SidebarItem 
        onPress={() => null} 
        width='104px'
        height='49.5px'
        marginTop='0px'
        marginBottom='36px'
        marginLeft='0px'
        marginRight='0px'
        paddingHorizontal='0px'
        paddingVertical='0px'
        backgroundColor={theme.colors.red_500}
        borderRadius='17.5px'
        fontSize='12px'
        color={theme.colors.text}
      >
        Filmes
      </SidebarItem>
      <SidebarItem 
        onPress={() => null} 
        width='104px'
        height='49.5px'
        marginTop='0px'
        marginBottom='36px'
        marginLeft='0px'
        marginRight='0px'
        paddingHorizontal='0px'
        paddingVertical='0px'
        backgroundColor={theme.colors.red_500}
        borderRadius='17.5px'
        fontSize='12px'
        color={theme.colors.text}
      >
        Quadrinhos
      </SidebarItem>
    </Container>
  )
}

export default Sidebar
