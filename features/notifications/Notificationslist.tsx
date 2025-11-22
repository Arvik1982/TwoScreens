import ann from '@/shared/assets/images/ann.jpg';
import arrow from '@/shared/assets/images/arrow.png';
import planet from '@/shared/assets/images/planet.png';
import shield from '@/shared/assets/images/shield.png';
import { Colors } from '@/shared/config/colors';
import { groupTransactions } from '@/shared/lib/functions/groupedTransactions';
import { GroupedTransactions, Notification } from '@/types/types';
import React, { memo } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '../../shared/ui/ThemedText';
import { ThemedView } from '../../shared/ui/ThemedView';

interface NotificationsListProps {
  notifications: Notification[];
}

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications: notifications,
}) => {
  const imageMap = {
    'planet.png': planet,
    'arrow.png': arrow,
    'shield.png': shield,
    'ann.jpg': ann,
  };

  const groupedNotifications = groupTransactions(notifications);

  const renderTransaction = (notification: Notification) => {
    return (
      <ThemedView
        lightColor={Colors.light.backgroundItem}
        key={notification.id}
        style={styles.notificationItem}
      >
        <ThemedView style={styles.left}>
          {notification.img ? (
            <ThemedView style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={imageMap[notification.img as keyof typeof imageMap]}
              />
            </ThemedView>
          ) : (
            <ThemedText darkColor="#0F0F0F">
              {notification.name.charAt(0)}
            </ThemedText>
          )}
        </ThemedView>
        <ThemedView style={styles.center}>
          <ThemedText style={styles.centerHeader}>
            {notification.name}
          </ThemedText>

          <ThemedText style={styles.centerSumm}>
            {notification.summ > 0 ? '+$' : notification.summ !== 0 ? '-$' : ''}
            {notification.summ !== 0 && Math.abs(notification.summ)}
          </ThemedText>

          <ThemedText style={styles.centerDescription}>
            {notification.description}
          </ThemedText>

          <ThemedText style={{ flexDirection: 'row' }}>
            <ThemedText style={styles.centerDate}>
              {notification.year}
            </ThemedText>
            <ThemedText style={styles.centerType}>
              · {notification.noteType}
            </ThemedText>
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.right}>
          <ThemedView
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={styles.dot}
          ></ThemedView>
        </ThemedView>
      </ThemedView>
    );
  };

  const renderDayGroup = (group: GroupedTransactions) => (
    <ThemedView key={group.title + group.data} style={styles.dayGroup}>
      <ThemedText style={{ fontSize: 16 }} type="defaultMedium">
        {group.title}
      </ThemedText>
      <ThemedView style={styles.transactionsList}>
        {group.data.map(renderTransaction)}
      </ThemedView>
    </ThemedView>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {groupedNotifications.map(renderDayGroup)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dayGroup: {
    marginBottom: 24,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F1F',
  },

  transactionsList: {
    backgroundColor: 'transparent',
    borderRadius: 0,
  },

  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

    gap: 12,

    paddingVertical: 16,
    marginBottom: 3,
    width: '100%',
    minHeight: 116,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  left: {
    alignItems: 'flex-start',
  },

  icon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
  },
  iconAdditional: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#0F0F0F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  img: {
    width: 25,
    height: 25,
  },
  center: {
    height: '100%',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
    flexShrink: 1,
  },

  centerHeader: {},
  centerSumm: {},
  centerDescription: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  centerDate: {},
  centerType: {},

  right: {
    height: '100%',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    width: 20,
  },

  transactionType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dot: { width: 6, height: 6, borderRadius: 50 },
});

export default memo(NotificationsList);
