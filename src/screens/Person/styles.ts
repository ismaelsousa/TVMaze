import styled from 'styled-components/native';
import Text from '../../common/components/Text';

export const Content = styled.SafeAreaView`
  flex: 1;
  margin: ${({theme}) => theme.spacing.md}px;
`;

export const Name = styled(Text)`
  align-self: center;
`;
