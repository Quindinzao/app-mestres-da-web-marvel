// External libraries
import styled from 'styled-components/native'

interface ContainerProps {
  width?: string
  height?: string

  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string

  border?: string
  borderRadius?: string
}

export const Container = styled.View<ContainerProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};

  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
`