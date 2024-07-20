import React, {useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  ImageBackground,
} from 'react-native';
import {Artwork} from '../../api/types/ui';

export const ArtworkCard = ({
  artwork,
  index,
}: {
  artwork: Artwork;
  index: number;
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: 450 * (index % 3) + 1,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{opacity}}>
      <View style={styles.container}>
        <Text style={styles.title}>{artwork.title}</Text>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{uri: artwork.thumbnail.lqip}}
            style={styles.image}>
            <Image
              source={{
                uri: artwork.image_mid_res,
              }}
              resizeMode="cover"
              style={styles.image}
            />
          </ImageBackground>
        </View>
        <Text style={styles.description}>{artwork.artist_display}</Text>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    color: 'white',
    fontSize: 10,
    marginTop: 8,
  },
  imageContainer: {
    marginTop: 8,
    marginBottom: 8,
    position: 'relative',
    width: 300, // Adjust as needed
    height: 300, // Adjust as needed
  },
});
