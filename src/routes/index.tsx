// External libraries
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Routes
import StackRoutes from './stack.routes'

const Routes = () => (
  <NavigationContainer>
    <StackRoutes/>
  </NavigationContainer>
)

export default Routes