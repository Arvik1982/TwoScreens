import CrossIcon from '@/shared/assets/svg/CommonIcons/CrossIcon';
import { ThemedView } from '@/shared/ui/ThemedView';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CardDetailsList from './CardsDetaisList';

export default function Details() {
  return (
    <ThemedView style={styles.details}>
      <ThemedView style={styles.detailsCardsContainer}>
        <CardDetailsList />
      </ThemedView>

      <TouchableOpacity
        onPress={() => {}}
        style={styles.detailsButtonContainer}
      >
        <CrossIcon />
      </TouchableOpacity>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 98,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 10,
  },
  detailsCardsContainer: {
    height: '100%',
    width: '85%',
  },

  detailsButtonContainer: {
    backgroundColor: '#0F0F0F',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    borderRadius: 16,
    padding: 12,
  },
});
