import React, {createContext, PropsWithChildren, useContext} from 'react';
import {Artwork} from '../../../api/types/ui';

interface DetailsContext {
  artwork: Artwork;
}
interface DetailsProviderProps {
  artwork: Artwork;
}
const DetailContextComponent = createContext<DetailsContext>(
  {} as DetailsContext,
);
export const ArtworkDetailProvider = (
  props: PropsWithChildren<DetailsProviderProps>,
) => {
  const {artwork, children} = props;
  return (
    <DetailContextComponent.Provider value={{artwork}}>
      {children}
    </DetailContextComponent.Provider>
  );
};
export const useArtworkDetailContext = () => useContext(DetailContextComponent);
