/* eslint-disable @typescript-eslint/no-shadow */
import {format} from 'date-fns';
import {useMemo, useState} from 'react';
import {UseDetailController} from './types';

// import {Container} from './styles'

const useDetailController = ({show}: UseDetailController) => {
  /**
   * States
   */
  const [moreSummary, setMoreSummary] = useState<boolean>(false);

  /**
   * Memos
   */
  const summaryWithoutHtml = useMemo(() => {
    return show.summary.replace(/(<([^>]+)>)/gi, '');
  }, [show.summary]);

  const formattedDate = useMemo(() => {
    if (show.status === 'Running') {
      return format(new Date(), 'MM/dd/yyyy');
    } else if (show?.ended) {
      return format(new Date(show.ended), 'PP');
    } else {
      return '';
    }
  }, [show]);

  const genres = useMemo(() => {
    return show.genres.join(', ');
  }, [show]);

  const schedule = useMemo(() => {
    const {days, time} = show.schedule;
    let schedule = '';
    if (days.length) {
      schedule = `${days.join(', ')}`;
    }
    if (time) {
      schedule = `${schedule} at ${time}`;
    }

    return schedule;
  }, [show]);

  /**
   * Callbacks
   */
  const toggleMoreSummary = () => setMoreSummary(old => !old);

  return {
    summaryWithoutHtml,
    formattedDate,
    genres,
    schedule,
    moreSummary,
    toggleMoreSummary,
  };
};

export default useDetailController;
