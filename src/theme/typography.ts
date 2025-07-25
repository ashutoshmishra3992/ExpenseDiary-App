// Typography Theme for Expense Diary App
// Comprehensive typography system with semantic naming

export const FONTS = {
  OPEN_SANS_REGULAR: "OpenSans-Regular",
  OPEN_SANS_BOLD: "OpenSans-Bold",
  OPEN_SANS_SEMI_BOLD: "OpenSans-SemiBold",
  OPEN_SANS_MEDIUM: "OpenSans-Medium",
  OPEN_SANS_LIGHT: "OpenSans-Light",
  OPEN_SANS_EXTRA_BOLD: "OpenSans-ExtraBold",
};

// Font Weights
export const FONT_WEIGHTS = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
} as const;

// Font Sizes (in pixels, but you can convert to rem/em as needed)
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
} as const;

// Line Heights
export const LINE_HEIGHTS = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.6,
  loose: 2,
} as const;

// Letter Spacing
export const LETTER_SPACING = {
  tighter: -0.5,
  tight: -0.25,
  normal: 0,
  wide: 0.25,
  wider: 0.5,
  widest: 1,
} as const;

// Semantic Text Styles for React Native
export const TEXT_STYLES = {
  // Headlines
  h1: {
    fontFamily: FONTS.OPEN_SANS_BOLD,
    fontSize: FONT_SIZES['4xl'],
    lineHeight: FONT_SIZES['4xl'] * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
  },
  h2: {
    fontFamily: FONTS.OPEN_SANS_BOLD,
    fontSize: FONT_SIZES['3xl'],
    lineHeight: FONT_SIZES['3xl'] * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
  },
  h3: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES['2xl'],
    lineHeight: FONT_SIZES['2xl'] * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  h4: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES.xl,
    lineHeight: FONT_SIZES.xl * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  h5: {
    fontFamily: FONTS.OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZES.lg,
    lineHeight: FONT_SIZES.lg * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  h6: {
    fontFamily: FONTS.OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZES.base,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Body Text
  bodyLarge: {
    fontFamily: FONTS.OPEN_SANS_REGULAR,
    fontSize: FONT_SIZES.lg,
    lineHeight: FONT_SIZES.lg * LINE_HEIGHTS.relaxed,
    letterSpacing: LETTER_SPACING.normal,
  },
  body: {
    fontFamily: FONTS.OPEN_SANS_REGULAR,
    fontSize: FONT_SIZES.base,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  bodySmall: {
    fontFamily: FONTS.OPEN_SANS_REGULAR,
    fontSize: FONT_SIZES.sm,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Financial Text (for amounts, numbers)
  amountLarge: {
    fontFamily: FONTS.OPEN_SANS_BOLD,
    fontSize: FONT_SIZES['3xl'],
    lineHeight: FONT_SIZES['3xl'] * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.wide,
  },
  amount: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES.xl,
    lineHeight: FONT_SIZES.xl * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
  },
  amountSmall: {
    fontFamily: FONTS.OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZES.base,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
  },

  // UI Elements
  button: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES.base,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.wide,
  },
  buttonSmall: {
    fontFamily: FONTS.OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZES.sm,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.wide,
  },
  buttonLarge: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES.lg,
    lineHeight: FONT_SIZES.lg * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.wide,
  },

  // Form Elements
  label: {
    fontFamily: FONTS.OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZES.sm,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
  },
  input: {
    fontFamily: FONTS.OPEN_SANS_REGULAR,
    fontSize: FONT_SIZES.base,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  placeholder: {
    fontFamily: FONTS.OPEN_SANS_REGULAR,
    fontSize: FONT_SIZES.base,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Navigation
  tabLabel: {
    fontFamily: FONTS.OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZES.xs,
    lineHeight: FONT_SIZES.xs * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.wider,
  },
  navTitle: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES.lg,
    lineHeight: FONT_SIZES.lg * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Card/List Items
  cardTitle: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES.base,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  cardSubtitle: {
    fontFamily: FONTS.OPEN_SANS_REGULAR,
    fontSize: FONT_SIZES.sm,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  
  // Caption and Helper Text
  caption: {
    fontFamily: FONTS.OPEN_SANS_REGULAR,
    fontSize: FONT_SIZES.xs,
    lineHeight: FONT_SIZES.xs * LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
  },
  helper: {
    fontFamily: FONTS.OPEN_SANS_LIGHT,
    fontSize: FONT_SIZES.xs,
    lineHeight: FONT_SIZES.xs * LINE_HEIGHTS.relaxed,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Special Cases
  currency: {
    fontFamily: FONTS.OPEN_SANS_BOLD,
    fontSize: FONT_SIZES.sm,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
  },
  percentage: {
    fontFamily: FONTS.OPEN_SANS_SEMI_BOLD,
    fontSize: FONT_SIZES.sm,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
  },
} as const;

// Helper function to get text style with color
export const getTextStyle = (
  styleName: keyof typeof TEXT_STYLES,
  color?: string,
  additionalStyles?: Record<string, any>
) => {
  return {
    ...TEXT_STYLES[styleName],
    ...(color && { color }),
    ...additionalStyles,
  };
};

// Common text style combinations for expense tracking
export const EXPENSE_TEXT_STYLES = {
  // For displaying amounts with colors
  positiveAmount: (amount: string) => ({
    ...TEXT_STYLES.amount,
    // Color should be set from the color theme
  }),
  negativeAmount: (amount: string) => ({
    ...TEXT_STYLES.amount,
    // Color should be set from the color theme
  }),
  
  // For category labels
  categoryLabel: {
    ...TEXT_STYLES.caption,
    textTransform: 'uppercase' as const,
  },
  
  // For date displays
  dateText: {
    ...TEXT_STYLES.bodySmall,
  },
  
  // For transaction descriptions
  transactionDescription: {
    ...TEXT_STYLES.body,
  },
} as const;
