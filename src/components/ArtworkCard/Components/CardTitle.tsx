import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';

export const CardTitle = () => {
  const {artwork} = useArtworkCardContext();
  //TODO:agregar anio
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2}>
          {artwork.title}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  container: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
  },
});
