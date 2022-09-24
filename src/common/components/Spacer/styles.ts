import styled from 'styled-components/native';
import {SpaceProps} from './types';

export const Container = styled.View<SpaceProps>`
  ${({height}) => !!height && `height: ${height}px;`}
  ${({width}) => !!width && `width: ${width}px;`}
`;
