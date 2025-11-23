import { ThemedText } from '@/shared/ui/ThemedText';
import { ThemedView } from '@/shared/ui/ThemedView';
import { router } from 'expo-router';
import { Button } from 'react-native';

export default function Profile() {
  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <ThemedText type="title">Экран профиля</ThemedText>
      <Button title="Назад" onPress={() => router.back()} />
    </ThemedView>
  );
}
