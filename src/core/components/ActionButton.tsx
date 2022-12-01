import React, {useCallback} from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Theme} from '../themes/theme.interface';
import useThemeAwareObject from '../hooks/theme/ThemeAwareObject.hook';

interface LoginButtonProps {
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  buttonContainerStyle?: ViewStyle;
  children?: React.ReactNode;
}

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.palette.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ActionButton: React.FC<LoginButtonProps> = ({
  onPress,
  onPressIn,
  onPressOut,
  buttonContainerStyle,
  children,
}) => {
  const styles = useThemeAwareObject(createStyles);
  const pressed = useSharedValue<boolean>(false);
  const dynamicStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(interpolate(+pressed.value, [0, 1], [1, 0.95]), {
            duration: 100,
            easing: Easing.ease,
          }),
        },
      ],
    };
  });
  const onButtonPress = useCallback(() => {
    return onPress();
  }, [onPress]);
  const onPressInCallback = useCallback(() => {
    pressed.value = true;
    onPressIn && onPressIn();
  }, [pressed, onPressIn]);
  const onPressOutCallback = useCallback(() => {
    pressed.value = false;
    onPressOut && onPressOut();
  }, [pressed, onPressOut]);
  return (
    <AnimatedPressable
      onPress={onButtonPress}
      onPressOut={onPressOutCallback}
      onPressIn={onPressInCallback}
      style={[styles.button, buttonContainerStyle, dynamicStyles]}
      entering={FadeInDown}>
      {children}
    </AnimatedPressable>
  );
};

export default ActionButton;
