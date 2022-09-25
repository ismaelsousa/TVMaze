import {SeasonModel} from '../../../../common/models/season.model';

export interface SeasonsModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  seasons: SeasonModel[];
  selectedSeason?: SeasonModel;
  setSelectedSeason: (value: SeasonModel) => void;
}
