import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
  flex: 1;
  margin: ${({theme}) => theme.spacing.md}px;
`;

export const RowCover = styled.View`
  flex-direction: row;
`;
