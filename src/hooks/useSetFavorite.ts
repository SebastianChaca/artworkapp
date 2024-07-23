import {useState, useEffect} from 'react';
import {Artwork} from '../api/types/ui';
import {useFavoritesContext} from '../context/FavoritesProvider';

export const useSetFavorite = (artwork: Artwork) => {
  const {setArtworkIds, artworkIds} = useFavoritesContext();
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const findId = artworkIds.find(store => store === artwork.id.toString());
    setFavorite(!!findId);
  }, [artwork.id, artworkIds]);

  const onPressFavorite = () => {
    if (isFavorite) {
      const filterId = artworkIds.filter(
        item => item !== artwork.id.toString(),
      );
      setArtworkIds(filterId);
    } else {
      setArtworkIds(prev => [...prev, artwork.id.toString()]);
    }
  };

  return {onPressFavorite, isFavorite};
};
