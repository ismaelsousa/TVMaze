import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';
import Content from '../../common/components/Content';
import Cover from '../../common/components/Cover';
import Icon from '../../common/components/Icon';
import Input from '../../common/components/Input';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useMyNavigation from '../../common/hooks/useMyNavigation';
import {flatListStyleSheet} from '../../common/utils/flatlist';
import useSearchController from './search.controller';
import {ContentButtonFilter, RowButtonFilter, TextButtonFilter} from './styles';

const SearchView: React.FC = () => {
  const {navigate} = useMyNavigation();
  const {spacing, colors} = useTheme();

  const {
    searchText,
    setSearchText,
    shows,
    loading,
    people,
    searchType,
    setSearchType,
  } = useSearchController();

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <RowButtonFilter
            active={searchType === 'shows'}
            onPress={() => setSearchType('shows')}>
            <ContentButtonFilter>
              <TextButtonFilter
                active={searchType === 'shows'}
                color={searchType === 'shows' ? 'onSecondary' : 'caption'}
                size={16}>
                Series
              </TextButtonFilter>
            </ContentButtonFilter>
          </RowButtonFilter>
          <RowButtonFilter
            active={searchType === 'people'}
            onPress={() => setSearchType('people')}>
            <ContentButtonFilter>
              <TextButtonFilter
                active={searchType === 'people'}
                color={searchType === 'people' ? 'onSecondary' : 'caption'}
                size={16}>
                People
              </TextButtonFilter>
            </ContentButtonFilter>
          </RowButtonFilter>
        </View>
        {searchType === 'shows' ? (
          <FlatList
            data={shows}
            numColumns={2}
            columnWrapperStyle={[
              flatListStyleSheet.columnWrapperStyle,
              {paddingTop: spacing.md},
            ]}
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
        ) : (
          <View />
        )}
      </Content>
    </Container>
  );
};

export default SearchView;
