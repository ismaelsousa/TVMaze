import {useNavigation, useRoute} from '@react-navigation/native';
import {format} from 'date-fns';
import React, {useMemo, useState} from 'react';
import {ScrollView, useWindowDimensions, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import BackButton from '../../common/components/BackButton';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
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
  const {colors, spacing} = useTheme();
  const {width} = useWindowDimensions();

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
    } else {
      return format(new Date(show.premiered), 'PP');
    }
  }, [show]);

  const genres = useMemo(() => {
    return show.genres.join(', ');
  }, [show]);

  /**
   * Callbacks
   */
  const toggleMoreSummary = () => setMoreSummary(old => !old);

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
              <Text size={20}>{show.name}</Text>
              <Spacer height={spacing.md} />
              <Text color="caption">{formattedDate}</Text>
              <Spacer height={spacing.md} />
              <Text size={12} color="caption">
                {genres}
              </Text>
            </View>
          </RowCover>
          <Spacer height={spacing.md} />
          <Text>
            {summaryWithoutHtml.slice(0, moreSummary ? undefined : 200)}
            <Text onPress={toggleMoreSummary} color="caption">
              {moreSummary ? ' ...less' : ' ...more'}
            </Text>
          </Text>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default DetailView;
