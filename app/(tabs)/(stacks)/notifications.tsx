import Filter from '@/features/notifications/Filter';
import Notificationslist from '@/features/notifications/Notificationslist';
import TopBox from '@/features/notifications/TopBox';

import notifications from '@/shared/constants/mockData/notifications.json';
import { ThemedView } from '@/shared/ui/ThemedView';
import { StyleSheet } from 'react-native';

export default function Notifications() {
  return (
    <ThemedView style={styles.contentContainer}>
      <TopBox />
      <ThemedView style={styles.notificationsBox}>
        <Filter />
        <Notificationslist notifications={notifications} />
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
  notificationsBox: { flex: 1, paddingHorizontal: 10, gap: 15 },
});
