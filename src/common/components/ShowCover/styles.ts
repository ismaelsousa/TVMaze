import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;

export const ShowCoverImage = styled.Image<{hasBackground: boolean}>`
  background-color: ${({hasBackground, theme}) =>
    hasBackground ? theme.colors.surface : 'transparent'};
  border-radius: ${({theme}) =>
    Platform.OS === 'ios' ? theme.borders.radius.small : 0}px;
`;

export const IconAbsolute = styled.View`
  position: absolute;
`;
export const CenterIconAndImage = styled.View`
  justify-content: center;
  align-items: center;
`;
