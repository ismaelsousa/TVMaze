import {PersonModel} from '../../../common/models/person.model';
import client from '../../api';
import {FetchPeopleByTextParams} from './types';

export const fetchPeopleByText = async ({q}: FetchPeopleByTextParams) => {
  const {data} = await client.get<Array<PersonModel>>('/search/people', {
    params: {
      q,
    },
  });
  return data;
};
