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
      <LinearGradient
        colors={['transparent', theme.colors.red_500]}
        start={{x:0,y:1}}
	      end={{x:1,y:0}}
        style={{
          width: 104,
          height: 40,
          paddingHorizontal: 12,
          alignItems: 'flex-end',
          justifyContent: 'center',
          borderTopLeftRadius: 17.5,
          borderTopRightRadius: 17.5
        }}
      >
        <TextTitle
          fontSize={props.fontSize}
          color={props.color}
        >
          {props.children}
        </TextTitle>
      </LinearGradient>
    </ContainerTouchableOpacity>
  )
}

export default SidebarItem
