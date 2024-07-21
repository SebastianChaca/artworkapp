import {ApiResponse} from '../types/apiResonse';
import {ArtworkList} from '../types/ui';

export const serializeArtworks = (data: ApiResponse): ArtworkList => {
  return {
    pagination: data.pagination,
    config: data.config,
    artwork: data.data.map(item => ({
      id: item.id,
      thumbnail: item.thumbnail,
      title: item.title,
      short_description: item.short_description,
      description: item.description,
      dimensions: item.dimensions,
      image_id: item.image_id,
      artist_display: item.artist_display,
      iiif_url: data.config.iiif_url,
      //https://api.artic.edu/docs/#image-sizes
      image_high_res: `${data.config.iiif_url}/${item.image_id}/full/843,/0/default.jpg`,
      image_mid_res: `${data.config.iiif_url}/${item.image_id}/full/400,/0/default.jpg`,
      date_display: item.date_display,
    })),
  };
};
