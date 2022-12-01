import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text} from 'react-native';
import {Theme} from '../../../../core/themes/theme.interface';
import useThemeAwareObject from '../../../../core/hooks/theme/ThemeAwareObject.hook';
import ActionButton from '../../../../core/components/ActionButton';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    sav: {
      backgroundColor: theme.palette.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.palette.primaryText,
    },
  });
};

const LoginScreen: React.FC = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <SafeAreaView style={styles.sav}>
      <Text style={styles.text}>Welcome!</Text>
      <ActionButton
        onPress={() => {
          console.log('Pressed');
        }}
        buttonContainerStyle={staticStyles.loginButton}>
        <Text>Login</Text>
      </ActionButton>
      <ActionButton
        onPress={() => {
          console.log('Pressed');
        }}
        buttonContainerStyle={staticStyles.loginButton}>
        <Text>Sign Up</Text>
      </ActionButton>
    </SafeAreaView>
  );
};

const staticStyles = StyleSheet.create({
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    width: '50%',
  },
});
export default LoginScreen;
