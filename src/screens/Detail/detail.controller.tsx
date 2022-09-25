/* eslint-disable @typescript-eslint/no-shadow */
import {format} from 'date-fns';
import {useEffect, useMemo, useState} from 'react';
import useFavoritesShows from '../../common/hooks/useFavoritesShows';
import {EpisodeModel} from '../../common/models/episode.model';
import {SeasonModel} from '../../common/models/season.model';
import {removeHtmlFromString} from '../../common/utils/html';
import {noSummary} from '../../common/utils/message';
import {fetchEpisodesBySeason} from '../../repositories/episodes/episodes.repository';
import {fetchSeasons} from '../../repositories/seasons/seasons.repository';
import {UseDetailController} from './types';

// import {Container} from './styles'

const useDetailController = ({show}: UseDetailController) => {
  /**
   * States
   */
  const [moreSummary, setMoreSummary] = useState<boolean>(false);
  const [seasons, setSeasons] = useState<Array<SeasonModel>>([]);
  const [selectedSeason, setSelectedSeason] = useState<SeasonModel>();
  const [episodes, setEpisodes] = useState<Array<EpisodeModel>>([]);

  /**
   * Contexts
   */
  const {addFavoriteShow, favoritesShows, removeFavoriteShow} =
    useFavoritesShows();
  /**
   * Memos
   */
  const summaryWithoutHtml = useMemo(() => {
    if (show.summary) {
      return removeHtmlFromString(show?.summary);
    }
    return noSummary;
  }, [show.summary]);

  const formattedDate = useMemo(() => {
    if (show.status === 'Running') {
      return format(new Date(), 'PP');
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

  /**
   * Effects
   */
  useEffect(() => {
    fetchSeasons({showId: show.id}).then(setSeasons);
  }, [show.id]);

  useEffect(() => {
    if (seasons.length) {
      setSelectedSeason(seasons[0]);
    }
  }, [seasons]);

  useEffect(() => {
    if (selectedSeason) {
      fetchEpisodesBySeason({seasonId: selectedSeason.id}).then(setEpisodes);
    }
  }, [selectedSeason]);

  return {
    summaryWithoutHtml,
    formattedDate,
    genres,
    schedule,
    moreSummary,
    toggleMoreSummary,
    seasons,
    selectedSeason,
    setSelectedSeason,
    episodes,
    addFavoriteShow,
    favoritesShows,
    removeFavoriteShow,
  };
};

export default useDetailController;
