import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, ScrollView, useWindowDimensions, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import BackButton from '../../common/components/BackButton';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import EpisodeCard from '../../common/components/EpisodeCard';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useDetailController from './detail.controller';
import {Content, RowCover, RowEpisode, TitleEpisode} from './styles';

const DetailView: React.FC = () => {
  /**
   * NAvigation
   */
  const {goBack} = useNavigation();
  const {
    params: {show},
  } = useRoute<DetailRouteProp>();

  /**
   * Theme
   */
  const {spacing} = useTheme();
  const {width} = useWindowDimensions();

  /**
   * Get the controller
   */
  const {
    formattedDate,
    genres,
    moreSummary,
    summaryWithoutHtml,
    toggleMoreSummary,
    schedule,
    seasons,
    selectedSeason,
    setSelectedSeason,
    episodes,
  } = useDetailController({show});

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <BackButton onPress={goBack} />
        <Spacer height={spacing.md} />
        <FlatList
          data={episodes}
          renderItem={({item}) => (
            <RowEpisode key={item.id}>
              <EpisodeCard url={item.image.medium} name={item.name} />
              <Spacer width={spacing.sm} />
              <View>
                <TitleEpisode>
                  {item.number}. {item.name}
                </TitleEpisode>
                <Spacer height={spacing.sm} />
                <Text color="caption">
                  {item.runtime <= 60 ? `${item.runtime}m` : '+1h'}
                </Text>
              </View>
            </RowEpisode>
          )}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          ListHeaderComponent={() => {
            return (
              <View>
                <RowCover>
                  <Cover url={show.image?.medium} />
                  <Spacer width={spacing.md} />
                  <View style={{maxWidth: width * 0.4}}>
                    <Text size={24}>{show.name}</Text>
                    <Spacer height={spacing.sm} />
                    <Text color="caption">{schedule}</Text>
                    <Spacer height={spacing.lg} />
                    <Text color="caption">{formattedDate}</Text>
                    <Spacer height={spacing.sm} />
                    <Text size={12} color="caption">
                      {genres}
                    </Text>
                  </View>
                </RowCover>
                <Spacer height={spacing.md} />
                <Text>
                  {summaryWithoutHtml.slice(0, moreSummary ? undefined : 200)}
                  {summaryWithoutHtml.length >= 200 && (
                    <Text onPress={toggleMoreSummary} color="caption">
                      {moreSummary ? ' ...less' : ' ...more'}
                    </Text>
                  )}
                </Text>
                {!!selectedSeason && (
                  <View>
                    <Spacer height={spacing.md} />
                    <Text size={20}>Season {selectedSeason.number}</Text>
                    <Spacer height={spacing.md} />
                  </View>
                )}
              </View>
            );
          }}
        />
      </Content>
    </Container>
  );
};

export default DetailView;
