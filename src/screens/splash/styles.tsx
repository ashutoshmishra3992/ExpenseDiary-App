import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
    zIndex: 1,
  },
  
  backgroundCircle: {
    position: 'absolute',
    borderRadius: 1000,
    zIndex: 2,
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
    paddingHorizontal: 40,
    zIndex: 3,
  },
  
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  
  logoIcon: {
    width: 120,
    height: 120,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  
  logoText: {
    fontSize: 60,
    textAlign: 'center',
  },
  
  logoImage: {
    width: 80,
    height: 80,
  },
  
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  
  appName: {
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '700',
  },
  
  tagline: {
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '400',
  },
  
  featureContainer: {
    alignItems: 'flex-start',
    gap: 12,
  },
  
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  
  loadingContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  
  loadingBar: {
    width: '60%',
    height: 4,
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 12,
  },
  
  loadingProgress: {
    height: '100%',
    borderRadius: 2,
  },
  
  loadingText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    zIndex: 3,
  },
});
