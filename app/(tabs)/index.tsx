import ChevronIcon from '@/assets/svg/CommonIcons/ChevronIcon';
import CrossIcon from '@/assets/svg/CommonIcons/CrossIcon';
import AvatarIcon from '@/assets/svg/TopIcons/AvatarIcon';
import QrIcon from '@/assets/svg/TopIcons/QrIcon';
import CardDetailsList from '@/components/HomeScreen/CardsDetaisList';
import ServicesNavMenu from '@/components/HomeScreen/ServicesNavMenu';
import TransactionList from '@/components/HomeScreen/TransactionsList';
import WeekExpencesBar from '@/components/HomeScreen/WeekExpencesBar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import transactions from '@/constants/mockData/transactions.json';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.contentContainer}>
      <ThemedView style={styles.topBox}>
        <ThemedView style={styles.topBoxLeft}>
          <ThemedView style={styles.boxLeftAvatar}>
            <AvatarIcon />
          </ThemedView>

          <ThemedView style={styles.boxLeftTitle}>
            <ThemedText type="default">Charlotte</ThemedText>
          </ThemedView>

          <ThemedView style={styles.boxLeftChevron}>
            <ChevronIcon />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.topBoxRight}>
          <QrIcon />
        </ThemedView>
      </ThemedView>

      <ServicesNavMenu />

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

      <ThemedView style={styles.expencesBox}>
        <ThemedView style={styles.expencesBoxHeadding}>
          <ThemedView
            style={{
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
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

        <TransactionList transactions={transactions} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 24,
  },
  topBox: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
  topBoxLeft: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  boxLeftAvatar: {
    width: 36,
    height: 36,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    backgroundColor: '#0F0F0F',
  },
  boxLeftTitle: {
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  boxLeftTitleText: {
    textAlign: 'center',
    width: '100%',
  },
  boxLeftChevron: {
    width: 6,
    height: 10,
  },

  topBoxRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    width: 40,
    height: 40,
  },

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

  expencesBoxSections: {},
  boxSectionsToday: {},
  boxSectionsYesterday: {},
});
