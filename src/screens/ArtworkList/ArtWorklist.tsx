import React from 'react';
import {RefreshControl, FlatList} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getArtworkList} from '../../api/services/Artwork/getArtwork';
import {ArtworkCard} from '../../components';
import {
  ErrorView,
  Loader,
  LoadingView,
  NotFound,
} from '../../components/Layout/status';
import {HomeProps} from '../../Main';
import {useInifiniteListQuery} from '../../hooks/useInifiniteListQuery';

export const Artworklist = ({navigation}: HomeProps) => {
  const {data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage} =
    useInifiniteListQuery();

  if (error) {
    return <ErrorView />;
  }

  if (isLoading) {
    return <LoadingView />;
  }

  if (data?.pages && data?.pages.length > 0) {
    return (
      <FlatList
        data={data.pages.map(i => i.artwork).flat()}
        renderItem={({item, index}) => (
          <ArtworkCard artwork={item} index={index} />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        ListFooterComponent={<Loader isLoading={isFetchingNextPage} />}
        onEndReached={() => !isFetchingNextPage && fetchNextPage()}
        onEndReachedThreshold={0}
      />
    );
  }
  return <NotFound text="No se encontraron resultados" />;
};
