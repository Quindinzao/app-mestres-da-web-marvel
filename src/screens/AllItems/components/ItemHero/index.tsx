// External libraries
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

// Components
import Card from '../../../../components/Card'

// Styled
import theme from '../../../../styles/theme'
import {
  ButtonCard,
  GridContainer,
  TextButtonRed,
  TextCard,
  TitleCard
} from './styles'

interface DataProps {
  name: string
  description: string
}

const ItemHero = (props: any) => {
  return (
    <GridContainer>
      <Card
        width='161px'
        height='245px'
        marginTop='24px'
        marginBottom='0px'
        marginLeft='0px'
        marginRight='0px'
        border={`2px solid ${theme.colors.red_500}`}
        borderRadius='30px'
      >
        <LinearGradient 
          colors={[theme.colors.red_500, 'transparent']}
          style={{
            width: 160,
            height: 131,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
            borderRadius: 30
          }}
        >
        <TitleCard>
          {props.data.name}
        </TitleCard>
        <TextCard>
          {props.data.description}
        </TextCard>
          <ButtonCard>
            <TextButtonRed>ver mais</TextButtonRed>
          </ButtonCard>
        </LinearGradient>
      </Card>
    </GridContainer>
  )
}

export default ItemHero
