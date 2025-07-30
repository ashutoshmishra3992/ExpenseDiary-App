// Common reusable style patterns for the Expense Diary App
// Consistent patterns used across multiple screens

import { StyleSheet } from 'react-native';
import { 
  SPACING, 
  BORDER_RADIUS, 
  SHADOWS, 
  Z_INDEX,
  ACCESSIBLE_BUTTON_STYLES,
  ACCESSIBLE_INPUT_STYLES,
  FONT_WEIGHTS,
  getResponsiveSpacing,
  getDeviceType,
  DEVICE_TYPES 
} from './index';

const deviceType = getDeviceType();
const isTablet = deviceType === DEVICE_TYPES.TABLET;

// Layout patterns
export const LAYOUT_STYLES = StyleSheet.create({
  // Screen containers
  screenContainer: {
    flex: 1,
  },
  
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  safeContent: {
    flex: 1,
    paddingHorizontal: getResponsiveSpacing('xl', '2xl', '3xl'),
  },
  
  // Card layouts
  card: {
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.base,
    ...SHADOWS.sm,
  },
  
  cardLarge: {
    borderRadius: BORDER_RADIUS.lg,
    padding: getResponsiveSpacing('lg', 'xl', '2xl'),
    ...SHADOWS.base,
  },
  
  // List patterns
  listItem: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
  },
  
  listSeparator: {
    height: 1,
    marginHorizontal: SPACING.base,
  },
});

// Component patterns
export const COMPONENT_STYLES = StyleSheet.create({
  // Headers
  header: {
    alignItems: 'center',
    paddingVertical: getResponsiveSpacing('lg', 'xl', '2xl'),
  },
  
  headerWithLogo: {
    alignItems: 'center',
    paddingTop: '8%',
    paddingBottom: SPACING['3xl'],
  },
  
  // Logos
  logoContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  
  logoIcon: {
    width: isTablet ? 120 : 100,
    height: isTablet ? 120 : 100,
    borderRadius: BORDER_RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.xl,
  },
  
  logoIconLarge: {
    width: isTablet ? 140 : 120,
    height: isTablet ? 140 : 120,
    borderRadius: BORDER_RADIUS['3xl'],
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.xl,
  },
  
  // Text containers
  textContainer: {
    alignItems: 'center',
    marginBottom: SPACING['3xl'],
  },
  
  titleContainer: {
    alignItems: 'center',
    marginBottom: SPACING.base,
  },
  
  // Form patterns
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: SPACING.lg,
  },
  
  inputContainer: {
    marginBottom: SPACING.xl,
  },
  
  inputLabel: {
    marginBottom: SPACING.sm,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
  
  // Footer patterns
  footer: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  
  footerFixed: {
    position: 'absolute',
    bottom: SPACING['4xl'],
    alignItems: 'center',
    zIndex: Z_INDEX.content,
  },
});

// Button variations
export const BUTTON_STYLES = StyleSheet.create({
  // Primary buttons
  primaryButton: {
    ...ACCESSIBLE_BUTTON_STYLES.primary,
    borderRadius: BORDER_RADIUS.md,
    ...SHADOWS.base,
  },
  
  primaryButtonLarge: {
    ...ACCESSIBLE_BUTTON_STYLES.primary,
    paddingHorizontal: getResponsiveSpacing('2xl', '3xl', '4xl'),
    paddingVertical: getResponsiveSpacing('base', 'lg', 'xl'),
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.lg,
    minWidth: isTablet ? 200 : 150,
  },
  
  // Secondary buttons
  secondaryButton: {
    ...ACCESSIBLE_BUTTON_STYLES.secondary,
    borderRadius: BORDER_RADIUS.md,
  },
  
  // Text buttons
  textButton: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.sm,
  },
  
  // Icon buttons
  iconButton: {
    ...ACCESSIBLE_BUTTON_STYLES.icon,
    borderRadius: BORDER_RADIUS.full,
  },
});

// Input variations
export const INPUT_STYLES = StyleSheet.create({
  // Text inputs
  textInput: {
    ...ACCESSIBLE_INPUT_STYLES.large,
    borderRadius: BORDER_RADIUS.md,
  },
  
  textInputSmall: {
    ...ACCESSIBLE_INPUT_STYLES.base,
    borderRadius: BORDER_RADIUS.sm,
  },
  
  // Special inputs
  otpInput: {
    ...ACCESSIBLE_INPUT_STYLES.large,
    borderRadius: BORDER_RADIUS.md,
    textAlign: 'center',
  },
  
  searchInput: {
    ...ACCESSIBLE_INPUT_STYLES.base,
    borderRadius: BORDER_RADIUS.full,
    paddingHorizontal: SPACING.lg,
  },
});

// Animation and interaction patterns
export const INTERACTION_STYLES = StyleSheet.create({
  // Touchable feedback
  touchableOpacity: {
    // Base touchable styles - opacity will be handled by component
  },
  
  touchableHighlight: {
    // Base touchable highlight styles
  },
  
  // Loading states
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  
  // Error states
  errorContainer: {
    padding: SPACING.base,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
  },
  
  // Success states
  successContainer: {
    padding: SPACING.base,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
  },
});

// Utility styles
export const UTILITY_STYLES = StyleSheet.create({
  // Flexbox utilities
  row: {
    flexDirection: 'row',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  spaceAround: {
    justifyContent: 'space-around',
  },
  
  // Positioning
  absolute: {
    position: 'absolute',
  },
  
  relative: {
    position: 'relative',
  },
  
  // Overflow
  hidden: {
    overflow: 'hidden',
  },
  
  // Opacity
  transparent: {
    opacity: 0,
  },
  
  semiTransparent: {
    opacity: 0.5,
  },
  
  // Full width/height
  fullWidth: {
    width: '100%',
  },
  
  fullHeight: {
    height: '100%',
  },
  
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

// Export all style collections
export const commonStyles = {
  layout: LAYOUT_STYLES,
  component: COMPONENT_STYLES,
  button: BUTTON_STYLES,
  input: INPUT_STYLES,
  interaction: INTERACTION_STYLES,
  utility: UTILITY_STYLES,
};