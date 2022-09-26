import {useCallback, useEffect, useState} from 'react';
import {
  deleteUserPinCode,
  hasUserSetPinCode,
  resetPinCodeInternalStates,
} from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const KEY_TO_NOT_ASK_TO_SET_PIN_AGAIN = 'shouldSetPinCode';

const usePinLockerController = () => {
  const [pinStatus, setPinStatus] = useState<'choose' | 'enter' | 'locked'>(
    'enter',
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);
  const handleCheckPinCode = useCallback(async () => {
    try {
      setLoading(true);
      const hasPinCode = await hasUserSetPinCode();
      const shouldAksToSetPinCode = await AsyncStorage.getItem(
        KEY_TO_NOT_ASK_TO_SET_PIN_AGAIN,
      );
      if (shouldAksToSetPinCode === 'false') {
        // navigate to home
        setShouldNavigate(true);
        return;
      }

      if (hasPinCode) {
        setPinStatus('enter');
      } else {
        setPinStatus('choose');
      }
    } catch (error) {
      console.log('❌ ~ file: pin.lock.view.tsx ~ line 32 ~ error', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const setToNotAskToSetPinAgain = async () => {
    try {
      await deleteUserPinCode();
      await resetPinCodeInternalStates();
      await AsyncStorage.setItem(KEY_TO_NOT_ASK_TO_SET_PIN_AGAIN, 'false');
      setShouldNavigate(true);
    } catch (error) {
      Alert.alert('Oops', 'Something went wrong');
    }
  };

  useEffect(() => {
    handleCheckPinCode();
  }, [handleCheckPinCode]);

  return {
    setToNotAskToSetPinAgain,
    pinStatus,
    loading,
    shouldNavigate,
  };
};

export default usePinLockerController;
