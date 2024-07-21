import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import {Pressable, StyleSheet, View} from 'react-native';
import {HomeNavigationProps} from '../../../Main';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';

export const CardContainer = ({children}: PropsWithChildren) => {
  const navigation = useNavigation<HomeNavigationProps>();
  const {artwork} = useArtworkCardContext();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Details', {
          artwork,
          title: `${artwork.title} (${artwork.date_display})`,
        })
      }>
      <View style={styles.container}>{children}</View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#c8c8c8',
    display: 'flex',
    flexDirection: 'row',
  },
});
