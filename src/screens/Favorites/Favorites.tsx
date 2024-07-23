import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {
  getArtworkByIds,
  getArtworkByIds2,
} from '../../api/services/Artwork/getArtwork';
import {ErrorView, Loader, LoadingView} from '../../components/Layout/status';
import {ArtworkCard} from '../../components';
import {useFavoritesContext} from '../../context/FavoritesProvider';
import {useFocusEffect} from '@react-navigation/native';
import {useInifiniteListQuery} from '../../hooks/useInifiniteListQuery';

export const Favorites = () => {
  const [page, setPages] = useState(0);
  const {artworkIds} = useFavoritesContext();
  const {
    data,
    isLoading,
    refetch,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['favorites'],
    queryFn: ({pageParam}) =>
      getArtworkByIds2({pageParams: pageParam, ids: artworkIds}),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => lastPage,
  });

  useFocusEffect(
    React.useCallback(() => {
      refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artworkIds.length, refetch]),
  );
  useEffect(() => {
    if (page > 0 && !isFetchingNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchNextPage, page]);
  if (isLoading) {
    return <LoadingView />;
  }
  if (error) {
    return <ErrorView />;
  }

  // if (data && data.length > 0) {
  //   return (
  //     <ScrollView>
  //       {data.map((item, index) => (
  //         <ArtworkCard artwork={item} key={item.id} index={index} />
  //       ))}
  //     </ScrollView>
  //   );
  // }
  const onReachend = () => {
    !isFetchingNextPage && setPages(prev => prev + 2);
  };
  if (data?.pages && data?.pages.length > 0) {
    return (
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data.pages.map(i => i.map(i2 => i2)).flat()}
        renderItem={({item, index}) => (
          <ArtworkCard artwork={item} index={index} />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        ListFooterComponent={<Loader isLoading={isFetchingNextPage} />}
        onEndReached={onReachend}
        onEndReachedThreshold={1}
      />
    );
  }
  return null;
};
