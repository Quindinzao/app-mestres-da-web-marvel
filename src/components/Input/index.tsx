// External libraries
import React from 'react'

// Styled
import { ContainerTextInput } from './styles'

const Input = (props: { 
  placeholder: string
  secureTextEntry?: boolean
}) => {
  return (
    <ContainerTextInput
      placeholder={props.placeholder} 
      secureTextEntry={props.secureTextEntry}
    />
  )
}

export default Input
