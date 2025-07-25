import React, { useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
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
import { getThemeColors, COLORS } from '../../theme/colors';
import { TEXT_STYLES } from '../../theme/typography';
import { styles } from './styles';
import AppLogo from '../../components/AppLogo';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onAnimationComplete?: () => void;
  isDarkMode?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  onAnimationComplete,
  isDarkMode = false 
}) => {
  // Reanimated shared values
  const fadeValue = useSharedValue(0);
  const scaleValue = useSharedValue(0.8);
  const slideValue = useSharedValue(30);
  const logoRotateValue = useSharedValue(0);
  const loadingProgress = useSharedValue(0);

  const colors = getThemeColors(isDarkMode);

  // Animation complete callback
  const handleAnimationComplete = () => {
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  useEffect(() => {
    // Start animations sequence
    // Initial fade and logo animations
    fadeValue.value = withTiming(1, { 
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
    
    scaleValue.value = withSpring(1, {
      damping: 15,
      stiffness: 150,
      mass: 1,
    });
    
    logoRotateValue.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.cubic),
    });

    // Text slide up animation with delay
    slideValue.value = withDelay(400, withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));

    // Loading progress animation
    loadingProgress.value = withDelay(800, withTiming(1, {
      duration: 1200,
      easing: Easing.out(Easing.cubic),
    }));

    // Complete animation after total duration
    const totalDuration = 2500; // 2.5 seconds
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
    <View style={[styles.container, { backgroundColor: colors.background.primary }]}>
      {/* Background Gradient Effect */}
      <Animated.View 
        style={[
          styles.gradientOverlay, 
          fadeAnimatedStyle,
          {
            backgroundColor: isDarkMode 
              ? 'rgba(99, 179, 237, 0.1)' 
              : 'rgba(49, 130, 206, 0.05)'
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
              ? 'rgba(167, 139, 250, 0.1)' 
              : 'rgba(124, 58, 237, 0.1)' 
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
              ? 'rgba(52, 211, 153, 0.1)' 
              : 'rgba(5, 150, 105, 0.1)' 
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
          <Text style={[
            TEXT_STYLES.h1,
            styles.appName,
            { color: colors.text.primary }
          ]}>
            Expense Diary
          </Text>
          
          <Text style={[
            TEXT_STYLES.bodyLarge,
            styles.tagline,
            { color: colors.text.secondary }
          ]}>
            Track, Save, Grow
          </Text>
          
          <View style={styles.featureContainer}>
            <View style={styles.featureRow}>
              <View style={[styles.featureDot, { backgroundColor: colors.financial.income }]} />
              <Text style={[TEXT_STYLES.bodySmall, { color: colors.text.tertiary }]}>
                Smart Expense Tracking
              </Text>
            </View>
            <View style={styles.featureRow}>
              <View style={[styles.featureDot, { backgroundColor: colors.financial.savings }]} />
              <Text style={[TEXT_STYLES.bodySmall, { color: colors.text.tertiary }]}>
                Budget Management
              </Text>
            </View>
            <View style={styles.featureRow}>
              <View style={[styles.featureDot, { backgroundColor: colors.financial.investment }]} />
              <Text style={[TEXT_STYLES.bodySmall, { color: colors.text.tertiary }]}>
                Financial Insights
              </Text>
            </View>
          </View>
        </Animated.View>

        {/* Loading Indicator */}
        <Animated.View 
          style={[
            styles.loadingContainer,
            loadingContainerAnimatedStyle,
          ]}
        >
          <View style={styles.loadingBar}>
            <Animated.View 
              style={[
                styles.loadingProgress,
                loadingBarAnimatedStyle,
                { 
                  backgroundColor: colors.primary[500],
                }
              ]} 
            />
          </View>
          <Text style={[
            TEXT_STYLES.caption,
            styles.loadingText,
            { color: colors.text.tertiary }
          ]}>
            Loading your financial dashboard...
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
        <Text style={[
          TEXT_STYLES.caption,
          { color: colors.text.tertiary }
        ]}>
          Your personal finance companion
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
