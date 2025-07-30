// Spacing Theme for Expense Diary App
// Consistent spacing system for padding, margin, and sizing

// Base spacing unit (4px) - follows 4-point grid system
const BASE_UNIT = 4;

// Spacing scale (using multiples of base unit)
export const SPACING = {
  // Micro spacing
  xs: BASE_UNIT,        // 4px
  sm: BASE_UNIT * 2,    // 8px
  md: BASE_UNIT * 3,    // 12px
  
  // Standard spacing
  base: BASE_UNIT * 4,  // 16px
  lg: BASE_UNIT * 5,    // 20px
  xl: BASE_UNIT * 6,    // 24px
  
  // Large spacing
  '2xl': BASE_UNIT * 8, // 32px
  '3xl': BASE_UNIT * 10, // 40px
  '4xl': BASE_UNIT * 12, // 48px
  '5xl': BASE_UNIT * 14, // 56px
  '6xl': BASE_UNIT * 16, // 64px
  '7xl': BASE_UNIT * 20, // 80px
  '8xl': BASE_UNIT * 24, // 96px
} as const;

// Border radius scale
export const BORDER_RADIUS = {
  none: 0,
  xs: 2,
  sm: 4,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999, // For circular elements
} as const;

// Border width scale
export const BORDER_WIDTH = {
  none: 0,
  thin: 0.5,
  base: 1,
  thick: 1.5,
  heavy: 2,
  ultra: 3,
} as const;

// Component heights (common UI element sizes) - aligned to 4px grid
export const COMPONENT_HEIGHTS = {
  button: {
    small: SPACING['2xl'],  // 32px
    medium: SPACING['4xl'], // 48px
    large: SPACING['5xl'],  // 56px
  },
  input: {
    small: SPACING['3xl'],  // 40px
    medium: SPACING['4xl'], // 48px
    large: SPACING['5xl'],  // 56px
  },
  icon: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 32,
    xl: 40,
    '2xl': 48,
    '3xl': 56,
    '4xl': 64,
  },
  avatar: {
    xs: 24,
    sm: 32,
    base: 40,
    lg: 48,
    xl: 56,
    '2xl': 64,
    '3xl': 80,
    '4xl': 96,
  },
} as const;

// Shadow system
export const SHADOWS = {
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  base: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  xl: {
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  '2xl': {
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 12,
  },
} as const;

// Container padding (common container layouts)
export const CONTAINER_PADDING = {
  none: 0,
  xs: SPACING.sm,     // 8px
  sm: SPACING.base,   // 16px
  base: SPACING.xl,   // 24px
  lg: SPACING['2xl'], // 32px
  xl: SPACING['3xl'], // 40px
} as const;

// Screen padding (safe areas and main content)
export const SCREEN_PADDING = {
  horizontal: SPACING.xl,  // 24px - matches current usage
  vertical: SPACING.lg,    // 20px
  top: SPACING['3xl'],     // 40px
  bottom: SPACING.xl,      // 24px
} as const;

// Helper functions for consistent spacing
export const getSpacing = (multiplier: number): number => BASE_UNIT * multiplier;

// Simplified helper functions (commonly used)
export const getHorizontalSpacing = (size: keyof typeof SPACING) => ({
  paddingHorizontal: SPACING[size],
});

export const getVerticalSpacing = (size: keyof typeof SPACING) => ({
  paddingVertical: SPACING[size],
});

// Responsive breakpoints for different screen sizes
export const BREAKPOINTS = {
  xs: 0,     // Extra small devices
  sm: 576,   // Small devices
  md: 768,   // Medium devices (tablets)
  lg: 992,   // Large devices
  xl: 1200,  // Extra large devices
} as const;

// Common spacing combinations
export const COMMON_SPACING = {
  cardPadding: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.base,
  },
  listItemPadding: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
  },
  buttonPadding: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
  },
  inputPadding: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
  },
  screenMargin: {
    marginHorizontal: SPACING.xl,
  },
} as const;

// Theme validation helpers
export const isValidSpacing = (value: any): value is keyof typeof SPACING => {
  return typeof value === 'string' && value in SPACING;
};

export const isValidBorderRadius = (value: any): value is keyof typeof BORDER_RADIUS => {
  return typeof value === 'string' && value in BORDER_RADIUS;
};

// Utility functions for responsive design  
export const getScreenBasedSpacing = (screenWidth: number) => {
  if (screenWidth >= BREAKPOINTS.lg) return SPACING.xl;
  if (screenWidth >= BREAKPOINTS.md) return SPACING.lg;
  return SPACING.base;
};