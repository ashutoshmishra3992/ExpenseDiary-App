// Theme utilities and helper functions
// Advanced theme management and validation

import { Dimensions } from 'react-native';
import { COLORS, getThemeColors } from './colors';
import { BREAKPOINTS, SPACING } from './spacing';

// Get device dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Device type detection
export const DEVICE_TYPES = {
  PHONE: 'phone',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
} as const;

export type DeviceType = typeof DEVICE_TYPES[keyof typeof DEVICE_TYPES];

// Responsive helpers
export const getDeviceType = (): DeviceType => {
  if (screenWidth < BREAKPOINTS.md) return DEVICE_TYPES.PHONE;
  if (screenWidth < BREAKPOINTS.xl) return DEVICE_TYPES.TABLET;
  return DEVICE_TYPES.DESKTOP;
};

export const isTablet = (): boolean => getDeviceType() === DEVICE_TYPES.TABLET;
export const isPhone = (): boolean => getDeviceType() === DEVICE_TYPES.PHONE;
export const isDesktop = (): boolean => getDeviceType() === DEVICE_TYPES.DESKTOP;

// Responsive spacing based on device type
export const getResponsiveSpacing = (
  phone: keyof typeof SPACING,
  tablet?: keyof typeof SPACING,
  desktop?: keyof typeof SPACING
) => {
  const deviceType = getDeviceType();
  
  if (deviceType === DEVICE_TYPES.DESKTOP && desktop) {
    return SPACING[desktop];
  }
  if (deviceType === DEVICE_TYPES.TABLET && tablet) {
    return SPACING[tablet];
  }
  return SPACING[phone];
};

// Responsive padding helper
export const getResponsivePadding = (
  phone: keyof typeof SPACING,
  tablet?: keyof typeof SPACING,
  desktop?: keyof typeof SPACING
) => ({
  padding: getResponsiveSpacing(phone, tablet, desktop),
});

// Theme validation
export const validateThemeColors = (isDark: boolean = false) => {
  const colors = getThemeColors(isDark);
  const requiredKeys = ['primary', 'secondary', 'background', 'text', 'border'];
  
  return requiredKeys.every(key => key in colors);
};

// Color accessibility helpers
export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation
  // In a real app, you'd use a proper color library
  const getLuminance = (color: string): number => {
    // Remove # if present
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

export const isAccessibleContrast = (foreground: string, background: string): boolean => {
  return getContrastRatio(foreground, background) >= 4.5; // WCAG AA standard
};

// Theme context helpers
export interface ThemeContextValue {
  isDark: boolean;
  colors: ReturnType<typeof getThemeColors>;
  deviceType: DeviceType;
  toggleTheme: () => void;
}

// Safe area helpers
export const getSafeAreaSpacing = () => ({
  paddingTop: SPACING.lg,
  paddingBottom: SPACING.lg,
  paddingHorizontal: SPACING.xl,
});

// Animation duration constants
export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  theme: 300, // For theme transitions
} as const;

// Theme transition helpers
export const getThemeTransition = () => ({
  duration: ANIMATION_DURATIONS.theme,
  useNativeDriver: false,
});

// Z-index scale for consistent layering
export const Z_INDEX = {
  background: -1,
  default: 0,
  content: 1,
  navigation: 10,
  overlay: 100,
  modal: 1000,
  tooltip: 1100,
  toast: 1200,
} as const;

// Screen dimension helpers
export const SCREEN_DIMENSIONS = {
  width: screenWidth,
  height: screenHeight,
  isLandscape: screenWidth > screenHeight,
  isPortrait: screenHeight > screenWidth,
} as const;

// Component size helpers based on screen size
export const getComponentSize = (baseSize: number, scaleFactor: number = 1): number => {
  const deviceType = getDeviceType();
  
  switch (deviceType) {
    case DEVICE_TYPES.TABLET:
      return baseSize * 1.2 * scaleFactor;
    case DEVICE_TYPES.DESKTOP:
      return baseSize * 1.4 * scaleFactor;
    default:
      return baseSize * scaleFactor;
  }
};

// Export commonly used theme utilities as a single object
export const themeUtils = {
  getDeviceType,
  isTablet,
  isPhone,
  isDesktop,
  getResponsiveSpacing,
  getResponsivePadding,
  validateThemeColors,
  isAccessibleContrast,
  getSafeAreaSpacing,
  getComponentSize,
  SCREEN_DIMENSIONS,
  Z_INDEX,
  ANIMATION_DURATIONS,
};