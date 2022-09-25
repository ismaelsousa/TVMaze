import {Platform} from 'react-native';
import styled from 'styled-components/native';

const isIOS = Platform.OS === 'ios';
export const Content = styled.SafeAreaView`
  flex: 1;
  margin: ${({theme}) => theme.spacing.md}px;
`;

export const RowCover = styled.View`
  flex-direction: row;
`;
export const RowFavorite = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const RowButtonSeason = styled.Pressable`
  flex-direction: row;
  align-items: center;
  border-radius: ${({theme}) => (isIOS ? theme.borders.radius.small : 0)}px;
`;
export const ContentButtonSeason = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => (isIOS ? 0 : theme.spacing.sm)}px;
  background-color: ${({theme}) =>
    isIOS ? 'transparent' : theme.colors.surface};
`;
