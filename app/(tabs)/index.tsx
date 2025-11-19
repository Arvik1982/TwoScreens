import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.contentContainer}>
      <ThemedView style={styles.topBox}>
        <ThemedView style={styles.topBoxLeft}>
          <ThemedView style={styles.boxLeftAvatar}></ThemedView>
          <ThemedView style={styles.boxLeftTitle}></ThemedView>
          <ThemedView style={styles.boxLeftChevron}></ThemedView>
        </ThemedView>
        <ThemedView style={styles.topBoxRight}></ThemedView>
      </ThemedView>
      <ThemedView style={styles.nav}></ThemedView>
      <ThemedView style={styles.details}></ThemedView>
      <ThemedView style={styles.expencesBox}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  topBox: {
    width: 375,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16,
    opacity: 1,
  },
  topBoxLeft: {
    width: 132,
    height: 36,
    gap: 12,
    opacity: 1,
  },
  boxLeftAvatar: {
    width: 36,
    height: 36,
    gap: 10,
    opacity: 1,
    borderRadius: 9999,
    backgroundColor: '#0F0F0F',
  },
  boxLeftTitle: {},
  boxLeftChevron: {},
  topBoxRight: {
    width: 40,
    height: 40,
    gap: 8,
    opacity: 1,
  },
  nav: {
    width: 375,
    height: 64,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 24,
    opacity: 1,
  },
  details: {
    width: 375,
    height: 98,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 16,
    opacity: 1,
  },
  expencesBox: {
    width: 375,
    height: 377,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 32,
    opacity: 1,
  },
});
