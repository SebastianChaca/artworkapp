import React from 'react';
import {Image, View, ImageBackground, StyleSheet} from 'react-native';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';

export const CardImage = () => {
  const {artwork} = useArtworkCardContext();
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{uri: artwork.thumbnail.lqip}}
        style={styles.image}>
        <Image
          source={{
            uri: artwork.image_mid_res,
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
    width: 130,
    height: 130,
  },
});
