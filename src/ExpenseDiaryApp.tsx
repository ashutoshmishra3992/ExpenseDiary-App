import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getThemeColors } from './theme/colors';
import { FONTS, FONT_WEIGHTS } from './theme/typography';
import RootStack from './navigations/RootStack.tsx';

const ExpenseDiaryApp = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = getThemeColors(isDarkMode);

  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background.primary}
        translucent={false}
      />
      <NavigationContainer
        theme={{
          dark: isDarkMode,
          colors: {
            primary: colors.primary[500],
            background: colors.background.primary,
            card: colors.background.card,
            text: colors.text.primary,
            border: colors.border.light,
            notification: colors.status.error,
          },
          fonts: {
            regular: {
              fontFamily: FONTS.OPEN_SANS_REGULAR,
              fontWeight: FONT_WEIGHTS.regular,
            },
            medium: {
              fontFamily: FONTS.OPEN_SANS_MEDIUM,
              fontWeight: FONT_WEIGHTS.medium,
            },
            bold: {
              fontFamily: FONTS.OPEN_SANS_BOLD,
              fontWeight: FONT_WEIGHTS.bold,
            },
            heavy: {
              fontFamily: FONTS.OPEN_SANS_EXTRA_BOLD,
              fontWeight: FONT_WEIGHTS.extraBold,
            },
          },
        }}
      >
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ExpenseDiaryApp;
