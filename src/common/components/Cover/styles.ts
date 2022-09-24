import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;

export const CoverImage = styled.Image`
  border-radius: ${({theme}) =>
    Platform.OS === 'ios' ? theme.borders.radius.small : 0}px;
`;
