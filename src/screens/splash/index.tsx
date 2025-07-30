import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withDelay,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import { 
  getThemeColors, 
  COLORS, 
  TEXT_STYLES,
  ANIMATION_DURATIONS,
  themeUtils,
  getButtonAccessibilityProps 
} from '../../theme';
import { styles } from './styles';
import AppLogo from '../../components/AppLogo';
import { cacheStore } from '../../store/cache/cacheStore';
import { CACHE_KEYS } from '../../store/cache/constants';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Screens from '../../navigations/Screens';

// Use theme utilities for screen dimensions

interface SplashScreenProps {
  isDarkMode?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  isDarkMode = false 
}) => {
  const navigation = useNavigation();

  // Reanimated shared values
  const fadeValue = useSharedValue(0);
  const scaleValue = useSharedValue(0.8);
  const slideValue = useSharedValue(30);
  const logoRotateValue = useSharedValue(0);
  const loadingProgress = useSharedValue(0);

  const colors = getThemeColors(isDarkMode);

  // Animation complete callback
  const handleAnimationComplete = useCallback(() => {
    try {
      const accessToken = cacheStore.getString(CACHE_KEYS.ACCESS_TOKEN);
      if (accessToken) {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: Screens.HOME }],
        }));
      } else {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: Screens.AUTH }],
        }));
      }
    } catch (error) {
      console.error('Error during navigation:', error);
      // Fallback to auth screen
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: Screens.AUTH }],
      }));
    }
  }, [navigation]);

  useEffect(() => {
    // Start animations sequence
    // Initial fade and logo animations
    fadeValue.value = withTiming(1, { 
      duration: ANIMATION_DURATIONS.slow,
      easing: Easing.out(Easing.cubic),
    });
    
    scaleValue.value = withSpring(1, {
      damping: 15,
      stiffness: 150,
      mass: 1,
    });
    
    logoRotateValue.value = withTiming(1, {
      duration: ANIMATION_DURATIONS.slow * 2,
      easing: Easing.out(Easing.cubic),
    });

    // Text slide up animation with delay
    slideValue.value = withDelay(ANIMATION_DURATIONS.normal, withTiming(0, {
      duration: ANIMATION_DURATIONS.normal * 2,
      easing: Easing.out(Easing.cubic),
    }));

    // Loading progress animation
    loadingProgress.value = withDelay(ANIMATION_DURATIONS.slow, withTiming(1, {
      duration: ANIMATION_DURATIONS.slow * 2.4,
      easing: Easing.out(Easing.cubic),
    }));

    // Complete animation after total duration
    const totalDuration = ANIMATION_DURATIONS.slow * 5; // 2.5 seconds
    const timer = setTimeout(() => {
      handleAnimationComplete();
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  // Animated styles
  const fadeAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeValue.value,
  }));

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeValue.value,
    transform: [
      { scale: scaleValue.value },
      { 
        rotate: `${interpolate(
          logoRotateValue.value,
          [0, 1],
          [0, 360]
        )}deg` 
      }
    ],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeValue.value,
    transform: [
      { 
        translateY: interpolate(
          slideValue.value,
          [30, 0],
          [30, 0]
        )
      }
    ],
  }));

  const circle1AnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      fadeValue.value,
      [0, 1],
      [0, 0.8]
    ),
  }));

  const circle2AnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      fadeValue.value,
      [0, 1],
      [0, 0.6]
    ),
  }));

  const loadingBarAnimatedStyle = useAnimatedStyle(() => ({
    width: `${interpolate(
      loadingProgress.value,
      [0, 1],
      [20, 100]
    )}%`,
  }));

  const loadingContainerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      fadeValue.value,
      [0, 0.5, 1],
      [0, 0, 1]
    ),
  }));

  return (
    <View 
      style={[styles.container, { backgroundColor: colors.background.primary }]}
      accessible={true}
      accessibilityRole="none"
      accessibilityLabel="Expense Diary splash screen"
    >
      {/* Background Gradient Effect */}
      <Animated.View 
        style={[
          styles.gradientOverlay, 
          fadeAnimatedStyle,
          {
            backgroundColor: isDarkMode 
              ? colors.primary[500] + '1A' // 10% opacity 
              : colors.primary[500] + '0D' // 5% opacity
          }
        ]} 
      />
      
      {/* Animated circles for visual interest */}
      <Animated.View 
        style={[
          styles.backgroundCircle,
          styles.circle1,
          circle1AnimatedStyle,
          { 
            backgroundColor: isDarkMode 
              ? colors.secondary[400] + '1A' // 10% opacity
              : colors.secondary[600] + '1A' // 10% opacity
          }
        ]} 
      />
      <Animated.View 
        style={[
          styles.backgroundCircle,
          styles.circle2,
          circle2AnimatedStyle,
          { 
            backgroundColor: isDarkMode 
              ? colors.financial.income + '1A' // 10% opacity
              : colors.financial.income + '1A' // 10% opacity
          }
        ]} 
      />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Logo/Icon Section */}
        <Animated.View 
          style={[
            styles.logoContainer,
            logoAnimatedStyle,
          ]}
        >
          <View style={[styles.logoIcon, {
            backgroundColor: colors.primary[500],
            shadowColor: colors.primary[500],
          }]}>
            <AppLogo 
              width={80}
              height={80}
              color={COLORS.common.white}
            />
          </View>
        </Animated.View>

        {/* App Name and Tagline */}
        <Animated.View 
          style={[
            styles.textContainer,
            textAnimatedStyle,
          ]}
        >
          <Text 
            style={[
              TEXT_STYLES.h1,
              styles.appName,
              { color: colors.text.primary }
            ]}
            accessible={true}
            accessibilityRole="header"
            accessibilityLabel="Expense Diary app name"
          >
            Expense Diary
          </Text>
          
          <Text 
            style={[
              TEXT_STYLES.bodyLarge,
              styles.tagline,
              { color: colors.text.secondary }
            ]}
            accessible={true}
            accessibilityLabel="App tagline: Track, Save, Grow"
          >
            Track, Save, Grow
          </Text>
        </Animated.View>
      </View>

      {/* Footer */}
      <Animated.View 
        style={[
          styles.footer,
          fadeAnimatedStyle,
        ]}
      >
        <Text 
          style={[
            TEXT_STYLES.caption,
            { color: colors.text.tertiary }
          ]}
          accessible={true}
          accessibilityLabel="Your personal finance companion"
        >
          Your personal finance companion
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
