import {AxiosResponse} from 'axios';
import {artworksBase} from '../baseAxiosService';
import {ApiResponse} from '../../types/apiResonse';
import {serializeArtworks} from '../../serializers/artworksSerializer';
import {ArtworkList} from '../../types/ui';
import {getStoredIds} from '../../../utils/storeData';

export const getArtworkList = async ({pageParam = 1}): Promise<ArtworkList> => {
  try {
    const response: AxiosResponse = await artworksBase.get('/artworks', {
      params: {
        limit: 3,
        page: pageParam,
      },
    });
    const responseData: ApiResponse = response.data;

    return serializeArtworks(responseData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getArtworkByIds = async (): Promise<ArtworkList> => {
  try {
    const storedIds = await getStoredIds();
    const response: AxiosResponse = await artworksBase.get('/artworks', {
      params: {
        limit: 3,
        ids: storedIds,
      },
    });
    const responseData: ApiResponse = response.data;

    return serializeArtworks(responseData);
  } catch (error) {
    return Promise.reject(error);
  }
};
