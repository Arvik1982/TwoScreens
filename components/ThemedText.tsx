import { Fonts } from '@/constants/fonts';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;

  type?:
    | 'default'
    | 'title'
    | 'subtitle'
    | 'link'
    | 'defaultSemiBold'
    | 'defaultMedium'
    | 'defaultBold';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',

  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const getFontStyle = () => {
    switch (type) {
      case 'defaultSemiBold':
        return Fonts.semiBold;
      case 'defaultMedium':
        return Fonts.medium;
      case 'defaultBold':
        return Fonts.bold;
      case 'title':
        return Fonts.bold;
      case 'subtitle':
        return Fonts.bold;
      default:
        return Fonts.regular;
    }
  };

  return (
    <Text
      style={[
        { color },
        getFontStyle(),
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
  },
  defaultMedium: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
