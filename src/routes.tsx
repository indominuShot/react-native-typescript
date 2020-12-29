import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './Pages/Main';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="main" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
