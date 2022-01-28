// External libraries
import styled from 'styled-components/native'

// Styled
import theme from '../../../../styles/theme'

export const GridContainer = styled.View`
  width: 100%;

  display: flex;
  /* grid-template-columns: auto auto; */
`

export const TitleCard = styled.Text`
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.text};
`

export const TextCard = styled.Text`
  width: 100%;
  margin-top: 12px;
  font-size: 8px;
  font-weight: 400;
  text-align: left;
  color: ${theme.colors.text};
`

export const ButtonCard = styled.TouchableOpacity`
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.text};
`

export const TextButtonRed = styled.Text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: ${theme.colors.text};
`
