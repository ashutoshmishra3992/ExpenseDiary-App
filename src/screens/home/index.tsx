import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { 
  getThemeColors, 
  COLORS,
  TEXT_STYLES,
  getButtonAccessibilityProps,
  SEMANTIC_COLORS 
} from '../../theme';
import { cacheStore } from '../../store/cache/cacheStore';
import { CACHE_KEYS } from '../../store/cache/constants';
import Screens from '../../navigations/Screens';
import { styles } from './styles';

interface HomeScreenProps {
  isDarkMode?: boolean;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ isDarkMode = false }) => {
  const navigation = useNavigation();
  const colors = getThemeColors(isDarkMode);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            try {
              // Clear the access token
              cacheStore.delete(CACHE_KEYS.ACCESS_TOKEN);
              // Navigate back to splash (which will redirect to auth)
              navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: Screens.SPLASH }],
              }));
            } catch (error) {
              console.error('Error during logout:', error);
              // Fallback navigation
              navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: Screens.AUTH }],
              }));
            }
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background.primary }]}>
      <View style={styles.content}>
        <Text style={[
          TEXT_STYLES.h1,
          styles.title,
          { color: colors.text.primary }
        ]}>
          Welcome to Expense Diary
        </Text>
        
        <Text style={[
          TEXT_STYLES.bodyLarge,
          styles.subtitle,
          { color: colors.text.secondary }
        ]}>
          You have successfully logged in!
        </Text>

        <Text style={[
          TEXT_STYLES.bodyMedium,
          styles.description,
          { color: colors.text.tertiary }
        ]}>
          This is a placeholder home screen. Your expense tracking features would go here.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.logoutButton,
            { 
              backgroundColor: SEMANTIC_COLORS.error,
              borderColor: SEMANTIC_COLORS.error 
            }
          ]}
          onPress={handleLogout}
          {...getButtonAccessibilityProps('Logout')}
        >
          <Text style={[
            TEXT_STYLES.button,
            { color: COLORS.common.white }
          ]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;