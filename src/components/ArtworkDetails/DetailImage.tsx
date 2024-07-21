import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {useArtworkDetailContext} from './context/ArtworDetailProvider';

export const DetailImage = () => {
  const {artwork} = useArtworkDetailContext();
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{uri: artwork.thumbnail.lqip}}
        style={styles.image}>
        <Image
          source={{
            uri: artwork.image_high_res,
          }}
          style={styles.image}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageContainer: {
    marginBottom: 8,
    position: 'relative',
    width: 300,
    height: 300,
  },
  container: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  dimension: {
    fontSize: 10,
  },
});
