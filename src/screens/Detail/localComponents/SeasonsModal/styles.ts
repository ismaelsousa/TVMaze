import styled from 'styled-components/native';

export const Modal = styled.Modal`
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const List = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})`
  flex: 1;
`;
