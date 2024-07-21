import React from 'react';
import {useWindowDimensions} from 'react-native';

import RenderHtml from 'react-native-render-html';
import {useArtworkDetailContext} from './context/ArtworDetailProvider';
export const DetailsDescription = () => {
  const {width} = useWindowDimensions();
  const {artwork} = useArtworkDetailContext();
  return (
    <RenderHtml
      contentWidth={width}
      source={{html: artwork?.description || ''}}
      tagsStyles={{p: {color: 'black'}}}
    />
  );
};
