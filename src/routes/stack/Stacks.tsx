import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../types/routeTypes';
import {Tabs} from '../tabs/Tabs';
import {ArtworkDetail} from '../../screens';

export const Stacks = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{title: 'Art Institute of Chicago'}}
      />
      <Stack.Screen
        name="Details"
        component={ArtworkDetail}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};
