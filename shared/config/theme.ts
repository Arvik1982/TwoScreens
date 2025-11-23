/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Fonts } from '@/shared/config/fonts';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Colors } from './colors';

export const customDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...Colors['dark'],
  },
  fonts: Fonts,
};
export const customDefaultTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors['light'],
  },
  fonts: Fonts,
};
