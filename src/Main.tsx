import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArtworkDetail, Artworklist} from './screens';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {Artwork} from './api/types/ui';

type RootStackParamList = {
  Home: undefined;
  Details: {artwork: Artwork; title: string};
};
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type HomeRouteProps = HomeProps['route'];
export type HomeNavigationProps = HomeProps['navigation'];

export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type DetailRouteProps = DetailProps['route'];
export type DetailNavigationProps = DetailProps['navigation'];
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
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default Main;
