import styled from 'styled-components/native';
import Icon from '../Icon';

export const Container = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${({theme}) => theme.colors.surface};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AbsoluteIcon = styled(Icon)`
  position: absolute;
`;
