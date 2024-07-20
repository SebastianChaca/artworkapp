import {Thumbnail, Pagination, Config} from './apiResonse';

export interface Artwork {
  id: number;
  title: string;
  description: string;
  short_description: string;
  dimensions: string;
  thumbnail: Thumbnail;
  image_id: string;
  artist_display: string;
  iiif_url: string;
  image_high_res: string;
  image_mid_res: string;
}

export interface ArtworkList {
  pagination: Pagination;
  config: Config;
  artwork: Artwork[];
}
