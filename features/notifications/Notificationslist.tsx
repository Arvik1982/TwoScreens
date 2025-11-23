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

  const today = new Date(2025, 5, 17); // 17 June 2025
  const yesterday = new Date(2025, 5, 16); // 16 June 2025

  const groupedNotifications = groupTransactions(
    notifications,
    today,
    yesterday,
    true,
  );

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
                style={[
                  styles.img,
                  notification.photo
                    ? { width: 40, height: 40 }
                    : { width: 25, height: 25 },
                ]}
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
          <ThemedText type="defaultMedium">{notification.name}</ThemedText>

          {notification.summ ? (
            <ThemedText
              darkColor="#FE5900"
              type="defaultSemiBold"
              style={styles.centerSummText}
            >
              {notification.summ > 0 ? '+$' : '-$'}
              {notification.summ !== 0 && Math.abs(notification.summ)}
            </ThemedText>
          ) : null}

          <ThemedText
            darkColor="#AEAEAE"
            type="default"
            style={styles.centerDescriptionText}
          >
            {notification.description}
          </ThemedText>
          <ThemedText style={styles.descriptionTextBottom}>
            <ThemedText
              style={styles.descriptionTextBottom}
              darkColor="#616161"
            >
              {notification.year}
            </ThemedText>
            <ThemedText
              style={styles.descriptionTextBottom}
              darkColor="#616161"
            >
              · {notification.noteType}
            </ThemedText>
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.right}>
          {notification.statusRead && (
            <ThemedView
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              style={styles.dot}
            />
          )}
        </ThemedView>
      </ThemedView>
    );
  };

  const renderDayGroup = (group: GroupedTransactions) => (
    <ThemedView key={group.title + group.data} style={styles.dayGroup}>
      <ThemedText
        darkColor="#AEAEAE"
        style={{ fontSize: 16 }}
        type="defaultMedium"
      >
        {group.title.toUpperCase()}
      </ThemedText>
      <ThemedView style={styles.notificationList}>
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

  notificationList: {
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
    paddingRight: 16,
    backgroundColor: 'transparent',
  },
  left: {
    alignItems: 'flex-start',
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
    borderRadius: 12,
    width: 25,
    height: 25,
  },
  center: {
    height: '100%',
    gap: 6,
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
    flexShrink: 1,
  },

  centerDescriptionText: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    fontSize: 14,
  },
  descriptionTextBottom: { flexDirection: 'row', fontSize: 12 },
  centerSummText: { fontSize: 21 },

  right: {
    height: '100%',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    width: 20,
  },

  dot: { width: 6, height: 6, borderRadius: 50 },
});

export default memo(NotificationsList);
