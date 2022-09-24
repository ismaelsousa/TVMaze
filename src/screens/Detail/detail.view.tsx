import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, useWindowDimensions, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import BackButton from '../../common/components/BackButton';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useDetailController from './detail.controller';
import {Content, RowCover} from './styles';

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
  } = useDetailController({show});

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <BackButton onPress={goBack} />
        <Spacer height={spacing.md} />
        <ScrollView>
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
        </ScrollView>
      </Content>
    </Container>
  );
};

export default DetailView;
