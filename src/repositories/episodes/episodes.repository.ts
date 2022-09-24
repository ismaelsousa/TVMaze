import {EpisodeModel} from '../../common/models/episode.model';
import client from '../api';
import {FetchEpisodesBySeasonParams} from './types';

export const fetchEpisodesBySeason = async ({
  seasonId,
}: FetchEpisodesBySeasonParams) => {
  const {data} = await client.get<Array<EpisodeModel>>(
    `/seasons/${seasonId}/episodes`,
  );
  return data;
};
