import {useNavigation} from '@react-navigation/native';

const useMyNavigation = () => {
  const navigation = useNavigation<RoutesStackNavigationProp>();
  return navigation;
};

export default useMyNavigation;
