import {EpisodeModel} from '../../models/episode.model';

export interface EpisodeCardProps {
  episode: EpisodeModel;
  onPress?: () => void;
}
