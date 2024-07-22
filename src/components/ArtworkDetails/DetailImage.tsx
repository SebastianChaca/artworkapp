import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {useArtworkDetailContext} from './context/ArtworDetailProvider';
import {ArtImage} from '../Layout/Image/ArtImage';

export const DetailImage = ({children}: PropsWithChildren) => {
  const {artwork} = useArtworkDetailContext();

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
      {children}
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
