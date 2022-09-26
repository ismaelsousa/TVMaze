import React, {useCallback, useEffect} from 'react';
import Container from '../../common/components/Container';

import PINCode, {
  resetPinCodeInternalStates,
} from '@haskkor/react-native-pincode';
import {useTheme} from 'styled-components/native';
import {Content, SkipText, styles} from './styles';
import useMyNavigation from '../../common/hooks/useMyNavigation';
import usePinLockerController from './pin.locker.controller';
import {Alert} from 'react-native';

const PinLockerView: React.FC = () => {
  const {colors} = useTheme();
  const {canGoBack, replace, goBack} = useMyNavigation();

  const {loading, pinStatus, setToNotAskToSetPinAgain, shouldNavigate} =
    usePinLockerController();

  /**
   * Callbacks
   */
  const handleNavigate = useCallback(async () => {
    try {
      await resetPinCodeInternalStates();
      if (canGoBack()) {
        goBack();
      } else {
        replace('BottomTab');
      }
    } catch (error) {}
  }, [canGoBack, goBack, replace]);

  /**
   * Effects
   */
  useEffect(() => {
    if (shouldNavigate) {
      handleNavigate();
    }
  }, [shouldNavigate, handleNavigate]);

  if (loading || shouldNavigate) {
    return <Container />;
  }

  return (
    <Container>
      <Content>
        <PINCode
          // styleMainContainer={{backgroundColor: 'red'}}
          touchIDDisabled={true}
          key={'pin'}
          status={pinStatus}
          finishProcess={handleNavigate}
          numbersButtonOverlayColor={colors.brand /** When pressed */}
          stylePinCodeButtonCircle={{backgroundColor: colors.surface}}
          stylePinCodeTextTitle={styles.fontWeightBold}
          stylePinCodeTextSubtitle={styles.fontWeightBold}
          stylePinCodeColorSubtitle={colors.caption}
          stylePinCodeColorTitle={colors.brand}
          stylePinCodeButtonNumber={colors.onSecondary}
          stylePinCodeButtonNumberPressed={colors.onSecondary}
          colorPassword={colors.brand}
          styleLockScreenTitle={[
            styles.styleLockScreenTitle,
            {
              color: colors.onSecondary,
            },
          ]}
          styleLockScreenTextTimer={{
            color: colors.brand,
          }}
          styleLockScreenViewTimer={[
            styles.styleLockScreenViewTimer,
            {
              borderColor: colors.brand,
            },
          ]}
          timeLocked={60_000}
          styleLockScreenText={{color: colors.caption}}
          styleLockScreenMainContainer={{backgroundColor: colors.secondary}}
          buttonComponentLockedPage={() => null}
        />
        {pinStatus === 'choose' && (
          <SkipText
            color="brand"
            size={16}
            onPress={() =>
              Alert.alert(
                '🚧 Are you sure?',
                'This prevents unauthorized access.',
                [
                  {text: 'cancel'},
                  {onPress: setToNotAskToSetPinAgain, text: 'proceed'},
                ],
              )
            }>
            Skip
          </SkipText>
        )}
      </Content>
    </Container>
  );
};

export default PinLockerView;
