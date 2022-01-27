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

export const RowContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const ColumnContent = styled.View`
  /* width: calc(100% - 40px); */
  max-width: 89%;
  height: 100%;

  padding-left: 12px;
  padding-right: 18px;

  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.text};
`

export const SmallText = styled.Text`
  margin-top: 24px;
  font-size: 15px;
  color: ${theme.colors.text};
`

export const RedButton = styled.TouchableOpacity`
  color: ${theme.colors.red_500};
  font-size: 10px;
`

export const SmallTitle = styled.Text`
  margin-top: 24px;
  font-size: 17px;
  color: ${theme.colors.text};
`

export const SmallTitleButton = styled.TouchableOpacity`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.colors.text};
`
