import React, {createContext, PropsWithChildren, useContext} from 'react';
import {Artwork} from '../../../api/types/ui';

interface CardContext {
  artwork: Artwork;
}
interface CardProviderProps {
  artwork: Artwork;
}
const CardContextComponent = createContext<CardContext>({} as CardContext);
export const ArtworkCardProvider = (
  props: PropsWithChildren<CardProviderProps>,
) => {
  const {artwork, children} = props;
  return (
    <CardContextComponent.Provider value={{artwork}}>
      {children}
    </CardContextComponent.Provider>
  );
};
export const useArtworkCardContext = () => useContext(CardContextComponent);
