import { StyleSheet, Dimensions } from 'react-native';
import { 
  FONT_SIZES, 
  FONT_WEIGHTS, 
  LINE_HEIGHTS,
  SPACING, 
  BORDER_RADIUS, 
  BORDER_WIDTH, 
  SHADOWS, 
  SCREEN_PADDING,
  getResponsiveSpacing,
  getDeviceType,
  DEVICE_TYPES,
  TOUCH_TARGET,
  ACCESSIBLE_BUTTON_STYLES 
} from '../../theme';

const { width, height } = Dimensions.get('window');
const deviceType = getDeviceType();
const isTablet = deviceType === DEVICE_TYPES.TABLET;
const responsivePadding = getResponsiveSpacing('xl', '2xl', '3xl');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsivePadding,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getResponsiveSpacing('3xl', '4xl', '5xl'),
    maxWidth: isTablet ? 600 : '100%',
    alignSelf: 'center',
  },

  title: {
    textAlign: 'center',
    marginBottom: SPACING.base,
    fontWeight: FONT_WEIGHTS.bold,
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: SPACING.xl,
    fontWeight: FONT_WEIGHTS.medium,
  },

  description: {
    textAlign: 'center',
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.relaxed,
    paddingHorizontal: SPACING.lg,
  },

  footer: {
    paddingBottom: SPACING['3xl'],
    alignItems: 'center',
  },

  logoutButton: {
    ...ACCESSIBLE_BUTTON_STYLES.primary,
    paddingHorizontal: getResponsiveSpacing('2xl', '3xl', '4xl'),
    paddingVertical: getResponsiveSpacing('base', 'lg', 'xl'),
    borderRadius: BORDER_RADIUS.md,
    borderWidth: BORDER_WIDTH.base,
    ...SHADOWS.sm,
    minWidth: isTablet ? 200 : 150,
    // Ensure proper touch target
    minHeight: TOUCH_TARGET.comfortable,
  },
});