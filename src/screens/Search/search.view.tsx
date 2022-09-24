import React from 'react';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';
import Input from '../../common/components/Input';
import Spacer from '../../common/components/Spacer';
import Text from '../../common/components/Text';
import useSearchController from './search.controller';
import {Content} from './styles';

// import {Container} from './styles'

const SearchView: React.FC = () => {
  const {spacing} = useTheme();

  const {searchText, setSearchText} = useSearchController();

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
          onSubmitEditing={() => {
            //TODO: Implement search
          }}
        />
      </Content>
    </Container>
  );
};

export default SearchView;
