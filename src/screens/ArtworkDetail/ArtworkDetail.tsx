import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {DetailProps} from '../../Main';
import {useInifiniteListQuery} from '../../hooks/useInifiniteListQuery';
type RouteProp = DetailProps['route'];
export const ArtworkDetail = () => {
  const route = useRoute<RouteProp>();
  const {data} = useInifiniteListQuery(false);

  const artworkList = data?.pages.map(i => i.artwork).flat();
  const findById = artworkList?.find(item => item.id === route.params!.artId);

  return (
    <View>
      <Text>{findById?.title}</Text>
    </View>
  );
};
