import { customDarkTheme, customDefaultTheme } from '@/shared/config/theme';
import { useColorScheme } from '@/shared/lib/hooks/useColorScheme';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import getLayoutStyles from './layoutStyles';

export const unstable_settings = {
  anchor: '(tabs)',
};

const App = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? customDarkTheme : customDefaultTheme;
  const style = getLayoutStyles(theme);
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'Inter-Black': Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log('Шрифты загружены:', fontsLoaded);

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView style={style.safeAreaStyles}>{children}</SafeAreaView>
    </ThemeProvider>
  );
};

export default function RootLayout() {
  return (
    <>
      <App>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </App>
    </>
  );
}
