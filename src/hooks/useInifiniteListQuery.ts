import {useInfiniteQuery} from '@tanstack/react-query';
import {getArtworkList} from '../api/services/Artwork/getArtwork';

export const useInifiniteListQuery = (enabled = true) => {
  return useInfiniteQuery({
    queryKey: ['artwork'],
    queryFn: getArtworkList,
    initialPageParam: 1,
    //TODO: chequear que no pushees a una pagina que no existe
    getNextPageParam: lastPage => lastPage.pagination.current_page + 1,
    enabled,
  });
};
