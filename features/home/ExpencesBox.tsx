import transactions from '@/shared/constants/mockData/transactions.json';
import { ThemedText } from '@/shared/ui/ThemedText';
import { ThemedView } from '@/shared/ui/ThemedView';
import { StyleSheet } from 'react-native';
import TransactionsList from './TransactionsList';
import WeekExpencesBar from './WeekExpencesBar';

export default function ExpencesBox() {
  return (
    <ThemedView style={styles.expencesBox}>
      <ThemedView style={styles.expencesBoxHeadding}>
        <ThemedView style={styles.heddingTitleBox}>
          <ThemedView style={{ flexDirection: 'row' }}>
            <ThemedText type="defaultMedium" style={{ fontSize: 21 }}>
              Expenses in
            </ThemedText>
            <ThemedText
              type="defaultMedium"
              style={{ color: '#FE5900', fontSize: 21 }}
            >
              {' '}
              June
            </ThemedText>
          </ThemedView>
          <ThemedText
            type="defaultMedium"
            style={{ color: '#AEAEAE', fontSize: 21 }}
          >
            $5,091
          </ThemedText>
        </ThemedView>
        <WeekExpencesBar />
      </ThemedView>
      <TransactionsList transactions={transactions} />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  expencesBox: {
    width: '100%',
    height: 377,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 32,
    opacity: 1,
  },
  expencesBoxHeadding: {
    gap: 16,
    height: 49,
  },

  heddingTitleBox: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
