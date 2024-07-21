import React from 'react';
import {useArtworkDetailContext} from './context/ArtworDetailProvider';
import {StyleSheet, Text} from 'react-native';

export const DetailDimensions = () => {
  const {artwork} = useArtworkDetailContext();
  return <Text style={styles.dimension}>{artwork.dimensions}</Text>;
};
const styles = StyleSheet.create({
  dimension: {
    fontSize: 10,
  },
});
