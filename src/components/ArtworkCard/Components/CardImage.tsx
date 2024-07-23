import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';
import {ArtImage} from '../../Layout/Image/ArtImage';

export const CardImage = () => {
  const {artwork} = useArtworkCardContext();
  return (
    <View style={styles.imageContainer}>
      <ArtImage
        thumbnail={artwork.thumbnail?.lqip}
        image={artwork?.image_high_res}
        styles={{
          imagebackground: styles.image,
          image: styles.image,
        }}
      />
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
    flex: 1,
  },
});
