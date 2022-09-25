import React, {useMemo, useState} from 'react';
import {EpisodeCardProps} from './types';

import EpisodeCover from '../EpisodeCover';
import Spacer from '../Spacer';
import Text from '../Text';
import {useTheme} from 'styled-components/native';
import {
  Container,
  ContainerTitleEpisode,
  RowEpisode,
  TitleEpisode,
} from './styles';
import {View} from 'react-native';
import {removeHtmlFromString} from '../../utils/html';
import Icon from '../Icon';
import {noSummary} from '../../utils/message';

const EpisodeCard = ({episode, onPress}: EpisodeCardProps) => {
  const {spacing, colors} = useTheme();

  const [shouldShowDetails, setShouldShowDetails] = useState<boolean>(false);

  const summaryWithoutHtml = useMemo(() => {
    if (episode.summary) {
      return removeHtmlFromString(episode?.summary);
    }
    return noSummary;
  }, [episode.summary]);

  return (
    <Container>
      <RowEpisode
        key={episode.id}
        onPress={() => {
          setShouldShowDetails(old => !old);
          onPress?.();
        }}>
        <EpisodeCover url={episode.image?.medium} name={episode.name} />
        <Spacer width={spacing.sm} />
        <ContainerTitleEpisode>
          <TitleEpisode numberOfLines={1}>
            {episode?.number ? `${episode.number}.` : 'Special:'} {episode.name}
          </TitleEpisode>
          <Text size={12} color="caption">
            {episode.runtime <= 60 ? `${episode.runtime}m` : '+1h'}
          </Text>
        </ContainerTitleEpisode>
        <Icon
          icon={shouldShowDetails ? 'menuUp' : 'menuDown'}
          color={colors.brand}
        />
      </RowEpisode>
      {shouldShowDetails && (
        <View>
          <Spacer height={spacing.sm} />
          <Text color="caption">{summaryWithoutHtml}</Text>
        </View>
      )}
    </Container>
  );
};

export default EpisodeCard;
