import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/routeTypes';
import {Artworklist, Favorites} from '../../screens';

export function Tabs() {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Artworklist}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}
