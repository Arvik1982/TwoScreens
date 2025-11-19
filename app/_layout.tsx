import { customDarkTheme, customDefaultTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/useColorScheme';
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
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </App>
    </>
  );
}
