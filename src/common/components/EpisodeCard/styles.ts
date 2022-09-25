import styled from 'styled-components/native';
import {EpisodeCardProps} from './types';

export const Container = styled.Image<Partial<EpisodeCardProps>>`
  width: ${({size}) =>
    size === 'small' ? 100 : size === 'medium' ? 200 : 300}px;
`;
