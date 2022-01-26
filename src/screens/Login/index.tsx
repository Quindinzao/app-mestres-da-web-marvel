// External libraries
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

// Components
import Input from '../../components/Input'
import Marvel from '../../components/Marvel'

// Assets
import ultimato from '../../assets/images/ultimato.png'

// Styled
import theme from '../../styles/theme'
import {
  CheckboxText,
  Container,
  Content,
  RegisterButton,
  RegisterButtonText,
  RegisterText,
  RowContainer,
  SignInButton,
  SmallText,
  Title,
  TitleSignInButton
} from './styles'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const [checked, setChecked] = useState(false)
  const navigation = useNavigation()

  return (
    <Container source={ultimato} >
      <LinearGradient
        style={{
          height: '100%', 
          width: '100%'
        }}
        colors={[theme.colors.background, theme.colors.background, theme.colors.background, 'transparent']}
      >
        <Content>
          <Marvel fontSize={60} />
          <Title>Bem-vindo!</Title>
          <SmallText>Fazer login</SmallText>
          <Input placeholder='E-mail' />
          <Input placeholder='Senha' secureTextEntry={true} />
          <SignInButton
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Home')}
          >
            <TitleSignInButton>
              Entrar
            </TitleSignInButton>
          </SignInButton>
          <RowContainer>
            <Checkbox
              color={theme.colors.red_500}
              uncheckedColor={theme.colors.text}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked)
              }}
            />
            <CheckboxText>Salvar dados de login</CheckboxText>
          </RowContainer>
          <RowContainer style={{ alignItems: 'flex-end' }}>
            <RegisterText>
              É novo(a) aqui?
            </RegisterText>
            <RegisterButton activeOpacity={0.6}>
              <RegisterButtonText>
                Cadastre-se
              </RegisterButtonText>
            </RegisterButton>
          </RowContainer>
        </Content>
      </LinearGradient>
    </Container>
  )
}

export default Login
