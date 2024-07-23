import React from 'react';
import {ScrollView} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getArtworkByIds} from '../../api/services/Artwork/getArtwork';
import {ErrorView, LoadingView} from '../../components/Layout/status';
import {ArtworkCard} from '../../components';
import {useFavoritesContext} from '../../context/FavoritesProvider';
import {useFocusEffect} from '@react-navigation/native';

export const Favorites = () => {
  const {artworkIds} = useFavoritesContext();
  const {data, isLoading, refetch, error, isFetching} = useQuery({
    queryKey: ['favorites'],
    queryFn: () => getArtworkByIds(artworkIds),
  });

  useFocusEffect(
    React.useCallback(() => {
      refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artworkIds.length, refetch]),
  );
  if (isLoading || isFetching) {
    return <LoadingView />;
  }
  if (error) {
    return <ErrorView />;
  }

  if (data && data.length > 0) {
    return (
      <ScrollView>
        {data.map((item, index) => (
          <ArtworkCard artwork={item} key={item.id} index={index} />
        ))}
      </ScrollView>
    );
  }
  return null;
};
