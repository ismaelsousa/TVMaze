import {ShowModel} from '../../common/models/show.model';
import client from '../api';
import {FetchShowsParams} from './types';

export const fetchShows = async ({page}: FetchShowsParams) => {
  const {data} = await client.get<Array<ShowModel>>('/shows', {
    params: {
      page: page,
    },
  });
  return data;
};
