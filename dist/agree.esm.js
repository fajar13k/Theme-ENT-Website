export { default as merge } from 'deepmerge';
import { makeTheme } from '@theme-ui/css/utils';

var color = {
  primary70: '#A40917',
  primary60: '#C40D0E',
  primary50: '#E42313',
  primary40: '#EEAFAF',
  primary30: '#F4CACA',
  primary20: '#F9E4E4',
  primary10: '#FDF7F7',
  secondary70: '#474D66',
  secondary60: '#8F95B2',
  secondary50: '#D8DAE5',
  secondary40: '#EDEFF5',
  secondary30: '#F9FAFC',
  secondary20: '#FBFCFF',
  secondary10: '#FFFFFF',
  warning70: '#66460D',
  warning60: '#996A13',
  warning50: '#FFB020',
  warning40: '#FFD079',
  warning30: '#FFDFA6',
  warning20: '#FFEFD2',
  warning10: '#FFFAF1',
  success70: '#317159',
  success60: '#429777',
  success50: '#52BD94',
  success40: '#A3E6CD',
  success30: '#DCF2EA',
  success20: '#EEF8F4',
  success10: '#F5FBF8',
  error70: '#A74436',
  error60: '#BF2600',
  error50: '#FF5630',
  error40: '#FF7452',
  error30: '#FFBDAD',
  error20: '#FFEBE6',
  error10: '#FFF5F3',
  information70: '#1F3D99',
  information60: '#2952CC',
  information50: '#3366FF',
  information40: '#9DB5FF',
  information30: '#D6E0FF',
  information20: '#EBF0FF',
  information10: '#F3F6FF',
  grayscale100: '#151718',
  grayscale90: '#262829',
  grayscale80: '#2E3032',
  grayscale70: '#5C5E61',
  grayscale60: '#8C8F93',
  grayscale50: '#B1B5BA',
  grayscale40: '#C8CCD2',
  grayscale30: '#D9DDE3',
  grayscale20: '#F2F4F6',
  grayscale10: '#FFFFFF'
};

// Spacer
var spacer = {
  spacing0: '1px',
  spacing1: '4px',
  spacing2: '0.5rem',
  spacing3: '0.75rem',
  spacing4: '1rem',
  spacing5: '1.25rem',
  spacing6: '1.5rem',
  spacing7: '1.75rem',
  spacing8: '2rem',
  spacing9: '2.25rem',
  spacing10: '2.5rem',
  spacing11: '3rem',
  spacing12: '3.5rem',
  spacing13: '4rem',
  spacing14: '5rem',
  spacing15: '6rem',
  spacing16: '7rem',
  spacing17: '8rem',
  spacing18: '9rem',
  spacing19: '10rem',
  spacing20: '11rem',
  spacing21: '12rem',
  spacing22: '13rem',
  spacing23: '14rem',
  spacing24: '15rem',
  spacing25: '16rem',
  spacing26: '18rem',
  spacing27: '20rem',
  spacing28: '24rem'
};

/**
 * Do not edit directly
 * Generated on Wed, 27 Jul 2022 08:32:55 GMT
 */
