import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Avatar from '../../common/components/Avatar';
import BackButton from '../../common/components/BackButton';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useMyNavigation from '../../common/hooks/useMyNavigation';
import {flatListStyleSheet} from '../../common/utils/flatlist';
import usePersonController from './person.controller';

import {Content, Name} from './styles';

const PersonView: React.FC = () => {
  const {
    params: {person},
  } = useRoute<PersonRouteProp>();
  const {goBack, navigate} = useMyNavigation();
  const {spacing} = useTheme();

  const {castCredits} = usePersonController({person});

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <BackButton onPress={goBack} />
        <Spacer height={spacing.lg} />
        <FlatList
          key={'list-shows'}
          data={castCredits}
          numColumns={2}
          columnWrapperStyle={[flatListStyleSheet.columnWrapperStyle]}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          renderItem={({index, item}) => (
            <Cover
              key={index + item._embedded.show.id + item._embedded.show.name}
              url={item._embedded.show.image?.medium}
              title={item._embedded.show.name}
              onPress={() => navigate('Detail', {show: item._embedded.show})}
            />
          )}
          ListHeaderComponent={() => {
            return (
              <>
                <Avatar
                  size="large"
                  url={person.image?.medium}
                  name={person.name}
                />
                <Spacer height={spacing.md} />
                <Name color="onSecondary" size={24}>
                  {person.name}
                </Name>
                <Spacer height={spacing.lg} />
                {castCredits.length > 0 && (
                  <View>
                    <Text color="caption" size={16}>
                      Cast Credits
                    </Text>
                    <Spacer height={spacing.md} />
                  </View>
                )}
              </>
            );
          }}
          ListFooterComponent={() => {
            return <Spacer height={spacing.md} />;
          }}
        />
      </Content>
    </Container>
  );
};

export default PersonView;
