// External libraries
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import Login from '../screens/Login'
import Home from '../screens/Home'

// Styled
import theme from '../styles/theme'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode = 'none'
      screenOptions = {{
        cardStyle: {
          backgroundColor: theme.colors.text
        }
      }}
    >
    
      <stackRoutes.Screen
        name = 'Login'
        component = {Login}
      />
      
      <stackRoutes.Screen
        name = 'Home'
        component = {Home}
      />
    
    </stackRoutes.Navigator>
  )
}
  
export default AppRoutes
  