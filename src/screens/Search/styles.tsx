import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
  flex: 1;
  margin-left: ${({theme}) => theme.spacing.md}px;
  margin-right: ${({theme}) => theme.spacing.md}px;
`;

export const styleSheet = StyleSheet.create({
  columnWrapperStyle: {justifyContent: 'space-between'},
});
