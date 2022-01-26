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

  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

export const RowContainer = styled.View`
  width: 100%;

  padding: 40px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const RowContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const ColumnContent = styled.View`
  width: 100%;
  height: 100%;

  align-items: flex-start;
  justify-content: flex-start;
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

export const SmallTitle = styled.Text`
  margin-top: 24px;
  font-size: 17px;
  color: ${theme.colors.text};
`
