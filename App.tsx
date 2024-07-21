/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main';
function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <SafeAreaView style={{height: '100%'}}>
            <Main />
          </SafeAreaView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
