import React from 'react';
import {Text, View} from 'react-native';
import {DetailRouteProps} from '../../Main';
import {useRoute} from '@react-navigation/native';

export const ArtworkDetail = () => {
  const {params} = useRoute<DetailRouteProps>();
  const {artwork} = params;
  return (
    <View>
      <Text>{artwork?.description}</Text>
    </View>
  );
};
