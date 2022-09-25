import {ShowByTextModel} from '../../../common/models/showByText.model';
import client from '../../api';
import {FetchShowsByTextParams} from './types';

export const fetchShowsByText = async ({q}: FetchShowsByTextParams) => {
  const {data} = await client.get<Array<ShowByTextModel>>('/search/shows', {
    params: {
      q,
    },
  });
  return data;
};
