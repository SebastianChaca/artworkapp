import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FavoriteIcon} from '../Layout/Icons/Favorite/FavoriteIcon';
import {useArtworkDetailContext} from './context/ArtworDetailProvider';
import {useSetFavorite} from '../../hooks/useSetFavorite';

export const DetailFavorite = () => {
  const {artwork} = useArtworkDetailContext();
  const {onPressFavorite, isFavorite} = useSetFavorite(artwork);
  return (
    <View style={styles.container}>
      <FavoriteIcon
        name={isFavorite ? 'heart' : 'heart-o'}
        onPress={onPressFavorite}
        size={25}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
});
