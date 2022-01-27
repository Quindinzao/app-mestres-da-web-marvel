// External libraries
import styled from 'styled-components/native'

interface ContainerTouchableOpacityProps {
  width?: string
  height?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string
  paddingHorizontal?: string
  paddingVertical?: string

  borderRadius?: string
}

export const ContainerTouchableOpacity = styled.TouchableOpacity<ContainerTouchableOpacityProps>`
  width: ${props => props.width};
  height: ${props => props.height};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};
  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  transform: rotate(90deg);

  border-radius: ${props => props.borderRadius};
`

interface TextTitleProps {
  fontSize?: string
  color?: string
}

export const TextTitle = styled.Text<TextTitleProps>`
  font-size: ${props => props.fontSize};
  font-weight: 600;
  color: ${props => props.color};
`
