import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
  flex: 1;
  margin-left: ${({theme}) => theme.spacing.md}px;
  margin-right: ${({theme}) => theme.spacing.md}px;
`;

export const SearchList = styled.FlatList.attrs({
  columnWrapperStyle: {justifyContent: 'space-between'},
})``;