var tokens = {
  elevation0Color: '#ebf0ff',
  elevation0Type: 'dropShadow',
  elevation0X: '0px',
  elevation0Y: '0px',
  elevation0Blur: '0px',
  elevation0Spread: '2px',
  elevation1Color: '#0000000d',
  elevation1Type: 'dropShadow',
  elevation1X: '0px',
  elevation1Y: '1px',
  elevation1Blur: '0px',
  elevation1Spread: '0px',
  elevation20Color: '#00000040',
  elevation20Type: 'dropShadow',
  elevation20X: '0px',
  elevation20Y: '0px',
  elevation20Blur: '1px',
  elevation20Spread: '0px',
  elevation21Color: '#0000000d',
  elevation21Type: 'dropShadow',
  elevation21X: '0px',
  elevation21Y: '1px',
  elevation21Blur: '1px',
  elevation21Spread: '0px',
  elevation30Color: '#00000033',
  elevation30Type: 'dropShadow',
  elevation30X: '0px',
  elevation30Y: '0px',
  elevation30Blur: '2px',
  elevation30Spread: '0px',
  elevation31Color: '#0000001a',
  elevation31Type: 'dropShadow',
  elevation31X: '0px',
  elevation31Y: '2px',
  elevation31Blur: '10px',
  elevation31Spread: '0px',
  elevation40Color: '#0000001a',
  elevation40Type: 'dropShadow',
  elevation40X: '0px',
  elevation40Y: '0px',
  elevation40Blur: '3px',
  elevation40Spread: '0px',
  elevation41Color: '#00000026',
  elevation41Type: 'dropShadow',
  elevation41X: '0px',
  elevation41Y: '4px',
  elevation41Blur: '20px',
  elevation41Spread: '0px',
  elevation50Color: '#0000001a',
  elevation50Type: 'dropShadow',
  elevation50X: '0px',
  elevation50Y: '0px',
  elevation50Blur: '4px',
  elevation50Spread: '0px',
  elevation51Color: '#00000033',
  elevation51Type: 'dropShadow',
  elevation51X: '0px',
  elevation51Y: '8px',
  elevation51Blur: '40px',
  elevation51Spread: '0px',
  fontFamiliesPrimary: 'Montserrat',
  fontFamiliesSecondary: 'Open Sans',
  lineHeights0: '48px',
  lineHeights1: '42px',
  lineHeights2: '36px',
  lineHeights3: '32px',
  lineHeights4: '28px',
  lineHeights5: '26px',
  lineHeights6: '24px',
  lineHeights7: '21px',
  lineHeights8: '18px',
  lineHeights9: '16px',
  lineHeights10: '72px',
  lineHeights11: '56px',
  lineHeights12: '44px',
  lineHeights13: '40px',
  fontWeightsBold: 'Bold',
  fontWeightsRegular: 'Regular',
  fontWeightsSemiBold: 'SemiBold',
  fontWeightsItalic: 'Italic',
  fontSize0: '10px',
  fontSize1: '12px',
  fontSize2: '14px',
  fontSize3: '16px',
  fontSize4: '18px',
  fontSize5: '20px',
  fontSize6: '22px',
  fontSize7: '24px',
  fontSize8: '28px',
  fontSize9: '30px',
  fontSize10: '34px',
  fontSize11: '36px',
  fontSize12: '48px',
  fontSize13: '60px',
  letterSpacing0: '0px',
  letterSpacing1: '-0.08px',
  paragraphSpacing0: '0px',
  paragraphSpacing1: '18px',
  textCaseNone: 'none',
  textCaseUppercase: 'uppercase',
  textDecorationNone: 'none',
  textDecorationUnderline: 'underline',
  radius0: '0px',
  radius1: '2px',
  radius2: '4px',
  radius3: '6px',
  radius4: '8px',
  radius5: '16px',
  radius6: '32px',
  radius7: '500px',
  spacing1: '4px',
  spacing2: '8px',
  spacing3: '12px',
  spacing4: '16px',
  spacing5: '20px',
  spacing6: '24px',
  spacing7: '28px',
  spacing8: '32px',
  spacing9: '36px',
  spacing10: '40px',
  spacing11: '48px',
  spacing12: '56px',
  border1: '1px',
  border2: '2px',
  border0: '0px',
  size1: '8px',
  size2: '12px',
  size3: '16px',
  size4: '20px',
  size5: '24px',
  size6: '32px',
  size7: '40px',
  size8: '58px',
  size9: '64px',
  baseWhite: '#ffffff',
  baseBlack: '#000000',
  agr25: '#f9fbf9',
  agr50: '#f2f8f3',
  agr100: '#e6f1e8',
  agr200: '#cae2cf',
  agr300: '#aad2b2',
  agr400: '#82c190',
  agr500: '#47af64',
  agr600: '#3f9c59',
  agr700: '#36874d',
  agr800: '#2c6e3f',
  agr900: '#1f4e2c',
  agl25: '#fffaf8',
  agl50: '#fff6f1',
  agl100: '#ffeee4',
  agl200: '#ffdbc5',
  agl300: '#ffc8a1',
  agl400: '#ffb272',
  agl500: '#ff9900',
  agl600: '#e48800',
  agl700: '#c57600',
  agl800: '#a16000',
  agl900: '#724400',
  aqf25: '#f8fafd',
  aqf50: '#f2f6fb',
  aqf100: '#e4eef7',
  aqf200: '#c6dcf0',
  aqf300: '#a3c9e8',
  aqf400: '#73b2df',
  aqf500: '#229bd8',
  aqf600: '#1e8ac1',
  aqf700: '#1a78a7',
  aqf800: '#156288',
  aqf900: '#0f4560',
  secondary25: '#f1f2f2',
  secondary50: '#dbdede',
  secondary100: '#a6b3b7',
  secondary200: '#8da0a8',
  secondary300: '#607b86',
  secondary400: '#345664',
  secondary500: '#073142',
  secondary600: '#062b3b',
  secondary700: '#052533',
  secondary800: '#041e29',
  secondary900: '#03151d',
  tertiary25: '#f9f9f9',
  tertiary50: '#f3f3f3',
  tertiary100: '#e8e8e8',
  tertiary200: '#cecece',
  tertiary300: '#b1b1b1',
  tertiary400: '#8f8f8f',
  tertiary500: '#616161',
  tertiary600: '#565656',
  tertiary700: '#4b4b4b',
  tertiary800: '#3d3d3d',
  tertiary900: '#2b2b2b',
  error25: '#fef9f8',
  error50: '#fdf2f2',
  error100: '#fce6e5',
  error200: '#f9cac8',
  error300: '#f6a9a7',
  error400: '#f3817c',
  error500: '#f04438',
  error600: '#d63c32',
  error700: '#b9342b',
  error800: '#972b23',
  error900: '#6b1e19',
  warning25: '#fefaf8',
  warning50: '#fef6f1',
  warning100: '#fdece4',
  warning200: '#fbd9c5',
  warning300: '#fac4a1',
  warning400: '#f8ac72',
  warning500: '#f79009',
  warning600: '#dc8008',
  warning700: '#bf6f06',
  warning800: '#9c5b05',
  warning900: '#6e4004',
  success25: '#f6fef9',
  success50: '#ecfdf3',
  success100: '#d1fadf',
  success200: '#a6f4c5',
  success300: '#6ce9a6',
  success400: '#32d583',
  success500: '#12b76a',
  success600: '#039855',
  success700: '#027a48',
  success800: '#05603a',
  success900: '#054f31',
  information25: '#f5fbff',
  information50: '#f0f9ff',
  information100: '#e0f2fe',
  information200: '#b9e6fe',
  information300: '#7cd4fd',
  information400: '#36bffa',
  information500: '#0ba5ec',
  information600: '#0086c9',
  information700: '#026aa2',
  information800: '#065986',
  information900: '#0b4a6f',
  headingHeading1FontFamily: 'Montserrat',
  headingHeading1FontWeight: 'Bold',
  headingHeading1LineHeight: '48px',
  headingHeading1FontSize: '30px',
  headingHeading1LetterSpacing: '0px',
  headingHeading1ParagraphSpacing: '0px',
  headingHeading1TextCase: 'none',
  headingHeading1TextDecoration: 'none',
  headingHeading2FontFamily: 'Montserrat',
  headingHeading2FontWeight: 'Bold',
  headingHeading2LineHeight: '42px',
  headingHeading2FontSize: '28px',
  headingHeading2LetterSpacing: '0px',
  headingHeading2ParagraphSpacing: '0px',
  headingHeading2TextCase: 'none',
  headingHeading2TextDecoration: 'none',
  headingHeading3FontFamily: 'Montserrat',
  headingHeading3FontWeight: 'Bold',
  headingHeading3LineHeight: '36px',
  headingHeading3FontSize: '24px',
  headingHeading3LetterSpacing: '0px',
  headingHeading3ParagraphSpacing: '0px',
  headingHeading3TextCase: 'none',
  headingHeading3TextDecoration: 'none',
  headingHeading4FontFamily: 'Montserrat',
  headingHeading4FontWeight: 'Bold',
  headingHeading4LineHeight: '32px',
  headingHeading4FontSize: '22px',
  headingHeading4LetterSpacing: '0px',
  headingHeading4ParagraphSpacing: '0px',
  headingHeading4TextCase: 'none',
  headingHeading4TextDecoration: 'none',
  headingHeading5FontFamily: 'Montserrat',
  headingHeading5FontWeight: 'Bold',
  headingHeading5LineHeight: '28px',
  headingHeading5FontSize: '20px',
  headingHeading5LetterSpacing: '0px',
  headingHeading5ParagraphSpacing: '0px',
  headingHeading5TextCase: 'none',
  headingHeading5TextDecoration: 'none',
  headingHeading6FontFamily: 'Montserrat',
  headingHeading6FontWeight: 'Bold',
  headingHeading6LineHeight: '26px',
  headingHeading6FontSize: '18px',
  headingHeading6LetterSpacing: '0px',
  headingHeading6ParagraphSpacing: '0px',
  headingHeading6TextCase: 'uppercase',
  headingHeading6TextDecoration: 'none',
  bodyLargeRegularFontFamily: 'Montserrat',
  bodyLargeRegularFontWeight: 'Regular',
  bodyLargeRegularLineHeight: '24px',
  bodyLargeRegularFontSize: '16px',
  bodyLargeRegularLetterSpacing: '0px',
  bodyLargeRegularParagraphSpacing: '0px',
  bodyLargeRegularTextCase: 'none',
  bodyLargeRegularTextDecoration: 'none',
  bodyLargeSemiboldFontFamily: 'Montserrat',
  bodyLargeSemiboldFontWeight: 'SemiBold',
  bodyLargeSemiboldLineHeight: '24px',
  bodyLargeSemiboldFontSize: '16px',
  bodyLargeSemiboldLetterSpacing: '0px',
  bodyLargeSemiboldParagraphSpacing: '0px',
  bodyLargeSemiboldTextCase: 'none',
  bodyLargeSemiboldTextDecoration: 'none',
  bodyLargeBoldFontFamily: 'Montserrat',
  bodyLargeBoldFontWeight: 'Bold',
  bodyLargeBoldLineHeight: '24px',
  bodyLargeBoldFontSize: '16px',
  bodyLargeBoldLetterSpacing: '0px',
  bodyLargeBoldParagraphSpacing: '0px',
  bodyLargeBoldTextCase: 'none',
  bodyLargeBoldTextDecoration: 'none',
  bodyLargeItalicFontFamily: 'Montserrat',
  bodyLargeItalicFontWeight: 'Italic',
  bodyLargeItalicLineHeight: '24px',
  bodyLargeItalicFontSize: '16px',
  bodyLargeItalicLetterSpacing: '0px',
  bodyLargeItalicParagraphSpacing: '0px',
  bodyLargeItalicTextCase: 'none',
  bodyLargeItalicTextDecoration: 'none',
  bodyLargeUnderlineFontFamily: 'Montserrat',
  bodyLargeUnderlineFontWeight: 'Regular',
  bodyLargeUnderlineLineHeight: '24px',
  bodyLargeUnderlineFontSize: '16px',
  bodyLargeUnderlineLetterSpacing: '0px',
  bodyLargeUnderlineParagraphSpacing: '0px',
  bodyLargeUnderlineTextCase: 'none',
  bodyLargeUnderlineTextDecoration: 'underline',
  bodyLargeUnderlineSemiboldFontFamily: 'Montserrat',
  bodyLargeUnderlineSemiboldFontWeight: 'SemiBold',
  bodyLargeUnderlineSemiboldLineHeight: '24px',
  bodyLargeUnderlineSemiboldFontSize: '16px',
  bodyLargeUnderlineSemiboldLetterSpacing: '0px',
  bodyLargeUnderlineSemiboldParagraphSpacing: '0px',
  bodyLargeUnderlineSemiboldTextCase: 'none',
  bodyLargeUnderlineSemiboldTextDecoration: 'underline',
  bodyLargeUnderlineBoldFontFamily: 'Montserrat',
  bodyLargeUnderlineBoldFontWeight: 'Bold',
  bodyLargeUnderlineBoldLineHeight: '24px',
  bodyLargeUnderlineBoldFontSize: '16px',
  bodyLargeUnderlineBoldLetterSpacing: '0px',
  bodyLargeUnderlineBoldParagraphSpacing: '0px',
  bodyLargeUnderlineBoldTextCase: 'none',
  bodyLargeUnderlineBoldTextDecoration: 'underline',
  bodySmallRegularFontFamily: 'Montserrat',
  bodySmallRegularFontWeight: 'Regular',
  bodySmallRegularLineHeight: '21px',
  bodySmallRegularFontSize: '14px',
  bodySmallRegularLetterSpacing: '0px',
  bodySmallRegularParagraphSpacing: '0px',
  bodySmallRegularTextCase: 'none',
  bodySmallRegularTextDecoration: 'none',
  bodySmallSemiboldFontFamily: 'Montserrat',
  bodySmallSemiboldFontWeight: 'SemiBold',
  bodySmallSemiboldLineHeight: '21px',
  bodySmallSemiboldFontSize: '14px',
  bodySmallSemiboldLetterSpacing: '0px',
  bodySmallSemiboldParagraphSpacing: '0px',
  bodySmallSemiboldTextCase: 'none',
  bodySmallSemiboldTextDecoration: 'none',
  bodySmallBoldFontFamily: 'Montserrat',
  bodySmallBoldFontWeight: 'Bold',
  bodySmallBoldLineHeight: '21px',
  bodySmallBoldFontSize: '14px',
  bodySmallBoldLetterSpacing: '0px',
  bodySmallBoldParagraphSpacing: '0px',
  bodySmallBoldTextCase: 'none',
  bodySmallBoldTextDecoration: 'none',
  bodySmallItalicFontFamily: 'Montserrat',
  bodySmallItalicFontWeight: 'Italic',
  bodySmallItalicLineHeight: '21px',
  bodySmallItalicFontSize: '14px',
  bodySmallItalicLetterSpacing: '0px',
  bodySmallItalicParagraphSpacing: '0px',
  bodySmallItalicTextCase: 'none',
  bodySmallItalicTextDecoration: 'none',
  bodySmallUnderlineFontFamily: 'Montserrat',
  bodySmallUnderlineFontWeight: 'Regular',
  bodySmallUnderlineLineHeight: '21px',
  bodySmallUnderlineFontSize: '14px',
  bodySmallUnderlineLetterSpacing: '0px',
  bodySmallUnderlineParagraphSpacing: '18px',
  bodySmallUnderlineTextCase: 'none',
  bodySmallUnderlineTextDecoration: 'underline',
  bodySmallUnderlineSemiboldFontFamily: 'Montserrat',
  bodySmallUnderlineSemiboldFontWeight: 'SemiBold',
  bodySmallUnderlineSemiboldLineHeight: '21px',
  bodySmallUnderlineSemiboldFontSize: '14px',
  bodySmallUnderlineSemiboldLetterSpacing: '0px',
  bodySmallUnderlineSemiboldParagraphSpacing: '0px',
  bodySmallUnderlineSemiboldTextCase: 'none',
  bodySmallUnderlineSemiboldTextDecoration: 'underline',
  bodySmallUnderlineBoldFontFamily: 'Montserrat',
  bodySmallUnderlineBoldFontWeight: 'Bold',
  bodySmallUnderlineBoldLineHeight: '21px',
  bodySmallUnderlineBoldFontSize: '14px',
  bodySmallUnderlineBoldLetterSpacing: '-0.08px',
  bodySmallUnderlineBoldParagraphSpacing: '0px',
  bodySmallUnderlineBoldTextCase: 'none',
  bodySmallUnderlineBoldTextDecoration: 'underline',
  captionLargeRegularFontFamily: 'Montserrat',
  captionLargeRegularFontWeight: 'Regular',
  captionLargeRegularLineHeight: '18px',
  captionLargeRegularFontSize: '12px',
  captionLargeRegularLetterSpacing: '0px',
  captionLargeRegularParagraphSpacing: '0px',
  captionLargeRegularTextCase: 'none',
  captionLargeRegularTextDecoration: 'none',
  captionLargeSemiboldFontFamily: 'Montserrat',
  captionLargeSemiboldFontWeight: 'SemiBold',
  captionLargeSemiboldLineHeight: '18px',
  captionLargeSemiboldFontSize: '12px',
  captionLargeSemiboldLetterSpacing: '0px',
  captionLargeSemiboldParagraphSpacing: '0px',
  captionLargeSemiboldTextCase: 'none',
  captionLargeSemiboldTextDecoration: 'none',
  captionLargeBoldFontFamily: 'Montserrat',
  captionLargeBoldFontWeight: 'Bold',
  captionLargeBoldLineHeight: '18px',
  captionLargeBoldFontSize: '12px',
  captionLargeBoldLetterSpacing: '0px',
  captionLargeBoldParagraphSpacing: '0px',
  captionLargeBoldTextCase: 'none',
  captionLargeBoldTextDecoration: 'none',
  captionLargeItalicFontFamily: 'Montserrat',
  captionLargeItalicFontWeight: 'Italic',
  captionLargeItalicLineHeight: '18px',
  captionLargeItalicFontSize: '12px',
  captionLargeItalicLetterSpacing: '0px',
  captionLargeItalicParagraphSpacing: '0px',
  captionLargeItalicTextCase: 'none',
  captionLargeItalicTextDecoration: 'none',
  captionLargeUnderlineFontFamily: 'Montserrat',
  captionLargeUnderlineFontWeight: 'Regular',
  captionLargeUnderlineLineHeight: '18px',
  captionLargeUnderlineFontSize: '12px',
  captionLargeUnderlineLetterSpacing: '0px',
  captionLargeUnderlineParagraphSpacing: '0px',
  captionLargeUnderlineTextCase: 'none',
  captionLargeUnderlineTextDecoration: 'underline',
  captionLargeUnderlineSemiboldFontFamily: 'Montserrat',
  captionLargeUnderlineSemiboldFontWeight: 'SemiBold',
  captionLargeUnderlineSemiboldLineHeight: '18px',
  captionLargeUnderlineSemiboldFontSize: '12px',
  captionLargeUnderlineSemiboldLetterSpacing: '0px',
  captionLargeUnderlineSemiboldParagraphSpacing: '0px',
  captionLargeUnderlineSemiboldTextCase: 'none',
  captionLargeUnderlineSemiboldTextDecoration: 'underline',
  captionLargeUnderlineBoldFontFamily: 'Montserrat',
  captionLargeUnderlineBoldFontWeight: 'Bold',
  captionLargeUnderlineBoldLineHeight: '18px',
  captionLargeUnderlineBoldFontSize: '12px',
  captionLargeUnderlineBoldLetterSpacing: '0px',
  captionLargeUnderlineBoldParagraphSpacing: '0px',
  captionLargeUnderlineBoldTextCase: 'none',
  captionLargeUnderlineBoldTextDecoration: 'underline',
  captionSmallRegularFontFamily: 'Montserrat',
  captionSmallRegularFontWeight: 'Regular',
  captionSmallRegularLineHeight: '18px',
  captionSmallRegularFontSize: '10px',
  captionSmallRegularLetterSpacing: '0px',
  captionSmallRegularParagraphSpacing: '0px',
  captionSmallRegularTextCase: 'none',
  captionSmallRegularTextDecoration: 'none',
  captionSmallSemiboldFontFamily: 'Montserrat',
  captionSmallSemiboldFontWeight: 'SemiBold',
  captionSmallSemiboldLineHeight: '18px',
  captionSmallSemiboldFontSize: '10px',
  captionSmallSemiboldLetterSpacing: '0px',
  captionSmallSemiboldParagraphSpacing: '0px',
  captionSmallSemiboldTextCase: 'none',
  captionSmallSemiboldTextDecoration: 'none',
  captionSmallBoldFontFamily: 'Montserrat',
  captionSmallBoldFontWeight: 'Bold',
  captionSmallBoldLineHeight: '18px',
  captionSmallBoldFontSize: '10px',
  captionSmallBoldLetterSpacing: '0px',
  captionSmallBoldParagraphSpacing: '0px',
  captionSmallBoldTextCase: 'none',
  captionSmallBoldTextDecoration: 'none',
  captionSmallItalicFontFamily: 'Montserrat',
  captionSmallItalicFontWeight: 'Italic',
  captionSmallItalicLineHeight: '18px',
  captionSmallItalicFontSize: '10px',
  captionSmallItalicLetterSpacing: '0px',
  captionSmallItalicParagraphSpacing: '0px',
  captionSmallItalicTextCase: 'none',
  captionSmallItalicTextDecoration: 'none',
  captionSmallUnderlineFontFamily: 'Montserrat',
  captionSmallUnderlineFontWeight: 'Regular',
  captionSmallUnderlineLineHeight: '18px',
  captionSmallUnderlineFontSize: '10px',
  captionSmallUnderlineLetterSpacing: '0px',
  captionSmallUnderlineParagraphSpacing: '18px',
  captionSmallUnderlineTextCase: 'none',
  captionSmallUnderlineTextDecoration: 'underline',
  captionSmallUnderlineSemiboldFontFamily: 'Montserrat',
  captionSmallUnderlineSemiboldFontWeight: 'SemiBold',
  captionSmallUnderlineSemiboldLineHeight: '18px',
  captionSmallUnderlineSemiboldFontSize: '10px',
  captionSmallUnderlineSemiboldLetterSpacing: '0px',
  captionSmallUnderlineSemiboldParagraphSpacing: '0px',
  captionSmallUnderlineSemiboldTextCase: 'none',
  captionSmallUnderlineSemiboldTextDecoration: 'underline',
  captionSmallUnderlineBoldFontFamily: 'Montserrat',
  captionSmallUnderlineBoldFontWeight: 'Bold',
  captionSmallUnderlineBoldLineHeight: '18px',
  captionSmallUnderlineBoldFontSize: '10px',
  captionSmallUnderlineBoldLetterSpacing: '-0.08px',
  captionSmallUnderlineBoldParagraphSpacing: '0px',
  captionSmallUnderlineBoldTextCase: 'none',
  captionSmallUnderlineBoldTextDecoration: 'underline'
};

