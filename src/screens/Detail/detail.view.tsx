import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Platform, useWindowDimensions, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import BackButton from '../../common/components/BackButton';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import EpisodeCard from '../../common/components/EpisodeCard';
import Icon from '../../common/components/Icon';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useDetailController from './detail.controller';
import SeasonsModal from './localComponents/SeasonsModal';
import {
  ContainerTitleEpisode,
  Content,
  ContentButtonSeason,
  RowButtonSeason,
  RowCover,
  RowEpisode,
  TitleEpisode,
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
            <RowEpisode
              key={item.id}
              onPress={() => {
                //TODO: Navigate to episode detail
              }}>
              <EpisodeCard url={item.image?.medium} name={item.name} />
              <Spacer width={spacing.sm} />
              <ContainerTitleEpisode>
                <TitleEpisode numberOfLines={1}>
                  {item?.number ? `${item.number}.` : 'Special:'} {item.name}
                </TitleEpisode>
                <Text size={12} color="caption">
                  {item.runtime <= 60 ? `${item.runtime}m` : '+1h'}
                </Text>
              </ContainerTitleEpisode>
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
