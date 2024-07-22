import {useState, useEffect} from 'react';
import {Artwork} from '../api/types/ui';
import {
  addIdToStorage,
  getStoredIds,
  removeIdFromStorage,
} from '../utils/storeData';

export const useSetFavorite = (artwork: Artwork) => {
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchStoredIds = async () => {
      const storedIds = await getStoredIds();
      const find = storedIds.find(store => store === artwork.id.toString());
      setFavorite(!!find);
    };
    fetchStoredIds();
  }, [artwork.id]);
  const onPressFavorite = async () => {
    if (isFavorite) {
      await removeIdFromStorage(artwork.id.toString());
      setFavorite(false);
    } else {
      await addIdToStorage(artwork.id.toString());
      setFavorite(true);
    }
  };

  return {onPressFavorite, isFavorite};
};