var text = {
  body: {
    lg: {
      reguler: {
        fontSize: tokens.bodyLargeRegularFontSize + "px",
        lineHeight: tokens.bodyLargeRegularLineHeight + "px",
        fontWeight: tokens.bodyLargeRegularFontWeight
      },
      semibold: {
        fontSize: tokens.bodyLargeSemiboldFontSize + "px",
        lineHeight: tokens.bodyLargeSemiboldLineHeight + "px",
        fontWeight: tokens.bodyLargeSemiboldFontWeight
      },
      bold: {
        fontSize: tokens.bodyLargeBoldFontSize + "px",
        lineHeight: tokens.bodyLargeBoldLineHeight + "px",
        fontWeight: tokens.bodyLargeBoldFontWeight
      },
      italic: {
        fontSize: tokens.bodyLargeItalicFontSize + "px",
        lineHeight: tokens.bodyLargeItalicLineHeight + "px",
        fontWeight: tokens.bodyLargeItalicFontWeight,
        fontStyle: tokens.bodyLargeItalicTextDecoration
      },
      underline: {
        fontSize: tokens.bodyLargeUnderlineFontSize + "px",
        lineHeight: tokens.bodyLargeUnderlineLineHeight + "px",
        fontWeight: tokens.bodyLargeUnderlineFontWeight,
        fontStyle: tokens.bodyLargeUnderlineTextDecoration
      },
      underline_semibold: {
        fontSize: tokens.bodyLargeUnderlineSemiboldFontSize + "px",
        lineHeight: tokens.bodyLargeUnderlineSemiboldLineHeight + "px",
        fontWeight: tokens.bodyLargeUnderlineSemiboldFontWeight,
        fontStyle: tokens.bodyLargeUnderlineSemiboldTextDecoration
      },
      underline_bold: {
        fontSize: tokens.bodyLargeUnderlineBoldFontSize + "px",
        lineHeight: tokens.bodyLargeUnderlineBoldLineHeight + "px",
        fontWeight: tokens.bodyLargeUnderlineBoldFontWeight,
        fontStyle: tokens.bodyLargeUnderlineBoldTextDecoration
      }
    },
    sm: {
      reguler: {
        fontSize: tokens.bodySmallRegularFontSize + "px",
        lineHeight: tokens.bodySmallRegularLineHeight + "px",
        fontWeight: tokens.bodySmallRegularFontWeight
      },
      semibold: {
        fontSize: tokens.bodySmallSemiboldFontSize + "px",
        lineHeight: tokens.bodySmallSemiboldLineHeight + "px",
        fontWeight: tokens.bodySmallSemiboldFontWeight
      },
      bold: {
        fontSize: tokens.bodySmallBoldFontSize + "px",
        lineHeight: tokens.bodySmallBoldLineHeight + "px",
        fontWeight: tokens.bodySmallBoldFontWeight
      },
      italic: {
        fontSize: tokens.bodySmallItalicFontSize + "px",
        lineHeight: tokens.bodySmallItalicLineHeight + "px",
        fontWeight: tokens.bodySmallItalicFontWeight,
        fontStyle: tokens.bodySmallItalicTextDecoration
      },
      underline: {
        fontSize: tokens.bodySmallUnderlineFontSize + "px",
        lineHeight: tokens.bodySmallUnderlineLineHeight + "px",
        fontWeight: tokens.bodySmallUnderlineFontWeight,
        fontStyle: tokens.bodySmallUnderlineTextDecoration
      },
      underline_semibold: {
        fontSize: tokens.bodySmallUnderlineSemiboldFontSize + "px",
        lineHeight: tokens.bodySmallUnderlineSemiboldLineHeight + "px",
        fontWeight: tokens.bodySmallUnderlineSemiboldFontWeight,
        fontStyle: tokens.bodySmallUnderlineSemiboldTextDecoration
      },
      underline_bold: {
        fontSize: tokens.bodySmallUnderlineBoldFontSize + "px",
        lineHeight: tokens.bodySmallUnderlineBoldLineHeight + "px",
        fontWeight: tokens.bodySmallUnderlineBoldFontWeight,
        fontStyle: tokens.bodySmallUnderlineBoldTextDecoration
      }
    }
  },
  caption: {
    lg: {
      reguler: {
        fontSize: tokens.captionLargeRegularFontSize + "px",
        lineHeight: tokens.captionLargeRegularLineHeight + "px",
        fontWeight: tokens.captionLargeRegularFontWeight
      },
      semibold: {
        fontSize: tokens.captionLargeSemiboldFontSize + "px",
        lineHeight: tokens.captionLargeSemiboldLineHeight + "px",
        fontWeight: tokens.captionLargeSemiboldFontWeight
      },
      bold: {
        fontSize: tokens.captionLargeBoldFontSize + "px",
        lineHeight: tokens.captionLargeBoldLineHeight + "px",
        fontWeight: tokens.captionLargeBoldFontWeight
      },
      italic: {
        fontSize: tokens.captionLargeItalicFontSize + "px",
        lineHeight: tokens.captionLargeItalicLineHeight + "px",
        fontWeight: tokens.captionLargeItalicFontWeight,
        fontStyle: tokens.captionLargeItalicTextDecoration
      },
      underline: {
        fontSize: tokens.captionLargeUnderlineFontSize + "px",
        lineHeight: tokens.captionLargeUnderlineLineHeight + "px",
        fontWeight: tokens.captionLargeUnderlineFontWeight,
        fontStyle: tokens.captionLargeUnderlineTextDecoration
      },
      underline_semibold: {
        fontSize: tokens.captionLargeUnderlineSemiboldFontSize + "px",
        lineHeight: tokens.captionLargeUnderlineSemiboldLineHeight + "px",
        fontWeight: tokens.captionLargeUnderlineSemiboldFontWeight,
        fontStyle: tokens.captionLargeUnderlineSemiboldTextDecoration
      },
      underline_bold: {
        fontSize: tokens.captionLargeUnderlineBoldFontSize + "px",
        lineHeight: tokens.captionLargeUnderlineBoldLineHeight + "px",
        fontWeight: tokens.captionLargeUnderlineBoldFontWeight,
        fontStyle: tokens.captionLargeUnderlineBoldTextDecoration
      }
    },
    sm: {
      reguler: {
        fontSize: tokens.captionSmallRegularFontSize + "px",
        lineHeight: tokens.captionSmallRegularLineHeight + "px",
        fontWeight: tokens.captionSmallRegularFontWeight
      },
      semibold: {
        fontSize: tokens.captionSmallSemiboldFontSize + "px",
        lineHeight: tokens.captionSmallSemiboldLineHeight + "px",
        fontWeight: tokens.captionSmallSemiboldFontWeight
      },
      bold: {
        fontSize: tokens.captionSmallBoldFontSize + "px",
        lineHeight: tokens.captionSmallBoldLineHeight + "px",
        fontWeight: tokens.captionSmallBoldFontWeight
      },
      italic: {
        fontSize: tokens.captionSmallItalicFontSize + "px",
        lineHeight: tokens.captionSmallItalicLineHeight + "px",
        fontWeight: tokens.captionSmallItalicFontWeight,
        fontStyle: tokens.captionSmallItalicTextDecoration
      },
      underline: {
        fontSize: tokens.captionSmallUnderlineFontSize + "px",
        lineHeight: tokens.captionSmallUnderlineLineHeight + "px",
        fontWeight: tokens.captionSmallUnderlineFontWeight,
        fontStyle: tokens.captionSmallUnderlineTextDecoration
      },
      underline_semibold: {
        fontSize: tokens.captionSmallUnderlineSemiboldFontSize + "px",
        lineHeight: tokens.captionSmallUnderlineSemiboldLineHeight + "px",
        fontWeight: tokens.captionSmallUnderlineSemiboldFontWeight,
        fontStyle: tokens.captionSmallUnderlineSemiboldTextDecoration
      },
      underline_bold: {
        fontSize: tokens.captionSmallUnderlineBoldFontSize + "px",
        lineHeight: tokens.captionSmallUnderlineBoldLineHeight + "px",
        fontWeight: tokens.captionSmallUnderlineBoldFontWeight,
        fontStyle: tokens.captionSmallUnderlineBoldTextDecoration
      }
    }
  },
  heading: {
    h1: {
      fontSize: tokens.headingHeading1FontSize + "px",
      lineHeight: tokens.headingHeading1LineHeight + "px",
      fontWeight: tokens.headingHeading1FontWeight
    },
    h2: {
      fontSize: tokens.headingHeading2FontSize + "px",
      lineHeight: tokens.headingHeading2LineHeight + "px",
      fontWeight: tokens.headingHeading2FontWeight
    },
    h3: {
      fontSize: tokens.headingHeading3FontSize + "px",
      lineHeight: tokens.headingHeading3LineHeight + "px",
      fontWeight: tokens.headingHeading3FontWeight
    },
    h4: {
      fontSize: tokens.headingHeading4FontSize + "px",
      lineHeight: tokens.headingHeading4LineHeight + "px",
      fontWeight: tokens.headingHeading4FontWeight
    },
    h5: {
      fontSize: tokens.headingHeading5FontSize + "px",
      lineHeight: tokens.headingHeading5LineHeight + "px",
      fontWeight: tokens.headingHeading5FontWeight
    },
    h6: {
      fontSize: tokens.headingHeading6FontSize + "px",
      lineHeight: tokens.headingHeading6LineHeight + "px",
      fontWeight: tokens.headingHeading6FontWeight
    }
  }
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * Do not edit directly
 * Generated on Wed, 27 Jul 2022 08:32:55 GMT
 */
var tokens$1 = {
  primary25: '#f9fbf9',
  primary50: '#f2f8f3',
  primary100: '#e6f1e8',
  primary200: '#cae2cf',
  primary300: '#aad2b2',
  primary400: '#82c190',
  primary500: '#47af64',
  primary600: '#3f9c59',
  primary700: '#36874d',
  primary800: '#2c6e3f',
  primary900: '#1f4e2c',
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgFontSize: '18px',
  buttonsLgTypography0: '{',
  buttonsLgTypography1: 'D',
  buttonsLgTypography2: 'e',
  buttonsLgTypography3: 's',
  buttonsLgTypography4: 'k',
  buttonsLgTypography5: 't',
  buttonsLgTypography6: 'o',
  buttonsLgTypography7: 'p',
  buttonsLgTypography8: '.',
  buttonsLgTypography9: 'B',
  buttonsLgTypography10: 'o',
  buttonsLgTypography11: 'd',
  buttonsLgTypography12: 'y',
  buttonsLgTypography13: '-',
  buttonsLgTypography14: 'L',
  buttonsLgTypography15: 'g',
  buttonsLgTypography16: '.',
  buttonsLgTypography17: 'R',
  buttonsLgTypography18: 'e',
  buttonsLgTypography19: 'g',
  buttonsLgTypography20: 'u',
  buttonsLgTypography21: 'l',
  buttonsLgTypography22: 'a',
  buttonsLgTypography23: 'r',
  buttonsLgTypography24: '}',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
  buttonsSmFontSize: '14px',
  buttonsSmTypography0: '{',
  buttonsSmTypography1: 'D',
  buttonsSmTypography2: 'e',
  buttonsSmTypography3: 's',
  buttonsSmTypography4: 'k',
  buttonsSmTypography5: 't',
  buttonsSmTypography6: 'o',
  buttonsSmTypography7: 'p',
  buttonsSmTypography8: '.',
  buttonsSmTypography9: 'C',
  buttonsSmTypography10: 'a',
  buttonsSmTypography11: 'p',
  buttonsSmTypography12: 't',
  buttonsSmTypography13: 'i',
  buttonsSmTypography14: 'o',
  buttonsSmTypography15: 'n',
  buttonsSmTypography16: '-',
  buttonsSmTypography17: 'l',
  buttonsSmTypography18: 'g',
  buttonsSmTypography19: '.',
  buttonsSmTypography20: 'B',
  buttonsSmTypography21: 'o',
  buttonsSmTypography22: 'l',
  buttonsSmTypography23: 'd',
  buttonsSmTypography24: '}',
  buttonsSmIconSize: '12px',
  buttonsPrimaryDefaultBackgroundColor: '#47af64',
  buttonsPrimaryDefaultColor: '#ffffff',
  buttonsPrimaryHoverBackgroundColor: '#3f9c59',
  buttonsPrimaryHoverColor: '#ffffff',
  buttonsPrimaryActiveBackgroundColor: '#36874d',
  buttonsPrimaryActiveColor: '#ffffff',
  buttonsPrimaryFocusBackgroundColors: '#47af64',
  buttonsPrimaryFocusColor: '#ffffff',
  buttonsPrimaryFocusBorderColors: '#aad2b2',
  buttonsPrimaryDisabledBackgroundColor: '#b1b1b1',
  buttonsPrimaryDisabledColor: '#616161',
  buttonsPrimaryBorderWidth: '0px',
  buttonsSecondaryDefaultBackgroundColor: '#f2f8f3',
  buttonsSecondaryDefaultColor: '#47af64',
  buttonsSecondaryHoverBackgroundColor: '#e6f1e8',
  buttonsSecondaryHoverColor: '#3f9c59',
  buttonsSecondaryActiveBackgroundColor: '#cae2cf',
  buttonsSecondaryActiveColor: '#3f9c59',
  buttonsSecondaryFocusBackgroundColor: '#f2f8f3',
  buttonsSecondaryFocusColor: '#47af64',
  buttonsSecondaryFocusBorderColors: '#47af64',
  buttonsSecondaryDisabledBackgroundColor: '#f3f3f3',
  buttonsSecondaryDisabledColor: '#cecece',
  buttonsSecondaryBorderWidth: '0px',
  buttonsBorderRadius: '8px',
  buttonsMdPaddingLeftRight: '12px',
  buttonsMdPaddingTopBottom: '8px',
  buttonsMdFontSize: '16px',
  buttonsMdTypography0: '{',
  buttonsMdTypography1: 'D',
  buttonsMdTypography2: 'e',
  buttonsMdTypography3: 's',
  buttonsMdTypography4: 'k',
  buttonsMdTypography5: 't',
  buttonsMdTypography6: 'o',
  buttonsMdTypography7: 'p',
  buttonsMdTypography8: '.',
  buttonsMdTypography9: 'B',
  buttonsMdTypography10: 'o',
  buttonsMdTypography11: 'd',
  buttonsMdTypography12: 'y',
  buttonsMdTypography13: '-',
  buttonsMdTypography14: 's',
  buttonsMdTypography15: 'm',
  buttonsMdTypography16: '.',
  buttonsMdTypography17: 'B',
  buttonsMdTypography18: 'o',
  buttonsMdTypography19: 'l',
  buttonsMdTypography20: 'd',
  buttonsMdTypography21: '}',
  buttonsMdIconSize: '16px',
  checkboxDefaultBackgroundColor: '#ffffff',
  checkboxDefaultBorder: '#cecece',
  checkboxDisabledBackgroundColor: '#e8e8e8',
  checkboxDisabledBorder: '#b1b1b1',
  checkboxActiveDisableBackgroundColor: '#aad2b2',
  checkboxActiveDisableColor: '#ffffff',
  checkboxActiveDisableBorder: '#47af64',
  checkboxActiveBackgroundColor: '#47af64',
  checkboxActiveColor: '#ffffff',
  checkboxActiveBorder: '#3f9c59',
  checkboxBorderRadius: '4px',
  checkboxBorderWidth: '1px',
  checkboxTextEnable: '#041e29',
  checkboxTextDisable: '#8f8f8f',
  radioBorderWidth: '1px',
  radioDefaultBackgroundColor: '#ffffff',
  radioDefaultBorder: '#cecece',
  radioDisableBackgroundColor: '#e8e8e8',
  radioDisableBorder: '#b1b1b1',
  radioActiveBackgroundColor: '#ffffff',
  radioActiveBorder: '#47af64',
  radioActiveDisableBackgroundColor: '#ffffff',
  radioActiveDisableBorder: '#aad2b2',
  radioTextEnable: '#041e29',
  radioTextDisable: '#8f8f8f',
  anchorDefaultColor: '#47af64',
  anchorHoverColor: '#3f9c59',
  anchorActiveColor: '#36874d',
  anchorFocusColor: '#47af64',
  anchorDisableColor: '#b1b1b1',
  anchorLgFontSize: '18px',
  anchorLgIconSize: '20px',
  anchorMdFontSize: '16px',
  anchorMdIconSize: '16px',
  anchorSmFontSize: '14px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#47af64',
  switchActiveDisableBackgroundColor: '#cae2cf',
  switchNonactiveBackgroundColor: '#b1b1b1',
  switchNonactiveDisableBackgroundColor: '#e8e8e8',
  buttonX: '0px',
  buttonY: '0px',
  buttonBlur: '0px',
  buttonSpread: '0px',
  buttonColor: '#000000',
  buttonType: 'dropShadow',
  avatarLgSize: '64px',
  avatarLgIconSize: '40px',
  avatarLgFontSize: '18px',
  avatarMdSize: '40px',
  avatarMdIconSize: '24px',
  avatarMdFontSize: '16px',
  avatarSmSize: '32px',
  avatarSmIconSize: '16px',
  avatarSmFontSize: '12px'
};

var _formSideCenter, _containerLoginCen, _formSideRight, _formSideLeft, _containerLogin;
var agr = /*#__PURE__*/makeTheme({
  //...base,
  colors: /*#__PURE__*/_extends({}, color),
  spacers: /*#__PURE__*/_extends({}, spacer),
  layout: {
    container: {
      fontFamily: 'Nunito Sans, sans-serif',
      '.container-login-center': (_containerLoginCen = {}, _containerLoginCen['@media (max-width:480px)'] = {
        '.container-side-right': {
          display: 'none'
        }
      }, _containerLoginCen.position = 'relative', _containerLoginCen.overflow = 'hidden', _containerLoginCen.height = '100vh', _containerLoginCen['.form-side-center'] = (_formSideCenter = {}, _formSideCenter['@media (max-width:480px)'] = {
        height: '90vh',
        width: '90%'
      }, _formSideCenter.position = 'absolute', _formSideCenter.backgroundColor = color.grayscale10, _formSideCenter.top = '50%', _formSideCenter.left = '50%', _formSideCenter.transform = 'translate(-50%, -50%)', _formSideCenter.width = '50%', _formSideCenter.padding = '50px 50px 20px 50px', _formSideCenter.overflowY = 'scroll', _formSideCenter.height = '70vh', _formSideCenter['.container-logo'] = {
        textAlign: 'center',
        '.wrapper-logo': {
          width: '150px'
        }
      }, _formSideCenter['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3,
        textAlign: 'center'
      }, _formSideCenter['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6,
        textAlign: 'center'
      }, _formSideCenter['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideCenter['.wrapper-button'] = {
        width: '100%'
      }, _formSideCenter['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideCenter['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideCenter['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideCenter), _containerLoginCen['.container-side-right'] = {
        width: '100%',
        '.wrapper-background': {
          width: '100% !important',
          height: '100vh !important',
          objectFit: 'cover'
        }
      }, _containerLoginCen),
      '.container-login': (_containerLogin = {}, _containerLogin['@media (max-width:768px)'] = {
        '.container-side-right': {
          display: 'none'
        }
      }, _containerLogin.display = 'flex', _containerLogin.overflow = 'hidden', _containerLogin.height = '100vh', _containerLogin['.form-side-right'] = (_formSideRight = {}, _formSideRight['@media (max-width:480px)'] = {
        padding: '20px',
        width: '100%'
      }, _formSideRight.order = 1, _formSideRight.width = '75%', _formSideRight.padding = '50px 100px', _formSideRight.overflowY = 'scroll', _formSideRight.height = '100vh', _formSideRight.position = 'relative', _formSideRight['.wrapper-logo'] = {
        width: '150px'
      }, _formSideRight['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3
      }, _formSideRight['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6
      }, _formSideRight['.wrapper-title-email'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideRight['.wrapper-title-pass'] = {
        color: color.grayscale80,
        marginTop: spacer.spacing6,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideRight['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideRight['.wrapper-button'] = {
        width: '100%'
      }, _formSideRight['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideRight['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideRight['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '70px',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideRight), _containerLogin['.form-side-left'] = (_formSideLeft = {}, _formSideLeft['@media (max-width:480px)'] = {
        padding: '20px',
        width: '100%'
      }, _formSideLeft.width = '75%', _formSideLeft.padding = '50px 100px', _formSideLeft.overflowY = 'scroll', _formSideLeft.height = '100vh', _formSideLeft.position = 'relative', _formSideLeft['.wrapper-logo'] = {
        width: '150px'
      }, _formSideLeft['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3
      }, _formSideLeft['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6
      }, _formSideLeft['.wrapper-title-email'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideLeft['.wrapper-title-pass'] = {
        color: color.grayscale80,
        marginTop: spacer.spacing6,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideLeft['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideLeft['.wrapper-button'] = {
        width: '100%'
      }, _formSideLeft['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideLeft['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideLeft['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '70px',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideLeft), _containerLogin['.container-side-right'] = {
        width: '100%',
        '.wrapper-background': {
          width: '100% !important',
          height: '100vh !important',
          objectFit: 'cover'
        }
      }, _containerLogin)
    }
  },
  styles: {
    a: {
      '&:hover': {
        color: tokens$1.anchorHoverColor + " !important",
        textDecoration: "underline",
        outline: 'none',
        cursor: 'pointer'
      },
      '&:active': {
        color: tokens$1.anchorActiveColor + " !important",
        outline: 'none !important',
        textDecoration: 'underline !important'
      },
      '&:focus': {
        outline: "2px solid " + color.primary30 + " !important",
        borderRadius: '4px !important',
        textDecoration: 'none !important'
      },
      '& .wrapper-anchor': {
        display: 'flex',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      sm: /*#__PURE__*/_extends({
        color: tokens$1.anchorDefaultColor + " !important"
      }, text.caption.lg.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      }),
      md: /*#__PURE__*/_extends({
        color: tokens$1.anchorDefaultColor
      }, text.body.sm.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      }),
      lg: /*#__PURE__*/_extends({
        color: tokens$1.anchorDefaultColor
      }, text.body.lg.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      })
    }
  },
  forms: {
    "switch": {
      md: {
        height: '22px',
        width: '40px',
        marginTop: '-2px'
      },
      sm: {
        marginTop: '2px',
        height: '17px',
        width: '28px',
        'div': {
          height: '12px !important',
          width: '12px !important'
        }
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: '#52BD94 !important'
      },
      ":disabled": {
        background: '#D9DDE3 !important'
      }
    },
    checkbox: {
      sizeBoxLarge: {
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      sizeBoxSmall: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      wrappLabel: {
        marginLeft: '10px'
      },
      '& .container-checkbox': {
        display: 'flex',
        alignItems: 'center'
      },
      check: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""'
            },
            cursor: 'pointer'
          },
          '&:checked': {
            '&:after': {
              content: '"\\2714"',
              color: color.grayscale60
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: '4px !important',
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + color.grayscale30,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$1.primary500,
          '&:after': {
            color: color.primary20,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$1.checkboxActiveBackgroundColor,
          border: 'none',
          '&:after': {
            content: '"\\2714"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: tokens$1.primary600
          }
        }
      },
      indeterminate: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""'
            },
            cursor: 'pointer'
          },
          '&:checked': {
            '&:after': {
              content: '"\\2012"',
              color: color.grayscale60
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: tokens$1.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + color.grayscale30,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$1.primary500,
          '&:after': {
            color: color.primary20,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$1.primary500,
          border: 'none',
          '&:after': {
            content: '"\\2012"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: tokens$1.primary600
          }
        }
      }
    }
  },
  buttons: {
    sm: /*#__PURE__*/_extends({
      padding: tokens$1.buttonsSmPaddingTopBottom + " " + tokens$1.buttonsSmPaddingLeftRight + " " + tokens$1.buttonsSmPaddingTopBottom + " " + tokens$1.buttonsSmPaddingLeftRight + " !important"
    }, text.caption.lg.reguler),
    md: /*#__PURE__*/_extends({
      padding: tokens$1.buttonsMdPaddingTopBottom + " " + tokens$1.buttonsMdPaddingLeftRight + " " + tokens$1.buttonsMdPaddingTopBottom + " " + tokens$1.buttonsMdPaddingLeftRight + " !important"
    }, text.body.sm.reguler),
    lg: /*#__PURE__*/_extends({
      padding: tokens$1.buttonsLgPaddingTopBottom + " " + tokens$1.buttonsLgPaddingLeftRight + " " + tokens$1.buttonsLgPaddingTopBottom + " " + tokens$1.buttonsLgPaddingLeftRight + " !important"
    }, text.body.sm.reguler),
    solid: {
      alignItems: 'center',
      borderRadius: "" + tokens$1.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$1.buttonsPrimaryDefaultBackgroundColor,
      color: tokens$1.buttonsPrimaryDefaultColor,
      border: tokens$1.buttonsPrimaryBorderWidth,
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center'
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px'
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center'
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center'
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center'
      },
      '&:hover': {
        backgroundColor: tokens$1.buttonsPrimaryHoverBackgroundColor,
        color: tokens$1.buttonsPrimaryHoverColor,
        boxShadow: 'none !important'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$1.buttonsPrimaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$1.buttonsPrimaryActiveBackgroundColor,
        color: tokens$1.buttonsPrimaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens$1.buttonsPrimaryDisabledBackgroundColor,
        color: tokens$1.buttonsPrimaryDisabledColor
      }
    }
  },
  Heading: {
    h1: /*#__PURE__*/_extends({}, text.heading.h1),
    h2: /*#__PURE__*/_extends({}, text.heading.h2),
    h3: /*#__PURE__*/_extends({}, text.heading.h3),
    h4: /*#__PURE__*/_extends({}, text.heading.h4),
    h5: /*#__PURE__*/_extends({}, text.heading.h5),
    h6: /*#__PURE__*/_extends({}, text.heading.h6)
  },
  Body: {
    lg_reguler: /*#__PURE__*/_extends({}, text.body.lg.reguler),
    lg_semibold: /*#__PURE__*/_extends({}, text.body.lg.semibold),
    lg_bold: /*#__PURE__*/_extends({}, text.body.lg.bold),
    lg_italic: /*#__PURE__*/_extends({}, text.body.lg.italic),
    lg_underline: /*#__PURE__*/_extends({}, text.body.lg.underline),
    lg_underline_semibold: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold),
    lg_underline_bold: /*#__PURE__*/_extends({}, text.body.lg.underline_bold),
    sm_reguler: /*#__PURE__*/_extends({}, text.body.sm.reguler),
    sm_semibold: /*#__PURE__*/_extends({}, text.body.sm.semibold),
    sm_bold: /*#__PURE__*/_extends({}, text.body.sm.bold),
    sm_italic: /*#__PURE__*/_extends({}, text.body.sm.italic),
    sm_underline: /*#__PURE__*/_extends({}, text.body.sm.underline),
    sm_underline_semibold: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold),
    sm_underline_bold: /*#__PURE__*/_extends({}, text.body.sm.underline_bold)
  },
  Caption: {
    lg_reguler: /*#__PURE__*/_extends({}, text.caption.lg.reguler),
    lg_semibold: /*#__PURE__*/_extends({}, text.caption.lg.semibold),
    lg_bold: /*#__PURE__*/_extends({}, text.caption.lg.bold),
    lg_italic: /*#__PURE__*/_extends({}, text.caption.lg.italic),
    lg_underline: /*#__PURE__*/_extends({}, text.caption.lg.underline),
    lg_underline_semibold: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold),
    lg_underline_bold: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold),
    sm_reguler: /*#__PURE__*/_extends({}, text.caption.sm.reguler),
    sm_semibold: /*#__PURE__*/_extends({}, text.caption.sm.semibold),
    sm_bold: /*#__PURE__*/_extends({}, text.caption.sm.bold),
    sm_italic: /*#__PURE__*/_extends({}, text.caption.sm.italic),
    sm_underline: /*#__PURE__*/_extends({}, text.caption.sm.underline),
    sm_underline_semibold: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold),
    sm_underline_bold: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold)
  }
});

