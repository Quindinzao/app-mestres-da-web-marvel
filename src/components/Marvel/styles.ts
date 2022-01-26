// External libraries
import styled from 'styled-components/native'

// Styled
import theme from '../../styles/theme'

interface ContainerTextProps {
  fontSize: number
}

export const ContainerText = styled.Text<ContainerTextProps>`
  background-color: ${theme.colors.red_500};

  font-size: ${props => props.fontSize};
  color: ${theme.colors.text};
`