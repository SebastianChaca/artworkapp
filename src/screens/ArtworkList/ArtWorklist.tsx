import React from 'react';
import {RefreshControl, FlatList} from 'react-native';

import {ArtworkCard} from '../../components';
import {
  ErrorView,
  Loader,
  LoadingView,
  NotFound,
} from '../../components/Layout/status';

import {useInifiniteListQuery} from '../../hooks/useInifiniteListQuery';

export const Artworklist = () => {
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
        keyExtractor={item => item.id.toString()}
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
