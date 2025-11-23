import Details from '@/features/home/Detais';
import ExpencesBox from '@/features/home/ExpencesBox';
import HeaderBox from '@/features/home/Header';
import ServicesNavMenu from '@/features/home/ServicesNavMenu';

import { ThemedView } from '@/shared/ui/ThemedView';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.contentContainer}>
      <HeaderBox />
      <ServicesNavMenu />
      <Details />
      <ExpencesBox />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 24,
  },
});
