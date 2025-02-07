import {StyleSheet} from 'react-native';
import {normVSize} from '../../../../../config/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: normVSize(250),
    marginBottom: normVSize(20),
  },
  infoContainer: {
    padding: normVSize(20),
    borderRadius: normVSize(20),
    margin: normVSize(20),
  },
  detailsContainer: {
    marginVertical: normVSize(20),
    gap: normVSize(10),
  },
});
