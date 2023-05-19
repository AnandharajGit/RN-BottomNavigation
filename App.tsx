import { View, Text } from 'react-native';
import * as React from 'react';
import TabNavigator from './navigation/BottomNavigation.js'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <TabNavigator/>
    </SafeAreaProvider>
    
  )
}

export default App