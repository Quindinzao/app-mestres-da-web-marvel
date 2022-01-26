// External libraries
import React from 'react'

// Components
import Card from '../../../../components/Card'

// Styled
import {
  Container
} from './styles'
import theme from '../../../../styles/theme'

const BigCard = () => {
  return (
    <Container>
      <Card
      width='180px'
      height='198px'
      marginTop='24px'
      marginBottom='0px'
      marginLeft='0px'
      marginRight='0px'
      border={`2px solid ${theme.colors.red_500}`}
      borderRadius='25px'
    />
    </Container>
  )
}

export default BigCard
