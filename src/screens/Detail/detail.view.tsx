import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Platform, useWindowDimensions, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import BackButton from '../../common/components/BackButton';
import Container from '../../common/components/Container';
import ShowCover from '../../common/components/ShowCover';
import EpisodeCard from '../../common/components/EpisodeCard';
import Icon from '../../common/components/Icon';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useDetailController from './detail.controller';
import SeasonsModal from './localComponents/SeasonsModal';
import {
  Content,
  ContentButtonSeason,
  RowButtonSeason,
  RowCover,
  RowFavorite,
} from './styles';

const DetailView: React.FC = () => {
  /**
   * Navigation
   */
  const {goBack} = useNavigation();
  const {
    params: {show},
  } = useRoute<DetailRouteProp>();

  /**
   * States
   */
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  /**
   * Theme
   */
  const {spacing, colors} = useTheme();
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
    addFavoriteShow,
    favoritesShows,
    removeFavoriteShow,
  } = useDetailController({show});

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <BackButton onPress={goBack} />
        <Spacer height={spacing.md} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={episodes}
          renderItem={({item}) => <EpisodeCard episode={item} />}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          ListHeaderComponent={() => {
            const isFavorite = favoritesShows[show.id];
            return (
              <View>
                <RowCover>
                  <ShowCover url={show.image?.medium} />
                  <Spacer width={spacing.md} />
                  <View style={{maxWidth: width * 0.4}}>
                    <Text size={24}>{show.name}</Text>
                    <Spacer height={spacing.sm} />
                    <RowFavorite
                      onPress={() =>
                        isFavorite
                          ? removeFavoriteShow(show)
                          : addFavoriteShow(show)
                      }>
                      <Text size={16} color="caption">
                        {show.rating.average}
                      </Text>
                      <Spacer width={spacing.sm} />
                      <Icon
                        icon={isFavorite ? 'star' : 'starOutline'}
                        color="yellow"
                      />
                    </RowFavorite>
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
                    <Spacer height={spacing.lg} />
                    <RowButtonSeason onPress={() => setIsModalVisible(true)}>
                      <ContentButtonSeason>
                        <Text color="caption" size={18}>
                          Season {selectedSeason.number}
                        </Text>
                        <Spacer width={spacing.sm} />
                        <Icon icon="menuDown" color={colors.caption} />
                      </ContentButtonSeason>
                    </RowButtonSeason>
                    <Spacer
                      height={Platform.OS === 'ios' ? spacing.sm : spacing.md}
                    />
                  </View>
                )}
              </View>
            );
          }}
        />
      </Content>
      <SeasonsModal
        visible={isModalVisible}
        seasons={seasons}
        setVisible={setIsModalVisible}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      />
    </Container>
  );
};

export default DetailView;
