// External libraries
import React from 'react'
import { Image, Text } from 'react-native'

// Components
import Card from '../../../../components/Card'

// Styled
import BrightStar from '../../../../assets/images/brightstar.png'

// Styled
import {
  Container, FansContent, FansRow, FansText, NameCharacter, NameContent
} from './styles'
import theme from '../../../../styles/theme'
import { LinearGradient } from 'expo-linear-gradient'

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
        border={`1px solid ${theme.colors.red_500}`}
        borderRadius='30px'
      >
        <LinearGradient
          style={{
            height: 59, 
            width: 180,
            borderRadius: 30
          }}
          colors={['transparent', theme.colors.red_500]}
        > 
          <NameContent>
            <NameCharacter>
              Wanda e Cosmo
            </NameCharacter>
            <FansContent>
              <FansRow>
                <FansText>Avaliações dos Fãs</FansText>
              </FansRow>
              <FansRow>
                <FansText>++++-</FansText>
              </FansRow>
            </FansContent>
          </NameContent>
        </LinearGradient>
      </Card>
      <Card
        width='81px'
        height='82px'
        marginTop='24px'
        marginBottom='0px'
        marginLeft='5px'
        marginRight='0px'
        border={`1px solid ${theme.colors.red_500}`}
        borderRadius='22px'
      />
      <Card
        width='37px'
        height='38px'
        marginTop='24px'
        marginBottom='0px'
        marginLeft='05px'
        marginRight='0px'
        border={`1px solid ${theme.colors.red_500}`}
        borderRadius='11px'
      />
    </Container>
  )
}

export default BigCard
