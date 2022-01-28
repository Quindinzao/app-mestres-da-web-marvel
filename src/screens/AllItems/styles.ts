// External libraries
import styled from 'styled-components/native'

// Styled
import theme from '../../styles/theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.background};
`

export const Content = styled.View`
  width: 100%;
  padding: 20px;

  margin-top: 30px;

  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

export const RowContainer = styled.View`
  width: 100%;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const GridContainer = styled.View`
  width: 100%;

  display: flex;
  /* grid-template-columns: auto auto; */
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.text};
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
