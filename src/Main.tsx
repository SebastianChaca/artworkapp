import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArtworkDetail, Artworklist} from './screens';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

type RootStackParamList = {
  Home: undefined;
  Details: {artId: number};
};
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Main = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Artworklist}
        options={{title: 'Art Institute of Chicago'}}
      />
      <Stack.Screen
        name="Details"
        component={ArtworkDetail}
        options={{title: 'Art Institute of Chicago'}}
      />
    </Stack.Navigator>
  );
};

export default Main;