/**
 * Do not edit directly
 * Generated on Wed, 27 Jul 2022 08:32:55 GMT
 */
var tokens$2 = {
  primary25: '#fffaf8',
  primary50: '#fff6f1',
  primary100: '#ffeee4',
  primary200: '#ffdbc5',
  primary300: '#ffc8a1',
  primary400: '#ffb272',
  primary500: '#ff9900',
  primary600: '#e48800',
  primary700: '#c57600',
  primary800: '#a16000',
  primary900: '#724400',
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgFontSize: '18px',
  buttonsLgTypography0: '{',
  buttonsLgTypography1: 'D',
  buttonsLgTypography2: 'e',
  buttonsLgTypography3: 's',
  buttonsLgTypography4: 'k',
  buttonsLgTypography5: 't',
  buttonsLgTypography6: 'o',
  buttonsLgTypography7: 'p',
  buttonsLgTypography8: '.',
  buttonsLgTypography9: 'B',
  buttonsLgTypography10: 'o',
  buttonsLgTypography11: 'd',
  buttonsLgTypography12: 'y',
  buttonsLgTypography13: '-',
  buttonsLgTypography14: 'L',
  buttonsLgTypography15: 'g',
  buttonsLgTypography16: '.',
  buttonsLgTypography17: 'R',
  buttonsLgTypography18: 'e',
  buttonsLgTypography19: 'g',
  buttonsLgTypography20: 'u',
  buttonsLgTypography21: 'l',
  buttonsLgTypography22: 'a',
  buttonsLgTypography23: 'r',
  buttonsLgTypography24: '}',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
  buttonsSmFontSize: '14px',
  buttonsSmTypography0: '{',
  buttonsSmTypography1: 'D',
  buttonsSmTypography2: 'e',
  buttonsSmTypography3: 's',
  buttonsSmTypography4: 'k',
  buttonsSmTypography5: 't',
  buttonsSmTypography6: 'o',
  buttonsSmTypography7: 'p',
  buttonsSmTypography8: '.',
  buttonsSmTypography9: 'C',
  buttonsSmTypography10: 'a',
  buttonsSmTypography11: 'p',
  buttonsSmTypography12: 't',
  buttonsSmTypography13: 'i',
  buttonsSmTypography14: 'o',
  buttonsSmTypography15: 'n',
  buttonsSmTypography16: '-',
  buttonsSmTypography17: 'l',
  buttonsSmTypography18: 'g',
  buttonsSmTypography19: '.',
  buttonsSmTypography20: 'B',
  buttonsSmTypography21: 'o',
  buttonsSmTypography22: 'l',
  buttonsSmTypography23: 'd',
  buttonsSmTypography24: '}',
  buttonsSmIconSize: '12px',
  buttonsPrimaryDefaultBackgroundColor: '#ff9900',
  buttonsPrimaryDefaultColor: '#ffffff',
  buttonsPrimaryHoverBackgroundColor: '#e48800',
  buttonsPrimaryHoverColor: '#ffffff',
  buttonsPrimaryActiveBackgroundColor: '#c57600',
  buttonsPrimaryActiveColor: '#ffffff',
  buttonsPrimaryFocusBackgroundColors: '#ff9900',
  buttonsPrimaryFocusColor: '#ffffff',
  buttonsPrimaryFocusBorderColors: '#ffc8a1',
  buttonsPrimaryDisabledBackgroundColor: '#b1b1b1',
  buttonsPrimaryDisabledColor: '#616161',
  buttonsPrimaryBorderWidth: '0px',
  buttonsSecondaryDefaultBackgroundColor: '#fff6f1',
  buttonsSecondaryDefaultColor: '#ff9900',
  buttonsSecondaryHoverBackgroundColor: '#ffeee4',
  buttonsSecondaryHoverColor: '#e48800',
  buttonsSecondaryActiveBackgroundColor: '#ffdbc5',
  buttonsSecondaryActiveColor: '#e48800',
  buttonsSecondaryFocusBackgroundColor: '#fff6f1',
  buttonsSecondaryFocusColor: '#ff9900',
  buttonsSecondaryFocusBorderColors: '#ff9900',
  buttonsSecondaryDisabledBackgroundColor: '#f3f3f3',
  buttonsSecondaryDisabledColor: '#cecece',
  buttonsSecondaryBorderWidth: '0px',
  buttonsBorderRadius: '4px',
  buttonsMdPaddingLeftRight: '12px',
  buttonsMdPaddingTopBottom: '8px',
  buttonsMdFontSize: '16px',
  buttonsMdTypography0: '{',
  buttonsMdTypography1: 'D',
  buttonsMdTypography2: 'e',
  buttonsMdTypography3: 's',
  buttonsMdTypography4: 'k',
  buttonsMdTypography5: 't',
  buttonsMdTypography6: 'o',
  buttonsMdTypography7: 'p',
  buttonsMdTypography8: '.',
  buttonsMdTypography9: 'B',
  buttonsMdTypography10: 'o',
  buttonsMdTypography11: 'd',
  buttonsMdTypography12: 'y',
  buttonsMdTypography13: '-',
  buttonsMdTypography14: 's',
  buttonsMdTypography15: 'm',
  buttonsMdTypography16: '.',
  buttonsMdTypography17: 'B',
  buttonsMdTypography18: 'o',
  buttonsMdTypography19: 'l',
  buttonsMdTypography20: 'd',
  buttonsMdTypography21: '}',
  buttonsMdIconSize: '16px',
  checkboxDefaultBackgroundColor: '#ffffff',
  checkboxDefaultBorder: '#cecece',
  checkboxDisabledBackgroundColor: '#e8e8e8',
  checkboxDisabledBorder: '#b1b1b1',
  checkboxActiveDisableBackgroundColor: '#ffc8a1',
  checkboxActiveDisableColor: '#ffffff',
  checkboxActiveDisableBorder: '#ff9900',
  checkboxActiveBackgroundColor: '#ff9900',
  checkboxActiveColor: '#ffffff',
  checkboxActiveBorder: '#e48800',
  checkboxBorderRadius: '4px',
  checkboxBorderWidth: '1px',
  checkboxTextEnable: '#041e29',
  checkboxTextDisable: '#8f8f8f',
  radioBorderWidth: '1px',
  radioDefaultBackgroundColor: '#ffffff',
  radioDefaultBorder: '#cecece',
  radioDisableBackgroundColor: '#e8e8e8',
  radioDisableBorder: '#b1b1b1',
  radioActiveBackgroundColor: '#ffffff',
  radioActiveBorder: '#ff9900',
  radioActiveDisableBackgroundColor: '#ffffff',
  radioActiveDisableBorder: '#ffc8a1',
  radioTextEnable: '#041e29',
  radioTextDisable: '#8f8f8f',
  anchorDefaultColor: '#ff9900',
  anchorHoverColor: '#e48800',
  anchorActiveColor: '#c57600',
  anchorFocusColor: '#ff9900',
  anchorDisableColor: '#b1b1b1',
  anchorLgFontSize: '18px',
  anchorLgIconSize: '20px',
  anchorMdFontSize: '16px',
  anchorMdIconSize: '16px',
  anchorSmFontSize: '14px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#ff9900',
  switchActiveDisableBackgroundColor: '#ffdbc5',
  switchNonactiveBackgroundColor: '#b1b1b1',
  switchNonactiveDisableBackgroundColor: '#e8e8e8',
  buttonX: '0px',
  buttonY: '0px',
  buttonBlur: '0px',
  buttonSpread: '0px',
  buttonColor: '#000000',
  buttonType: 'dropShadow',
  avatarLgSize: '64px',
  avatarLgIconSize: '40px',
  avatarLgFontSize: '18px',
  avatarMdSize: '40px',
  avatarMdIconSize: '24px',
  avatarMdFontSize: '16px',
  avatarSmSize: '32px',
  avatarSmIconSize: '16px',
  avatarSmFontSize: '12px'
};

