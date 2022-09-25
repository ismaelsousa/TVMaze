import {useEffect, useState} from 'react';
import {CastCreditModel} from '../../common/models/cast.credits.model';
import {PersonModel} from '../../common/models/person.model';
import {fetchCastCreditsByPerson} from '../../repositories/people/people.repository';

const usePersonController = ({person}: {person: PersonModel}) => {
  const [castCredits, setCastCredits] = useState<Array<CastCreditModel>>([]);

  useEffect(() => {
    if (person) {
      fetchCastCreditsByPerson({personId: person.id}).then(setCastCredits);
    }
  }, [person]);

  return {castCredits};
};

export default usePersonController;
