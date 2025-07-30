// Accessibility constants and helpers for the Expense Diary App
// Following WCAG guidelines and platform best practices

import { SPACING, COMPONENT_HEIGHTS } from './spacing';

// Minimum touch target sizes (44pt for iOS, 48dp for Android)
export const TOUCH_TARGET = {
  minimum: 44,      // Minimum recommended touch target
  comfortable: 48,  // Comfortable touch target
  large: 56,        // Large touch target for primary actions
} as const;

// Focus and interaction states
export const FOCUS_STYLES = {
  // Focus ring styles
  focusRing: {
    borderWidth: 2,
    borderStyle: 'solid' as const,
    borderColor: '#007AFF', // iOS system blue, should come from theme
  },
  
  // Pressed state
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  
  // Disabled state
  disabled: {
    opacity: 0.4,
  },
  
  // Loading state
  loading: {
    opacity: 0.6,
  },
} as const;

// Accessibility helpers
export const ACCESSIBILITY = {
  // Minimum contrast ratios
  contrast: {
    normal: 4.5,      // WCAG AA for normal text
    large: 3.0,       // WCAG AA for large text (18pt+ or 14pt+ bold)
    enhanced: 7.0,    // WCAG AAA for normal text
  },
  
  // Text size recommendations
  minTextSize: 16,    // Minimum readable text size
  comfortableTextSize: 18,
  
  // Touch target helpers
  ensureMinTouchTarget: (width: number, height: number) => ({
    minWidth: Math.max(width, TOUCH_TARGET.minimum),
    minHeight: Math.max(height, TOUCH_TARGET.minimum),
  }),
  
  // Screen reader hints
  hints: {
    button: 'Double tap to activate',
    input: 'Double tap to edit',
    link: 'Double tap to open',
    toggle: 'Double tap to toggle',
  },
} as const;

// Common accessible button styles
export const ACCESSIBLE_BUTTON_STYLES = {
  base: {
    minWidth: TOUCH_TARGET.comfortable,
    minHeight: TOUCH_TARGET.comfortable,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  
  primary: {
    minWidth: TOUCH_TARGET.comfortable,
    minHeight: COMPONENT_HEIGHTS.button.large,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  
  secondary: {
    minWidth: TOUCH_TARGET.comfortable,
    minHeight: COMPONENT_HEIGHTS.button.medium,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  
  icon: {
    width: TOUCH_TARGET.comfortable,
    height: TOUCH_TARGET.comfortable,
    padding: SPACING.sm,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
} as const;

// Common accessible input styles
export const ACCESSIBLE_INPUT_STYLES = {
  base: {
    minHeight: TOUCH_TARGET.comfortable,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
  },
  
  large: {
    minHeight: COMPONENT_HEIGHTS.input.large,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.base,
  },
} as const;

// Semantic colors for accessibility
export const SEMANTIC_COLORS = {
  // Status indicators
  success: '#10B981',
  warning: '#F59E0B', 
  error: '#EF4444',
  info: '#3B82F6',
  
  // Interactive states
  focus: '#007AFF',     // iOS system blue
  active: '#0056CC',    // Darker blue for active state
  disabled: '#8E8E93',  // iOS disabled color
  
  // Link colors
  link: '#007AFF',
  linkVisited: '#5856D6',
} as const;

// Animation durations for accessibility
export const ACCESSIBLE_ANIMATIONS = {
  // Reduced motion durations
  fast: 150,
  normal: 200,
  slow: 300,
  
  // Standard durations (when motion is enabled)
  standardFast: 200,
  standardNormal: 300,
  standardSlow: 500,
} as const;

// Utility functions
export const getAccessibleProps = (
  role: string,
  label: string,
  hint?: string,
  value?: string
) => ({
  accessible: true,
  accessibilityRole: role as any,
  accessibilityLabel: label,
  ...(hint && { accessibilityHint: hint }),
  ...(value && { accessibilityValue: { text: value } }),
});

export const getFocusableProps = (disabled: boolean = false) => ({
  focusable: !disabled,
  ...(disabled && { accessibilityState: { disabled: true } }),
});

export const getButtonAccessibilityProps = (
  label: string,
  disabled: boolean = false,
  loading: boolean = false
) => ({
  ...getAccessibleProps('button', label, ACCESSIBILITY.hints.button),
  ...getFocusableProps(disabled),
  ...(loading && { accessibilityState: { busy: true } }),
});

export const getInputAccessibilityProps = (
  label: string,
  value: string = '',
  placeholder: string = '',
  error?: string
) => ({
  ...getAccessibleProps('text', label, ACCESSIBILITY.hints.input, value),
  ...(placeholder && { accessibilityPlaceholder: placeholder }),
  ...(error && { accessibilityInvalid: true, accessibilityErrorMessage: error }),
});