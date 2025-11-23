import { Haptic } from '@/features/tapbar/Haptic';
import AnalyticsIcon from '@/shared/assets/svg/TabbarIcons/AnalyticsIcon';
import ChatsIcon from '@/shared/assets/svg/TabbarIcons/ChatsIcon';
import HistoryIcon from '@/shared/assets/svg/TabbarIcons/HistoryIcon';
import HomeIcon from '@/shared/assets/svg/TabbarIcons/HomeIcon';
import PaymentsIcon from '@/shared/assets/svg/TabbarIcons/PaymentsIcon';
import { Colors } from '@/shared/config/colors';
import { useColorScheme } from '@/shared/lib/hooks/useColorScheme';
import React from 'react';

import { Tabs } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarButton: Haptic,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color }) => <PaymentsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <HistoryIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analitics',
          tabBarIcon: ({ color }) => <AnalyticsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => <ChatsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stacks)"
        options={{
          title: '(stacks)',
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
