import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';

export const CardTitle = () => {
  const {artwork} = useArtworkCardContext();
  //TODO:agregar anio
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{artwork.title}</Text>
      <Text style={styles.date}>({artwork.date_display})</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  date: {
    fontSize: 10,
    color: 'black',
    marginBottom: 5,
    marginLeft: 4,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
});
