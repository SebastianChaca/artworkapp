import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';

export const CardDate = () => {
  const {artwork} = useArtworkCardContext();
  return <Text style={styles.date}>({artwork.date_display})</Text>;
};
const styles = StyleSheet.create({
  date: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
});