var _formSideCenter$1, _containerLoginCen$1, _formSideRight$1, _formSideLeft$1, _containerLogin$1;
var agl = /*#__PURE__*/makeTheme({
  //...base,
  colors: /*#__PURE__*/_extends({}, color),
  spacers: /*#__PURE__*/_extends({}, spacer),
  layout: {
    container: {
      fontFamily: 'Nunito Sans, sans-serif',
      '.container-login-center': (_containerLoginCen$1 = {}, _containerLoginCen$1['@media (max-width:480px)'] = {
        '.container-side-right': {
          display: 'none'
        }
      }, _containerLoginCen$1.position = 'relative', _containerLoginCen$1.overflow = 'hidden', _containerLoginCen$1.height = '100vh', _containerLoginCen$1['.form-side-center'] = (_formSideCenter$1 = {}, _formSideCenter$1['@media (max-width:480px)'] = {
        height: '90vh',
        width: '90%'
      }, _formSideCenter$1.position = 'absolute', _formSideCenter$1.backgroundColor = color.grayscale10, _formSideCenter$1.top = '50%', _formSideCenter$1.left = '50%', _formSideCenter$1.transform = 'translate(-50%, -50%)', _formSideCenter$1.width = '50%', _formSideCenter$1.padding = '50px 50px 20px 50px', _formSideCenter$1.overflowY = 'scroll', _formSideCenter$1.height = '70vh', _formSideCenter$1['.container-logo'] = {
        textAlign: 'center',
        '.wrapper-logo': {
          width: '150px'
        }
      }, _formSideCenter$1['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3,
        textAlign: 'center'
      }, _formSideCenter$1['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6,
        textAlign: 'center'
      }, _formSideCenter$1['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideCenter$1['.wrapper-button'] = {
        width: '100%'
      }, _formSideCenter$1['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideCenter$1['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideCenter$1['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideCenter$1), _containerLoginCen$1['.container-side-right'] = {
        width: '100%',
        '.wrapper-background': {
          width: '100% !important',
          height: '100vh !important',
          objectFit: 'cover'
        }
      }, _containerLoginCen$1),
      '.container-login': (_containerLogin$1 = {}, _containerLogin$1['@media (max-width:768px)'] = {
        '.container-side-right': {
          display: 'none'
        }
      }, _containerLogin$1.display = 'flex', _containerLogin$1.overflow = 'hidden', _containerLogin$1.height = '100vh', _containerLogin$1['.form-side-right'] = (_formSideRight$1 = {}, _formSideRight$1['@media (max-width:480px)'] = {
        padding: '20px',
        width: '100%'
      }, _formSideRight$1.order = 1, _formSideRight$1.width = '75%', _formSideRight$1.padding = '50px 100px', _formSideRight$1.overflowY = 'scroll', _formSideRight$1.height = '100vh', _formSideRight$1.position = 'relative', _formSideRight$1['.wrapper-logo'] = {
        width: '150px'
      }, _formSideRight$1['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3
      }, _formSideRight$1['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6
      }, _formSideRight$1['.wrapper-title-email'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideRight$1['.wrapper-title-pass'] = {
        color: color.grayscale80,
        marginTop: spacer.spacing6,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideRight$1['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideRight$1['.wrapper-button'] = {
        width: '100%'
      }, _formSideRight$1['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideRight$1['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideRight$1['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '70px',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideRight$1), _containerLogin$1['.form-side-left'] = (_formSideLeft$1 = {}, _formSideLeft$1['@media (max-width:480px)'] = {
        padding: '20px',
        width: '100%'
      }, _formSideLeft$1.width = '75%', _formSideLeft$1.padding = '50px 100px', _formSideLeft$1.overflowY = 'scroll', _formSideLeft$1.height = '100vh', _formSideLeft$1.position = 'relative', _formSideLeft$1['.wrapper-logo'] = {
        width: '150px'
      }, _formSideLeft$1['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3
      }, _formSideLeft$1['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6
      }, _formSideLeft$1['.wrapper-title-email'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideLeft$1['.wrapper-title-pass'] = {
        color: color.grayscale80,
        marginTop: spacer.spacing6,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideLeft$1['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideLeft$1['.wrapper-button'] = {
        width: '100%'
      }, _formSideLeft$1['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideLeft$1['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideLeft$1['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '70px',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideLeft$1), _containerLogin$1['.container-side-right'] = {
        width: '100%',
        '.wrapper-background': {
          width: '100% !important',
          height: '100vh !important',
          objectFit: 'cover'
        }
      }, _containerLogin$1)
    }
  },
  styles: {
    a: {
      '&:hover': {
        color: tokens$2.anchorHoverColor + " !important",
        textDecoration: "underline",
        outline: 'none',
        cursor: 'pointer'
      },
      '&:active': {
        color: tokens$2.anchorActiveColor + " !important",
        outline: 'none !important',
        textDecoration: 'underline !important'
      },
      '&:focus': {
        outline: "2px solid " + color.primary30 + " !important",
        borderRadius: '4px !important',
        textDecoration: 'none !important'
      },
      '& .wrapper-anchor': {
        display: 'flex',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      sm: /*#__PURE__*/_extends({
        color: tokens$2.anchorDefaultColor + " !important"
      }, text.caption.lg.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      }),
      md: /*#__PURE__*/_extends({
        color: tokens$2.anchorDefaultColor
      }, text.body.sm.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      }),
      lg: /*#__PURE__*/_extends({
        color: tokens$2.anchorDefaultColor
      }, text.body.lg.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      })
    }
  },
  forms: {
    "switch": {
      md: {
        height: '22px',
        width: '40px',
        marginTop: '-2px'
      },
      sm: {
        marginTop: '2px',
        height: '17px',
        width: '28px',
        'div': {
          height: '12px !important',
          width: '12px !important'
        }
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: '#52BD94 !important'
      },
      ":disabled": {
        background: '#D9DDE3 !important'
      }
    },
    checkbox: {
      sizeBoxLarge: {
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      sizeBoxSmall: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      wrappLabel: {
        marginLeft: '10px'
      },
      '& .container-checkbox': {
        display: 'flex',
        alignItems: 'center'
      },
      check: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""'
            },
            cursor: 'pointer'
          },
          '&:checked': {
            '&:after': {
              content: '"\\2714"',
              color: color.grayscale60
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: '4px !important',
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + color.grayscale30,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$2.primary500,
          '&:after': {
            color: color.primary20,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$2.checkboxActiveBackgroundColor,
          border: 'none',
          '&:after': {
            content: '"\\2714"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: tokens$2.primary600
          }
        }
      },
      indeterminate: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""'
            },
            cursor: 'pointer'
          },
          '&:checked': {
            '&:after': {
              content: '"\\2012"',
              color: color.grayscale60
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: tokens$2.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + color.grayscale30,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$2.primary500,
          '&:after': {
            color: color.primary20,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$2.primary500,
          border: 'none',
          '&:after': {
            content: '"\\2012"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: tokens$2.primary600
          }
        }
      }
    }
  },
  buttons: {
    sm: /*#__PURE__*/_extends({
      padding: tokens$2.buttonsSmPaddingTopBottom + " " + tokens$2.buttonsSmPaddingLeftRight + " " + tokens$2.buttonsSmPaddingTopBottom + " " + tokens$2.buttonsSmPaddingLeftRight + " !important"
    }, text.caption.lg.reguler),
    md: /*#__PURE__*/_extends({
      padding: tokens$2.buttonsMdPaddingTopBottom + " " + tokens$2.buttonsMdPaddingLeftRight + " " + tokens$2.buttonsMdPaddingTopBottom + " " + tokens$2.buttonsMdPaddingLeftRight + " !important"
    }, text.body.sm.reguler),
    lg: /*#__PURE__*/_extends({
      padding: tokens$2.buttonsLgPaddingTopBottom + " " + tokens$2.buttonsLgPaddingLeftRight + " " + tokens$2.buttonsLgPaddingTopBottom + " " + tokens$2.buttonsLgPaddingLeftRight + " !important"
    }, text.body.sm.reguler),
    solid: {
      alignItems: 'center',
      borderRadius: "" + tokens$2.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$2.buttonsPrimaryDefaultBackgroundColor,
      color: tokens$2.buttonsPrimaryDefaultColor,
      border: tokens$2.buttonsPrimaryBorderWidth,
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center'
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px'
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center'
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center'
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center'
      },
      '&:hover': {
        backgroundColor: tokens$2.buttonsPrimaryHoverBackgroundColor,
        color: tokens$2.buttonsPrimaryHoverColor,
        boxShadow: 'none !important'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$2.buttonsPrimaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$2.buttonsPrimaryActiveBackgroundColor,
        color: tokens$2.buttonsPrimaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens$2.buttonsPrimaryDisabledBackgroundColor,
        color: tokens$2.buttonsPrimaryDisabledColor
      }
    }
  },
  Heading: {
    h1: /*#__PURE__*/_extends({}, text.heading.h1),
    h2: /*#__PURE__*/_extends({}, text.heading.h2),
    h3: /*#__PURE__*/_extends({}, text.heading.h3),
    h4: /*#__PURE__*/_extends({}, text.heading.h4),
    h5: /*#__PURE__*/_extends({}, text.heading.h5),
    h6: /*#__PURE__*/_extends({}, text.heading.h6)
  },
  Body: {
    lg_reguler: /*#__PURE__*/_extends({}, text.body.lg.reguler),
    lg_semibold: /*#__PURE__*/_extends({}, text.body.lg.semibold),
    lg_bold: /*#__PURE__*/_extends({}, text.body.lg.bold),
    lg_italic: /*#__PURE__*/_extends({}, text.body.lg.italic),
    lg_underline: /*#__PURE__*/_extends({}, text.body.lg.underline),
    lg_underline_semibold: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold),
    lg_underline_bold: /*#__PURE__*/_extends({}, text.body.lg.underline_bold),
    sm_reguler: /*#__PURE__*/_extends({}, text.body.sm.reguler),
    sm_semibold: /*#__PURE__*/_extends({}, text.body.sm.semibold),
    sm_bold: /*#__PURE__*/_extends({}, text.body.sm.bold),
    sm_italic: /*#__PURE__*/_extends({}, text.body.sm.italic),
    sm_underline: /*#__PURE__*/_extends({}, text.body.sm.underline),
    sm_underline_semibold: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold),
    sm_underline_bold: /*#__PURE__*/_extends({}, text.body.sm.underline_bold)
  },
  Caption: {
    lg_reguler: /*#__PURE__*/_extends({}, text.caption.lg.reguler),
    lg_semibold: /*#__PURE__*/_extends({}, text.caption.lg.semibold),
    lg_bold: /*#__PURE__*/_extends({}, text.caption.lg.bold),
    lg_italic: /*#__PURE__*/_extends({}, text.caption.lg.italic),
    lg_underline: /*#__PURE__*/_extends({}, text.caption.lg.underline),
    lg_underline_semibold: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold),
    lg_underline_bold: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold),
    sm_reguler: /*#__PURE__*/_extends({}, text.caption.sm.reguler),
    sm_semibold: /*#__PURE__*/_extends({}, text.caption.sm.semibold),
    sm_bold: /*#__PURE__*/_extends({}, text.caption.sm.bold),
    sm_italic: /*#__PURE__*/_extends({}, text.caption.sm.italic),
    sm_underline: /*#__PURE__*/_extends({}, text.caption.sm.underline),
    sm_underline_semibold: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold),
    sm_underline_bold: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold)
  }
});

