import { StyleSheet, Dimensions } from 'react-native';
import { 
  FONT_SIZES, 
  FONT_WEIGHTS, 
  LINE_HEIGHTS, 
  LETTER_SPACING,
  SPACING, 
  BORDER_RADIUS, 
  BORDER_WIDTH, 
  COMPONENT_HEIGHTS, 
  SHADOWS, 
  SCREEN_PADDING,
  getResponsiveSpacing,
  getDeviceType,
  DEVICE_TYPES,
  TOUCH_TARGET,
  ACCESSIBLE_BUTTON_STYLES,
  ACCESSIBLE_INPUT_STYLES 
} from '../../theme';

const { width, height } = Dimensions.get('window');
const deviceType = getDeviceType();
const isTablet = deviceType === DEVICE_TYPES.TABLET;
const responsivePadding = getResponsiveSpacing('xl', '2xl', '3xl');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  scrollContent: {
    flexGrow: 1,
    minHeight: height,
    paddingHorizontal: responsivePadding,
  },

  header: {
    alignItems: 'center',
    paddingTop: height * 0.08,
    paddingBottom: SPACING['3xl'],
  },

  logoContainer: {
    width: isTablet ? 120 : 100,
    height: isTablet ? 120 : 100,
    borderRadius: BORDER_RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xl,
    ...SHADOWS.xl,
  },

  title: {
    textAlign: 'center',
    marginBottom: SPACING.sm,
    fontWeight: FONT_WEIGHTS.bold,
  },

  subtitle: {
    textAlign: 'center',
    lineHeight: FONT_SIZES.lg * LINE_HEIGHTS.normal,
    paddingHorizontal: SPACING.lg,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: getResponsiveSpacing('lg', 'xl', '2xl'),
  },

  inputContainer: {
    marginBottom: SPACING.xl,
  },

  inputLabel: {
    marginBottom: SPACING.sm,
    fontWeight: FONT_WEIGHTS.semiBold,
  },

  textInput: {
    ...ACCESSIBLE_INPUT_STYLES.large,
    borderWidth: BORDER_WIDTH.thick,
    borderRadius: BORDER_RADIUS.md,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    // Focus state will be handled by component
  },

  otpInput: {
    textAlign: 'center',
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: LETTER_SPACING.widest,
  },

  primaryButton: {
    ...ACCESSIBLE_BUTTON_STYLES.primary,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.base,
    ...SHADOWS.base,
  },

  secondaryButton: {
    ...ACCESSIBLE_BUTTON_STYLES.secondary,
    marginTop: SPACING.sm,
    // Ensure minimum touch target
    minHeight: TOUCH_TARGET.comfortable,
  },

  buttonText: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semiBold,
    textAlign: 'center',
  },

  footer: {
    alignItems: 'center',
    paddingBottom: SPACING.xl,
    paddingTop: SPACING.lg,
  },
});