// External libraries
import styled from 'styled-components/native'
import theme from '../../../../styles/theme'

export const Container = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;

  width: 100%;
`

export const NameContent = styled.View`
  width: 315px;
  height: 59px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
  border-radius: 30px;
`

export const NameCharacter = styled.Text`
  margin-top: 7px;
  margin-left: 14px;

  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.text};
`

export const FansContent = styled.View`
  width: 179px;
  height: 59px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.red_500};
  border-radius: 15px;

  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.text};
`

export const FansRow = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const FansText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.text};
`
