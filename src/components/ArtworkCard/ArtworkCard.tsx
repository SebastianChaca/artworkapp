import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Artwork} from '../../api/types/ui';
import {ArtworkCardProvider} from './context/ArtworkCardProvider';
import {
  CardAnimation,
  CardDescription,
  CardImage,
  CardTitle,
} from './Components';

export const ArtworkCard = ({
  artwork,
  index,
}: {
  artwork: Artwork;
  index: number;
}) => {
  return (
    <ArtworkCardProvider artwork={artwork}>
      <CardAnimation index={index}>
        <View style={styles.container}>
          <CardTitle />
          <CardImage />
          <CardDescription />
        </View>
      </CardAnimation>
    </ArtworkCardProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
