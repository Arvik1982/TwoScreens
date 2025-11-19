import { Platform } from 'react-native';

type AllowedFontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'system-ui',
      fontWeight: '400' as AllowedFontWeight,
    },
    medium: { fontFamily: 'system-ui', fontWeight: '500' as AllowedFontWeight },
    bold: { fontFamily: 'system-ui', fontWeight: '700' as AllowedFontWeight },
    heavy: { fontFamily: 'system-ui', fontWeight: '900' as AllowedFontWeight },
  },
  default: {
    regular: { fontFamily: 'normal', fontWeight: '400' as AllowedFontWeight },
    medium: { fontFamily: 'normal', fontWeight: '500' as AllowedFontWeight },
    bold: { fontFamily: 'normal', fontWeight: '700' as AllowedFontWeight },
    heavy: { fontFamily: 'normal', fontWeight: '900' as AllowedFontWeight },
  },
  web: {
    regular: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontWeight: '400' as AllowedFontWeight,
    },
    medium: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontWeight: '500' as AllowedFontWeight,
    },
    bold: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontWeight: '700' as AllowedFontWeight,
    },
    heavy: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontWeight: '900' as AllowedFontWeight,
    },
  },
};

export const Fonts = Platform.select(fontConfig)!;
