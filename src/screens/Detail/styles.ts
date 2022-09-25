import styled from 'styled-components/native';
import Text from '../../common/components/Text';

export const Content = styled.SafeAreaView`
  flex: 1;
  margin: ${({theme}) => theme.spacing.md}px;
`;

export const RowCover = styled.View`
  flex-direction: row;
`;

export const RowEpisode = styled.View`
  flex-direction: row;
`;

export const TitleEpisode = styled(Text)`
  font-weight: bold;
`;
