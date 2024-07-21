import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useArtworkDetailContext} from './context/ArtworDetailProvider';

export const DetailsSummary = () => {
  const {artwork} = useArtworkDetailContext();
  return (
    //TODO:refactor this
    <View style={styles.container}>
      <Text style={styles.textBase}>
        <Text style={styles.title}>Title: </Text>
        <Text style={styles.text}>{artwork.title}</Text>
      </Text>
      <Text style={styles.textBase}>
        <Text style={styles.title}>Date: </Text>
        <Text style={styles.text}>{artwork.date_display}</Text>
      </Text>
      <Text style={styles.textBase}>
        <Text style={styles.title}>Artist: </Text>
        <Text style={styles.text}>{artwork.artist_display}</Text>
      </Text>
      <Text style={styles.textBase}>
        <Text style={styles.title}>Origin: </Text>
        <Text style={styles.text}>{artwork.place_of_origin}</Text>
      </Text>
      <Text style={styles.textBase}>
        <Text style={styles.title}>Medium: </Text>
        <Text style={styles.text}>{artwork.medium_display}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBase: {
    marginTop: 10,
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'light',
  },
  container: {
    width: '100%',
  },
});
