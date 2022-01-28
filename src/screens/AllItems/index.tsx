// External libraries
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, View } from 'react-native'

// Components
import Card from '../../components/Card'

// Assets
import Return from '../../assets/images/return.png'

// Styled
import theme from '../../styles/theme'
import {
  ButtonCard,
  Container,
  Content,
  GridContainer,
  RowContainer,
  TextCard,
  Title,
  TitleCard
} from './styles'

const AllItems = () => {
  return (
    <Container>
      <Content>
        <RowContainer style={{ justifyContent: 'flex-start' }}>
          <Image source={Return} />
          <Title>Personagens</Title>
        </RowContainer>
        <GridContainer>
          <View>
            
          </View>
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
                  Homem-Aranha
                </TitleCard>
                <TextCard>
                  Após ser mordido por uma aranha radioativa, 
                  Peter Parker se torna o amigo da vizinhança, 
                  o Homem-Aranha.
                </TextCard>
              <ButtonCard>
                
              </ButtonCard>
            </LinearGradient>
          </Card>
        </GridContainer>
      </Content>
    </Container>
  )
}

export default AllItems
