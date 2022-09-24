import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
  font-size: 14px;
  padding: ${({theme}) =>
    Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
  border-radius: ${({theme}) => theme.borders.radius.small}px;
  background-color: ${({theme}) => theme.colors.surface};
  color: ${({theme}) => theme.colors.caption};
  padding-left: ${Platform.OS === 'ios' ? '35px' : '50px'};
  padding-right: ${Platform.OS === 'ios' ? '35px' : '50px'};
`;

export const Content = styled.View`
  justify-content: center;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: ${({theme}) =>
    Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
`;

export const AbsoluteLoading = styled.View`
  position: absolute;
  right: ${({theme}) =>
    Platform.OS === 'ios' ? theme.spacing.sm : theme.spacing.md}px;
`;
