import ChevronIcon from '@/shared/assets/svg/CommonIcons/ChevronIcon';
import AvatarIcon from '@/shared/assets/svg/TopIcons/AvatarIcon';
import QrIcon from '@/shared/assets/svg/TopIcons/QrIcon';
import { ThemedText } from '@/shared/ui/ThemedText';
import { ThemedView } from '@/shared/ui/ThemedView';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function HeaderBox() {
  return (
    <ThemedView style={styles.topBox}>
      <ThemedView style={styles.topBoxLeft}>
        <ThemedView style={styles.boxLeftAvatar}>
          <AvatarIcon />
        </ThemedView>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/(stacks)/notifications')}
        >
          <ThemedView style={styles.boxLeftTitle}>
            <ThemedText style={{ fontSize: 16 }} type="defaultMedium">
              Charlotte
            </ThemedText>
          </ThemedView>
        </TouchableOpacity>
        <ThemedView style={styles.boxLeftChevron}>
          <ChevronIcon />
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.topBoxRight}>
        <QrIcon />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
});
