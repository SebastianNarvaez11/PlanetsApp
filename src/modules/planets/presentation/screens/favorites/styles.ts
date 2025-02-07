import {StyleSheet} from 'react-native';
import {normVSize} from '../../../../../config/constants';

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: normVSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    gap: normVSize(10),
  },
  container: {
    flex: 1,
    paddingHorizontal: normVSize(20),
  },
});
