// External libraries
import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import theme from '../../styles/theme'

// Styled
import { ContainerTouchableOpacity, TextTitle } from './styles'

const SidebarItem = (props: { 
  children?: ReactNode
  onPress?: () => void
  width?: string
  height?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  paddingHorizontal?: string
  paddingVertical?: string
  backgroundColor?: string
  borderRadius?: string
  fontSize?: string
  color?: string
}) => {
  return (
    <LinearGradient
      colors={['transparent', theme.colors.red_500]}
      style={{
        width: '100%',
        borderRadius: 17.5
      }}
    >
      <ContainerTouchableOpacity 
        onPress={props.onPress}
        activeOpacity={0.7}
        width={props.width}
        height={props.height}
        marginTop={props.marginTop}
        marginBottom={props.marginBottom}
        marignLeft={props.marginLeft}
        marginRight={props.marginRight}
        paddingHorizontal={props.paddingHorizontal}
        paddingVertical={props.paddingVertical}
        borderRadius={props.borderRadius}
      >
        <TextTitle
          fontSize={props.fontSize}
          color={props.color}
        >
          {props.children}
        </TextTitle>
      </ContainerTouchableOpacity>
    </LinearGradient>
  )
}

export default SidebarItem
