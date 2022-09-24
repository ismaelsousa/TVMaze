import {SeasonModel} from '../../common/models/season.model';
import client from '../api';
import {FetchSeasonsParams} from './types';

export const fetchSeasons = async ({showId}: FetchSeasonsParams) => {
  const {data} = await client.get<Array<SeasonModel>>(
    `/shows/${showId}/seasons`,
  );
  return data;
};
