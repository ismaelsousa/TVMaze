import styled from 'styled-components/native';
import {Props} from './types';

export const Container = styled.Text<Partial<Props>>`
  color: ${({theme, color}) => theme.colors[color || 'onSecondary']};
  font-size: ${({size}) => size}px;
`;
