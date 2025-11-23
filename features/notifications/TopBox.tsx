import ChevronLeftIcon from '@/shared/assets/svg/CommonIcons/ChevroneLeftIcon';
import NotificationIcon from '@/shared/assets/svg/CommonIcons/NotificationIcon';
import { ThemedText } from '@/shared/ui/ThemedText';
import { ThemedView } from '@/shared/ui/ThemedView';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function TopBox() {
  return (
    <ThemedView style={styles.topBox}>
      <ThemedView>
        <TouchableOpacity
          hitSlop={styles.backButton}
          style={{
            alignItems: 'center',
          }}
          onPress={() => router.back()}
        >
          <ThemedView>
            <ChevronLeftIcon />
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView>
        <ThemedText style={styles.font21} type="defaultMedium">
          Notifications
        </ThemedText>
      </ThemedView>

      <ThemedView>
        <NotificationIcon color="white" />
      </ThemedView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  topBox: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
  backButton: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 50,
  },
  font21: { fontSize: 21 },
});
