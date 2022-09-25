import styled from 'styled-components/native';
import {isIOS} from '../../common/utils/platform';

export const Container = styled.View``;

export const RowButtonOrder = styled.Pressable`
  flex-direction: row;
  align-items: center;
  border-radius: ${({theme}) => (isIOS ? theme.borders.radius.small : 0)}px;
`;
export const ContentButtonOrder = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => (isIOS ? 0 : theme.spacing.sm)}px;
  background-color: ${({theme}) =>
    isIOS ? 'transparent' : theme.colors.surface};
`;
