import React from 'react';
import {Text, View} from 'react-native';
import {useArtworkDetailContext} from './context/ArtworDetailProvider';

export const DetailsSummary = () => {
  const {artwork} = useArtworkDetailContext();
  return (
    //TODO:refactor this
    <View style={{width: '100%'}}>
      <Text style={{marginTop: 10, color: 'black'}}>
        <Text style={{fontWeight: 'bold'}}>Artist: </Text>
        <Text style={{fontWeight: 'light'}}>{artwork.artist_display}</Text>
      </Text>
      <Text style={{marginTop: 10, color: 'black'}}>
        <Text style={{fontWeight: 'bold'}}>Origin: </Text>
        <Text style={{fontWeight: 'light'}}>{artwork.place_of_origin}</Text>
      </Text>
      <Text style={{marginTop: 10, color: 'black'}}>
        <Text style={{fontWeight: 'bold'}}>Medium: </Text>
        <Text style={{fontWeight: 'light'}}>{artwork.medium_display}</Text>
      </Text>
    </View>
  );
};
