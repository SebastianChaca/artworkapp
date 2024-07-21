import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';

export const CardDescription = () => {
  const {artwork} = useArtworkCardContext();
  return (
    <Text style={styles.description}>
      {artwork.short_description || artwork.artist_display}
    </Text>
  );
};
const styles = StyleSheet.create({
  description: {
    color: 'black',
    fontSize: 10,
    marginTop: 8,
  },
});
