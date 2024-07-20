import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
} from 'react-native';
import {getArtworkList} from './api/services/Artwork/getArtwork';

import {useInfiniteQuery} from '@tanstack/react-query';
import {ArtworkCard} from './components';

const Main = () => {
  const {data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage} =
    useInfiniteQuery({
      queryKey: ['artwork'],
      queryFn: getArtworkList,
      initialPageParam: 1,
      //TODO: chequear que no pushees a una pagina que no existe
      getNextPageParam: lastPage => lastPage.pagination.current_page + 1,
    });

  const renderLoader = () => {
    return isFetchingNextPage ? (
      <View>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  if (error) {
    return (
      <View>
        <Text style={styles.error}>
          Se produjo un error, intentalo de nuevo
        </Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} />
      </View>
    );
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
        ListFooterComponent={renderLoader}
        onEndReached={() => !isFetchingNextPage && fetchNextPage()}
        onEndReachedThreshold={0}
      />
    );
  }
  return (
    <View>
      <Text style={styles.notFound}>No se encontraron resultados</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  error: {
    color: 'white',
  },
  notFound: {
    color: 'white',
  },
});
export default Main;
