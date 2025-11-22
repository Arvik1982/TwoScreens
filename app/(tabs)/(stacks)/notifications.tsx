import Notificationslist from '@/features/notifications/Notificationslist';
import ChevronLeftIcon from '@/shared/assets/svg/CommonIcons/ChevroneLeftIcon';
import NotificationIcon from '@/shared/assets/svg/CommonIcons/NotificationIcon';
import notifications from '@/shared/constants/mockData/notifications.json';
import { ThemedText } from '@/shared/ui/ThemedText';
import { ThemedView } from '@/shared/ui/ThemedView';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const filterItems = ['All', 'Payments', 'System', 'Delivery', 'Travel'];

export default function Notifications() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const selectItemFunction = (index: number): void => {
    setSelectedItemIndex(index);
  };
  return (
    <ThemedView style={styles.contentContainer}>
      <ThemedView style={styles.topBox}>
        <ThemedView>
          <TouchableOpacity
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 50,
            }}
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
          <ThemedText style={{ fontSize: 21 }} type="defaultMedium">
            Notifications
          </ThemedText>
        </ThemedView>

        <ThemedView>
          <NotificationIcon color="white" />
        </ThemedView>
      </ThemedView>

      <ThemedView
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {filterItems.map((item, index) => {
          return (
            <TouchableOpacity
              key={index + item}
              style={{
                padding: 12,
                borderBottomColor:
                  index === selectedItemIndex ? '#FE5900' : '#1F1F1F',
                borderBottomWidth: index === selectedItemIndex ? 2 : 1,
              }}
              onPress={() => selectItemFunction(index)}
            >
              <ThemedText
                darkColor={index === selectedItemIndex ? '#FE5900' : '#AEAEAE'}
              >
                {item}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ThemedView>
      <Notificationslist notifications={notifications} />
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
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
});
