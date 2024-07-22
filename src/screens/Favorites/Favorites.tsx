import React from 'react';
import {ScrollView} from 'react-native';

import {useQuery} from '@tanstack/react-query';
import {getArtworkByIds} from '../../api/services/Artwork/getArtwork';
import {LoadingView} from '../../components/Layout/status';
import {ArtworkCard} from '../../components';

export const Favorites = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['favorites'],
    queryFn: getArtworkByIds,
  });
  if (isLoading) {
    return <LoadingView />;
  }

  if (data?.artwork && data?.artwork.length > 0) {
    return (
      <ScrollView>
        {data?.artwork.map((item, index) => (
          <ArtworkCard artwork={item} key={item.id} index={index} />
        ))}
      </ScrollView>
    );
  }
  return null;
};
