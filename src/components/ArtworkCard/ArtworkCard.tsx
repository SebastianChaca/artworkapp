import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Artwork} from '../../api/types/ui';
import {ArtworkCardProvider} from './context/ArtworkCardProvider';
import {CardContainer} from './Components/CardContainer';
import {
  CardAnimation,
  CardDescription,
  CardImage,
  CardTitle,
} from './Components';
import {HomeProps} from '../../Main';
type NavigationProp = HomeProps['navigation'];
export const ArtworkCard = ({
  artwork,
  index,
}: {
  artwork: Artwork;
  index: number;
}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ArtworkCardProvider artwork={artwork}>
      <CardAnimation index={index}>
        <CardContainer
          onPress={() => navigation.navigate('Details', {artId: artwork.id})}>
          <CardTitle />
          <CardImage />
          <CardDescription />
        </CardContainer>
      </CardAnimation>
    </ArtworkCardProvider>
  );
};