/**
 * Do not edit directly
 * Generated on Wed, 27 Jul 2022 08:32:55 GMT
 */
var tokens$3 = {
  primary25: '#f8fafd',
  primary50: '#f2f6fb',
  primary100: '#e4eef7',
  primary200: '#c6dcf0',
  primary300: '#a3c9e8',
  primary400: '#73b2df',
  primary500: '#229bd8',
  primary600: '#1e8ac1',
  primary700: '#1a78a7',
  primary800: '#156288',
  primary900: '#0f4560',
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgFontSize: '18px',
  buttonsLgTypography0: '{',
  buttonsLgTypography1: 'D',
  buttonsLgTypography2: 'e',
  buttonsLgTypography3: 's',
  buttonsLgTypography4: 'k',
  buttonsLgTypography5: 't',
  buttonsLgTypography6: 'o',
  buttonsLgTypography7: 'p',
  buttonsLgTypography8: '.',
  buttonsLgTypography9: 'B',
  buttonsLgTypography10: 'o',
  buttonsLgTypography11: 'd',
  buttonsLgTypography12: 'y',
  buttonsLgTypography13: '-',
  buttonsLgTypography14: 'L',
  buttonsLgTypography15: 'g',
  buttonsLgTypography16: '.',
  buttonsLgTypography17: 'B',
  buttonsLgTypography18: 'o',
  buttonsLgTypography19: 'l',
  buttonsLgTypography20: 'd',
  buttonsLgTypography21: '}',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
  buttonsSmFontSize: '14px',
  buttonsSmTypography0: '{',
  buttonsSmTypography1: 'D',
  buttonsSmTypography2: 'e',
  buttonsSmTypography3: 's',
  buttonsSmTypography4: 'k',
  buttonsSmTypography5: 't',
  buttonsSmTypography6: 'o',
  buttonsSmTypography7: 'p',
  buttonsSmTypography8: '.',
  buttonsSmTypography9: 'C',
  buttonsSmTypography10: 'a',
  buttonsSmTypography11: 'p',
  buttonsSmTypography12: 't',
  buttonsSmTypography13: 'i',
  buttonsSmTypography14: 'o',
  buttonsSmTypography15: 'n',
  buttonsSmTypography16: '-',
  buttonsSmTypography17: 'l',
  buttonsSmTypography18: 'g',
  buttonsSmTypography19: '.',
  buttonsSmTypography20: 'B',
  buttonsSmTypography21: 'o',
  buttonsSmTypography22: 'l',
  buttonsSmTypography23: 'd',
  buttonsSmTypography24: '}',
  buttonsSmIconSize: '12px',
  buttonsPrimaryDefaultBackgroundColor: '#229bd8',
  buttonsPrimaryDefaultColor: '#ffffff',
  buttonsPrimaryHoverBackgroundColor: '#1e8ac1',
  buttonsPrimaryHoverColor: '#ffffff',
  buttonsPrimaryActiveBackgroundColor: '#1a78a7',
  buttonsPrimaryActiveColor: '#ffffff',
  buttonsPrimaryFocusBackgroundColors: '#229bd8',
  buttonsPrimaryFocusColor: '#ffffff',
  buttonsPrimaryFocusBorderColors: '#a3c9e8',
  buttonsPrimaryDisabledBackgroundColor: '#b1b1b1',
  buttonsPrimaryDisabledColor: '#616161',
  buttonsPrimaryBorderWidth: '0px',
  buttonsSecondaryDefaultBackgroundColor: '#f2f6fb',
  buttonsSecondaryDefaultColor: '#229bd8',
  buttonsSecondaryHoverBackgroundColor: '#e4eef7',
  buttonsSecondaryHoverColor: '#1e8ac1',
  buttonsSecondaryActiveBackgroundColor: '#c6dcf0',
  buttonsSecondaryActiveColor: '#1e8ac1',
  buttonsSecondaryFocusBackgroundColor: '#f2f6fb',
  buttonsSecondaryFocusColor: '#229bd8',
  buttonsSecondaryFocusBorderColors: '#229bd8',
  buttonsSecondaryDisabledBackgroundColor: '#f3f3f3',
  buttonsSecondaryDisabledColor: '#cecece',
  buttonsSecondaryBorderWidth: '0px',
  buttonsBorderRadius: '500px',
  buttonsMdPaddingLeftRight: '12px',
  buttonsMdPaddingTopBottom: '8px',
  buttonsMdFontSize: '16px',
  buttonsMdTypography0: '{',
  buttonsMdTypography1: 'D',
  buttonsMdTypography2: 'e',
  buttonsMdTypography3: 's',
  buttonsMdTypography4: 'k',
  buttonsMdTypography5: 't',
  buttonsMdTypography6: 'o',
  buttonsMdTypography7: 'p',
  buttonsMdTypography8: '.',
  buttonsMdTypography9: 'B',
  buttonsMdTypography10: 'o',
  buttonsMdTypography11: 'd',
  buttonsMdTypography12: 'y',
  buttonsMdTypography13: '-',
  buttonsMdTypography14: 's',
  buttonsMdTypography15: 'm',
  buttonsMdTypography16: '.',
  buttonsMdTypography17: 'B',
  buttonsMdTypography18: 'o',
  buttonsMdTypography19: 'l',
  buttonsMdTypography20: 'd',
  buttonsMdTypography21: '}',
  buttonsMdIconSize: '16px',
  checkboxDefaultBackgroundColor: '#ffffff',
  checkboxDefaultBorder: '#cecece',
  checkboxDisabledBackgroundColor: '#e8e8e8',
  checkboxDisabledBorder: '#b1b1b1',
  checkboxActiveDisableBackgroundColor: '#a3c9e8',
  checkboxActiveDisableColor: '#ffffff',
  checkboxActiveDisableBorder: '#229bd8',
  checkboxActiveBackgroundColor: '#229bd8',
  checkboxActiveColor: '#ffffff',
  checkboxActiveBorder: '#1e8ac1',
  checkboxBorderRadius: '4px',
  checkboxBorderWidth: '1px',
  checkboxTextEnable: '#041e29',
  checkboxTextDisable: '#8f8f8f',
  radioBorderWidth: '1px',
  radioDefaultBackgroundColor: '#ffffff',
  radioDefaultBorder: '#cecece',
  radioDisableBackgroundColor: '#e8e8e8',
  radioDisableBorder: '#b1b1b1',
  radioActiveBackgroundColor: '#ffffff',
  radioActiveBorder: '#229bd8',
  radioActiveDisableBackgroundColor: '#ffffff',
  radioActiveDisableBorder: '#a3c9e8',
  radioTextEnable: '#041e29',
  radioTextDisable: '#8f8f8f',
  anchorDefaultColor: '#229bd8',
  anchorHoverColor: '#1e8ac1',
  anchorActiveColor: '#1a78a7',
  anchorFocusColor: '#229bd8',
  anchorDisableColor: '#b1b1b1',
  anchorLgFontSize: '18px',
  anchorLgIconSize: '20px',
  anchorMdFontSize: '16px',
  anchorMdIconSize: '16px',
  anchorSmFontSize: '14px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#229bd8',
  switchActiveDisableBackgroundColor: '#c6dcf0',
  switchNonactiveBackgroundColor: '#b1b1b1',
  switchNonactiveDisableBackgroundColor: '#e8e8e8',
  buttonX: '0px',
  buttonY: '0px',
  buttonBlur: '0px',
  buttonSpread: '0px',
  buttonColor: '#000000',
  buttonType: 'dropShadow',
  avatarLgSize: '64px',
  avatarLgIconSize: '40px',
  avatarLgFontSize: '18px',
  avatarMdSize: '40px',
  avatarMdIconSize: '24px',
  avatarMdFontSize: '16px',
  avatarSmSize: '32px',
  avatarSmIconSize: '16px',
  avatarSmFontSize: '12px'
};

