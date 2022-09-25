import styled from 'styled-components/native';
import Text from '../../common/components/Text';
import {isIOS} from '../../common/utils/platform';

export const Container = styled.View``;

export const RowButtonFilter = styled.Pressable<{active: boolean}>`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme, active}) =>
    active ? theme.colors.brand : theme.colors.caption};
  flex: 1;
  justify-content: center;
`;
export const ContentButtonFilter = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${({theme}) => (isIOS ? 0 : theme.spacing.sm)}px;
  padding-bottom: ${({theme}) => (isIOS ? 0 : theme.spacing.sm)}px;
`;

export const TextButtonFilter = styled(Text)<{active: boolean}>``;

export const RowPerson = styled.Pressable`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;
export const RowPersonName = styled.View`
  flex: 1;
`;
