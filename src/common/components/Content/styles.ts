import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: ${({theme}) => theme.spacing.md}px;
  margin-right: ${({theme}) => theme.spacing.md}px;
`;
