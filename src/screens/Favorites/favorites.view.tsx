import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';
import Content from '../../common/components/Content';
import Cover from '../../common/components/Cover';
import Icon from '../../common/components/Icon';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useMyNavigation from '../../common/hooks/useMyNavigation';
import {flatListStyleSheet} from '../../common/utils/flatlist';
import useFavoritesController from './favorites.controller';
import {ContentButtonOrder, RowButtonOrder} from './styles';

const FavoritesView: React.FC = () => {
  const {colors, spacing} = useTheme();
  const {navigate} = useMyNavigation();

  const {favoritesList, setSortedOrder, sortedOrder} = useFavoritesController();

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.secondary}
      />
      <Content>
        <Spacer height={spacing.md} />
        <Text color="onSecondary" size={spacing.lg}>
          Favorites
        </Text>
        <Spacer height={spacing.md} />

        <FlatList
          data={favoritesList}
          numColumns={2}
          columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          renderItem={({index, item}) => (
            <Cover
              key={index + item.id + item.name}
              url={item.image?.medium}
              title={item.name}
              onPress={() => navigate('Detail', {show: item})}
            />
          )}
          ListHeaderComponent={() => {
            return (
              <View>
                <RowButtonOrder
                  onPress={() =>
                    setSortedOrder(old => (old === 'asc' ? 'desc' : 'asc'))
                  }>
                  <ContentButtonOrder>
                    <Text color="caption" size={18}>
                      {sortedOrder === 'asc' ? 'A-Z' : 'Z-A'}
                    </Text>
                    <Spacer width={spacing.sm} />
                    <Icon icon={'menuDown'} color={colors.caption} />
                  </ContentButtonOrder>
                </RowButtonOrder>
                <Spacer height={spacing.md} />
              </View>
            );
          }}
          ListFooterComponent={() => {
            //TODO: Handle when there is no result
            return <Spacer height={spacing.md} />;
          }}
        />
      </Content>
    </Container>
  );
};

export default FavoritesView;
