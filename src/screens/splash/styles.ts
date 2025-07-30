import { StyleSheet, Dimensions } from 'react-native';
import { 
  SPACING, 
  BORDER_RADIUS, 
  SHADOWS, 
  Z_INDEX, 
  FONT_SIZES, 
  FONT_WEIGHTS,
  COMPONENT_HEIGHTS,
  getResponsiveSpacing,
  getDeviceType,
  DEVICE_TYPES 
} from '../../theme';

const { width, height } = Dimensions.get('window');
const deviceType = getDeviceType();
const isTablet = deviceType === DEVICE_TYPES.TABLET;
const responsivePadding = getResponsiveSpacing('3xl', '4xl', '5xl');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: Z_INDEX.background,
  },
  
  backgroundCircle: {
    position: 'absolute',
    borderRadius: BORDER_RADIUS.full,
    zIndex: Z_INDEX.background,
  },
  
  circle1: {
    width: width * 0.8,
    height: width * 0.8,
    top: -width * 0.4,
    right: -width * 0.3,
  },
  
  circle2: {
    width: width * 0.6,
    height: width * 0.6,
    bottom: -width * 0.2,
    left: -width * 0.2,
  },
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsivePadding,
    zIndex: Z_INDEX.content,
  },
  
  logoContainer: {
    marginBottom: SPACING['3xl'],
    alignItems: 'center',
  },
  
  logoIcon: {
    width: isTablet ? 140 : 120,
    height: isTablet ? 140 : 120,
    borderRadius: BORDER_RADIUS['3xl'],
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.xl,
  },
  
  logoText: {
    fontSize: FONT_SIZES['5xl'],
    textAlign: 'center',
    fontWeight: FONT_WEIGHTS.bold,
  },
  
  logoImage: {
    width: isTablet ? COMPONENT_HEIGHTS.icon['4xl'] : COMPONENT_HEIGHTS.icon['3xl'],
    height: isTablet ? COMPONENT_HEIGHTS.icon['4xl'] : COMPONENT_HEIGHTS.icon['3xl'],
  },
  
  textContainer: {
    alignItems: 'center',
    marginBottom: SPACING['4xl'],
  },
  
  appName: {
    textAlign: 'center',
    marginBottom: SPACING.sm,
    fontWeight: FONT_WEIGHTS.bold,
  },
  
  tagline: {
    textAlign: 'center',
    marginBottom: SPACING['2xl'],
    fontWeight: FONT_WEIGHTS.regular,
  },
  
  footer: {
    position: 'absolute',
    bottom: SPACING['4xl'],
    alignItems: 'center',
    zIndex: Z_INDEX.content,
  },
});
