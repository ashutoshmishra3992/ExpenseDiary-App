import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { 
  getThemeColors, 
  COLORS, 
  TEXT_STYLES,
  getButtonAccessibilityProps,
  getInputAccessibilityProps,
  SEMANTIC_COLORS 
} from '../../theme';
import { styles } from './styles';
import AppLogo from '../../components/AppLogo';
import { cacheStore } from '../../store/cache/cacheStore';
import { CACHE_KEYS } from '../../store/cache/constants';
import Screens from '../../navigations/Screens';

interface AuthScreenProps {
  isDarkMode?: boolean;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ isDarkMode = false }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');

  const colors = getThemeColors(isDarkMode);

  // Generate random 6-character alphanumeric OTP
  const generateOtp = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle Get OTP button press
  const handleGetOtp = async () => {
    // Clear previous errors
    setEmailError('');
    
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const otp = generateOtp();
      setGeneratedOtp(otp);
      setIsOtpSent(true);
      setIsLoading(false);
      
      // In a real app, you would send this OTP via email API
      // For demo purposes, show it in an alert
      Alert.alert(
        'OTP Sent', 
        `Your OTP is: ${otp}\n\nIn a real app, this would be sent to your email.`,
        [{ text: 'OK' }]
      );
    }, 1500);
  };

  // Handle OTP verification
  const handleVerifyOtp = async () => {
    // Clear previous errors
    setOtpError('');
    
    if (!otp.trim()) {
      setOtpError('Please enter the OTP');
      return;
    }

    if (otp.length !== 6) {
      setOtpError('OTP must be 6 characters long');
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (otp.toUpperCase() === generatedOtp) {
        // Store authentication token
        cacheStore.set(CACHE_KEYS.ACCESS_TOKEN, 'dummy_token_' + Date.now());
        setIsLoading(false);
        
        // Navigate to home screen
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: Screens.HOME }],
        }));
      } else {
        setIsLoading(false);
        setOtpError('Invalid OTP. Please try again.');
      }
    }, 1000);
  };

  // Reset to email input
  const handleBackToEmail = () => {
    setIsOtpSent(false);
    setOtp('');
    setGeneratedOtp('');
    setOtpError('');
  };

  return (
    <KeyboardAvoidingView 
      style={[styles.container, { backgroundColor: colors.background.primary }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.logoContainer, {
            backgroundColor: colors.primary[500],
            shadowColor: colors.primary[500],
          }]}>
            <AppLogo 
              width={60}
              height={60}
              color={COLORS.common.white}
            />
          </View>
          
          <Text style={[
            TEXT_STYLES.h2,
            styles.title,
            { color: colors.text.primary }
          ]}>
            {isOtpSent ? 'Verify OTP' : 'Welcome Back'}
          </Text>
          
          <Text style={[
            TEXT_STYLES.body,
            styles.subtitle,
            { color: colors.text.secondary }
          ]}>
            {isOtpSent 
              ? `Enter the 6-digit code sent to ${email}`
              : 'Enter your email to get started'
            }
          </Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {!isOtpSent ? (
            // Email Input Phase
            <>
              <View style={styles.inputContainer}>
                <Text style={[
                  TEXT_STYLES.body,
                  styles.inputLabel,
                  { color: colors.text.primary }
                ]}>
                  Email Address
                </Text>
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      backgroundColor: colors.background.secondary,
                      borderColor: emailError ? SEMANTIC_COLORS.error : colors.border.light,
                      color: colors.text.primary,
                    }
                  ]}
                  placeholder="Enter your email"
                  placeholderTextColor={colors.text.tertiary}
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (emailError) setEmailError(''); // Clear error on input
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                  autoFocus={true}
                  returnKeyType="next"
                  onSubmitEditing={handleGetOtp}
                  {...getInputAccessibilityProps(
                    'Email Address',
                    email,
                    'Enter your email',
                    emailError
                  )}
                />
                {emailError ? (
                  <Text 
                    style={[
                      TEXT_STYLES.caption,
                      { color: SEMANTIC_COLORS.error, marginTop: 4 }
                    ]}
                    accessible={true}
                    accessibilityRole="alert"
                  >
                    {emailError}
                  </Text>
                ) : null}
              </View>

              <TouchableOpacity
                style={[
                  styles.primaryButton,
                  {
                    backgroundColor: isLoading 
                      ? colors.primary[300] 
                      : colors.primary[500],
                  }
                ]}
                onPress={handleGetOtp}
                disabled={isLoading}
                {...getButtonAccessibilityProps(
                  isLoading ? 'Sending OTP' : 'Get OTP',
                  isLoading
                )}
              >
                <Text style={[
                  TEXT_STYLES.button,
                  styles.buttonText,
                  { color: COLORS.common.white }
                ]}>
                  {isLoading ? 'Sending...' : 'Get OTP'}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            // OTP Input Phase
            <>
              <View style={styles.inputContainer}>
                <Text style={[
                  TEXT_STYLES.body,
                  styles.inputLabel,
                  { color: colors.text.primary }
                ]}>
                  Enter OTP
                </Text>
                <TextInput
                  style={[
                    styles.textInput,
                    styles.otpInput,
                    {
                      backgroundColor: colors.background.secondary,
                      borderColor: otpError ? SEMANTIC_COLORS.error : colors.border.light,
                      color: colors.text.primary,
                    }
                  ]}
                  placeholder="6-digit code"
                  placeholderTextColor={colors.text.tertiary}
                  value={otp}
                  onChangeText={(text) => {
                    setOtp(text.toUpperCase());
                    if (otpError) setOtpError(''); // Clear error on input
                  }}
                  maxLength={6}
                  autoCapitalize="characters"
                  autoCorrect={false}
                  editable={!isLoading}
                  autoFocus={true}
                  returnKeyType="done"
                  onSubmitEditing={handleVerifyOtp}
                  {...getInputAccessibilityProps(
                    'Enter OTP',
                    otp,
                    '6-digit code',
                    otpError
                  )}
                />
                {otpError ? (
                  <Text 
                    style={[
                      TEXT_STYLES.caption,
                      { color: SEMANTIC_COLORS.error, marginTop: 4 }
                    ]}
                    accessible={true}
                    accessibilityRole="alert"
                  >
                    {otpError}
                  </Text>
                ) : null}
              </View>

              <TouchableOpacity
                style={[
                  styles.primaryButton,
                  {
                    backgroundColor: isLoading 
                      ? colors.primary[300] 
                      : colors.primary[500],
                  }
                ]}
                onPress={handleVerifyOtp}
                disabled={isLoading}
                {...getButtonAccessibilityProps(
                  isLoading ? 'Verifying OTP' : 'Verify OTP',
                  isLoading
                )}
              >
                <Text style={[
                  TEXT_STYLES.button,
                  styles.buttonText,
                  { color: COLORS.common.white }
                ]}>
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={handleBackToEmail}
                disabled={isLoading}
                {...getButtonAccessibilityProps(
                  'Back to Email',
                  isLoading
                )}
              >
                <Text style={[
                  TEXT_STYLES.body,
                  { color: colors.primary[500] }
                ]}>
                  Back to Email
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[
            TEXT_STYLES.caption,
            { color: colors.text.tertiary }
          ]}>
            By continuing, you agree to our Terms of Service
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;