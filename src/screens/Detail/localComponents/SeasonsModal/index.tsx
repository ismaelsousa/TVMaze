import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Spacer from '../../../../common/components/Spacer';
import Text from '../../../../common/components/Text';

import {Content, List, Modal} from './styles';
import {SeasonsModalProps} from './types';

const SeasonsModal = ({
  visible,
  seasons,
  setVisible,
  selectedSeason,
  setSelectedSeason,
}: SeasonsModalProps) => {
  const {spacing} = useTheme();

  return (
    <Modal transparent visible={visible}>
      <Content>
        <List>
          {seasons.map(season => {
            const isTheSelected = selectedSeason?.id === season.id;
            return (
              <View key={season.id + 'select season'}>
                <Spacer height={spacing.md} />
                <Text
                  onPress={() => {
                    setVisible(false);
                    setSelectedSeason(season);
                  }}
                  color={isTheSelected ? 'onSecondary' : 'caption'}
                  size={isTheSelected ? 24 : 20}>
                  Season {season.number}
                </Text>
              </View>
            );
          })}
        </List>
      </Content>
    </Modal>
  );
};

export default SeasonsModal;
