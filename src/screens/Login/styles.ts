// External libraries
import styled from 'styled-components/native'

// Styled
import theme from '../../styles/theme'

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;

  /* background-color: ${theme.colors.background}; */
`

export const Content = styled.View`
  width: 100%;
  padding: 30px;

  margin-top: 30px;

  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.Text`
  margin-top: 20px;

  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.text};
`

export const SmallText = styled.Text`
  margin-top: 6px;
  margin-bottom: 16px;

  font-size: 15px;
  text-align: center;
  color: ${theme.colors.text};
`

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  height: 42px;

  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 36px;
  background-color: ${theme.colors.red_500};
`

export const TitleSignInButton = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
`

export const RowContainer = styled.View`
  width: 100%;

  margin-top: 6px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const CheckboxText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.text};
`

export const RegisterText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.text};
`

export const RegisterButton = styled.TouchableOpacity`
  margin-left: 6px;
`

export const RegisterButtonText = styled.Text`
  font-size: 19px;
  font-weight: 700;
  color: ${theme.colors.red_500};
  margin-top: 12px;
`
