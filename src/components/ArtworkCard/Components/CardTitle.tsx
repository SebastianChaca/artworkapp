import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';

export const CardTitle = () => {
  const {artwork} = useArtworkCardContext();
  //TODO:agregar anio
  return <Text style={styles.title}>{artwork.title}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
