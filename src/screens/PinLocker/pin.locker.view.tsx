import React, {useCallback, useEffect} from 'react';
import Container from '../../common/components/Container';

import PINCode, {
  resetPinCodeInternalStates,
} from '@haskkor/react-native-pincode';
import {useTheme} from 'styled-components/native';
import {SkipText, styles} from './styles';
import useMyNavigation from '../../common/hooks/useMyNavigation';
import usePinLockerController from './pin.locker.controller';

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
      <PINCode
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
        <SkipText color="brand" size={16} onPress={setToNotAskToSetPinAgain}>
          Skip
        </SkipText>
      )}
      {/**
       * //TODO: add a radio button to not ask to enter pin code again next time
       */}
    </Container>
  );
};

export default PinLockerView;
