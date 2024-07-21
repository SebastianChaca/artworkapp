import React from 'react';
import {Artwork} from '../../api/types/ui';
import {ArtworkCardProvider} from './context/ArtworkCardProvider';
import {CardContainer} from './Components/CardContainer';
import {
  CardAnimation,
  CardDescription,
  CardImage,
  CardTitle,
} from './Components';
import {View} from 'react-native';

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
          <View style={{marginLeft: 10, flexShrink: 1}}>
            <CardTitle />
            <CardDescription />
          </View>
        </CardContainer>
      </CardAnimation>
    </ArtworkCardProvider>
  );
};
