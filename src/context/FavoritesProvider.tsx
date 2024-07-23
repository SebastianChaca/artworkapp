import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from 'react';
import {getStoredIds, saveIdsToStorage} from '../utils/storeData';

interface FavoritesContext {
  artworkIds: string[];
  setArtworkIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const FavoritesContextComp = createContext<FavoritesContext>(
  {} as FavoritesContext,
);
export const FavoritesProvider = ({children}: PropsWithChildren) => {
  const [artworkIds, setArtworkIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchStoredIDs = async () => {
      setArtworkIds(await getStoredIds());
    };
    fetchStoredIDs();
  }, []);

  useEffect(() => {
    saveIdsToStorage(artworkIds);
  }, [artworkIds]);
  return (
    <FavoritesContextComp.Provider value={{artworkIds, setArtworkIds}}>
      {children}
    </FavoritesContextComp.Provider>
  );
};
export const useFavoritesContext = () => useContext(FavoritesContextComp);
