// External libraries
import React, { ReactNode } from 'react'

// Styled
import { Container } from './styles'

const Card = (
  props: { 
  children?: ReactNode
  width?: string
  height?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  // paddingHorizontal?: string
  // paddingVertical?: string
  border?: string
  borderRadius?: string
}
) => {
  return (
    <Container
      width={props.width}
      height={props.height}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      // paddingHorizontal={props.paddingHorizontal}
      // paddingVertical={props.paddingVertical}
      border={props.border}
      borderRadius={props.borderRadius}
    >
      {props.children}
    </Container>
  )
}

export default Card