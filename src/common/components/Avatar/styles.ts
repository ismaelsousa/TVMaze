import styled from 'styled-components/native';
import Icon from '../Icon';
import {AvatarProps} from './types';

export const Container = styled.Image<Partial<AvatarProps>>`
  width: ${({size}) => (size === 'large' ? 150 : 70)}px;
  height: ${({size}) => (size === 'large' ? 150 : 70)}px;
  border-radius: ${({size}) => (size === 'large' ? 75 : 35)}px;
  background-color: ${({theme}) => theme.colors.surface};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AbsoluteIcon = styled(Icon)`
  position: absolute;
`;
