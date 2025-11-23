import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          title: 'Профиль',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
