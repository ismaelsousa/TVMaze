import React from 'react';
import {FlatList} from 'react-native';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';
import Content from '../../common/components/Content';
import Cover from '../../common/components/Cover';
import Input from '../../common/components/Input';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useMyNavigation from '../../common/hooks/useMyNavigation';
import {flatListStyleSheet} from '../../common/utils/flatlist';
import useSearchController from './search.controller';

const SearchView: React.FC = () => {
  const {navigate} = useMyNavigation();
  const {spacing} = useTheme();

  const {searchText, setSearchText, shows, loading} = useSearchController();

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <Text color="onSecondary" size={spacing.lg}>
          Search
        </Text>
        <Spacer height={spacing.md} />
        <Input
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="done"
          loading={loading}
        />
        <Spacer height={spacing.md} />
        <FlatList
          data={shows}
          numColumns={2}
          columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          renderItem={({index, item}) => (
            <Cover
              key={index + item.show.id + item.show.name}
              url={item.show.image?.medium}
              title={item.show.name}
              onPress={() => navigate('Detail', {show: item.show})}
            />
          )}
          ListFooterComponent={() => {
            //TODO: Handle when there is no result
            return <Spacer height={spacing.md} />;
          }}
        />
      </Content>
    </Container>
  );
};

export default SearchView;