var _formSideCenter$2, _containerLoginCen$2, _formSideRight$2, _formSideLeft$2, _containerLogin$2;
var aqf = /*#__PURE__*/makeTheme({
  //...base,
  colors: /*#__PURE__*/_extends({}, color),
  spacers: /*#__PURE__*/_extends({}, spacer),
  layout: {
    container: {
      fontFamily: 'Nunito Sans, sans-serif',
      '.container-login-center': (_containerLoginCen$2 = {}, _containerLoginCen$2['@media (max-width:480px)'] = {
        '.container-side-right': {
          display: 'none'
        }
      }, _containerLoginCen$2.position = 'relative', _containerLoginCen$2.overflow = 'hidden', _containerLoginCen$2.height = '100vh', _containerLoginCen$2['.form-side-center'] = (_formSideCenter$2 = {}, _formSideCenter$2['@media (max-width:480px)'] = {
        height: '90vh',
        width: '90%'
      }, _formSideCenter$2.position = 'absolute', _formSideCenter$2.backgroundColor = color.grayscale10, _formSideCenter$2.top = '50%', _formSideCenter$2.left = '50%', _formSideCenter$2.transform = 'translate(-50%, -50%)', _formSideCenter$2.width = '50%', _formSideCenter$2.padding = '50px 50px 20px 50px', _formSideCenter$2.overflowY = 'scroll', _formSideCenter$2.height = '70vh', _formSideCenter$2['.container-logo'] = {
        textAlign: 'center',
        '.wrapper-logo': {
          width: '150px'
        }
      }, _formSideCenter$2['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3,
        textAlign: 'center'
      }, _formSideCenter$2['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6,
        textAlign: 'center'
      }, _formSideCenter$2['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideCenter$2['.wrapper-button'] = {
        width: '100%'
      }, _formSideCenter$2['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideCenter$2['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideCenter$2['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideCenter$2), _containerLoginCen$2['.container-side-right'] = {
        width: '100%',
        '.wrapper-background': {
          width: '100% !important',
          height: '100vh !important',
          objectFit: 'cover'
        }
      }, _containerLoginCen$2),
      '.container-login': (_containerLogin$2 = {}, _containerLogin$2['@media (max-width:768px)'] = {
        '.container-side-right': {
          display: 'none'
        }
      }, _containerLogin$2.display = 'flex', _containerLogin$2.overflow = 'hidden', _containerLogin$2.height = '100vh', _containerLogin$2['.form-side-right'] = (_formSideRight$2 = {}, _formSideRight$2['@media (max-width:480px)'] = {
        padding: '20px',
        width: '100%'
      }, _formSideRight$2.order = 1, _formSideRight$2.width = '75%', _formSideRight$2.padding = '50px 100px', _formSideRight$2.overflowY = 'scroll', _formSideRight$2.height = '100vh', _formSideRight$2.position = 'relative', _formSideRight$2['.wrapper-logo'] = {
        width: '150px'
      }, _formSideRight$2['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3
      }, _formSideRight$2['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6
      }, _formSideRight$2['.wrapper-title-email'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideRight$2['.wrapper-title-pass'] = {
        color: color.grayscale80,
        marginTop: spacer.spacing6,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideRight$2['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideRight$2['.wrapper-button'] = {
        width: '100%'
      }, _formSideRight$2['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideRight$2['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideRight$2['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '70px',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideRight$2), _containerLogin$2['.form-side-left'] = (_formSideLeft$2 = {}, _formSideLeft$2['@media (max-width:480px)'] = {
        padding: '20px',
        width: '100%'
      }, _formSideLeft$2.width = '75%', _formSideLeft$2.padding = '50px 100px', _formSideLeft$2.overflowY = 'scroll', _formSideLeft$2.height = '100vh', _formSideLeft$2.position = 'relative', _formSideLeft$2['.wrapper-logo'] = {
        width: '150px'
      }, _formSideLeft$2['.wrapper-title'] = {
        color: color.secondary70,
        fontWeight: 700,
        fontSize: '36px',
        marginTop: spacer.spacing8,
        marginBottom: spacer.spacing3
      }, _formSideLeft$2['.wrapper-desc'] = {
        color: color.grayscale50,
        lineHeight: '24px',
        fontSize: '16px',
        marginBottom: spacer.spacing6
      }, _formSideLeft$2['.wrapper-title-email'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideLeft$2['.wrapper-title-pass'] = {
        color: color.grayscale80,
        marginTop: spacer.spacing6,
        fontWeight: 600,
        fontSize: '16px'
      }, _formSideLeft$2['.wrapper-remember'] = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacer.spacing6,
        marginBottom: spacer.spacing6
      }, _formSideLeft$2['.wrapper-button'] = {
        width: '100%'
      }, _formSideLeft$2['.wrapper-or'] = {
        display: 'flex',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing4,
        '.wrapper-line': {
          width: '50%',
          borderBottom: "1px solid " + color.grayscale40
        },
        '.or': {
          marginLeft: '20px',
          marginRight: '20px'
        }
      }, _formSideLeft$2['.wrapper-register'] = {
        color: color.grayscale70,
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacer.spacing4,
        marginBottom: spacer.spacing10
      }, _formSideLeft$2['.wrapper-footer'] = {
        color: color.grayscale80,
        fontWeight: 600,
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '70px',
        fontFamily: 'Nunito Sans, sans-serif'
      }, _formSideLeft$2), _containerLogin$2['.container-side-right'] = {
        width: '100%',
        '.wrapper-background': {
          width: '100% !important',
          height: '100vh !important',
          objectFit: 'cover'
        }
      }, _containerLogin$2)
    }
  },
  styles: {
    a: {
      '&:hover': {
        color: tokens$3.anchorHoverColor + " !important",
        textDecoration: "underline",
        outline: 'none',
        cursor: 'pointer'
      },
      '&:active': {
        color: tokens$3.anchorActiveColor + " !important",
        outline: 'none !important',
        textDecoration: 'underline !important'
      },
      '&:focus': {
        outline: "2px solid " + color.primary30 + " !important",
        borderRadius: '4px !important',
        textDecoration: 'none !important'
      },
      '& .wrapper-anchor': {
        display: 'flex',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginRight: '5px'
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginLeft: '5px'
      },
      sm: /*#__PURE__*/_extends({
        color: tokens$3.anchorDefaultColor + " !important"
      }, text.caption.lg.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      }),
      md: /*#__PURE__*/_extends({
        color: tokens$3.anchorDefaultColor
      }, text.body.sm.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      }),
      lg: /*#__PURE__*/_extends({
        color: tokens$3.anchorDefaultColor
      }, text.body.lg.bold, {
        display: 'inline-flex',
        alignItems: 'center'
      })
    }
  },
  forms: {
    "switch": {
      md: {
        height: '22px',
        width: '40px',
        marginTop: '-2px'
      },
      sm: {
        marginTop: '2px',
        height: '17px',
        width: '28px',
        'div': {
          height: '12px !important',
          width: '12px !important'
        }
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: '#52BD94 !important'
      },
      ":disabled": {
        background: '#D9DDE3 !important'
      }
    },
    checkbox: {
      sizeBoxLarge: {
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      sizeBoxSmall: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      wrappLabel: {
        marginLeft: '10px'
      },
      '& .container-checkbox': {
        display: 'flex',
        alignItems: 'center'
      },
      check: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""'
            },
            cursor: 'pointer'
          },
          '&:checked': {
            '&:after': {
              content: '"\\2714"',
              color: color.grayscale60
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: '4px !important',
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + color.grayscale30,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$3.primary500,
          '&:after': {
            color: color.primary20,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$3.checkboxActiveBackgroundColor,
          border: 'none',
          '&:after': {
            content: '"\\2714"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: tokens$3.primary600
          }
        }
      },
      indeterminate: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""'
            },
            cursor: 'pointer'
          },
          '&:checked': {
            '&:after': {
              content: '"\\2012"',
              color: color.grayscale60
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: tokens$3.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + color.grayscale30,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$3.primary500,
          '&:after': {
            color: color.primary20,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$3.primary500,
          border: 'none',
          '&:after': {
            content: '"\\2012"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: tokens$3.primary600
          }
        }
      }
    }
  },
  buttons: {
    sm: /*#__PURE__*/_extends({
      padding: tokens$3.buttonsSmPaddingTopBottom + " " + tokens$3.buttonsSmPaddingLeftRight + " " + tokens$3.buttonsSmPaddingTopBottom + " " + tokens$3.buttonsSmPaddingLeftRight + " !important"
    }, text.caption.lg.reguler),
    md: /*#__PURE__*/_extends({
      padding: tokens$3.buttonsMdPaddingTopBottom + " " + tokens$3.buttonsMdPaddingLeftRight + " " + tokens$3.buttonsMdPaddingTopBottom + " " + tokens$3.buttonsMdPaddingLeftRight + " !important"
    }, text.body.sm.reguler),
    lg: /*#__PURE__*/_extends({
      padding: tokens$3.buttonsLgPaddingTopBottom + " " + tokens$3.buttonsLgPaddingLeftRight + " " + tokens$3.buttonsLgPaddingTopBottom + " " + tokens$3.buttonsLgPaddingLeftRight + " !important"
    }, text.body.sm.reguler),
    solid: {
      alignItems: 'center',
      borderRadius: "" + tokens$3.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$3.buttonsPrimaryDefaultBackgroundColor,
      color: tokens$3.buttonsPrimaryDefaultColor,
      border: tokens$3.buttonsPrimaryBorderWidth,
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center'
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px'
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center'
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center'
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center'
      },
      '&:hover': {
        backgroundColor: tokens$3.buttonsPrimaryHoverBackgroundColor,
        color: tokens$3.buttonsPrimaryHoverColor,
        boxShadow: 'none !important'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$3.buttonsPrimaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$3.buttonsPrimaryActiveBackgroundColor,
        color: tokens$3.buttonsPrimaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens$3.buttonsPrimaryDisabledBackgroundColor,
        color: tokens$3.buttonsPrimaryDisabledColor
      }
    }
  },
  Heading: {
    h1: /*#__PURE__*/_extends({}, text.heading.h1),
    h2: /*#__PURE__*/_extends({}, text.heading.h2),
    h3: /*#__PURE__*/_extends({}, text.heading.h3),
    h4: /*#__PURE__*/_extends({}, text.heading.h4),
    h5: /*#__PURE__*/_extends({}, text.heading.h5),
    h6: /*#__PURE__*/_extends({}, text.heading.h6)
  },
  Body: {
    lg_reguler: /*#__PURE__*/_extends({}, text.body.lg.reguler),
    lg_semibold: /*#__PURE__*/_extends({}, text.body.lg.semibold),
    lg_bold: /*#__PURE__*/_extends({}, text.body.lg.bold),
    lg_italic: /*#__PURE__*/_extends({}, text.body.lg.italic),
    lg_underline: /*#__PURE__*/_extends({}, text.body.lg.underline),
    lg_underline_semibold: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold),
    lg_underline_bold: /*#__PURE__*/_extends({}, text.body.lg.underline_bold),
    sm_reguler: /*#__PURE__*/_extends({}, text.body.sm.reguler),
    sm_semibold: /*#__PURE__*/_extends({}, text.body.sm.semibold),
    sm_bold: /*#__PURE__*/_extends({}, text.body.sm.bold),
    sm_italic: /*#__PURE__*/_extends({}, text.body.sm.italic),
    sm_underline: /*#__PURE__*/_extends({}, text.body.sm.underline),
    sm_underline_semibold: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold),
    sm_underline_bold: /*#__PURE__*/_extends({}, text.body.sm.underline_bold)
  },
  Caption: {
    lg_reguler: /*#__PURE__*/_extends({}, text.caption.lg.reguler),
    lg_semibold: /*#__PURE__*/_extends({}, text.caption.lg.semibold),
    lg_bold: /*#__PURE__*/_extends({}, text.caption.lg.bold),
    lg_italic: /*#__PURE__*/_extends({}, text.caption.lg.italic),
    lg_underline: /*#__PURE__*/_extends({}, text.caption.lg.underline),
    lg_underline_semibold: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold),
    lg_underline_bold: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold),
    sm_reguler: /*#__PURE__*/_extends({}, text.caption.sm.reguler),
    sm_semibold: /*#__PURE__*/_extends({}, text.caption.sm.semibold),
    sm_bold: /*#__PURE__*/_extends({}, text.caption.sm.bold),
    sm_italic: /*#__PURE__*/_extends({}, text.caption.sm.italic),
    sm_underline: /*#__PURE__*/_extends({}, text.caption.sm.underline),
    sm_underline_semibold: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold),
    sm_underline_bold: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold)
  }
});

export { agl, agr, aqf, color, spacer, text, tokens };
//# sourceMappingURL=agree.esm.js.map
