import ChevronIcon from '@/assets/svg/CommonIcons/ChevronIcon';
import BonusIcon from '@/assets/svg/NavIcons/BonusIcon';
import DeliveryIcon from '@/assets/svg/NavIcons/DeliveryIcon';
import SupportIcon from '@/assets/svg/NavIcons/SupportIcon';
import TravelIcon from '@/assets/svg/NavIcons/TravelIcon';
import AvatarIcon from '@/assets/svg/TopIcons/AvatarIcon';
import QrIcon from '@/assets/svg/TopIcons/QrIcon';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.contentContainer}>
      <ThemedView style={styles.topBox}>
        <ThemedView style={styles.topBoxLeft}>
          <ThemedView style={styles.boxLeftAvatar}>
            <AvatarIcon />
          </ThemedView>

          <ThemedView style={styles.boxLeftTitle}>
            <ThemedText type="default">'AAAaaaaa bbb'</ThemedText>
          </ThemedView>

          <ThemedView style={styles.boxLeftChevron}>
            <ChevronIcon />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.topBoxRight}>
          <QrIcon />
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.nav}>
        <ThemedView style={styles.navItemContainer}>
          <TravelIcon />
          <ThemedText>Tggg</ThemedText>
        </ThemedView>
        <ThemedView style={styles.navItemContainer}>
          <DeliveryIcon />
          <ThemedText>Tggg</ThemedText>
        </ThemedView>
        <ThemedView style={styles.navItemContainer}>
          <BonusIcon />
          <ThemedText>Tggg</ThemedText>
        </ThemedView>
        <ThemedView style={styles.navItemContainer}>
          <SupportIcon />
          <ThemedText>Tggg</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.details}>
        <ThemedView style={styles.detailsCardsContainer}></ThemedView>
        <ThemedView style={styles.detailsButtonContainer}></ThemedView>
      </ThemedView>
      <ThemedView style={styles.expencesBox}>
        <ThemedView style={styles.expencesBoxHeadding}></ThemedView>
        <ThemedView style={styles.expencesBoxSections}>
          <ThemedView style={styles.boxSectionsToday}></ThemedView>
          <ThemedView style={styles.boxSectionsYesterday}></ThemedView>
        </ThemedView>
      </ThemedView>
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
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
  topBoxLeft: {
    // width: 132,
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
    // gap: 8,
  },
  nav: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 64,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 24,
  },
  navItemContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: 64,
    height: 64,
    gap: 8,
    borderRadius: 16,
  },

  details: {
    width: 375,
    height: 98,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 16,
  },
  detailsCardsContainer: {},
  detailsButtonContainer: {},
  expencesBox: {
    width: 375,
    height: 377,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 32,
    opacity: 1,
  },
  expencesBoxHeadding: {},
  expencesBoxSections: {},
  boxSectionsToday: {},
  boxSectionsYesterday: {},
});
