// External libraries
import React from 'react'

// Styled
import { ContainerText } from './styles'

const Marvel = (props: { 
  fontSize: number
}) => {
  return (
    <ContainerText fontSize={props.fontSize}>MARVEL</ContainerText>
  )
}

export default Marvel
