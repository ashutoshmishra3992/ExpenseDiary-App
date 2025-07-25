// Color Theme for Expense Diary App
// Modern, accessible, and semantically organized

export const COLORS = {
  // ===== LIGHT THEME =====
  light: {
    // Primary brand colors
    primary: {
      50: '#EBF8FF',
      100: '#BEE3F8',
      200: '#90CDF4',
      300: '#63B3ED',
      400: '#4299E1',
      500: '#3182CE', // Main primary
      600: '#2B77CB',
      700: '#2C5AA0',
      800: '#2A4B7C',
      900: '#203A5C',
    },
    
    // Secondary colors
    secondary: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096', // Main secondary
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    
    // Background colors
    background: {
      primary: '#FFFFFF',
      secondary: '#F8FAFC',
      tertiary: '#F1F5F9',
      card: '#FFFFFF',
      modal: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    
    // Text colors
    text: {
      primary: '#1A202C',
      secondary: '#4A5568',
      tertiary: '#718096',
      placeholder: '#A0AEC0',
      inverse: '#FFFFFF',
      disabled: '#CBD5E0',
    },
    
    // Border colors
    border: {
      light: '#E2E8F0',
      medium: '#CBD5E0',
      dark: '#A0AEC0',
      focus: '#3182CE',
    },
    
    // Financial semantic colors
    financial: {
      income: '#059669',      // Green for positive amounts
      incomeLight: '#D1FAE5',
      expense: '#DC2626',     // Red for negative amounts
      expenseLight: '#FEE2E2',
      savings: '#7C3AED',     // Purple for savings
      savingsLight: '#EDE9FE',
      investment: '#EA580C',  // Orange for investments
      investmentLight: '#FED7AA',
    },
    
    // Status colors
    status: {
      success: '#059669',
      successLight: '#D1FAE5',
      warning: '#D97706',
      warningLight: '#FEF3C7',
      error: '#DC2626',
      errorLight: '#FEE2E2',
      info: '#2563EB',
      infoLight: '#DBEAFE',
    },
    
    // Category colors (for expense categories)
    categories: {
      food: '#F59E0B',
      transport: '#3B82F6',
      entertainment: '#8B5CF6',
      shopping: '#EC4899',
      health: '#10B981',
      utilities: '#6B7280',
      education: '#14B8A6',
      travel: '#F97316',
    },
  },
  
  // ===== DARK THEME =====
  dark: {
    // Primary brand colors
    primary: {
      50: '#1A2332',
      100: '#1E2936',
      200: '#2A3441',
      300: '#3A4553',
      400: '#4A5568',
      500: '#63B3ED', // Main primary (lighter for dark theme)
      600: '#90CDF4',
      700: '#BEE3F8',
      800: '#E6F6FF',
      900: '#F0F9FF',
    },
    
    // Secondary colors
    secondary: {
      50: '#171923',
      100: '#1A202C',
      200: '#2D3748',
      300: '#4A5568',
      400: '#718096',
      500: '#A0AEC0', // Main secondary
      600: '#CBD5E0',
      700: '#E2E8F0',
      800: '#EDF2F7',
      900: '#F7FAFC',
    },
    
    // Background colors
    background: {
      primary: '#0F1419',
      secondary: '#1A202C',
      tertiary: '#2D3748',
      card: '#1A202C',
      modal: '#2D3748',
      overlay: 'rgba(0, 0, 0, 0.8)',
    },
    
    // Text colors
    text: {
      primary: '#F7FAFC',
      secondary: '#E2E8F0',
      tertiary: '#A0AEC0',
      placeholder: '#718096',
      inverse: '#1A202C',
      disabled: '#4A5568',
    },
    
    // Border colors
    border: {
      light: '#2D3748',
      medium: '#4A5568',
      dark: '#718096',
      focus: '#63B3ED',
    },
    
    // Financial semantic colors (adjusted for dark theme)
    financial: {
      income: '#34D399',      // Lighter green for dark theme
      incomeLight: 'rgba(52, 211, 153, 0.1)',
      expense: '#F87171',     // Lighter red for dark theme
      expenseLight: 'rgba(248, 113, 113, 0.1)',
      savings: '#A78BFA',     // Lighter purple for dark theme
      savingsLight: 'rgba(167, 139, 250, 0.1)',
      investment: '#FB923C',  // Lighter orange for dark theme
      investmentLight: 'rgba(251, 146, 60, 0.1)',
    },
    
    // Status colors (adjusted for dark theme)
    status: {
      success: '#34D399',
      successLight: 'rgba(52, 211, 153, 0.1)',
      warning: '#FBBF24',
      warningLight: 'rgba(251, 191, 36, 0.1)',
      error: '#F87171',
      errorLight: 'rgba(248, 113, 113, 0.1)',
      info: '#60A5FA',
      infoLight: 'rgba(96, 165, 250, 0.1)',
    },
    
    // Category colors (adjusted for dark theme)
    categories: {
      food: '#FBBF24',
      transport: '#60A5FA',
      entertainment: '#A78BFA',
      shopping: '#F472B6',
      health: '#34D399',
      utilities: '#9CA3AF',
      education: '#22D3EE',
      travel: '#FB923C',
    },
  },
  
  // ===== COMMON COLORS =====
  common: {
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#000000',
    
    // Chart colors for graphs and visualizations
    chart: [
      '#3182CE', '#059669', '#DC2626', '#7C3AED', '#EA580C',
      '#F59E0B', '#3B82F6', '#8B5CF6', '#EC4899', '#10B981',
      '#6B7280', '#14B8A6', '#F97316', '#06B6D4', '#84CC16',
    ],
    
    // Gradient backgrounds
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      income: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      expense: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      neutral: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    },
  },
  
  // ===== UTILITY COLORS =====
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.15)',
    heavy: 'rgba(0, 0, 0, 0.25)',
    colored: 'rgba(49, 130, 206, 0.15)',
  },
  
  // ===== OPACITY VARIANTS =====
  opacity: {
    5: '0D',   // 5% opacity
    10: '1A',  // 10% opacity
    20: '33',  // 20% opacity
    30: '4D',  // 30% opacity
    40: '66',  // 40% opacity
    50: '80',  // 50% opacity
    60: '99',  // 60% opacity
    70: 'B3',  // 70% opacity
    80: 'CC',  // 80% opacity
    90: 'E6',  // 90% opacity
  },
}

// ===== THEME HELPER FUNCTIONS =====
export const getThemeColors = (isDark: boolean = false) => {
  return isDark ? COLORS.dark : COLORS.light
}

export const getCategoryColor = (category: string, isDark: boolean = false) => {
  const theme = getThemeColors(isDark)
  const categoryKey = category.toLowerCase() as keyof typeof theme.categories
  return theme.categories[categoryKey] || theme.categories.utilities
}

export const getFinancialColor = (type: 'income' | 'expense' | 'savings' | 'investment', isDark: boolean = false) => {
  const theme = getThemeColors(isDark)
  return theme.financial[type]
}

// ===== LEGACY SUPPORT (if needed) =====
// Keeping some commonly used legacy colors for backward compatibility
export const LEGACY_COLORS = {
  COLOR_FFFFFF: COLORS.common.white,
  COLOR_000000: COLORS.common.black,
  TRANSPARENT: COLORS.common.transparent,
  // Add more legacy mappings as needed
}
