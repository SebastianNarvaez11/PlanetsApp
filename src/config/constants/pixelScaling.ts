import {Dimensions, PixelRatio, Platform} from 'react-native';

/**
 * Screen dimensions obtained from the device window
 */
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

/**
 * Base scaling factors calculated from standard design dimensions
 */
const scale = SCREEN_WIDTH / 375;
const scaleVertical = SCREEN_HEIGHT / 812;

/**
 * Normalizes the given size based on the device's screen width, maintaining consistent sizing across devices.
 * The function adjusts the size differently for iOS and Android to account for pixel density differences.
 */
export const normSize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

/**
 * Normalizes the given size based on the device's screen height, maintaining consistent vertical sizing across devices.
 * Similar to `normSize`, this function adjusts the size based on the platform (iOS/Android).
 */
export const normVSize = (size: number) => {
  const newSize = size * scaleVertical;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};
