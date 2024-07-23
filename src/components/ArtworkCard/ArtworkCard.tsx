import React from 'react';
import {Artwork} from '../../api/types/ui';
import {ArtworkCardProvider} from './context/ArtworkCardProvider';
import {CardContainer} from './Components/CardContainer';
import {
  CardAnimation,
  CardDate,
  CardDescription,
  CardFavoriteIcon,
  CardImage,
  CardTitle,
} from './Components';
import {StyleSheet, View} from 'react-native';

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
        <CardContainer>
          <CardImage />
          <View style={styles.summary}>
            <CardTitle />
            <CardDate />
            <CardDescription />
          </View>
          <CardFavoriteIcon />
        </CardContainer>
      </CardAnimation>
    </ArtworkCardProvider>
  );
};

const styles = StyleSheet.create({
  titleAndIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  summary: {marginLeft: 10, flexShrink: 1, flex: 2},
});
