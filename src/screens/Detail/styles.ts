import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Text from '../../common/components/Text';
const isIOS = Platform.OS === 'ios';
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
export const ContainerTitleEpisode = styled.View`
  flex: 1;
`;

export const RowButtonSeason = styled.Pressable`
  flex-direction: row;
  align-items: center;
  border-radius: ${({theme}) => (isIOS ? theme.borders.radius.small : 0)}px;
`;
export const ContentButtonSeason = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => (isIOS ? 0 : theme.spacing.sm)}px;
  background-color: ${({theme}) =>
    isIOS ? 'transparent' : theme.colors.surface};
`;
