import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Text from '../../common/components/Text';

export const styles = StyleSheet.create({
  fontWeightBold: {
    fontWeight: 'bold',
  },
  styleLockScreenTitle: {
    opacity: 1,
  },
  styleLockScreenViewTimer: {
    borderWidth: 1.5,
  },
});

export const SkipText = styled(Text)`
  position: absolute;
  bottom: 50px;
  align-self: center;
`;
