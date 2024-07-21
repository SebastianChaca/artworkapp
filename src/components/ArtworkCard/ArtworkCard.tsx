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
          <CardTitle />
          <CardImage />
          <CardDescription />
        </CardContainer>
      </CardAnimation>
    </ArtworkCardProvider>
  );
};
