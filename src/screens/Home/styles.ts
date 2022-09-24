import styled from 'styled-components/native';
import imgLogo from '../../assets/imgs/logo.png';

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
  source: imgLogo,
})`
  width: 100px;
`;

export const List = styled.FlatList.attrs({
  columnWrapperStyle: {justifyContent: 'space-between'},
})``;
