import {AxiosResponse} from 'axios';
import {artworksBase} from '../baseAxiosService';
import {ApiResponse} from '../../types/apiResonse';
import {
  serializeArtworks,
  serializePaginatedArtworks,
} from '../../serializers/artworksSerializer';
import {Artwork, ArtworkList} from '../../types/ui';

export const getArtworkList = async ({pageParam = 1}): Promise<ArtworkList> => {
  try {
    const response: AxiosResponse = await artworksBase.get('/artworks', {
      params: {
        limit: 3,
        page: pageParam,
      },
    });
    const responseData: ApiResponse = response.data;

    return serializePaginatedArtworks(responseData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getArtworkByIds = async (ids: string[]): Promise<Artwork[]> => {
  try {
    if (ids.length === 0) {
      return [];
    }
    const response: AxiosResponse = await artworksBase.get('/artworks', {
      params: {
        ids,
      },
    });
    const responseData: ApiResponse = response.data;

    return serializeArtworks(responseData);
  } catch (error) {
    return Promise.reject(error);
  }
};
