import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../../../core/themes/theme.interface';
import useThemeAwareObject from '../../../../core/hooks/theme/ThemeAwareObject.hook';
import ActionButton from '../../../../core/components/ActionButton';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    sav: {
      backgroundColor: theme.palette.background,
      flex: 1,
    },
    text: {
      color: theme.palette.primaryText,
    },
  });
};

const StartScreen: React.FC = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <SafeAreaView style={styles.sav}>
      <View style={staticStyles.headerBox}>
        <Text style={[staticStyles.headerText, styles.text]}>Welcome!</Text>
      </View>
      <View style={staticStyles.mainBox}>
        <ActionButton
          onPress={() => {
            console.log('Pressed');
          }}
          buttonContainerStyle={staticStyles.loginButton}>
          <Text style={styles.text}>Log In</Text>
        </ActionButton>
        <ActionButton
          onPress={() => {
            console.log('Pressed');
          }}
          buttonContainerStyle={staticStyles.loginButton}>
          <Text style={styles.text}>Sign Up</Text>
        </ActionButton>
      </View>
      <View style={staticStyles.footerBox}>
        <ActionButton
          onPress={() => {}}
          buttonContainerStyle={staticStyles.footerButton}>
          <Text style={[staticStyles.footerText, styles.text]}>
            Continue without account
          </Text>
        </ActionButton>
      </View>
    </SafeAreaView>
  );
};

const staticStyles = StyleSheet.create({
  headerBox: {
    alignItems: 'center',
    paddingTop: '15%',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 24,
  },
  mainBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBox: {
    alignItems: 'center',
  },
  footerText: {
    textDecorationLine: 'underline',
  },
  footerButton: {
    backgroundColor: 'transparent',
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    width: '50%',
  },
});
export default StartScreen;
