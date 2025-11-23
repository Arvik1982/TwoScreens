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
      fontFamily: 'Inter-Regular',
      fontWeight: '400' as AllowedFontWeight,
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as AllowedFontWeight,
    },
    semiBold: {
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600' as AllowedFontWeight,
    },
    bold: {
      fontFamily: 'Inter-Bold',
      fontWeight: '700' as AllowedFontWeight,
    },
    heavy: {
      fontFamily: 'Inter-Black',
      fontWeight: '900' as AllowedFontWeight,
    },
  },
  android: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400' as AllowedFontWeight,
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as AllowedFontWeight,
    },
    semiBold: {
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600' as AllowedFontWeight,
    },
    bold: {
      fontFamily: 'Inter-Bold',
      fontWeight: '700' as AllowedFontWeight,
    },
    heavy: {
      fontFamily: 'Inter-Black',
      fontWeight: '900' as AllowedFontWeight,
    },
  },
  web: {
    regular: {
      fontFamily: 'Inter-Regular, system-ui, sans-serif',
      fontWeight: '400' as AllowedFontWeight,
    },
    medium: {
      fontFamily: 'Inter-Medium, system-ui, sans-serif',
      fontWeight: '500' as AllowedFontWeight,
    },
    semiBold: {
      fontFamily: 'Inter-SemiBold, system-ui, sans-serif',
      fontWeight: '600' as AllowedFontWeight,
    },
    bold: {
      fontFamily: 'Inter-Bold, system-ui, sans-serif',
      fontWeight: '700' as AllowedFontWeight,
    },
    heavy: {
      fontFamily: 'Inter-Black, system-ui, sans-serif',
      fontWeight: '900' as AllowedFontWeight,
    },
  },
};

export const Fonts = Platform.select(fontConfig)!;
