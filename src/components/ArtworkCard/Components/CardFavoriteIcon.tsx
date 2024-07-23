import React from 'react';
import {FavoriteIcon} from '../../Layout/Icons/Favorite/FavoriteIcon';
import {useArtworkCardContext} from '../context/ArtworkCardProvider';
import {useSetFavorite} from '../../../hooks/useSetFavorite';

export const CardFavoriteIcon = () => {
  const {artwork} = useArtworkCardContext();
  const {onPressFavorite, isFavorite} = useSetFavorite(artwork);

  return (
    <FavoriteIcon
      name={isFavorite ? 'heart' : 'heart-o'}
      onPress={onPressFavorite}
      size={20}
    />
  );
};
