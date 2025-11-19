import AnalyticsIcon from '@/assets/svg/TabbarIcons/AnalyticsIcon';
import ChatsIcon from '@/assets/svg/TabbarIcons/ChatsIcon';
import HistoryIcon from '@/assets/svg/TabbarIcons/HistoryIcon';
import HomeIcon from '@/assets/svg/TabbarIcons/HomeIcon';
import PaymentsIcon from '@/assets/svg/TabbarIcons/PaymentsIcon';
import { Haptic } from '@/components/Tapbar/Haptic';
import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';

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
          // tabBarIcon: ({ color }) => (
          //   <IconSymbol size={28} name="house.fill" color={color} />
          // ),
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
    </Tabs>
  );
}
