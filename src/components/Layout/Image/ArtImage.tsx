import React from 'react';
import {
  Image,
  ImageBackground,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

export const ArtImage = ({
  thumbnail,
  image,
  styles,
}: {
  thumbnail: string;
  image: string;
  styles: {
    imagebackground: StyleProp<ViewStyle>;
    image: StyleProp<ImageStyle>;
  };
}) => {
  const fallback = require('../../../../assets/placeholder.png');
  const uriThumbnail = {
    uri: thumbnail,
  };
  const uriImage = {
    uri: image,
  };
  return (
    <View>
      <ImageBackground
        source={uriThumbnail.uri ? uriThumbnail : fallback}
        style={styles.imagebackground}>
        <Image
          source={uriImage.uri ? uriImage : fallback}
          style={styles.image}
        />
      </ImageBackground>
    </View>
  );
};
