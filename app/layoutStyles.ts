import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default function getLayoutStyles(theme: Theme) {
  return StyleSheet.create({
    safeAreaStyles: { flex: 1, backgroundColor: theme.colors.background },
  });
}
