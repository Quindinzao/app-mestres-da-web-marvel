// External libraries
import React from 'react'

// Components
import Card from '../../../../components/Card'

// Styled
import {
  Container
} from './styles'
import theme from '../../../../styles/theme'

const MediumCard = () => {
  return (
    <Container>
      <Card
        width='149px'
        height='69px'
        marginTop='10px'
        marginBottom='0px'
        marginLeft='0px'
        marginRight='5px'
        border={`2px solid ${theme.colors.red_500}`}
        borderRadius='15px'
      />
      <Card
        width='149px'
        height='69px'
        marginTop='10px'
        marginBottom='0px'
        marginLeft='0px'
        marginRight='5px'
        border={`2px solid ${theme.colors.red_500}`}
        borderRadius='15px'
      />
    </Container>
  )
}

export default MediumCard
