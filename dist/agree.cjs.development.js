'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deepmerge = _interopDefault(require('deepmerge'));
var utils = require('@theme-ui/css/utils');

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
 * Generated on Tue, 11 Oct 2022 09:25:29 GMT
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
  lineHeights14: '56px',
  lineHeights15: '72px',
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
  headingHeading1LineHeight: '72px',
  headingHeading1FontSize: '60px',
  headingHeading1LetterSpacing: '0px',
  headingHeading1ParagraphSpacing: '0px',
  headingHeading1TextCase: 'none',
  headingHeading1TextDecoration: 'none',
  headingHeading2FontFamily: 'Montserrat',
  headingHeading2FontWeight: 'Bold',
  headingHeading2LineHeight: '56px',
  headingHeading2FontSize: '48px',
  headingHeading2LetterSpacing: '0px',
  headingHeading2ParagraphSpacing: '0px',
  headingHeading2TextCase: 'none',
  headingHeading2TextDecoration: 'none',
  headingHeading3FontFamily: 'Montserrat',
  headingHeading3FontWeight: 'Bold',
  headingHeading3LineHeight: '44px',
  headingHeading3FontSize: '36px',
  headingHeading3LetterSpacing: '0px',
  headingHeading3ParagraphSpacing: '0px',
  headingHeading3TextCase: 'none',
  headingHeading3TextDecoration: 'none',
  headingHeading4FontFamily: 'Montserrat',
  headingHeading4FontWeight: 'Bold',
  headingHeading4LineHeight: '40px',
  headingHeading4FontSize: '30px',
  headingHeading4LetterSpacing: '0px',
  headingHeading4ParagraphSpacing: '0px',
  headingHeading4TextCase: 'none',
  headingHeading4TextDecoration: 'none',
  headingHeading5FontFamily: 'Montserrat',
  headingHeading5FontWeight: 'Bold',
  headingHeading5LineHeight: '36px',
  headingHeading5FontSize: '24px',
  headingHeading5LetterSpacing: '0px',
  headingHeading5ParagraphSpacing: '0px',
  headingHeading5TextCase: 'none',
  headingHeading5TextDecoration: 'none',
  headingHeading6FontFamily: 'Montserrat',
  headingHeading6FontWeight: 'Bold',
  headingHeading6LineHeight: '28px',
  headingHeading6FontSize: '20px',
  headingHeading6LetterSpacing: '0px',
  headingHeading6ParagraphSpacing: '0px',
  headingHeading6TextCase: 'uppercase',
  headingHeading6TextDecoration: 'none',
  bodyLargeRegularFontFamily: 'Open Sans',
  bodyLargeRegularFontWeight: 'Regular',
  bodyLargeRegularLineHeight: '28px',
  bodyLargeRegularFontSize: '18px',
  bodyLargeRegularLetterSpacing: '0px',
  bodyLargeRegularParagraphSpacing: '0px',
  bodyLargeRegularTextCase: 'none',
  bodyLargeRegularTextDecoration: 'none',
  bodyLargeSemiboldFontFamily: 'Open Sans',
  bodyLargeSemiboldFontWeight: 'SemiBold',
  bodyLargeSemiboldLineHeight: '28px',
  bodyLargeSemiboldFontSize: '18px',
  bodyLargeSemiboldLetterSpacing: '0px',
  bodyLargeSemiboldParagraphSpacing: '0px',
  bodyLargeSemiboldTextCase: 'none',
  bodyLargeSemiboldTextDecoration: 'none',
  bodyLargeBoldFontFamily: 'Open Sans',
  bodyLargeBoldFontWeight: 'Bold',
  bodyLargeBoldLineHeight: '28px',
  bodyLargeBoldFontSize: '18px',
  bodyLargeBoldLetterSpacing: '0px',
  bodyLargeBoldParagraphSpacing: '0px',
  bodyLargeBoldTextCase: 'none',
  bodyLargeBoldTextDecoration: 'none',
  bodyLargeItalicFontFamily: 'Open Sans',
  bodyLargeItalicFontWeight: 'Italic',
  bodyLargeItalicLineHeight: '28px',
  bodyLargeItalicFontSize: '18px',
  bodyLargeItalicLetterSpacing: '0px',
  bodyLargeItalicParagraphSpacing: '0px',
  bodyLargeItalicTextCase: 'none',
  bodyLargeItalicTextDecoration: 'none',
  bodyLargeUnderlineFontFamily: 'Open Sans',
  bodyLargeUnderlineFontWeight: 'Regular',
  bodyLargeUnderlineLineHeight: '28px',
  bodyLargeUnderlineFontSize: '18px',
  bodyLargeUnderlineLetterSpacing: '0px',
  bodyLargeUnderlineParagraphSpacing: '0px',
  bodyLargeUnderlineTextCase: 'none',
  bodyLargeUnderlineTextDecoration: 'underline',
  bodyLargeUnderlineSemiboldFontFamily: 'Open Sans',
  bodyLargeUnderlineSemiboldFontWeight: 'SemiBold',
  bodyLargeUnderlineSemiboldLineHeight: '28px',
  bodyLargeUnderlineSemiboldFontSize: '18px',
  bodyLargeUnderlineSemiboldLetterSpacing: '0px',
  bodyLargeUnderlineSemiboldParagraphSpacing: '0px',
  bodyLargeUnderlineSemiboldTextCase: 'none',
  bodyLargeUnderlineSemiboldTextDecoration: 'underline',
  bodyLargeUnderlineBoldFontFamily: 'Open Sans',
  bodyLargeUnderlineBoldFontWeight: 'Bold',
  bodyLargeUnderlineBoldLineHeight: '28px',
  bodyLargeUnderlineBoldFontSize: '18px',
  bodyLargeUnderlineBoldLetterSpacing: '0px',
  bodyLargeUnderlineBoldParagraphSpacing: '0px',
  bodyLargeUnderlineBoldTextCase: 'none',
  bodyLargeUnderlineBoldTextDecoration: 'underline',
  bodySmallRegularFontFamily: 'Open Sans',
  bodySmallRegularFontWeight: 'Regular',
  bodySmallRegularLineHeight: '24px',
  bodySmallRegularFontSize: '16px',
  bodySmallRegularLetterSpacing: '0px',
  bodySmallRegularParagraphSpacing: '0px',
  bodySmallRegularTextCase: 'none',
  bodySmallRegularTextDecoration: 'none',
  bodySmallSemiboldFontFamily: 'Open Sans',
  bodySmallSemiboldFontWeight: 'SemiBold',
  bodySmallSemiboldLineHeight: '24px',
  bodySmallSemiboldFontSize: '16px',
  bodySmallSemiboldLetterSpacing: '0px',
  bodySmallSemiboldParagraphSpacing: '0px',
  bodySmallSemiboldTextCase: 'none',
  bodySmallSemiboldTextDecoration: 'none',
  bodySmallBoldFontFamily: 'Open Sans',
  bodySmallBoldFontWeight: 'Bold',
  bodySmallBoldLineHeight: '24px',
  bodySmallBoldFontSize: '16px',
  bodySmallBoldLetterSpacing: '0px',
  bodySmallBoldParagraphSpacing: '0px',
  bodySmallBoldTextCase: 'none',
  bodySmallBoldTextDecoration: 'none',
  bodySmallItalicFontFamily: 'Open Sans',
  bodySmallItalicFontWeight: 'Italic',
  bodySmallItalicLineHeight: '24px',
  bodySmallItalicFontSize: '16px',
  bodySmallItalicLetterSpacing: '0px',
  bodySmallItalicParagraphSpacing: '0px',
  bodySmallItalicTextCase: 'none',
  bodySmallItalicTextDecoration: 'none',
  bodySmallUnderlineFontFamily: 'Open Sans',
  bodySmallUnderlineFontWeight: 'Regular',
  bodySmallUnderlineLineHeight: '24px',
  bodySmallUnderlineFontSize: '16px',
  bodySmallUnderlineLetterSpacing: '0px',
  bodySmallUnderlineParagraphSpacing: '18px',
  bodySmallUnderlineTextCase: 'none',
  bodySmallUnderlineTextDecoration: 'underline',
  bodySmallUnderlineSemiboldFontFamily: 'Open Sans',
  bodySmallUnderlineSemiboldFontWeight: 'SemiBold',
  bodySmallUnderlineSemiboldLineHeight: '24px',
  bodySmallUnderlineSemiboldFontSize: '16px',
  bodySmallUnderlineSemiboldLetterSpacing: '0px',
  bodySmallUnderlineSemiboldParagraphSpacing: '0px',
  bodySmallUnderlineSemiboldTextCase: 'none',
  bodySmallUnderlineSemiboldTextDecoration: 'underline',
  bodySmallUnderlineBoldFontFamily: 'Open Sans',
  bodySmallUnderlineBoldFontWeight: 'Bold',
  bodySmallUnderlineBoldLineHeight: '24px',
  bodySmallUnderlineBoldFontSize: '16px',
  bodySmallUnderlineBoldLetterSpacing: '-0.08px',
  bodySmallUnderlineBoldParagraphSpacing: '0px',
  bodySmallUnderlineBoldTextCase: 'none',
  bodySmallUnderlineBoldTextDecoration: 'underline',
  captionLargeRegularFontFamily: 'Open Sans',
  captionLargeRegularFontWeight: 'Regular',
  captionLargeRegularLineHeight: '21px',
  captionLargeRegularFontSize: '14px',
  captionLargeRegularLetterSpacing: '0px',
  captionLargeRegularParagraphSpacing: '0px',
  captionLargeRegularTextCase: 'none',
  captionLargeRegularTextDecoration: 'none',
  captionLargeSemiboldFontFamily: 'Open Sans',
  captionLargeSemiboldFontWeight: 'SemiBold',
  captionLargeSemiboldLineHeight: '21px',
  captionLargeSemiboldFontSize: '14px',
  captionLargeSemiboldLetterSpacing: '0px',
  captionLargeSemiboldParagraphSpacing: '0px',
  captionLargeSemiboldTextCase: 'none',
  captionLargeSemiboldTextDecoration: 'none',
  captionLargeBoldFontFamily: 'Open Sans',
  captionLargeBoldFontWeight: 'Bold',
  captionLargeBoldLineHeight: '21px',
  captionLargeBoldFontSize: '14px',
  captionLargeBoldLetterSpacing: '0px',
  captionLargeBoldParagraphSpacing: '0px',
  captionLargeBoldTextCase: 'none',
  captionLargeBoldTextDecoration: 'none',
  captionLargeItalicFontFamily: 'Open Sans',
  captionLargeItalicFontWeight: 'Italic',
  captionLargeItalicLineHeight: '21px',
  captionLargeItalicFontSize: '14px',
  captionLargeItalicLetterSpacing: '0px',
  captionLargeItalicParagraphSpacing: '0px',
  captionLargeItalicTextCase: 'none',
  captionLargeItalicTextDecoration: 'none',
  captionLargeUnderlineFontFamily: 'Open Sans',
  captionLargeUnderlineFontWeight: 'Regular',
  captionLargeUnderlineLineHeight: '21px',
  captionLargeUnderlineFontSize: '14px',
  captionLargeUnderlineLetterSpacing: '0px',
  captionLargeUnderlineParagraphSpacing: '0px',
  captionLargeUnderlineTextCase: 'none',
  captionLargeUnderlineTextDecoration: 'underline',
  captionLargeUnderlineSemiboldFontFamily: 'Open Sans',
  captionLargeUnderlineSemiboldFontWeight: 'SemiBold',
  captionLargeUnderlineSemiboldLineHeight: '21px',
  captionLargeUnderlineSemiboldFontSize: '14px',
  captionLargeUnderlineSemiboldLetterSpacing: '0px',
  captionLargeUnderlineSemiboldParagraphSpacing: '0px',
  captionLargeUnderlineSemiboldTextCase: 'none',
  captionLargeUnderlineSemiboldTextDecoration: 'underline',
  captionLargeUnderlineBoldFontFamily: 'Open Sans',
  captionLargeUnderlineBoldFontWeight: 'Bold',
  captionLargeUnderlineBoldLineHeight: '21px',
  captionLargeUnderlineBoldFontSize: '14px',
  captionLargeUnderlineBoldLetterSpacing: '0px',
  captionLargeUnderlineBoldParagraphSpacing: '0px',
  captionLargeUnderlineBoldTextCase: 'none',
  captionLargeUnderlineBoldTextDecoration: 'underline',
  captionSmallRegularFontFamily: 'Open Sans',
  captionSmallRegularFontWeight: 'Regular',
  captionSmallRegularLineHeight: '18px',
  captionSmallRegularFontSize: '12px',
  captionSmallRegularLetterSpacing: '0px',
  captionSmallRegularParagraphSpacing: '0px',
  captionSmallRegularTextCase: 'none',
  captionSmallRegularTextDecoration: 'none',
  captionSmallSemiboldFontFamily: 'Open Sans',
  captionSmallSemiboldFontWeight: 'SemiBold',
  captionSmallSemiboldLineHeight: '18px',
  captionSmallSemiboldFontSize: '12px',
  captionSmallSemiboldLetterSpacing: '0px',
  captionSmallSemiboldParagraphSpacing: '0px',
  captionSmallSemiboldTextCase: 'none',
  captionSmallSemiboldTextDecoration: 'none',
  captionSmallBoldFontFamily: 'Open Sans',
  captionSmallBoldFontWeight: 'Bold',
  captionSmallBoldLineHeight: '18px',
  captionSmallBoldFontSize: '12px',
  captionSmallBoldLetterSpacing: '0px',
  captionSmallBoldParagraphSpacing: '0px',
  captionSmallBoldTextCase: 'none',
  captionSmallBoldTextDecoration: 'none',
  captionSmallItalicFontFamily: 'Open Sans',
  captionSmallItalicFontWeight: 'Italic',
  captionSmallItalicLineHeight: '18px',
  captionSmallItalicFontSize: '12px',
  captionSmallItalicLetterSpacing: '0px',
  captionSmallItalicParagraphSpacing: '0px',
  captionSmallItalicTextCase: 'none',
  captionSmallItalicTextDecoration: 'none',
  captionSmallUnderlineFontFamily: 'Open Sans',
  captionSmallUnderlineFontWeight: 'Regular',
  captionSmallUnderlineLineHeight: '18px',
  captionSmallUnderlineFontSize: '12px',
  captionSmallUnderlineLetterSpacing: '0px',
  captionSmallUnderlineParagraphSpacing: '18px',
  captionSmallUnderlineTextCase: 'none',
  captionSmallUnderlineTextDecoration: 'underline',
  captionSmallUnderlineSemiboldFontFamily: 'Open Sans',
  captionSmallUnderlineSemiboldFontWeight: 'SemiBold',
  captionSmallUnderlineSemiboldLineHeight: '18px',
  captionSmallUnderlineSemiboldFontSize: '12px',
  captionSmallUnderlineSemiboldLetterSpacing: '0px',
  captionSmallUnderlineSemiboldParagraphSpacing: '0px',
  captionSmallUnderlineSemiboldTextCase: 'none',
  captionSmallUnderlineSemiboldTextDecoration: 'underline',
  captionSmallUnderlineBoldFontFamily: 'Open Sans',
  captionSmallUnderlineBoldFontWeight: 'Bold',
  captionSmallUnderlineBoldLineHeight: '18px',
  captionSmallUnderlineBoldFontSize: '12px',
  captionSmallUnderlineBoldLetterSpacing: '-0.08px',
  captionSmallUnderlineBoldParagraphSpacing: '0px',
  captionSmallUnderlineBoldTextCase: 'none',
  captionSmallUnderlineBoldTextDecoration: 'underline'
};

var text = {
  body: {
    lg: {
      regular: {
        fontSize: "" + tokens.bodyLargeRegularFontSize,
        lineHeight: "" + tokens.bodyLargeRegularLineHeight,
        fontWeight: 400,
        fontFamily: "" + tokens.bodyLargeRegularFontFamily
      },
      semibold: {
        fontSize: "" + tokens.bodyLargeSemiboldFontSize,
        lineHeight: "" + tokens.bodyLargeSemiboldLineHeight,
        fontWeight: 600,
        fontFamily: "" + tokens.bodyLargeSemiboldFontFamily
      },
      bold: {
        fontSize: "" + tokens.bodyLargeBoldFontSize,
        lineHeight: "" + tokens.bodyLargeBoldLineHeight,
        fontWeight: 700,
        fontFamily: "" + tokens.bodyLargeBoldFontFamily
      },
      italic: {
        fontSize: "" + tokens.bodyLargeItalicFontSize,
        lineHeight: "" + tokens.bodyLargeItalicLineHeight,
        fontWeight: 400,
        fontStyle: 'italic',
        fontFamily: "" + tokens.bodyLargeItalicFontFamily
      },
      underline: {
        fontSize: "" + tokens.bodyLargeUnderlineFontSize,
        lineHeight: "" + tokens.bodyLargeUnderlineLineHeight,
        fontWeight: 400,
        textDecoration: 'underline',
        fontFamily: "" + tokens.bodyLargeUnderlineFontFamily
      },
      underline_semibold: {
        fontSize: "" + tokens.bodyLargeUnderlineSemiboldFontSize,
        lineHeight: "" + tokens.bodyLargeUnderlineSemiboldLineHeight,
        fontWeight: 600,
        textDecoration: 'underline',
        fontFamily: "" + tokens.bodyLargeUnderlineSemiboldFontFamily
      },
      underline_bold: {
        fontSize: "" + tokens.bodyLargeUnderlineBoldFontSize,
        lineHeight: "" + tokens.bodyLargeUnderlineBoldLineHeight,
        fontWeight: 700,
        textDecoration: "" + tokens.bodyLargeUnderlineBoldTextDecoration,
        fontFamily: "" + tokens.bodyLargeUnderlineBoldFontFamily
      }
    },
    sm: {
      regular: {
        fontSize: "" + tokens.bodySmallRegularFontSize,
        lineHeight: "" + tokens.bodySmallRegularLineHeight,
        fontWeight: 400,
        fontFamily: "" + tokens.bodySmallRegularFontFamily
      },
      semibold: {
        fontSize: "" + tokens.bodySmallSemiboldFontSize,
        lineHeight: "" + tokens.bodySmallSemiboldLineHeight,
        fontWeight: 600,
        fontFamily: "" + tokens.bodySmallSemiboldFontFamily
      },
      bold: {
        fontSize: "" + tokens.bodySmallBoldFontSize,
        lineHeight: "" + tokens.bodySmallBoldLineHeight,
        fontWeight: 700,
        fontFamily: "" + tokens.bodySmallBoldFontFamily
      },
      italic: {
        fontSize: "" + tokens.bodySmallItalicFontSize,
        lineHeight: "" + tokens.bodySmallItalicLineHeight,
        fontWeight: 400,
        fontStyle: 'italic',
        fontFamily: "" + tokens.bodySmallItalicFontFamily
      },
      underline: {
        fontSize: "" + tokens.bodySmallUnderlineFontSize,
        lineHeight: "" + tokens.bodySmallUnderlineLineHeight,
        fontWeight: 400,
        textDecoration: 'underline',
        fontFamily: "" + tokens.bodySmallUnderlineFontFamily
      },
      underline_semibold: {
        fontSize: "" + tokens.bodySmallUnderlineSemiboldFontSize,
        lineHeight: "" + tokens.bodySmallUnderlineSemiboldLineHeight,
        fontWeight: 600,
        textDecoration: 'underline',
        fontFamily: "" + tokens.bodySmallUnderlineSemiboldFontFamily
      },
      underline_bold: {
        fontSize: "" + tokens.bodySmallUnderlineBoldFontSize,
        lineHeight: "" + tokens.bodySmallUnderlineBoldLineHeight,
        fontWeight: 700,
        textDecoration: 'underline',
        fontFamily: "" + tokens.bodySmallUnderlineBoldFontFamily
      }
    }
  },
  caption: {
    lg: {
      regular: {
        fontSize: "" + tokens.captionLargeRegularFontSize,
        lineHeight: "" + tokens.captionLargeRegularLineHeight,
        fontWeight: 400,
        fontFamily: "" + tokens.captionLargeRegularFontFamily
      },
      semibold: {
        fontSize: "" + tokens.captionLargeSemiboldFontSize,
        lineHeight: "" + tokens.captionLargeSemiboldLineHeight,
        fontWeight: 600,
        fontFamily: "" + tokens.captionLargeSemiboldFontFamily
      },
      bold: {
        fontSize: "" + tokens.captionLargeBoldFontSize,
        lineHeight: "" + tokens.captionLargeBoldLineHeight,
        fontWeight: 700,
        fontFamily: "" + tokens.captionLargeBoldFontFamily
      },
      italic: {
        fontSize: "" + tokens.captionLargeItalicFontSize,
        lineHeight: "" + tokens.captionLargeItalicLineHeight,
        fontWeight: 400,
        fontStyle: 'italic',
        fontFamily: "" + tokens.captionLargeItalicFontFamily
      },
      underline: {
        fontSize: "" + tokens.captionLargeUnderlineFontSize,
        lineHeight: "" + tokens.captionLargeUnderlineLineHeight,
        fontWeight: 400,
        textDecoration: 'italic',
        fontFamily: "" + tokens.captionLargeUnderlineFontFamily
      },
      underline_semibold: {
        fontSize: "" + tokens.captionLargeUnderlineSemiboldFontSize,
        lineHeight: "" + tokens.captionLargeUnderlineSemiboldLineHeight,
        fontWeight: 600,
        textDecoration: 'underline',
        fontFamily: "" + tokens.captionLargeUnderlineSemiboldFontFamily
      },
      underline_bold: {
        fontSize: "" + tokens.captionLargeUnderlineBoldFontSize,
        lineHeight: "" + tokens.captionLargeUnderlineBoldLineHeight,
        fontWeight: 700,
        textDecoration: 'underline',
        fontFamily: "" + tokens.captionLargeUnderlineBoldFontFamily
      }
    },
    sm: {
      regular: {
        fontSize: "" + tokens.captionSmallRegularFontSize,
        lineHeight: "" + tokens.captionSmallRegularLineHeight,
        fontWeight: 400,
        fontFamily: "" + tokens.captionSmallRegularFontFamily
      },
      semibold: {
        fontSize: "" + tokens.captionSmallSemiboldFontSize,
        lineHeight: "" + tokens.captionSmallSemiboldLineHeight,
        fontWeight: 600,
        fontFamily: "" + tokens.captionSmallSemiboldFontFamily
      },
      bold: {
        fontSize: "" + tokens.captionSmallBoldFontSize,
        lineHeight: "" + tokens.captionSmallBoldLineHeight,
        fontWeight: 700,
        fontFamily: "" + tokens.captionSmallBoldFontFamily
      },
      italic: {
        fontSize: "" + tokens.captionSmallItalicFontSize,
        lineHeight: "" + tokens.captionSmallItalicLineHeight,
        fontWeight: 400,
        fontStyle: 'italic',
        fontFamily: "" + tokens.captionSmallItalicFontFamily
      },
      underline: {
        fontSize: "" + tokens.captionSmallUnderlineFontSize,
        lineHeight: "" + tokens.captionSmallUnderlineLineHeight,
        fontWeight: 400,
        textDecoration: 'underilne',
        fontFamily: "" + tokens.captionSmallUnderlineFontFamily
      },
      underline_semibold: {
        fontSize: "" + tokens.captionSmallUnderlineSemiboldFontSize,
        lineHeight: "" + tokens.captionSmallUnderlineSemiboldLineHeight,
        fontWeight: 600,
        textDecoration: 'underline',
        fontFamily: "" + tokens.captionSmallUnderlineSemiboldFontFamily
      },
      underline_bold: {
        fontSize: "" + tokens.captionSmallUnderlineBoldFontSize,
        lineHeight: "" + tokens.captionSmallUnderlineBoldLineHeight,
        fontWeight: 700,
        textDecoration: 'underline',
        fontFamily: "" + tokens.captionSmallUnderlineBoldFontFamily
      }
    }
  },
  heading: {
    h1: {
      fontSize: "" + tokens.headingHeading1FontSize,
      lineHeight: "" + tokens.headingHeading1LineHeight,
      fontWeight: 700,
      fontFamily: "" + tokens.headingHeading1FontFamily
    },
    h2: {
      fontSize: "" + tokens.headingHeading2FontSize,
      lineHeight: "" + tokens.headingHeading2LineHeight,
      fontWeight: 700,
      fontFamily: "" + tokens.headingHeading2FontFamily
    },
    h3: {
      fontSize: "" + tokens.headingHeading3FontSize,
      lineHeight: "" + tokens.headingHeading3LineHeight,
      fontWeight: 700,
      fontFamily: "" + tokens.headingHeading3FontFamily
    },
    h4: {
      fontSize: "" + tokens.headingHeading4FontSize,
      lineHeight: "" + tokens.headingHeading4LineHeight,
      fontWeight: 700,
      fontFamily: "" + tokens.headingHeading4FontFamily
    },
    h5: {
      fontSize: "" + tokens.headingHeading5FontSize,
      lineHeight: "" + tokens.headingHeading5LineHeight,
      fontWeight: 700,
      fontFamily: "" + tokens.headingHeading5FontFamily
    },
    h6: {
      fontSize: "" + tokens.headingHeading6FontSize,
      lineHeight: "" + tokens.headingHeading6LineHeight,
      fontWeight: 700,
      fontFamily: "" + tokens.headingHeading6FontFamily
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
 * Generated on Tue, 11 Oct 2022 09:25:29 GMT
 */
var tokens$1 = {
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
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
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
  anchorLgIconSize: '20px',
  anchorMdIconSize: '16px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#ff9900',
  switchActiveDisableBackgroundColor: '#ffdbc5',
  switchNonactiveBackgroundColor: '#b1b1b1',
  switchNonactiveDisableBackgroundColor: '#e8e8e8',
  avatarLgSize: '64px',
  avatarLgIconSize: '40px',
  avatarMdSize: '40px',
  avatarMdIconSize: '24px',
  avatarSmSize: '32px',
  avatarSmIconSize: '16px',
  textFieldDefaultBackgroundColor: '#ffffff',
  textFieldDefaultOutlineColor: '#cecece',
  textFieldDefaultIconColor: '#3d3d3d',
  textFieldDefaultPlaceholderColor: '#8f8f8f',
  textFieldDefaultLabelColor: '#3d3d3d',
  textFieldActiveOutlineColor: '#ff9900',
  textFieldActivePlaceholderColor: '#3d3d3d',
  textFieldActiveBorderColor: '#ffdbc5',
  textFieldErrorOutlineColor: '#f04438',
  textFieldSuccessOutlineColor: '#12b76a',
  textFieldDisableBackgroundColor: '#e8e8e8',
  textFieldDisableOutlineColor: '#b1b1b1',
  textFieldDisablePlaceholderColor: '#8f8f8f',
  textFieldPrefixsufixLineColor: '#b1b1b1',
  textFieldPrefixsufixTextColor: '#616161',
  textFieldBorderRadius: '4px',
  textFieldPaddingLeftRight: '12px',
  textFieldPaddingTopBottom: '12px',
  badgePrimaryBackgroundColor: '#ff9900',
  badgePrimaryColor: '#ffffff',
  badgeSecondaryBackgroundColor: '#ffeee4',
  badgeSecondaryColor: '#ff9900',
  badgeErrorBackgroundColor: '#fce6e5',
  badgeErrorColor: '#f04438',
  badgeInfoBackgroundColor: '#e0f2fe',
  badgeInfoColor: '#0ba5ec',
  badgeSuccessBackgroundColor: '#d1fadf',
  badgeSuccessColor: '#12b76a',
  badgeWarningBackgroundColor: '#fdece4',
  badgeWarningColor: '#f79009',
  badgeBorderRadius: '8px'
};

var _formSideCenter, _containerLoginCen, _formSideRight, _formSideLeft, _containerLogin;
var agl = /*#__PURE__*/utils.makeTheme({
  //...base,
  colors: {
    primary25: tokens$1.primary25,
    primary50: tokens$1.primary50,
    primary100: tokens$1.primary100,
    primary200: tokens$1.primary200,
    primary300: tokens$1.primary300,
    primary400: tokens$1.primary400,
    primary500: tokens$1.primary500,
    primary600: tokens$1.primary600,
    primary700: tokens$1.primary700,
    primary800: tokens$1.primary800,
    primary900: tokens$1.primary900,
    secondary25: tokens$1.secondary25,
    secondary50: tokens$1.secondary50,
    secondary100: tokens$1.secondary100,
    secondary200: tokens$1.secondary200,
    secondary300: tokens$1.secondary300,
    secondary400: tokens$1.secondary400,
    secondary500: tokens$1.secondary500,
    secondary600: tokens$1.secondary600,
    secondary700: tokens$1.secondary700,
    secondary800: tokens$1.secondary800,
    secondary900: tokens$1.secondary900,
    tertiary25: tokens$1.tertiary25,
    tertiary50: tokens$1.tertiary50,
    tertiary100: tokens$1.tertiary100,
    tertiary200: tokens$1.tertiary200,
    tertiary300: tokens$1.tertiary300,
    tertiary400: tokens$1.tertiary400,
    tertiary500: tokens$1.tertiary500,
    tertiary600: tokens$1.tertiary600,
    tertiary700: tokens$1.tertiary700,
    tertiary800: tokens$1.tertiary800,
    tertiary900: tokens$1.tertiary900,
    error25: tokens$1.error25,
    error50: tokens$1.error50,
    error100: tokens$1.error100,
    error200: tokens$1.error200,
    error300: tokens$1.error300,
    error400: tokens$1.error400,
    error500: tokens$1.error500,
    error600: tokens$1.error600,
    error700: tokens$1.error700,
    error800: tokens$1.error800,
    error900: tokens$1.error900,
    warning25: tokens$1.warning25,
    warning50: tokens$1.warning50,
    warning100: tokens$1.warning100,
    warning200: tokens$1.warning200,
    warning300: tokens$1.warning300,
    warning400: tokens$1.warning400,
    warning500: tokens$1.warning500,
    warning600: tokens$1.warning600,
    warning700: tokens$1.warning700,
    warning800: tokens$1.warning800,
    warning900: tokens$1.warning900,
    success25: tokens$1.success25,
    success50: tokens$1.success50,
    success100: tokens$1.success100,
    success200: tokens$1.success200,
    success300: tokens$1.success300,
    success400: tokens$1.success400,
    success500: tokens$1.success500,
    success600: tokens$1.success600,
    success700: tokens$1.success700,
    success800: tokens$1.success800,
    success900: tokens$1.success900,
    information25: tokens$1.information25,
    information50: tokens$1.information50,
    information100: tokens$1.information100,
    information200: tokens$1.information200,
    information300: tokens$1.information300,
    information400: tokens$1.information400,
    information500: tokens$1.information500,
    information600: tokens$1.information600,
    information700: tokens$1.information700,
    information800: tokens$1.information800,
    information900: tokens$1.information900
  },
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
      color: tokens$1.anchorDefaultColor,
      disabled: {
        color: tokens$1.tertiary300,
        pointerEvents: 'none'
      },
      '&:hover': {
        color: tokens$1.anchorHoverColor + " !important",
        textDecoration: 'underline',
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
    },
    background: {
      primary25: {
        background: "" + tokens$1.primary25
      },
      primary50: {
        background: "" + tokens$1.primary50
      },
      primary100: {
        background: "" + tokens$1.primary100
      },
      primary200: {
        background: "" + tokens$1.primary200
      },
      primary300: {
        background: "" + tokens$1.primary300
      },
      primary400: {
        background: "" + tokens$1.primary400
      },
      primary500: {
        background: "" + tokens$1.primary500
      },
      primary600: {
        background: "" + tokens$1.primary600
      },
      primary700: {
        background: "" + tokens$1.primary700
      },
      primary800: {
        background: "" + tokens$1.primary800
      },
      primary900: {
        background: "" + tokens$1.primary900
      },
      secondary25: {
        background: "" + tokens$1.secondary25
      },
      secondary50: {
        background: "" + tokens$1.secondary50
      },
      secondary100: {
        background: "" + tokens$1.secondary100
      },
      secondary200: {
        background: "" + tokens$1.secondary200
      },
      secondary300: {
        background: "" + tokens$1.secondary300
      },
      secondary400: {
        background: "" + tokens$1.secondary400
      },
      secondary500: {
        background: "" + tokens$1.secondary500
      },
      secondary600: {
        background: "" + tokens$1.secondary600
      },
      secondary700: {
        background: "" + tokens$1.secondary700
      },
      secondary800: {
        background: "" + tokens$1.secondary800
      },
      secondary900: {
        background: "" + tokens$1.secondary900
      },
      tertiary25: {
        background: "" + tokens$1.tertiary25
      },
      tertiary50: {
        background: "" + tokens$1.tertiary50
      },
      tertiary100: {
        background: "" + tokens$1.tertiary100
      },
      tertiary200: {
        background: "" + tokens$1.tertiary200
      },
      tertiary300: {
        background: "" + tokens$1.tertiary300
      },
      tertiary400: {
        background: "" + tokens$1.tertiary400
      },
      tertiary500: {
        background: "" + tokens$1.tertiary500
      },
      tertiary600: {
        background: "" + tokens$1.tertiary600
      },
      tertiary700: {
        background: "" + tokens$1.tertiary700
      },
      tertiary800: {
        background: "" + tokens$1.tertiary800
      },
      tertiary900: {
        background: "" + tokens$1.tertiary900
      },
      success25: {
        background: "" + tokens$1.success25
      },
      success50: {
        background: "" + tokens$1.success50
      },
      success100: {
        background: "" + tokens$1.success100
      },
      success200: {
        background: "" + tokens$1.success200
      },
      success300: {
        background: "" + tokens$1.success300
      },
      success400: {
        background: "" + tokens$1.success400
      },
      success500: {
        background: "" + tokens$1.success500
      },
      success600: {
        background: "" + tokens$1.success600
      },
      success700: {
        background: "" + tokens$1.success700
      },
      success800: {
        background: "" + tokens$1.success800
      },
      success900: {
        background: "" + tokens$1.success900
      },
      warning25: {
        background: "" + tokens$1.warning25
      },
      warning50: {
        background: "" + tokens$1.warning50
      },
      warning100: {
        background: "" + tokens$1.warning100
      },
      warning200: {
        background: "" + tokens$1.warning200
      },
      warning300: {
        background: "" + tokens$1.warning300
      },
      warning400: {
        background: "" + tokens$1.warning400
      },
      warning500: {
        background: "" + tokens$1.warning500
      },
      warning600: {
        background: "" + tokens$1.warning600
      },
      warning700: {
        background: "" + tokens$1.warning700
      },
      warning800: {
        background: "" + tokens$1.warning800
      },
      warning900: {
        background: "" + tokens$1.warning900
      },
      error25: {
        background: "" + tokens$1.error25
      },
      error50: {
        background: "" + tokens$1.error50
      },
      error100: {
        background: "" + tokens$1.error100
      },
      error200: {
        background: "" + tokens$1.error200
      },
      error300: {
        background: "" + tokens$1.error300
      },
      error400: {
        background: "" + tokens$1.error400
      },
      error500: {
        background: "" + tokens$1.error500
      },
      error600: {
        background: "" + tokens$1.error600
      },
      error700: {
        background: "" + tokens$1.error700
      },
      error800: {
        background: "" + tokens$1.error800
      },
      error900: {
        background: "" + tokens$1.error900
      },
      info25: {
        background: "" + tokens$1.information25
      },
      info50: {
        background: "" + tokens$1.information50
      },
      info100: {
        background: "" + tokens$1.information100
      },
      info200: {
        background: "" + tokens$1.information200
      },
      info300: {
        background: "" + tokens$1.information300
      },
      info400: {
        background: "" + tokens$1.information400
      },
      info500: {
        background: "" + tokens$1.information500
      },
      info600: {
        background: "" + tokens$1.information600
      },
      info700: {
        background: "" + tokens$1.information700
      },
      info800: {
        background: "" + tokens$1.information800
      },
      info900: {
        background: "" + tokens$1.information900
      }
    },
    text: {
      primary25: {
        color: "" + tokens$1.primary25
      },
      primary50: {
        color: "" + tokens$1.primary50
      },
      primary100: {
        color: "" + tokens$1.primary100
      },
      primary200: {
        color: "" + tokens$1.primary200
      },
      primary300: {
        color: "" + tokens$1.primary300
      },
      primary400: {
        color: "" + tokens$1.primary400
      },
      primary500: {
        color: "" + tokens$1.primary500
      },
      primary600: {
        color: "" + tokens$1.primary600
      },
      primary700: {
        color: "" + tokens$1.primary700
      },
      primary800: {
        color: "" + tokens$1.primary800
      },
      primary900: {
        color: "" + tokens$1.primary900
      },
      secondary25: {
        color: "" + tokens$1.secondary25
      },
      secondary50: {
        color: "" + tokens$1.secondary50
      },
      secondary100: {
        color: "" + tokens$1.secondary100
      },
      secondary200: {
        color: "" + tokens$1.secondary200
      },
      secondary300: {
        color: "" + tokens$1.secondary300
      },
      secondary400: {
        color: "" + tokens$1.secondary400
      },
      secondary500: {
        color: "" + tokens$1.secondary500
      },
      secondary600: {
        color: "" + tokens$1.secondary600
      },
      secondary700: {
        color: "" + tokens$1.secondary700
      },
      secondary800: {
        color: "" + tokens$1.secondary800
      },
      secondary900: {
        color: "" + tokens$1.secondary900
      },
      tertiary25: {
        color: "" + tokens$1.tertiary25
      },
      tertiary50: {
        color: "" + tokens$1.tertiary50
      },
      tertiary100: {
        color: "" + tokens$1.tertiary100
      },
      tertiary200: {
        color: "" + tokens$1.tertiary200
      },
      tertiary300: {
        color: "" + tokens$1.tertiary300
      },
      tertiary400: {
        color: "" + tokens$1.tertiary400
      },
      tertiary500: {
        color: "" + tokens$1.tertiary500
      },
      tertiary600: {
        color: "" + tokens$1.tertiary600
      },
      tertiary700: {
        color: "" + tokens$1.tertiary700
      },
      tertiary800: {
        color: "" + tokens$1.tertiary800
      },
      tertiary900: {
        color: "" + tokens$1.tertiary900
      },
      success25: {
        color: "" + tokens$1.success25
      },
      success50: {
        color: "" + tokens$1.success50
      },
      success100: {
        color: "" + tokens$1.success100
      },
      success200: {
        color: "" + tokens$1.success200
      },
      success300: {
        color: "" + tokens$1.success300
      },
      success400: {
        color: "" + tokens$1.success400
      },
      success500: {
        color: "" + tokens$1.success500
      },
      success600: {
        color: "" + tokens$1.success600
      },
      success700: {
        color: "" + tokens$1.success700
      },
      success800: {
        color: "" + tokens$1.success800
      },
      success900: {
        color: "" + tokens$1.success900
      },
      warning25: {
        color: "" + tokens$1.warning25
      },
      warning50: {
        color: "" + tokens$1.warning50
      },
      warning100: {
        color: "" + tokens$1.warning100
      },
      warning200: {
        color: "" + tokens$1.warning200
      },
      warning300: {
        color: "" + tokens$1.warning300
      },
      warning400: {
        color: "" + tokens$1.warning400
      },
      warning500: {
        color: "" + tokens$1.warning500
      },
      warning600: {
        color: "" + tokens$1.warning600
      },
      warning700: {
        color: "" + tokens$1.warning700
      },
      warning800: {
        color: "" + tokens$1.warning800
      },
      warning900: {
        color: "" + tokens$1.warning900
      },
      error25: {
        color: "" + tokens$1.error25
      },
      error50: {
        color: "" + tokens$1.error50
      },
      error100: {
        color: "" + tokens$1.error100
      },
      error200: {
        color: "" + tokens$1.error200
      },
      error300: {
        color: "" + tokens$1.error300
      },
      error400: {
        color: "" + tokens$1.error400
      },
      error500: {
        color: "" + tokens$1.error500
      },
      error600: {
        color: "" + tokens$1.error600
      },
      error700: {
        color: "" + tokens$1.error700
      },
      error800: {
        color: "" + tokens$1.error800
      },
      error900: {
        color: "" + tokens$1.error900
      },
      info25: {
        color: "" + tokens$1.information25
      },
      info50: {
        color: "" + tokens$1.information50
      },
      info100: {
        color: "" + tokens$1.information100
      },
      info200: {
        color: "" + tokens$1.information200
      },
      info300: {
        color: "" + tokens$1.information300
      },
      info400: {
        color: "" + tokens$1.information400
      },
      info500: {
        color: "" + tokens$1.information500
      },
      info600: {
        color: "" + tokens$1.information600
      },
      info700: {
        color: "" + tokens$1.information700
      },
      info800: {
        color: "" + tokens$1.information800
      },
      info900: {
        color: "" + tokens$1.information900
      }
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
        div: {
          height: '12px !important',
          width: '12px !important'
        }
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: tokens$1.primary500 + " !important"
      },
      ':disabled': {
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
              color: tokens$1.checkboxDisabledBorder + " !important"
            }
          },
          backgroundColor: tokens$1.checkboxDisabledBackgroundColor + " !important",
          borderRadius: tokens$1.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + tokens$1.checkboxDefaultBorder,
        borderRadius: tokens$1.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$1.checkboxActiveBorder,
          '&:after': {
            color: tokens$1.checkboxActiveDisableBackgroundColor,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$1.checkboxActiveBackgroundColor,
          border: "2px solid " + tokens$1.checkboxActiveBorder,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2714"',
            color: tokens$1.checkboxDefaultBackgroundColor
          },
          '&:hover': {
            backgroundColor: tokens$1.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s'
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
              color: tokens$1.checkboxDisabledBorder + " !important"
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: tokens$1.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + tokens$1.checkboxDefaultBorder,
        borderRadius: tokens$1.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$1.checkboxActiveBorder,
          '&:after': {
            color: tokens$1.checkboxActiveDisableBackgroundColor,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$1.checkboxActiveBackgroundColor,
          border: "2px solid " + tokens$1.checkboxActiveBorder,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2012"',
            color: tokens$1.checkboxDefaultBackgroundColor
          },
          '&:hover': {
            backgroundColor: tokens$1.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s'
          }
        }
      }
    },
    input: {
      container: {
        position: 'relative',
        display: 'flex !important',
        flexDirection: 'row',
        alignItems: 'center !important',
        height: 'none !important',
        backgroundColor: "" + tokens$1.textFieldDefaultBackgroundColor,
        marginBottom: '30px'
      },
      containPrefLeft: {
        display: 'flex',
        height: '-webkit-fill-available',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "" + tokens$1.textFieldPaddingLeftRight,
        pointerEvents: 'none',
        zIndex: 3
      },
      wrapperPrefLeft: /*#__PURE__*/_extends({
        color: "" + tokens$1.textFieldPrefixsufixTextColor
      }, text.body.sm.semibold),
      limitPrefLeft: {
        height: '24px',
        borderRight: "1px solid " + tokens$1.textFieldPrefixsufixLineColor,
        marginLeft: "" + tokens$1.textFieldPaddingLeftRight
      },
      wrappPrefLeftIconLeft: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginLeft: '12px',
        zIndex: 2
      },
      wrappIconLeft: {
        position: 'relative',
        marginLeft: "" + tokens$1.textFieldPaddingLeftRight,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px'
      },
      wrappField: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$1.textFieldBorderRadius,
        border: "1px solid " + tokens$1.textFieldDefaultOutlineColor,
        backgroundColor: tokens$1.textFieldDisableBackgroundColor + " !important",
        transition: 'all 0.15s ease-in-out 0s'
      },
      wrappNormal: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        border: "1px solid " + tokens$1.textFieldDefaultOutlineColor,
        borderRadius: "" + tokens$1.textFieldBorderRadius,
        transition: 'all 0.15s ease-in-out 0s'
      },
      wrappSuccess: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$1.textFieldBorderRadius,
        border: "1px solid " + tokens$1.textFieldSuccessOutlineColor,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute'
      },
      wrappError: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$1.textFieldBorderRadius,
        border: "1px solid " + tokens$1.textFieldErrorOutlineColor,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute'
      },
      wrappPrefRightIconRight: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        zIndex: 2,
        marginRight: '12px'
      },
      wrappIconRight: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginRight: "" + tokens$1.textFieldPaddingLeftRight,
        cursor: 'pointer'
      },
      containPrefRight: {
        textAlign: 'center',
        paddingRight: "" + tokens$1.textFieldPaddingLeftRight,
        display: 'flex',
        zIndex: 3
      },
      limitPrefRight: {
        height: '24px',
        borderRight: "1px solid " + tokens$1.textFieldPrefixsufixLineColor,
        marginRight: "" + tokens$1.textFieldPaddingLeftRight
      },
      wrapperPrefRight: /*#__PURE__*/_extends({
        color: "" + tokens$1.textFieldPrefixsufixTextColor
      }, text.body.sm.semibold),
      wrappLabelField: /*#__PURE__*/_extends({
        marginBottom: '5px',
        color: "" + tokens$1.textFieldDefaultLabelColor
      }, text.body.sm.semibold),
      wrapErrorMessage: /*#__PURE__*/_extends({
        marginTop: '-25px',
        color: "" + tokens$1.textFieldErrorOutlineColor
      }, text.caption.lg.regular),
      '&:disabled': {
        zIndex: 2,
        border: 0,
        backgroundColor: 'transparent !important'
      },
      normal: {
        '&::placeholder': {
          color: tokens$1.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover ~ .css-ib4mcl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$1.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus  ~ .css-ib4mcl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$1.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$1.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        '& .css-ib4mcl-Textfield': {
          paddingLeft: '30px !important'
        },
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$1.textFieldPaddingTopBottom + " " + tokens$1.textFieldPaddingLeftRight + " " + tokens$1.textFieldPaddingTopBottom + " " + tokens$1.textFieldPaddingLeftRight + " !important",
        zIndex: '2'
      },
      success: {
        '&::placeholder': {
          color: tokens$1.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover ~ .css-1hm5k8u-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$1.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus ~ .css-1hm5k8u-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$1.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$1.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$1.textFieldPaddingTopBottom + " " + tokens$1.textFieldPaddingLeftRight + " " + tokens$1.textFieldPaddingTopBottom + " " + tokens$1.textFieldPaddingLeftRight + " !important"
      },
      error: {
        '&::placeholder': {
          color: tokens$1.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover  ~ .css-1ahjwsl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$1.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus ~ .css-1ahjwsl-Textfield': {
          border: "1px solid " + tokens$1.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$1.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$1.textFieldPaddingTopBottom + " " + tokens$1.textFieldPaddingLeftRight + " " + tokens$1.textFieldPaddingTopBottom + " " + tokens$1.textFieldPaddingLeftRight + " !important"
      }
    },
    textarea: {
      backgroundColor: "" + tokens$1.textFieldDefaultBackgroundColor,
      borderRadius: "" + tokens$1.textFieldBorderRadius,
      labelTextArea: /*#__PURE__*/_extends({
        color: "" + tokens$1.textFieldDefaultLabelColor
      }, text.body.sm.semibold),
      '&::placeholder': {
        color: "" + tokens$1.textFieldDefaultPlaceholderColor
      },
      ':disabled': {
        border: "1px solid " + tokens$1.textFieldDefaultOutlineColor + " !important",
        backgroundColor: tokens$1.textFieldDisableBackgroundColor + " !important",
        ':hover': {
          border: "1px solid " + tokens$1.textFieldDefaultOutlineColor + " !important",
          outline: 'none',
          transition: 'all 0.15s ease-in-out 0s'
        }
      },
      ':hover': {
        outline: 'none',
        border: "1px solid " + tokens$1.textFieldActiveOutlineColor + " !important",
        transition: 'all 0.15s ease-in-out 0s'
      },
      ':focus': {
        outline: 'none',
        border: "1px solid " + tokens$1.textFieldActiveOutlineColor,
        boxShadow: "0px 0px 0px 2px " + tokens$1.textFieldActiveBorderColor
      },
      normal: {
        border: "1px solid " + tokens$1.textFieldDefaultOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      },
      success: {
        border: "1px solid " + tokens$1.textFieldSuccessOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      },
      error: {
        border: "1px solid " + tokens$1.textFieldErrorOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      }
    }
  },
  buttons: {
    sm: /*#__PURE__*/_extends({
      padding: tokens$1.buttonsSmPaddingTopBottom + " " + tokens$1.buttonsSmPaddingLeftRight + " " + tokens$1.buttonsSmPaddingTopBottom + " " + tokens$1.buttonsSmPaddingLeftRight + " !important"
    }, text.caption.lg.semibold),
    md: /*#__PURE__*/_extends({
      padding: tokens$1.buttonsMdPaddingTopBottom + " " + tokens$1.buttonsMdPaddingLeftRight + " " + tokens$1.buttonsMdPaddingTopBottom + " " + tokens$1.buttonsMdPaddingLeftRight + " !important"
    }, text.body.sm.semibold),
    lg: /*#__PURE__*/_extends({
      padding: tokens$1.buttonsLgPaddingTopBottom + " " + tokens$1.buttonsLgPaddingLeftRight + " " + tokens$1.buttonsLgPaddingTopBottom + " " + tokens$1.buttonsLgPaddingLeftRight + " !important"
    }, text.body.sm.semibold),
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
      border: '0px',
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
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
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
    },
    soft: {
      alignItems: 'center',
      borderRadius: "" + tokens$1.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$1.buttonsSecondaryDefaultBackgroundColor,
      color: tokens$1.buttonsSecondaryDefaultColor,
      border: '0px',
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
        backgroundColor: tokens$1.buttonsSecondaryHoverBackgroundColor,
        color: tokens$1.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$1.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$1.buttonsSecondaryActiveBackgroundColor,
        color: tokens$1.buttonsSecondaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens$1.buttonsSecondaryDisabledBackgroundColor,
        color: tokens$1.buttonsSecondaryDisabledColor
      }
    },
    outline: {
      alignItems: 'center',
      borderRadius: "" + tokens$1.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$1.buttonsSecondaryDefaultBackgroundColor,
      border: "1px solid " + tokens$1.buttonsSecondaryDefaultColor,
      color: tokens$1.buttonsSecondaryDefaultColor,
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
        backgroundColor: tokens$1.buttonsSecondaryHoverBackgroundColor,
        border: "1px solid " + tokens$1.buttonsSecondaryHoverColor,
        color: tokens$1.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$1.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$1.buttonsSecondaryActiveBackgroundColor,
        border: "1px solid " + tokens$1.buttonsSecondaryActiveColor,
        color: tokens$1.buttonsSecondaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: tokens$1.buttonsSecondaryDisabledBackgroundColor + " !important",
        border: "1px solid " + tokens$1.buttonsSecondaryDisabledColor + " !important",
        color: tokens$1.buttonsSecondaryDisabledColor + " !important"
      }
    },
    transparent: {
      alignItems: 'center',
      borderRadius: "" + tokens$1.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      color: tokens$1.buttonsSecondaryDefaultColor,
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
        backgroundColor: tokens$1.buttonsSecondaryDefaultBackgroundColor,
        color: tokens$1.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        backgroundColor: tokens$1.buttonsSecondaryDefaultBackgroundColor + " !important",
        color: tokens$1.buttonsSecondaryHoverColor + " !important",
        boxShadow: "0px 0px 0px 2px " + tokens$1.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$1.buttonsSecondaryHoverBackgroundColor + " !important",
        color: tokens$1.buttonsSecondaryActiveColor + " !important",
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: 'transparent !important',
        border: 'none !important',
        color: tokens$1.buttonsSecondaryDisabledColor + " !important"
      }
    }
  },
  badges: {
    primary: {
      bg: "" + tokens$1.badgePrimaryBackgroundColor,
      color: tokens$1.badgePrimaryColor
    },
    secondary: {
      bg: "" + tokens$1.badgeSecondaryBackgroundColor,
      color: tokens$1.badgeSecondaryColor
    },
    error: {
      bg: "" + tokens$1.badgeErrorBackgroundColor,
      color: tokens$1.badgeErrorColor
    },
    info: {
      bg: "" + tokens$1.badgeInfoBackgroundColor,
      color: tokens$1.badgeInfoColor
    },
    success: {
      bg: "" + tokens$1.badgeSuccessBackgroundColor,
      color: tokens$1.badgeSuccessColor
    },
    warning: {
      bg: "" + tokens$1.badgeWarningBackgroundColor,
      color: tokens$1.badgeWarningColor
    },
    small: /*#__PURE__*/_extends({
      width: 8,
      height: 8,
      borderRadius: 8 / 2
    }, text.body.sm.regular),
    smallWithBorder: /*#__PURE__*/_extends({
      border: '1px solid white',
      height: 10,
      borderRadius: 10 / 2
    }, text.body.sm.regular),
    largeWithBorder: /*#__PURE__*/_extends({
      border: '2px solid white'
    }, text.body.lg.regular),
    smallWithContent: /*#__PURE__*/_extends({
      display: 'inline-flex',
      alignItems: 'center',
      height: 21,
      borderRadius: 24,
      paddingX: '7px'
    }, text.body.sm.regular),
    largeWithContent: /*#__PURE__*/_extends({
      display: 'inline-flex',
      alignItems: 'center',
      height: 28,
      borderRadius: tokens$1.badgeBorderRadius,
      paddingX: '14px'
    }, text.body.lg.regular),
    large: /*#__PURE__*/_extends({
      width: 12,
      height: 12,
      borderRadius: 12 / 2
    }, text.body.lg.regular)
  },
  text: {
    "default": {
      fontFamily: 'Nunito Sans, sans-serif',
      color: tokens$1.tertiary800,
      // Body
      lg_regular: /*#__PURE__*/_extends({}, text.body.lg.regular),
      lg_regular_respon: /*#__PURE__*/_extends({}, text.body.lg.regular, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_semibold: /*#__PURE__*/_extends({}, text.body.lg.semibold),
      lg_semibold_respon: /*#__PURE__*/_extends({}, text.body.lg.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_bold: /*#__PURE__*/_extends({}, text.body.lg.bold),
      lg_bold_respon: /*#__PURE__*/_extends({}, text.body.lg.bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_italic: /*#__PURE__*/_extends({}, text.body.lg.italic),
      lg_italic_respon: /*#__PURE__*/_extends({}, text.body.lg.italic, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline: /*#__PURE__*/_extends({}, text.body.lg.underline),
      lg_underline_respon: /*#__PURE__*/_extends({}, text.body.lg.underline, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline_semibold: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold),
      lg_underline_semibold_respon: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline_bold: /*#__PURE__*/_extends({}, text.body.lg.underline_bold),
      lg_underline_bold_respon: /*#__PURE__*/_extends({}, text.body.lg.underline_bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      sm_regular: /*#__PURE__*/_extends({}, text.body.sm.regular),
      sm_regular_respon: /*#__PURE__*/_extends({}, text.body.sm.regular, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_semibold: /*#__PURE__*/_extends({}, text.body.sm.semibold),
      sm_semibold_respon: /*#__PURE__*/_extends({}, text.body.sm.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_bold: /*#__PURE__*/_extends({}, text.body.sm.bold),
      sm_bold_respon: /*#__PURE__*/_extends({}, text.body.sm.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_italic: /*#__PURE__*/_extends({}, text.body.sm.italic),
      sm_italic_respon: /*#__PURE__*/_extends({}, text.body.sm.italic, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline: /*#__PURE__*/_extends({}, text.body.sm.underline),
      sm_underline_respon: /*#__PURE__*/_extends({}, text.body.sm.underline, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline_semibold: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold),
      sm_underline_semibold_respon: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline_bold: /*#__PURE__*/_extends({}, text.body.sm.underline_bold),
      sm_underline_bold_respon: /*#__PURE__*/_extends({}, text.body.sm.underline_bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      // Caption
      sizes: {
        lg_regular: /*#__PURE__*/_extends({}, text.caption.lg.regular),
        lg_regular_respon: /*#__PURE__*/_extends({}, text.caption.lg.regular, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_semibold: /*#__PURE__*/_extends({}, text.caption.lg.semibold),
        lg_semibold_respon: /*#__PURE__*/_extends({}, text.caption.lg.semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_bold: /*#__PURE__*/_extends({}, text.caption.lg.bold),
        lg_bold_respon: /*#__PURE__*/_extends({}, text.caption.lg.bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_italic: /*#__PURE__*/_extends({}, text.caption.lg.italic),
        lg_italic_respon: /*#__PURE__*/_extends({}, text.caption.lg.italic, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline: /*#__PURE__*/_extends({}, text.caption.lg.underline),
        lg_underline_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline_semibold: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold),
        lg_underline_semibold_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline_bold: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold),
        lg_underline_bold_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        sm_regular: /*#__PURE__*/_extends({}, text.caption.sm.regular),
        sm_regular_respon: /*#__PURE__*/_extends({}, text.caption.sm.regular, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_semibold: /*#__PURE__*/_extends({}, text.caption.sm.semibold),
        sm_semibold_respon: /*#__PURE__*/_extends({}, text.caption.sm.semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_bold: /*#__PURE__*/_extends({}, text.caption.sm.bold),
        sm_bold_respon: /*#__PURE__*/_extends({}, text.caption.sm.bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_italic: /*#__PURE__*/_extends({}, text.caption.sm.italic),
        sm_italic_respon: /*#__PURE__*/_extends({}, text.caption.sm.italic, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline: /*#__PURE__*/_extends({}, text.caption.sm.underline),
        sm_underline_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline_semibold: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold),
        sm_underline_semibold_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline_bold: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold),
        sm_underline_bold_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        })
      }
    },
    // Heading
    heading: {
      h1: /*#__PURE__*/_extends({}, text.heading.h1),
      h1Respon: /*#__PURE__*/_extends({}, text.heading.h1, {
        '@media screen and (max-width: 400px)': {
          fontSize: '34px',
          lineHeight: '48px',
          fontWeight: '700'
        }
      }),
      h2: /*#__PURE__*/_extends({}, text.heading.h2),
      h2Respon: /*#__PURE__*/_extends({}, text.heading.h2, {
        '@media screen and (max-width: 400px)': {
          fontSize: '28px',
          lineHeight: '42px',
          fontWeight: '700'
        }
      }),
      h3: /*#__PURE__*/_extends({}, text.heading.h3),
      h3Respon: /*#__PURE__*/_extends({}, text.heading.h3, {
        '@media screen and (max-width: 400px)': {
          fontSize: '24px',
          lineHeight: '36px',
          fontWeight: '700'
        }
      }),
      h4: /*#__PURE__*/_extends({}, text.heading.h4),
      h4Respon: /*#__PURE__*/_extends({}, text.heading.h4, {
        '@media screen and (max-width: 400px)': {
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: '700'
        }
      }),
      h5: /*#__PURE__*/_extends({}, text.heading.h5),
      h5Respon: /*#__PURE__*/_extends({}, text.heading.h5, {
        '@media screen and (max-width: 400px)': {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '700'
        }
      }),
      h6: /*#__PURE__*/_extends({}, text.heading.h6),
      h6Respon: /*#__PURE__*/_extends({}, text.heading.h6, {
        '@media screen and (max-width: 400px)': {
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: '700'
        }
      })
    }
  },
  spinner: {
    primary: {
      color: tokens$1.primary500
    },
    secondary: {
      color: tokens$1.secondary500
    }
  },
  cards: {
    containerColors: {
      marginBottom: '20px'
    },
    wrappValueColors: /*#__PURE__*/_extends({}, text.caption.sm.semibold, {
      padding: '10px'
    }),
    // Colors Primary
    primary25: {
      backgroundColor: "" + tokens$1.primary25,
      color: "" + tokens$1.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary50: {
      backgroundColor: "" + tokens$1.primary50,
      color: "" + tokens$1.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary100: {
      backgroundColor: "" + tokens$1.primary100,
      color: "" + tokens$1.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary200: {
      backgroundColor: "" + tokens$1.primary200,
      color: "" + tokens$1.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary300: {
      backgroundColor: "" + tokens$1.primary300,
      color: "" + tokens$1.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary400: {
      backgroundColor: "" + tokens$1.primary400,
      color: "" + tokens$1.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary500: {
      backgroundColor: "" + tokens$1.primary500,
      color: "" + tokens$1.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary600: {
      backgroundColor: "" + tokens$1.primary600,
      color: "" + tokens$1.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary700: {
      backgroundColor: "" + tokens$1.primary700,
      color: "" + tokens$1.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary800: {
      backgroundColor: "" + tokens$1.primary800,
      color: "" + tokens$1.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary900: {
      backgroundColor: "" + tokens$1.primary900,
      color: "" + tokens$1.primary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Secondary
    secondary25: {
      backgroundColor: "" + tokens$1.secondary25,
      color: "" + tokens$1.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary50: {
      backgroundColor: "" + tokens$1.secondary50,
      color: "" + tokens$1.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary100: {
      backgroundColor: "" + tokens$1.secondary100,
      color: "" + tokens$1.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary200: {
      backgroundColor: "" + tokens$1.secondary200,
      color: "" + tokens$1.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary300: {
      backgroundColor: "" + tokens$1.secondary300,
      color: "" + tokens$1.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary400: {
      backgroundColor: "" + tokens$1.secondary400,
      color: "" + tokens$1.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary500: {
      backgroundColor: "" + tokens$1.secondary500,
      color: "" + tokens$1.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary600: {
      backgroundColor: "" + tokens$1.secondary600,
      color: "" + tokens$1.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary700: {
      backgroundColor: "" + tokens$1.secondary700,
      color: "" + tokens$1.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary800: {
      backgroundColor: "" + tokens$1.secondary800,
      color: "" + tokens$1.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary900: {
      backgroundColor: "" + tokens$1.secondary900,
      color: "" + tokens$1.secondary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Tertiary
    tertiary25: {
      backgroundColor: "" + tokens$1.tertiary25,
      color: "" + tokens$1.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary50: {
      backgroundColor: "" + tokens$1.tertiary50,
      color: "" + tokens$1.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary100: {
      backgroundColor: "" + tokens$1.tertiary100,
      color: "" + tokens$1.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary200: {
      backgroundColor: "" + tokens$1.tertiary200,
      color: "" + tokens$1.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary300: {
      backgroundColor: "" + tokens$1.tertiary300,
      color: "" + tokens$1.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary400: {
      backgroundColor: "" + tokens$1.tertiary400,
      color: "" + tokens$1.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary500: {
      backgroundColor: "" + tokens$1.tertiary500,
      color: "" + tokens$1.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary600: {
      backgroundColor: "" + tokens$1.tertiary600,
      color: "" + tokens$1.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary700: {
      backgroundColor: "" + tokens$1.tertiary700,
      color: "" + tokens$1.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary800: {
      backgroundColor: "" + tokens$1.tertiary800,
      color: "" + tokens$1.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary900: {
      backgroundColor: "" + tokens$1.tertiary900,
      color: "" + tokens$1.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Success
    success25: {
      backgroundColor: "" + tokens$1.success25,
      color: "" + tokens$1.success900,
      padding: '1rem',
      width: '100%'
    },
    success50: {
      backgroundColor: "" + tokens$1.success50,
      color: "" + tokens$1.success900,
      padding: '1rem',
      width: '100%'
    },
    success100: {
      backgroundColor: "" + tokens$1.success100,
      color: "" + tokens$1.success900,
      padding: '1rem',
      width: '100%'
    },
    success200: {
      backgroundColor: "" + tokens$1.success200,
      color: "" + tokens$1.success900,
      padding: '1rem',
      width: '100%'
    },
    success300: {
      backgroundColor: "" + tokens$1.success300,
      color: "" + tokens$1.success900,
      padding: '1rem',
      width: '100%'
    },
    success400: {
      backgroundColor: "" + tokens$1.success400,
      color: "" + tokens$1.success25,
      padding: '1rem',
      width: '100%'
    },
    success500: {
      backgroundColor: "" + tokens$1.success500,
      color: "" + tokens$1.success25,
      padding: '1rem',
      width: '100%'
    },
    success600: {
      backgroundColor: "" + tokens$1.success600,
      color: "" + tokens$1.success25,
      padding: '1rem',
      width: '100%'
    },
    success700: {
      backgroundColor: "" + tokens$1.success700,
      color: "" + tokens$1.success25,
      padding: '1rem',
      width: '100%'
    },
    success800: {
      backgroundColor: "" + tokens$1.success800,
      color: "" + tokens$1.success25,
      padding: '1rem',
      width: '100%'
    },
    success900: {
      backgroundColor: "" + tokens$1.success900,
      color: "" + tokens$1.success25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Warning
    warning25: {
      backgroundColor: "" + tokens$1.warning25,
      color: "" + tokens$1.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning50: {
      backgroundColor: "" + tokens$1.warning50,
      color: "" + tokens$1.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning100: {
      backgroundColor: "" + tokens$1.warning100,
      color: "" + tokens$1.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning200: {
      backgroundColor: "" + tokens$1.warning200,
      color: "" + tokens$1.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning300: {
      backgroundColor: "" + tokens$1.warning300,
      color: "" + tokens$1.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning400: {
      backgroundColor: "" + tokens$1.warning400,
      color: "" + tokens$1.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning500: {
      backgroundColor: "" + tokens$1.warning500,
      color: "" + tokens$1.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning600: {
      backgroundColor: "" + tokens$1.warning600,
      color: "" + tokens$1.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning700: {
      backgroundColor: "" + tokens$1.warning700,
      color: "" + tokens$1.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning800: {
      backgroundColor: "" + tokens$1.warning800,
      color: "" + tokens$1.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning900: {
      backgroundColor: "" + tokens$1.warning900,
      color: "" + tokens$1.warning25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Error
    error25: {
      backgroundColor: "" + tokens$1.error25,
      color: "" + tokens$1.error900,
      padding: '1rem',
      width: '100%'
    },
    error50: {
      backgroundColor: "" + tokens$1.error50,
      color: "" + tokens$1.error900,
      padding: '1rem',
      width: '100%'
    },
    error100: {
      backgroundColor: "" + tokens$1.error100,
      color: "" + tokens$1.error900,
      padding: '1rem',
      width: '100%'
    },
    error200: {
      backgroundColor: "" + tokens$1.error200,
      color: "" + tokens$1.error900,
      padding: '1rem',
      width: '100%'
    },
    error300: {
      backgroundColor: "" + tokens$1.error300,
      color: "" + tokens$1.error900,
      padding: '1rem',
      width: '100%'
    },
    error400: {
      backgroundColor: "" + tokens$1.error400,
      color: "" + tokens$1.error25,
      padding: '1rem',
      width: '100%'
    },
    error500: {
      backgroundColor: "" + tokens$1.error500,
      color: "" + tokens$1.error25,
      padding: '1rem',
      width: '100%'
    },
    error600: {
      backgroundColor: "" + tokens$1.error600,
      color: "" + tokens$1.error25,
      padding: '1rem',
      width: '100%'
    },
    error700: {
      backgroundColor: "" + tokens$1.error700,
      color: "" + tokens$1.error25,
      padding: '1rem',
      width: '100%'
    },
    error800: {
      backgroundColor: "" + tokens$1.error800,
      color: "" + tokens$1.error25,
      padding: '1rem',
      width: '100%'
    },
    error900: {
      backgroundColor: "" + tokens$1.error900,
      color: "" + tokens$1.error25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Information
    info25: {
      backgroundColor: "" + tokens$1.information25,
      color: "" + tokens$1.information900,
      padding: '1rem',
      width: '100%'
    },
    info50: {
      backgroundColor: "" + tokens$1.information50,
      color: "" + tokens$1.information900,
      padding: '1rem',
      width: '100%'
    },
    info100: {
      backgroundColor: "" + tokens$1.information100,
      color: "" + tokens$1.information900,
      padding: '1rem',
      width: '100%'
    },
    info200: {
      backgroundColor: "" + tokens$1.information200,
      color: "" + tokens$1.information900,
      padding: '1rem',
      width: '100%'
    },
    info300: {
      backgroundColor: "" + tokens$1.information300,
      color: "" + tokens$1.information900,
      padding: '1rem',
      width: '100%'
    },
    info400: {
      backgroundColor: "" + tokens$1.information400,
      color: "" + tokens$1.information25,
      padding: '1rem',
      width: '100%'
    },
    info500: {
      backgroundColor: "" + tokens$1.information500,
      color: "" + tokens$1.information25,
      padding: '1rem',
      width: '100%'
    },
    info600: {
      backgroundColor: "" + tokens$1.information600,
      color: "" + tokens$1.information25,
      padding: '1rem',
      width: '100%'
    },
    info700: {
      backgroundColor: "" + tokens$1.information700,
      color: "" + tokens$1.information25,
      padding: '1rem',
      width: '100%'
    },
    info800: {
      backgroundColor: "" + tokens$1.information800,
      color: "" + tokens$1.information25,
      padding: '1rem',
      width: '100%'
    },
    info900: {
      backgroundColor: "" + tokens$1.information900,
      color: "" + tokens$1.information25,
      padding: '1rem',
      width: '100%'
    }
  }
});

/**
 * Do not edit directly
 * Generated on Tue, 11 Oct 2022 09:25:29 GMT
 */
var tokens$2 = {
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
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
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
  anchorLgIconSize: '20px',
  anchorMdIconSize: '16px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#229bd8',
  switchActiveDisableBackgroundColor: '#c6dcf0',
  switchNonactiveBackgroundColor: '#b1b1b1',
  switchNonactiveDisableBackgroundColor: '#e8e8e8',
  avatarLgSize: '64px',
  avatarLgIconSize: '40px',
  avatarMdSize: '40px',
  avatarMdIconSize: '24px',
  avatarSmSize: '32px',
  avatarSmIconSize: '16px',
  textFieldDefaultBackgroundColor: '#ffffff',
  textFieldDefaultOutlineColor: '#cecece',
  textFieldDefaultIconColor: '#3d3d3d',
  textFieldDefaultPlaceholderColor: '#8f8f8f',
  textFieldDefaultLabelColor: '#3d3d3d',
  textFieldActiveOutlineColor: '#229bd8',
  textFieldActivePlaceholderColor: '#3d3d3d',
  textFieldActiveBorderColor: '#c6dcf0',
  textFieldErrorOutlineColor: '#f04438',
  textFieldSuccessOutlineColor: '#12b76a',
  textFieldDisableBackgroundColor: '#e8e8e8',
  textFieldDisableOutlineColor: '#b1b1b1',
  textFieldDisablePlaceholderColor: '#8f8f8f',
  textFieldPrefixsufixLineColor: '#b1b1b1',
  textFieldPrefixsufixTextColor: '#616161',
  textFieldBorderRadius: '4px',
  textFieldPaddingLeftRight: '12px',
  textFieldPaddingTopBottom: '12px',
  badgePrimaryBackgroundColor: '#229bd8',
  badgePrimaryColor: '#ffffff',
  badgeSecondaryBackgroundColor: '#e4eef7',
  badgeSecondaryColor: '#229bd8',
  badgeErrorBackgroundColor: '#fce6e5',
  badgeErrorColor: '#f04438',
  badgeInfoBackgroundColor: '#e0f2fe',
  badgeInfoColor: '#0ba5ec',
  badgeSuccessBackgroundColor: '#d1fadf',
  badgeSuccessColor: '#12b76a',
  badgeWarningBackgroundColor: '#fdece4',
  badgeWarningColor: '#f79009',
  badgeBorderRadius: '8px'
};

var _formSideCenter$1, _containerLoginCen$1, _formSideRight$1, _formSideLeft$1, _containerLogin$1;
var aqf = /*#__PURE__*/utils.makeTheme({
  //...base,
  colors: {
    primary25: tokens$2.primary25,
    primary50: tokens$2.primary50,
    primary100: tokens$2.primary100,
    primary200: tokens$2.primary200,
    primary300: tokens$2.primary300,
    primary400: tokens$2.primary400,
    primary500: tokens$2.primary500,
    primary600: tokens$2.primary600,
    primary700: tokens$2.primary700,
    primary800: tokens$2.primary800,
    primary900: tokens$2.primary900,
    secondary25: tokens$2.secondary25,
    secondary50: tokens$2.secondary50,
    secondary100: tokens$2.secondary100,
    secondary200: tokens$2.secondary200,
    secondary300: tokens$2.secondary300,
    secondary400: tokens$2.secondary400,
    secondary500: tokens$2.secondary500,
    secondary600: tokens$2.secondary600,
    secondary700: tokens$2.secondary700,
    secondary800: tokens$2.secondary800,
    secondary900: tokens$2.secondary900,
    tertiary25: tokens$2.tertiary25,
    tertiary50: tokens$2.tertiary50,
    tertiary100: tokens$2.tertiary100,
    tertiary200: tokens$2.tertiary200,
    tertiary300: tokens$2.tertiary300,
    tertiary400: tokens$2.tertiary400,
    tertiary500: tokens$2.tertiary500,
    tertiary600: tokens$2.tertiary600,
    tertiary700: tokens$2.tertiary700,
    tertiary800: tokens$2.tertiary800,
    tertiary900: tokens$2.tertiary900,
    error25: tokens$2.error25,
    error50: tokens$2.error50,
    error100: tokens$2.error100,
    error200: tokens$2.error200,
    error300: tokens$2.error300,
    error400: tokens$2.error400,
    error500: tokens$2.error500,
    error600: tokens$2.error600,
    error700: tokens$2.error700,
    error800: tokens$2.error800,
    error900: tokens$2.error900,
    warning25: tokens$2.warning25,
    warning50: tokens$2.warning50,
    warning100: tokens$2.warning100,
    warning200: tokens$2.warning200,
    warning300: tokens$2.warning300,
    warning400: tokens$2.warning400,
    warning500: tokens$2.warning500,
    warning600: tokens$2.warning600,
    warning700: tokens$2.warning700,
    warning800: tokens$2.warning800,
    warning900: tokens$2.warning900,
    success25: tokens$2.success25,
    success50: tokens$2.success50,
    success100: tokens$2.success100,
    success200: tokens$2.success200,
    success300: tokens$2.success300,
    success400: tokens$2.success400,
    success500: tokens$2.success500,
    success600: tokens$2.success600,
    success700: tokens$2.success700,
    success800: tokens$2.success800,
    success900: tokens$2.success900,
    information25: tokens$2.information25,
    information50: tokens$2.information50,
    information100: tokens$2.information100,
    information200: tokens$2.information200,
    information300: tokens$2.information300,
    information400: tokens$2.information400,
    information500: tokens$2.information500,
    information600: tokens$2.information600,
    information700: tokens$2.information700,
    information800: tokens$2.information800,
    information900: tokens$2.information900
  },
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
      color: tokens$2.anchorDefaultColor,
      disabled: {
        color: tokens$2.tertiary300,
        pointerEvents: 'none'
      },
      '&:hover': {
        color: tokens$2.anchorHoverColor + " !important",
        textDecoration: 'underline',
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
    },
    background: {
      primary25: {
        background: "" + tokens$2.primary25
      },
      primary50: {
        background: "" + tokens$2.primary50
      },
      primary100: {
        background: "" + tokens$2.primary100
      },
      primary200: {
        background: "" + tokens$2.primary200
      },
      primary300: {
        background: "" + tokens$2.primary300
      },
      primary400: {
        background: "" + tokens$2.primary400
      },
      primary500: {
        background: "" + tokens$2.primary500
      },
      primary600: {
        background: "" + tokens$2.primary600
      },
      primary700: {
        background: "" + tokens$2.primary700
      },
      primary800: {
        background: "" + tokens$2.primary800
      },
      primary900: {
        background: "" + tokens$2.primary900
      },
      secondary25: {
        background: "" + tokens$2.secondary25
      },
      secondary50: {
        background: "" + tokens$2.secondary50
      },
      secondary100: {
        background: "" + tokens$2.secondary100
      },
      secondary200: {
        background: "" + tokens$2.secondary200
      },
      secondary300: {
        background: "" + tokens$2.secondary300
      },
      secondary400: {
        background: "" + tokens$2.secondary400
      },
      secondary500: {
        background: "" + tokens$2.secondary500
      },
      secondary600: {
        background: "" + tokens$2.secondary600
      },
      secondary700: {
        background: "" + tokens$2.secondary700
      },
      secondary800: {
        background: "" + tokens$2.secondary800
      },
      secondary900: {
        background: "" + tokens$2.secondary900
      },
      tertiary25: {
        background: "" + tokens$2.tertiary25
      },
      tertiary50: {
        background: "" + tokens$2.tertiary50
      },
      tertiary100: {
        background: "" + tokens$2.tertiary100
      },
      tertiary200: {
        background: "" + tokens$2.tertiary200
      },
      tertiary300: {
        background: "" + tokens$2.tertiary300
      },
      tertiary400: {
        background: "" + tokens$2.tertiary400
      },
      tertiary500: {
        background: "" + tokens$2.tertiary500
      },
      tertiary600: {
        background: "" + tokens$2.tertiary600
      },
      tertiary700: {
        background: "" + tokens$2.tertiary700
      },
      tertiary800: {
        background: "" + tokens$2.tertiary800
      },
      tertiary900: {
        background: "" + tokens$2.tertiary900
      },
      success25: {
        background: "" + tokens$2.success25
      },
      success50: {
        background: "" + tokens$2.success50
      },
      success100: {
        background: "" + tokens$2.success100
      },
      success200: {
        background: "" + tokens$2.success200
      },
      success300: {
        background: "" + tokens$2.success300
      },
      success400: {
        background: "" + tokens$2.success400
      },
      success500: {
        background: "" + tokens$2.success500
      },
      success600: {
        background: "" + tokens$2.success600
      },
      success700: {
        background: "" + tokens$2.success700
      },
      success800: {
        background: "" + tokens$2.success800
      },
      success900: {
        background: "" + tokens$2.success900
      },
      warning25: {
        background: "" + tokens$2.warning25
      },
      warning50: {
        background: "" + tokens$2.warning50
      },
      warning100: {
        background: "" + tokens$2.warning100
      },
      warning200: {
        background: "" + tokens$2.warning200
      },
      warning300: {
        background: "" + tokens$2.warning300
      },
      warning400: {
        background: "" + tokens$2.warning400
      },
      warning500: {
        background: "" + tokens$2.warning500
      },
      warning600: {
        background: "" + tokens$2.warning600
      },
      warning700: {
        background: "" + tokens$2.warning700
      },
      warning800: {
        background: "" + tokens$2.warning800
      },
      warning900: {
        background: "" + tokens$2.warning900
      },
      error25: {
        background: "" + tokens$2.error25
      },
      error50: {
        background: "" + tokens$2.error50
      },
      error100: {
        background: "" + tokens$2.error100
      },
      error200: {
        background: "" + tokens$2.error200
      },
      error300: {
        background: "" + tokens$2.error300
      },
      error400: {
        background: "" + tokens$2.error400
      },
      error500: {
        background: "" + tokens$2.error500
      },
      error600: {
        background: "" + tokens$2.error600
      },
      error700: {
        background: "" + tokens$2.error700
      },
      error800: {
        background: "" + tokens$2.error800
      },
      error900: {
        background: "" + tokens$2.error900
      },
      info25: {
        background: "" + tokens$2.information25
      },
      info50: {
        background: "" + tokens$2.information50
      },
      info100: {
        background: "" + tokens$2.information100
      },
      info200: {
        background: "" + tokens$2.information200
      },
      info300: {
        background: "" + tokens$2.information300
      },
      info400: {
        background: "" + tokens$2.information400
      },
      info500: {
        background: "" + tokens$2.information500
      },
      info600: {
        background: "" + tokens$2.information600
      },
      info700: {
        background: "" + tokens$2.information700
      },
      info800: {
        background: "" + tokens$2.information800
      },
      info900: {
        background: "" + tokens$2.information900
      }
    },
    text: {
      primary25: {
        color: "" + tokens$2.primary25
      },
      primary50: {
        color: "" + tokens$2.primary50
      },
      primary100: {
        color: "" + tokens$2.primary100
      },
      primary200: {
        color: "" + tokens$2.primary200
      },
      primary300: {
        color: "" + tokens$2.primary300
      },
      primary400: {
        color: "" + tokens$2.primary400
      },
      primary500: {
        color: "" + tokens$2.primary500
      },
      primary600: {
        color: "" + tokens$2.primary600
      },
      primary700: {
        color: "" + tokens$2.primary700
      },
      primary800: {
        color: "" + tokens$2.primary800
      },
      primary900: {
        color: "" + tokens$2.primary900
      },
      secondary25: {
        color: "" + tokens$2.secondary25
      },
      secondary50: {
        color: "" + tokens$2.secondary50
      },
      secondary100: {
        color: "" + tokens$2.secondary100
      },
      secondary200: {
        color: "" + tokens$2.secondary200
      },
      secondary300: {
        color: "" + tokens$2.secondary300
      },
      secondary400: {
        color: "" + tokens$2.secondary400
      },
      secondary500: {
        color: "" + tokens$2.secondary500
      },
      secondary600: {
        color: "" + tokens$2.secondary600
      },
      secondary700: {
        color: "" + tokens$2.secondary700
      },
      secondary800: {
        color: "" + tokens$2.secondary800
      },
      secondary900: {
        color: "" + tokens$2.secondary900
      },
      tertiary25: {
        color: "" + tokens$2.tertiary25
      },
      tertiary50: {
        color: "" + tokens$2.tertiary50
      },
      tertiary100: {
        color: "" + tokens$2.tertiary100
      },
      tertiary200: {
        color: "" + tokens$2.tertiary200
      },
      tertiary300: {
        color: "" + tokens$2.tertiary300
      },
      tertiary400: {
        color: "" + tokens$2.tertiary400
      },
      tertiary500: {
        color: "" + tokens$2.tertiary500
      },
      tertiary600: {
        color: "" + tokens$2.tertiary600
      },
      tertiary700: {
        color: "" + tokens$2.tertiary700
      },
      tertiary800: {
        color: "" + tokens$2.tertiary800
      },
      tertiary900: {
        color: "" + tokens$2.tertiary900
      },
      success25: {
        color: "" + tokens$2.success25
      },
      success50: {
        color: "" + tokens$2.success50
      },
      success100: {
        color: "" + tokens$2.success100
      },
      success200: {
        color: "" + tokens$2.success200
      },
      success300: {
        color: "" + tokens$2.success300
      },
      success400: {
        color: "" + tokens$2.success400
      },
      success500: {
        color: "" + tokens$2.success500
      },
      success600: {
        color: "" + tokens$2.success600
      },
      success700: {
        color: "" + tokens$2.success700
      },
      success800: {
        color: "" + tokens$2.success800
      },
      success900: {
        color: "" + tokens$2.success900
      },
      warning25: {
        color: "" + tokens$2.warning25
      },
      warning50: {
        color: "" + tokens$2.warning50
      },
      warning100: {
        color: "" + tokens$2.warning100
      },
      warning200: {
        color: "" + tokens$2.warning200
      },
      warning300: {
        color: "" + tokens$2.warning300
      },
      warning400: {
        color: "" + tokens$2.warning400
      },
      warning500: {
        color: "" + tokens$2.warning500
      },
      warning600: {
        color: "" + tokens$2.warning600
      },
      warning700: {
        color: "" + tokens$2.warning700
      },
      warning800: {
        color: "" + tokens$2.warning800
      },
      warning900: {
        color: "" + tokens$2.warning900
      },
      error25: {
        color: "" + tokens$2.error25
      },
      error50: {
        color: "" + tokens$2.error50
      },
      error100: {
        color: "" + tokens$2.error100
      },
      error200: {
        color: "" + tokens$2.error200
      },
      error300: {
        color: "" + tokens$2.error300
      },
      error400: {
        color: "" + tokens$2.error400
      },
      error500: {
        color: "" + tokens$2.error500
      },
      error600: {
        color: "" + tokens$2.error600
      },
      error700: {
        color: "" + tokens$2.error700
      },
      error800: {
        color: "" + tokens$2.error800
      },
      error900: {
        color: "" + tokens$2.error900
      },
      info25: {
        color: "" + tokens$2.information25
      },
      info50: {
        color: "" + tokens$2.information50
      },
      info100: {
        color: "" + tokens$2.information100
      },
      info200: {
        color: "" + tokens$2.information200
      },
      info300: {
        color: "" + tokens$2.information300
      },
      info400: {
        color: "" + tokens$2.information400
      },
      info500: {
        color: "" + tokens$2.information500
      },
      info600: {
        color: "" + tokens$2.information600
      },
      info700: {
        color: "" + tokens$2.information700
      },
      info800: {
        color: "" + tokens$2.information800
      },
      info900: {
        color: "" + tokens$2.information900
      }
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
        div: {
          height: '12px !important',
          width: '12px !important'
        }
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: tokens$2.primary500 + " !important"
      },
      ':disabled': {
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
              color: tokens$2.checkboxDisabledBorder + " !important"
            }
          },
          backgroundColor: tokens$2.checkboxDisabledBackgroundColor + " !important",
          borderRadius: tokens$2.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + tokens$2.checkboxDefaultBorder,
        borderRadius: tokens$2.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$2.checkboxActiveBorder,
          '&:after': {
            color: tokens$2.checkboxActiveDisableBackgroundColor,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$2.checkboxActiveBackgroundColor,
          border: "2px solid " + tokens$2.checkboxActiveBorder,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2714"',
            color: tokens$2.checkboxDefaultBackgroundColor
          },
          '&:hover': {
            backgroundColor: tokens$2.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s'
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
              color: tokens$2.checkboxDisabledBorder + " !important"
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: tokens$2.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + tokens$2.checkboxDefaultBorder,
        borderRadius: tokens$2.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$2.checkboxActiveBorder,
          '&:after': {
            color: tokens$2.checkboxActiveDisableBackgroundColor,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$2.checkboxActiveBackgroundColor,
          border: "2px solid " + tokens$2.checkboxActiveBorder,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2012"',
            color: tokens$2.checkboxDefaultBackgroundColor
          },
          '&:hover': {
            backgroundColor: tokens$2.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s'
          }
        }
      }
    },
    input: {
      container: {
        position: 'relative',
        display: 'flex !important',
        flexDirection: 'row',
        alignItems: 'center !important',
        height: 'none !important',
        backgroundColor: "" + tokens$2.textFieldDefaultBackgroundColor,
        marginBottom: '30px'
      },
      containPrefLeft: {
        display: 'flex',
        height: '-webkit-fill-available',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "" + tokens$2.textFieldPaddingLeftRight,
        pointerEvents: 'none',
        zIndex: 3
      },
      wrapperPrefLeft: /*#__PURE__*/_extends({
        color: "" + tokens$2.textFieldPrefixsufixTextColor
      }, text.body.sm.semibold),
      limitPrefLeft: {
        height: '24px',
        borderRight: "1px solid " + tokens$2.textFieldPrefixsufixLineColor,
        marginLeft: "" + tokens$2.textFieldPaddingLeftRight
      },
      wrappPrefLeftIconLeft: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginLeft: '12px',
        zIndex: 2
      },
      wrappIconLeft: {
        position: 'relative',
        marginLeft: "" + tokens$2.textFieldPaddingLeftRight,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px'
      },
      wrappField: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$2.textFieldBorderRadius,
        border: "1px solid " + tokens$2.textFieldDefaultOutlineColor,
        backgroundColor: tokens$2.textFieldDisableBackgroundColor + " !important",
        transition: 'all 0.15s ease-in-out 0s'
      },
      wrappNormal: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        border: "1px solid " + tokens$2.textFieldDefaultOutlineColor,
        borderRadius: "" + tokens$2.textFieldBorderRadius,
        transition: 'all 0.15s ease-in-out 0s'
      },
      wrappSuccess: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$2.textFieldBorderRadius,
        border: "1px solid " + tokens$2.textFieldSuccessOutlineColor,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute'
      },
      wrappError: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$2.textFieldBorderRadius,
        border: "1px solid " + tokens$2.textFieldErrorOutlineColor,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute'
      },
      wrappPrefRightIconRight: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        zIndex: 2,
        marginRight: '12px'
      },
      wrappIconRight: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginRight: "" + tokens$2.textFieldPaddingLeftRight,
        cursor: 'pointer'
      },
      containPrefRight: {
        textAlign: 'center',
        paddingRight: "" + tokens$2.textFieldPaddingLeftRight,
        display: 'flex',
        zIndex: 3
      },
      limitPrefRight: {
        height: '24px',
        borderRight: "1px solid " + tokens$2.textFieldPrefixsufixLineColor,
        marginRight: "" + tokens$2.textFieldPaddingLeftRight
      },
      wrapperPrefRight: /*#__PURE__*/_extends({
        color: "" + tokens$2.textFieldPrefixsufixTextColor
      }, text.body.sm.semibold),
      wrappLabelField: /*#__PURE__*/_extends({
        marginBottom: '5px',
        color: "" + tokens$2.textFieldDefaultLabelColor
      }, text.body.sm.semibold),
      wrapErrorMessage: /*#__PURE__*/_extends({
        marginTop: '-25px',
        color: "" + tokens$2.textFieldErrorOutlineColor
      }, text.caption.lg.regular),
      '&:disabled': {
        zIndex: 2,
        border: 0,
        backgroundColor: 'transparent !important'
      },
      normal: {
        '&::placeholder': {
          color: tokens$2.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover ~ .css-ib4mcl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$2.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus  ~ .css-ib4mcl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$2.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$2.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        '& .css-ib4mcl-Textfield': {
          paddingLeft: '30px !important'
        },
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$2.textFieldPaddingTopBottom + " " + tokens$2.textFieldPaddingLeftRight + " " + tokens$2.textFieldPaddingTopBottom + " " + tokens$2.textFieldPaddingLeftRight + " !important",
        zIndex: '2'
      },
      success: {
        '&::placeholder': {
          color: tokens$2.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover ~ .css-1hm5k8u-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$2.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus ~ .css-1hm5k8u-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$2.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$2.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$2.textFieldPaddingTopBottom + " " + tokens$2.textFieldPaddingLeftRight + " " + tokens$2.textFieldPaddingTopBottom + " " + tokens$2.textFieldPaddingLeftRight + " !important"
      },
      error: {
        '&::placeholder': {
          color: tokens$2.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover  ~ .css-1ahjwsl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$2.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus ~ .css-1ahjwsl-Textfield': {
          border: "1px solid " + tokens$2.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$2.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$2.textFieldPaddingTopBottom + " " + tokens$2.textFieldPaddingLeftRight + " " + tokens$2.textFieldPaddingTopBottom + " " + tokens$2.textFieldPaddingLeftRight + " !important"
      }
    },
    textarea: {
      backgroundColor: "" + tokens$2.textFieldDefaultBackgroundColor,
      borderRadius: "" + tokens$2.textFieldBorderRadius,
      labelTextArea: /*#__PURE__*/_extends({
        color: "" + tokens$2.textFieldDefaultLabelColor
      }, text.body.sm.semibold),
      '&::placeholder': {
        color: "" + tokens$2.textFieldDefaultPlaceholderColor
      },
      ':disabled': {
        border: "1px solid " + tokens$2.textFieldDefaultOutlineColor + " !important",
        backgroundColor: tokens$2.textFieldDisableBackgroundColor + " !important",
        ':hover': {
          border: "1px solid " + tokens$2.textFieldDefaultOutlineColor + " !important",
          outline: 'none',
          transition: 'all 0.15s ease-in-out 0s'
        }
      },
      ':hover': {
        outline: 'none',
        border: "1px solid " + tokens$2.textFieldActiveOutlineColor + " !important",
        transition: 'all 0.15s ease-in-out 0s'
      },
      ':focus': {
        outline: 'none',
        border: "1px solid " + tokens$2.textFieldActiveOutlineColor,
        boxShadow: "0px 0px 0px 2px " + tokens$2.textFieldActiveBorderColor
      },
      normal: {
        border: "1px solid " + tokens$2.textFieldDefaultOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      },
      success: {
        border: "1px solid " + tokens$2.textFieldSuccessOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      },
      error: {
        border: "1px solid " + tokens$2.textFieldErrorOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      }
    }
  },
  buttons: {
    sm: /*#__PURE__*/_extends({
      padding: tokens$2.buttonsSmPaddingTopBottom + " " + tokens$2.buttonsSmPaddingLeftRight + " " + tokens$2.buttonsSmPaddingTopBottom + " " + tokens$2.buttonsSmPaddingLeftRight + " !important"
    }, text.caption.lg.semibold),
    md: /*#__PURE__*/_extends({
      padding: tokens$2.buttonsMdPaddingTopBottom + " " + tokens$2.buttonsMdPaddingLeftRight + " " + tokens$2.buttonsMdPaddingTopBottom + " " + tokens$2.buttonsMdPaddingLeftRight + " !important"
    }, text.body.sm.semibold),
    lg: /*#__PURE__*/_extends({
      padding: tokens$2.buttonsLgPaddingTopBottom + " " + tokens$2.buttonsLgPaddingLeftRight + " " + tokens$2.buttonsLgPaddingTopBottom + " " + tokens$2.buttonsLgPaddingLeftRight + " !important"
    }, text.body.sm.semibold),
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
      border: '0px',
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
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
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
    },
    soft: {
      alignItems: 'center',
      borderRadius: "" + tokens$2.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$2.buttonsSecondaryDefaultBackgroundColor,
      color: tokens$2.buttonsSecondaryDefaultColor,
      border: '0px',
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
        backgroundColor: tokens$2.buttonsSecondaryHoverBackgroundColor,
        color: tokens$2.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$2.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$2.buttonsSecondaryActiveBackgroundColor,
        color: tokens$2.buttonsSecondaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens$2.buttonsSecondaryDisabledBackgroundColor,
        color: tokens$2.buttonsSecondaryDisabledColor
      }
    },
    outline: {
      alignItems: 'center',
      borderRadius: "" + tokens$2.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$2.buttonsSecondaryDefaultBackgroundColor,
      border: "1px solid " + tokens$2.buttonsSecondaryDefaultColor,
      color: tokens$2.buttonsSecondaryDefaultColor,
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
        backgroundColor: tokens$2.buttonsSecondaryHoverBackgroundColor,
        border: "1px solid " + tokens$2.buttonsSecondaryHoverColor,
        color: tokens$2.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$2.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$2.buttonsSecondaryActiveBackgroundColor,
        border: "1px solid " + tokens$2.buttonsSecondaryActiveColor,
        color: tokens$2.buttonsSecondaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: tokens$2.buttonsSecondaryDisabledBackgroundColor + " !important",
        border: "1px solid " + tokens$2.buttonsSecondaryDisabledColor + " !important",
        color: tokens$2.buttonsSecondaryDisabledColor + " !important"
      }
    },
    transparent: {
      alignItems: 'center',
      borderRadius: "" + tokens$2.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      color: tokens$2.buttonsSecondaryDefaultColor,
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
        backgroundColor: tokens$2.buttonsSecondaryDefaultBackgroundColor,
        color: tokens$2.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        backgroundColor: tokens$2.buttonsSecondaryDefaultBackgroundColor + " !important",
        color: tokens$2.buttonsSecondaryHoverColor + " !important",
        boxShadow: "0px 0px 0px 2px " + tokens$2.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$2.buttonsSecondaryHoverBackgroundColor + " !important",
        color: tokens$2.buttonsSecondaryActiveColor + " !important",
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: 'transparent !important',
        border: 'none !important',
        color: tokens$2.buttonsSecondaryDisabledColor + " !important"
      }
    }
  },
  badges: {
    primary: {
      bg: "" + tokens$2.badgePrimaryBackgroundColor,
      color: tokens$2.badgePrimaryColor
    },
    secondary: {
      bg: "" + tokens$2.badgeSecondaryBackgroundColor,
      color: tokens$2.badgeSecondaryColor
    },
    error: {
      bg: "" + tokens$2.badgeErrorBackgroundColor,
      color: tokens$2.badgeErrorColor
    },
    info: {
      bg: "" + tokens$2.badgeInfoBackgroundColor,
      color: tokens$2.badgeInfoColor
    },
    success: {
      bg: "" + tokens$2.badgeSuccessBackgroundColor,
      color: tokens$2.badgeSuccessColor
    },
    warning: {
      bg: "" + tokens$2.badgeWarningBackgroundColor,
      color: tokens$2.badgeWarningColor
    },
    small: /*#__PURE__*/_extends({
      width: 8,
      height: 8,
      borderRadius: 8 / 2
    }, text.body.sm.regular),
    smallWithBorder: /*#__PURE__*/_extends({
      border: '1px solid white',
      height: 10,
      borderRadius: 10 / 2
    }, text.body.sm.regular),
    largeWithBorder: /*#__PURE__*/_extends({
      border: '2px solid white'
    }, text.body.lg.regular),
    smallWithContent: /*#__PURE__*/_extends({
      display: 'inline-flex',
      alignItems: 'center',
      height: 21,
      borderRadius: 24,
      paddingX: '7px'
    }, text.body.sm.regular),
    largeWithContent: /*#__PURE__*/_extends({
      display: 'inline-flex',
      alignItems: 'center',
      height: 28,
      borderRadius: tokens$2.badgeBorderRadius,
      paddingX: '14px'
    }, text.body.lg.regular),
    large: /*#__PURE__*/_extends({
      width: 12,
      height: 12,
      borderRadius: 12 / 2
    }, text.body.lg.regular)
  },
  text: {
    "default": {
      fontFamily: 'Nunito Sans, sans-serif',
      color: tokens$2.tertiary800,
      // Body
      lg_regular: /*#__PURE__*/_extends({}, text.body.lg.regular),
      lg_regular_respon: /*#__PURE__*/_extends({}, text.body.lg.regular, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_semibold: /*#__PURE__*/_extends({}, text.body.lg.semibold),
      lg_semibold_respon: /*#__PURE__*/_extends({}, text.body.lg.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_bold: /*#__PURE__*/_extends({}, text.body.lg.bold),
      lg_bold_respon: /*#__PURE__*/_extends({}, text.body.lg.bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_italic: /*#__PURE__*/_extends({}, text.body.lg.italic),
      lg_italic_respon: /*#__PURE__*/_extends({}, text.body.lg.italic, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline: /*#__PURE__*/_extends({}, text.body.lg.underline),
      lg_underline_respon: /*#__PURE__*/_extends({}, text.body.lg.underline, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline_semibold: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold),
      lg_underline_semibold_respon: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline_bold: /*#__PURE__*/_extends({}, text.body.lg.underline_bold),
      lg_underline_bold_respon: /*#__PURE__*/_extends({}, text.body.lg.underline_bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      sm_regular: /*#__PURE__*/_extends({}, text.body.sm.regular),
      sm_regular_respon: /*#__PURE__*/_extends({}, text.body.sm.regular, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_semibold: /*#__PURE__*/_extends({}, text.body.sm.semibold),
      sm_semibold_respon: /*#__PURE__*/_extends({}, text.body.sm.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_bold: /*#__PURE__*/_extends({}, text.body.sm.bold),
      sm_bold_respon: /*#__PURE__*/_extends({}, text.body.sm.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_italic: /*#__PURE__*/_extends({}, text.body.sm.italic),
      sm_italic_respon: /*#__PURE__*/_extends({}, text.body.sm.italic, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline: /*#__PURE__*/_extends({}, text.body.sm.underline),
      sm_underline_respon: /*#__PURE__*/_extends({}, text.body.sm.underline, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline_semibold: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold),
      sm_underline_semibold_respon: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline_bold: /*#__PURE__*/_extends({}, text.body.sm.underline_bold),
      sm_underline_bold_respon: /*#__PURE__*/_extends({}, text.body.sm.underline_bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      // Caption
      sizes: {
        lg_regular: /*#__PURE__*/_extends({}, text.caption.lg.regular),
        lg_regular_respon: /*#__PURE__*/_extends({}, text.caption.lg.regular, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_semibold: /*#__PURE__*/_extends({}, text.caption.lg.semibold),
        lg_semibold_respon: /*#__PURE__*/_extends({}, text.caption.lg.semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_bold: /*#__PURE__*/_extends({}, text.caption.lg.bold),
        lg_bold_respon: /*#__PURE__*/_extends({}, text.caption.lg.bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_italic: /*#__PURE__*/_extends({}, text.caption.lg.italic),
        lg_italic_respon: /*#__PURE__*/_extends({}, text.caption.lg.italic, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline: /*#__PURE__*/_extends({}, text.caption.lg.underline),
        lg_underline_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline_semibold: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold),
        lg_underline_semibold_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline_bold: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold),
        lg_underline_bold_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        sm_regular: /*#__PURE__*/_extends({}, text.caption.sm.regular),
        sm_regular_respon: /*#__PURE__*/_extends({}, text.caption.sm.regular, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_semibold: /*#__PURE__*/_extends({}, text.caption.sm.semibold),
        sm_semibold_respon: /*#__PURE__*/_extends({}, text.caption.sm.semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_bold: /*#__PURE__*/_extends({}, text.caption.sm.bold),
        sm_bold_respon: /*#__PURE__*/_extends({}, text.caption.sm.bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_italic: /*#__PURE__*/_extends({}, text.caption.sm.italic),
        sm_italic_respon: /*#__PURE__*/_extends({}, text.caption.sm.italic, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline: /*#__PURE__*/_extends({}, text.caption.sm.underline),
        sm_underline_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline_semibold: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold),
        sm_underline_semibold_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline_bold: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold),
        sm_underline_bold_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        })
      }
    },
    // Heading
    heading: {
      h1: /*#__PURE__*/_extends({}, text.heading.h1),
      h1Respon: /*#__PURE__*/_extends({}, text.heading.h1, {
        '@media screen and (max-width: 400px)': {
          fontSize: '34px',
          lineHeight: '48px',
          fontWeight: '700'
        }
      }),
      h2: /*#__PURE__*/_extends({}, text.heading.h2),
      h2Respon: /*#__PURE__*/_extends({}, text.heading.h2, {
        '@media screen and (max-width: 400px)': {
          fontSize: '28px',
          lineHeight: '42px',
          fontWeight: '700'
        }
      }),
      h3: /*#__PURE__*/_extends({}, text.heading.h3),
      h3Respon: /*#__PURE__*/_extends({}, text.heading.h3, {
        '@media screen and (max-width: 400px)': {
          fontSize: '24px',
          lineHeight: '36px',
          fontWeight: '700'
        }
      }),
      h4: /*#__PURE__*/_extends({}, text.heading.h4),
      h4Respon: /*#__PURE__*/_extends({}, text.heading.h4, {
        '@media screen and (max-width: 400px)': {
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: '700'
        }
      }),
      h5: /*#__PURE__*/_extends({}, text.heading.h5),
      h5Respon: /*#__PURE__*/_extends({}, text.heading.h5, {
        '@media screen and (max-width: 400px)': {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '700'
        }
      }),
      h6: /*#__PURE__*/_extends({}, text.heading.h6),
      h6Respon: /*#__PURE__*/_extends({}, text.heading.h6, {
        '@media screen and (max-width: 400px)': {
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: '700'
        }
      })
    }
  },
  spinner: {
    primary: {
      color: tokens$2.primary500
    },
    secondary: {
      color: tokens$2.secondary500
    }
  },
  cards: {
    containerColors: {
      marginBottom: '20px'
    },
    wrappValueColors: /*#__PURE__*/_extends({}, text.caption.sm.semibold, {
      padding: '10px'
    }),
    // Colors Primary
    primary25: {
      backgroundColor: "" + tokens$2.primary25,
      color: "" + tokens$2.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary50: {
      backgroundColor: "" + tokens$2.primary50,
      color: "" + tokens$2.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary100: {
      backgroundColor: "" + tokens$2.primary100,
      color: "" + tokens$2.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary200: {
      backgroundColor: "" + tokens$2.primary200,
      color: "" + tokens$2.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary300: {
      backgroundColor: "" + tokens$2.primary300,
      color: "" + tokens$2.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary400: {
      backgroundColor: "" + tokens$2.primary400,
      color: "" + tokens$2.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary500: {
      backgroundColor: "" + tokens$2.primary500,
      color: "" + tokens$2.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary600: {
      backgroundColor: "" + tokens$2.primary600,
      color: "" + tokens$2.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary700: {
      backgroundColor: "" + tokens$2.primary700,
      color: "" + tokens$2.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary800: {
      backgroundColor: "" + tokens$2.primary800,
      color: "" + tokens$2.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary900: {
      backgroundColor: "" + tokens$2.primary900,
      color: "" + tokens$2.primary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Secondary
    secondary25: {
      backgroundColor: "" + tokens$2.secondary25,
      color: "" + tokens$2.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary50: {
      backgroundColor: "" + tokens$2.secondary50,
      color: "" + tokens$2.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary100: {
      backgroundColor: "" + tokens$2.secondary100,
      color: "" + tokens$2.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary200: {
      backgroundColor: "" + tokens$2.secondary200,
      color: "" + tokens$2.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary300: {
      backgroundColor: "" + tokens$2.secondary300,
      color: "" + tokens$2.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary400: {
      backgroundColor: "" + tokens$2.secondary400,
      color: "" + tokens$2.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary500: {
      backgroundColor: "" + tokens$2.secondary500,
      color: "" + tokens$2.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary600: {
      backgroundColor: "" + tokens$2.secondary600,
      color: "" + tokens$2.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary700: {
      backgroundColor: "" + tokens$2.secondary700,
      color: "" + tokens$2.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary800: {
      backgroundColor: "" + tokens$2.secondary800,
      color: "" + tokens$2.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary900: {
      backgroundColor: "" + tokens$2.secondary900,
      color: "" + tokens$2.secondary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Tertiary
    tertiary25: {
      backgroundColor: "" + tokens$2.tertiary25,
      color: "" + tokens$2.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary50: {
      backgroundColor: "" + tokens$2.tertiary50,
      color: "" + tokens$2.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary100: {
      backgroundColor: "" + tokens$2.tertiary100,
      color: "" + tokens$2.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary200: {
      backgroundColor: "" + tokens$2.tertiary200,
      color: "" + tokens$2.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary300: {
      backgroundColor: "" + tokens$2.tertiary300,
      color: "" + tokens$2.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary400: {
      backgroundColor: "" + tokens$2.tertiary400,
      color: "" + tokens$2.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary500: {
      backgroundColor: "" + tokens$2.tertiary500,
      color: "" + tokens$2.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary600: {
      backgroundColor: "" + tokens$2.tertiary600,
      color: "" + tokens$2.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary700: {
      backgroundColor: "" + tokens$2.tertiary700,
      color: "" + tokens$2.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary800: {
      backgroundColor: "" + tokens$2.tertiary800,
      color: "" + tokens$2.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary900: {
      backgroundColor: "" + tokens$2.tertiary900,
      color: "" + tokens$2.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Success
    success25: {
      backgroundColor: "" + tokens$2.success25,
      color: "" + tokens$2.success900,
      padding: '1rem',
      width: '100%'
    },
    success50: {
      backgroundColor: "" + tokens$2.success50,
      color: "" + tokens$2.success900,
      padding: '1rem',
      width: '100%'
    },
    success100: {
      backgroundColor: "" + tokens$2.success100,
      color: "" + tokens$2.success900,
      padding: '1rem',
      width: '100%'
    },
    success200: {
      backgroundColor: "" + tokens$2.success200,
      color: "" + tokens$2.success900,
      padding: '1rem',
      width: '100%'
    },
    success300: {
      backgroundColor: "" + tokens$2.success300,
      color: "" + tokens$2.success900,
      padding: '1rem',
      width: '100%'
    },
    success400: {
      backgroundColor: "" + tokens$2.success400,
      color: "" + tokens$2.success25,
      padding: '1rem',
      width: '100%'
    },
    success500: {
      backgroundColor: "" + tokens$2.success500,
      color: "" + tokens$2.success25,
      padding: '1rem',
      width: '100%'
    },
    success600: {
      backgroundColor: "" + tokens$2.success600,
      color: "" + tokens$2.success25,
      padding: '1rem',
      width: '100%'
    },
    success700: {
      backgroundColor: "" + tokens$2.success700,
      color: "" + tokens$2.success25,
      padding: '1rem',
      width: '100%'
    },
    success800: {
      backgroundColor: "" + tokens$2.success800,
      color: "" + tokens$2.success25,
      padding: '1rem',
      width: '100%'
    },
    success900: {
      backgroundColor: "" + tokens$2.success900,
      color: "" + tokens$2.success25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Warning
    warning25: {
      backgroundColor: "" + tokens$2.warning25,
      color: "" + tokens$2.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning50: {
      backgroundColor: "" + tokens$2.warning50,
      color: "" + tokens$2.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning100: {
      backgroundColor: "" + tokens$2.warning100,
      color: "" + tokens$2.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning200: {
      backgroundColor: "" + tokens$2.warning200,
      color: "" + tokens$2.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning300: {
      backgroundColor: "" + tokens$2.warning300,
      color: "" + tokens$2.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning400: {
      backgroundColor: "" + tokens$2.warning400,
      color: "" + tokens$2.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning500: {
      backgroundColor: "" + tokens$2.warning500,
      color: "" + tokens$2.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning600: {
      backgroundColor: "" + tokens$2.warning600,
      color: "" + tokens$2.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning700: {
      backgroundColor: "" + tokens$2.warning700,
      color: "" + tokens$2.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning800: {
      backgroundColor: "" + tokens$2.warning800,
      color: "" + tokens$2.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning900: {
      backgroundColor: "" + tokens$2.warning900,
      color: "" + tokens$2.warning25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Error
    error25: {
      backgroundColor: "" + tokens$2.error25,
      color: "" + tokens$2.error900,
      padding: '1rem',
      width: '100%'
    },
    error50: {
      backgroundColor: "" + tokens$2.error50,
      color: "" + tokens$2.error900,
      padding: '1rem',
      width: '100%'
    },
    error100: {
      backgroundColor: "" + tokens$2.error100,
      color: "" + tokens$2.error900,
      padding: '1rem',
      width: '100%'
    },
    error200: {
      backgroundColor: "" + tokens$2.error200,
      color: "" + tokens$2.error900,
      padding: '1rem',
      width: '100%'
    },
    error300: {
      backgroundColor: "" + tokens$2.error300,
      color: "" + tokens$2.error900,
      padding: '1rem',
      width: '100%'
    },
    error400: {
      backgroundColor: "" + tokens$2.error400,
      color: "" + tokens$2.error25,
      padding: '1rem',
      width: '100%'
    },
    error500: {
      backgroundColor: "" + tokens$2.error500,
      color: "" + tokens$2.error25,
      padding: '1rem',
      width: '100%'
    },
    error600: {
      backgroundColor: "" + tokens$2.error600,
      color: "" + tokens$2.error25,
      padding: '1rem',
      width: '100%'
    },
    error700: {
      backgroundColor: "" + tokens$2.error700,
      color: "" + tokens$2.error25,
      padding: '1rem',
      width: '100%'
    },
    error800: {
      backgroundColor: "" + tokens$2.error800,
      color: "" + tokens$2.error25,
      padding: '1rem',
      width: '100%'
    },
    error900: {
      backgroundColor: "" + tokens$2.error900,
      color: "" + tokens$2.error25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Information
    info25: {
      backgroundColor: "" + tokens$2.information25,
      color: "" + tokens$2.information900,
      padding: '1rem',
      width: '100%'
    },
    info50: {
      backgroundColor: "" + tokens$2.information50,
      color: "" + tokens$2.information900,
      padding: '1rem',
      width: '100%'
    },
    info100: {
      backgroundColor: "" + tokens$2.information100,
      color: "" + tokens$2.information900,
      padding: '1rem',
      width: '100%'
    },
    info200: {
      backgroundColor: "" + tokens$2.information200,
      color: "" + tokens$2.information900,
      padding: '1rem',
      width: '100%'
    },
    info300: {
      backgroundColor: "" + tokens$2.information300,
      color: "" + tokens$2.information900,
      padding: '1rem',
      width: '100%'
    },
    info400: {
      backgroundColor: "" + tokens$2.information400,
      color: "" + tokens$2.information25,
      padding: '1rem',
      width: '100%'
    },
    info500: {
      backgroundColor: "" + tokens$2.information500,
      color: "" + tokens$2.information25,
      padding: '1rem',
      width: '100%'
    },
    info600: {
      backgroundColor: "" + tokens$2.information600,
      color: "" + tokens$2.information25,
      padding: '1rem',
      width: '100%'
    },
    info700: {
      backgroundColor: "" + tokens$2.information700,
      color: "" + tokens$2.information25,
      padding: '1rem',
      width: '100%'
    },
    info800: {
      backgroundColor: "" + tokens$2.information800,
      color: "" + tokens$2.information25,
      padding: '1rem',
      width: '100%'
    },
    info900: {
      backgroundColor: "" + tokens$2.information900,
      color: "" + tokens$2.information25,
      padding: '1rem',
      width: '100%'
    }
  }
});

/**
 * Do not edit directly
 * Generated on Tue, 11 Oct 2022 09:25:29 GMT
 */
var tokens$3 = {
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
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
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
  buttonsSecondaryFocusBorderColors: '#82c190',
  buttonsSecondaryDisabledBackgroundColor: '#f3f3f3',
  buttonsSecondaryDisabledColor: '#cecece',
  buttonsSecondaryBorderWidth: '0px',
  buttonsBorderRadius: '16px',
  buttonsMdPaddingLeftRight: '12px',
  buttonsMdPaddingTopBottom: '8px',
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
  anchorLgIconSize: '20px',
  anchorMdIconSize: '16px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#47af64',
  switchActiveDisableBackgroundColor: '#cae2cf',
  switchNonactiveBackgroundColor: '#b1b1b1',
  switchNonactiveDisableBackgroundColor: '#e8e8e8',
  avatarLgSize: '64px',
  avatarLgIconSize: '40px',
  avatarMdSize: '40px',
  avatarMdIconSize: '24px',
  avatarSmSize: '32px',
  avatarSmIconSize: '16px',
  textFieldDefaultBackgroundColor: '#ffffff',
  textFieldDefaultOutlineColor: '#cecece',
  textFieldDefaultIconColor: '#3d3d3d',
  textFieldDefaultPlaceholderColor: '#8f8f8f',
  textFieldDefaultLabelColor: '#3d3d3d',
  textFieldActiveOutlineColor: '#47af64',
  textFieldActivePlaceholderColor: '#3d3d3d',
  textFieldActiveBorderColor: '#cae2cf',
  textFieldErrorOutlineColor: '#f04438',
  textFieldSuccessOutlineColor: '#12b76a',
  textFieldDisableBackgroundColor: '#e8e8e8',
  textFieldDisableOutlineColor: '#b1b1b1',
  textFieldDisablePlaceholderColor: '#8f8f8f',
  textFieldPrefixsufixLineColor: '#b1b1b1',
  textFieldPrefixsufixTextColor: '#616161',
  textFieldBorderRadius: '4px',
  textFieldPaddingLeftRight: '12px',
  textFieldPaddingTopBottom: '12px',
  badgePrimaryBackgroundColor: '#47af64',
  badgePrimaryColor: '#ffffff',
  badgeSecondaryBackgroundColor: '#e6f1e8',
  badgeSecondaryColor: '#47af64',
  badgeErrorBackgroundColor: '#fce6e5',
  badgeErrorColor: '#f04438',
  badgeInfoBackgroundColor: '#e0f2fe',
  badgeInfoColor: '#0ba5ec',
  badgeSuccessBackgroundColor: '#d1fadf',
  badgeSuccessColor: '#12b76a',
  badgeWarningBackgroundColor: '#fdece4',
  badgeWarningColor: '#f79009',
  badgeBorderRadius: '8px'
};

var _formSideCenter$2, _containerLoginCen$2, _formSideRight$2, _formSideLeft$2, _containerLogin$2;
var agr = /*#__PURE__*/utils.makeTheme({
  //...base,
  colors: {
    primary25: tokens$3.primary25,
    primary50: tokens$3.primary50,
    primary100: tokens$3.primary100,
    primary200: tokens$3.primary200,
    primary300: tokens$3.primary300,
    primary400: tokens$3.primary400,
    primary500: tokens$3.primary500,
    primary600: tokens$3.primary600,
    primary700: tokens$3.primary700,
    primary800: tokens$3.primary800,
    primary900: tokens$3.primary900,
    secondary25: tokens$3.secondary25,
    secondary50: tokens$3.secondary50,
    secondary100: tokens$3.secondary100,
    secondary200: tokens$3.secondary200,
    secondary300: tokens$3.secondary300,
    secondary400: tokens$3.secondary400,
    secondary500: tokens$3.secondary500,
    secondary600: tokens$3.secondary600,
    secondary700: tokens$3.secondary700,
    secondary800: tokens$3.secondary800,
    secondary900: tokens$3.secondary900,
    tertiary25: tokens$3.tertiary25,
    tertiary50: tokens$3.tertiary50,
    tertiary100: tokens$3.tertiary100,
    tertiary200: tokens$3.tertiary200,
    tertiary300: tokens$3.tertiary300,
    tertiary400: tokens$3.tertiary400,
    tertiary500: tokens$3.tertiary500,
    tertiary600: tokens$3.tertiary600,
    tertiary700: tokens$3.tertiary700,
    tertiary800: tokens$3.tertiary800,
    tertiary900: tokens$3.tertiary900,
    error25: tokens$3.error25,
    error50: tokens$3.error50,
    error100: tokens$3.error100,
    error200: tokens$3.error200,
    error300: tokens$3.error300,
    error400: tokens$3.error400,
    error500: tokens$3.error500,
    error600: tokens$3.error600,
    error700: tokens$3.error700,
    error800: tokens$3.error800,
    error900: tokens$3.error900,
    warning25: tokens$3.warning25,
    warning50: tokens$3.warning50,
    warning100: tokens$3.warning100,
    warning200: tokens$3.warning200,
    warning300: tokens$3.warning300,
    warning400: tokens$3.warning400,
    warning500: tokens$3.warning500,
    warning600: tokens$3.warning600,
    warning700: tokens$3.warning700,
    warning800: tokens$3.warning800,
    warning900: tokens$3.warning900,
    success25: tokens$3.success25,
    success50: tokens$3.success50,
    success100: tokens$3.success100,
    success200: tokens$3.success200,
    success300: tokens$3.success300,
    success400: tokens$3.success400,
    success500: tokens$3.success500,
    success600: tokens$3.success600,
    success700: tokens$3.success700,
    success800: tokens$3.success800,
    success900: tokens$3.success900,
    information25: tokens$3.information25,
    information50: tokens$3.information50,
    information100: tokens$3.information100,
    information200: tokens$3.information200,
    information300: tokens$3.information300,
    information400: tokens$3.information400,
    information500: tokens$3.information500,
    information600: tokens$3.information600,
    information700: tokens$3.information700,
    information800: tokens$3.information800,
    information900: tokens$3.information900
  },
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
      color: tokens$3.anchorDefaultColor,
      disabled: {
        color: tokens$3.tertiary300,
        pointerEvents: 'none'
      },
      '&:hover': {
        color: tokens$3.anchorHoverColor + " !important",
        textDecoration: 'underline',
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
    },
    background: {
      primary25: {
        background: "" + tokens$3.primary25
      },
      primary50: {
        background: "" + tokens$3.primary50
      },
      primary100: {
        background: "" + tokens$3.primary100
      },
      primary200: {
        background: "" + tokens$3.primary200
      },
      primary300: {
        background: "" + tokens$3.primary300
      },
      primary400: {
        background: "" + tokens$3.primary400
      },
      primary500: {
        background: "" + tokens$3.primary500
      },
      primary600: {
        background: "" + tokens$3.primary600
      },
      primary700: {
        background: "" + tokens$3.primary700
      },
      primary800: {
        background: "" + tokens$3.primary800
      },
      primary900: {
        background: "" + tokens$3.primary900
      },
      secondary25: {
        background: "" + tokens$3.secondary25
      },
      secondary50: {
        background: "" + tokens$3.secondary50
      },
      secondary100: {
        background: "" + tokens$3.secondary100
      },
      secondary200: {
        background: "" + tokens$3.secondary200
      },
      secondary300: {
        background: "" + tokens$3.secondary300
      },
      secondary400: {
        background: "" + tokens$3.secondary400
      },
      secondary500: {
        background: "" + tokens$3.secondary500
      },
      secondary600: {
        background: "" + tokens$3.secondary600
      },
      secondary700: {
        background: "" + tokens$3.secondary700
      },
      secondary800: {
        background: "" + tokens$3.secondary800
      },
      secondary900: {
        background: "" + tokens$3.secondary900
      },
      tertiary25: {
        background: "" + tokens$3.tertiary25
      },
      tertiary50: {
        background: "" + tokens$3.tertiary50
      },
      tertiary100: {
        background: "" + tokens$3.tertiary100
      },
      tertiary200: {
        background: "" + tokens$3.tertiary200
      },
      tertiary300: {
        background: "" + tokens$3.tertiary300
      },
      tertiary400: {
        background: "" + tokens$3.tertiary400
      },
      tertiary500: {
        background: "" + tokens$3.tertiary500
      },
      tertiary600: {
        background: "" + tokens$3.tertiary600
      },
      tertiary700: {
        background: "" + tokens$3.tertiary700
      },
      tertiary800: {
        background: "" + tokens$3.tertiary800
      },
      tertiary900: {
        background: "" + tokens$3.tertiary900
      },
      success25: {
        background: "" + tokens$3.success25
      },
      success50: {
        background: "" + tokens$3.success50
      },
      success100: {
        background: "" + tokens$3.success100
      },
      success200: {
        background: "" + tokens$3.success200
      },
      success300: {
        background: "" + tokens$3.success300
      },
      success400: {
        background: "" + tokens$3.success400
      },
      success500: {
        background: "" + tokens$3.success500
      },
      success600: {
        background: "" + tokens$3.success600
      },
      success700: {
        background: "" + tokens$3.success700
      },
      success800: {
        background: "" + tokens$3.success800
      },
      success900: {
        background: "" + tokens$3.success900
      },
      warning25: {
        background: "" + tokens$3.warning25
      },
      warning50: {
        background: "" + tokens$3.warning50
      },
      warning100: {
        background: "" + tokens$3.warning100
      },
      warning200: {
        background: "" + tokens$3.warning200
      },
      warning300: {
        background: "" + tokens$3.warning300
      },
      warning400: {
        background: "" + tokens$3.warning400
      },
      warning500: {
        background: "" + tokens$3.warning500
      },
      warning600: {
        background: "" + tokens$3.warning600
      },
      warning700: {
        background: "" + tokens$3.warning700
      },
      warning800: {
        background: "" + tokens$3.warning800
      },
      warning900: {
        background: "" + tokens$3.warning900
      },
      error25: {
        background: "" + tokens$3.error25
      },
      error50: {
        background: "" + tokens$3.error50
      },
      error100: {
        background: "" + tokens$3.error100
      },
      error200: {
        background: "" + tokens$3.error200
      },
      error300: {
        background: "" + tokens$3.error300
      },
      error400: {
        background: "" + tokens$3.error400
      },
      error500: {
        background: "" + tokens$3.error500
      },
      error600: {
        background: "" + tokens$3.error600
      },
      error700: {
        background: "" + tokens$3.error700
      },
      error800: {
        background: "" + tokens$3.error800
      },
      error900: {
        background: "" + tokens$3.error900
      },
      info25: {
        background: "" + tokens$3.information25
      },
      info50: {
        background: "" + tokens$3.information50
      },
      info100: {
        background: "" + tokens$3.information100
      },
      info200: {
        background: "" + tokens$3.information200
      },
      info300: {
        background: "" + tokens$3.information300
      },
      info400: {
        background: "" + tokens$3.information400
      },
      info500: {
        background: "" + tokens$3.information500
      },
      info600: {
        background: "" + tokens$3.information600
      },
      info700: {
        background: "" + tokens$3.information700
      },
      info800: {
        background: "" + tokens$3.information800
      },
      info900: {
        background: "" + tokens$3.information900
      }
    },
    text: {
      primary25: {
        color: "" + tokens$3.primary25
      },
      primary50: {
        color: "" + tokens$3.primary50
      },
      primary100: {
        color: "" + tokens$3.primary100
      },
      primary200: {
        color: "" + tokens$3.primary200
      },
      primary300: {
        color: "" + tokens$3.primary300
      },
      primary400: {
        color: "" + tokens$3.primary400
      },
      primary500: {
        color: "" + tokens$3.primary500
      },
      primary600: {
        color: "" + tokens$3.primary600
      },
      primary700: {
        color: "" + tokens$3.primary700
      },
      primary800: {
        color: "" + tokens$3.primary800
      },
      primary900: {
        color: "" + tokens$3.primary900
      },
      secondary25: {
        color: "" + tokens$3.secondary25
      },
      secondary50: {
        color: "" + tokens$3.secondary50
      },
      secondary100: {
        color: "" + tokens$3.secondary100
      },
      secondary200: {
        color: "" + tokens$3.secondary200
      },
      secondary300: {
        color: "" + tokens$3.secondary300
      },
      secondary400: {
        color: "" + tokens$3.secondary400
      },
      secondary500: {
        color: "" + tokens$3.secondary500
      },
      secondary600: {
        color: "" + tokens$3.secondary600
      },
      secondary700: {
        color: "" + tokens$3.secondary700
      },
      secondary800: {
        color: "" + tokens$3.secondary800
      },
      secondary900: {
        color: "" + tokens$3.secondary900
      },
      tertiary25: {
        color: "" + tokens$3.tertiary25
      },
      tertiary50: {
        color: "" + tokens$3.tertiary50
      },
      tertiary100: {
        color: "" + tokens$3.tertiary100
      },
      tertiary200: {
        color: "" + tokens$3.tertiary200
      },
      tertiary300: {
        color: "" + tokens$3.tertiary300
      },
      tertiary400: {
        color: "" + tokens$3.tertiary400
      },
      tertiary500: {
        color: "" + tokens$3.tertiary500
      },
      tertiary600: {
        color: "" + tokens$3.tertiary600
      },
      tertiary700: {
        color: "" + tokens$3.tertiary700
      },
      tertiary800: {
        color: "" + tokens$3.tertiary800
      },
      tertiary900: {
        color: "" + tokens$3.tertiary900
      },
      success25: {
        color: "" + tokens$3.success25
      },
      success50: {
        color: "" + tokens$3.success50
      },
      success100: {
        color: "" + tokens$3.success100
      },
      success200: {
        color: "" + tokens$3.success200
      },
      success300: {
        color: "" + tokens$3.success300
      },
      success400: {
        color: "" + tokens$3.success400
      },
      success500: {
        color: "" + tokens$3.success500
      },
      success600: {
        color: "" + tokens$3.success600
      },
      success700: {
        color: "" + tokens$3.success700
      },
      success800: {
        color: "" + tokens$3.success800
      },
      success900: {
        color: "" + tokens$3.success900
      },
      warning25: {
        color: "" + tokens$3.warning25
      },
      warning50: {
        color: "" + tokens$3.warning50
      },
      warning100: {
        color: "" + tokens$3.warning100
      },
      warning200: {
        color: "" + tokens$3.warning200
      },
      warning300: {
        color: "" + tokens$3.warning300
      },
      warning400: {
        color: "" + tokens$3.warning400
      },
      warning500: {
        color: "" + tokens$3.warning500
      },
      warning600: {
        color: "" + tokens$3.warning600
      },
      warning700: {
        color: "" + tokens$3.warning700
      },
      warning800: {
        color: "" + tokens$3.warning800
      },
      warning900: {
        color: "" + tokens$3.warning900
      },
      error25: {
        color: "" + tokens$3.error25
      },
      error50: {
        color: "" + tokens$3.error50
      },
      error100: {
        color: "" + tokens$3.error100
      },
      error200: {
        color: "" + tokens$3.error200
      },
      error300: {
        color: "" + tokens$3.error300
      },
      error400: {
        color: "" + tokens$3.error400
      },
      error500: {
        color: "" + tokens$3.error500
      },
      error600: {
        color: "" + tokens$3.error600
      },
      error700: {
        color: "" + tokens$3.error700
      },
      error800: {
        color: "" + tokens$3.error800
      },
      error900: {
        color: "" + tokens$3.error900
      },
      info25: {
        color: "" + tokens$3.information25
      },
      info50: {
        color: "" + tokens$3.information50
      },
      info100: {
        color: "" + tokens$3.information100
      },
      info200: {
        color: "" + tokens$3.information200
      },
      info300: {
        color: "" + tokens$3.information300
      },
      info400: {
        color: "" + tokens$3.information400
      },
      info500: {
        color: "" + tokens$3.information500
      },
      info600: {
        color: "" + tokens$3.information600
      },
      info700: {
        color: "" + tokens$3.information700
      },
      info800: {
        color: "" + tokens$3.information800
      },
      info900: {
        color: "" + tokens$3.information900
      }
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
        div: {
          height: '12px !important',
          width: '12px !important'
        }
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: tokens$3.primary500 + " !important"
      },
      ':disabled': {
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
              color: tokens$3.checkboxDisabledBorder + " !important"
            }
          },
          backgroundColor: tokens$3.checkboxDisabledBackgroundColor + " !important",
          borderRadius: tokens$3.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + tokens$3.checkboxDefaultBorder,
        borderRadius: tokens$3.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$3.checkboxActiveBorder,
          '&:after': {
            color: tokens$3.checkboxActiveDisableBackgroundColor,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$3.checkboxActiveBackgroundColor,
          border: "2px solid " + tokens$3.checkboxActiveBorder,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2714"',
            color: tokens$3.checkboxDefaultBackgroundColor
          },
          '&:hover': {
            backgroundColor: tokens$3.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s'
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
              color: tokens$3.checkboxDisabledBorder + " !important"
            }
          },
          backgroundColor: color.grayscale30 + " !important",
          borderRadius: tokens$3.checkboxBorderRadius + " !important",
          border: 'none !important'
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: "2px solid " + tokens$3.checkboxDefaultBorder,
        borderRadius: tokens$3.checkboxBorderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: "2px solid " + tokens$3.checkboxActiveBorder,
          '&:after': {
            color: tokens$3.checkboxActiveDisableBackgroundColor,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: tokens$3.checkboxActiveBackgroundColor,
          border: "2px solid " + tokens$3.checkboxActiveBorder,
          transition: 'all 0.15s ease-in-out 0s',
          '&:after': {
            content: '"\\2012"',
            color: tokens$3.checkboxDefaultBackgroundColor
          },
          '&:hover': {
            backgroundColor: tokens$3.checkboxActiveBorder,
            transition: 'all 0.15s ease-in-out 0s'
          }
        }
      }
    },
    input: {
      container: {
        position: 'relative',
        display: 'flex !important',
        flexDirection: 'row',
        alignItems: 'center !important',
        height: 'none !important',
        backgroundColor: "" + tokens$3.textFieldDefaultBackgroundColor,
        marginBottom: '30px'
      },
      containPrefLeft: {
        display: 'flex',
        height: '-webkit-fill-available',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "" + tokens$3.textFieldPaddingLeftRight,
        pointerEvents: 'none',
        zIndex: 3
      },
      wrapperPrefLeft: /*#__PURE__*/_extends({
        color: "" + tokens$3.textFieldPrefixsufixTextColor
      }, text.body.sm.semibold),
      limitPrefLeft: {
        height: '24px',
        borderRight: "1px solid " + tokens$3.textFieldPrefixsufixLineColor,
        marginLeft: "" + tokens$3.textFieldPaddingLeftRight
      },
      wrappPrefLeftIconLeft: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginLeft: '12px',
        zIndex: 2
      },
      wrappIconLeft: {
        position: 'relative',
        marginLeft: "" + tokens$3.textFieldPaddingLeftRight,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px'
      },
      wrappField: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$3.textFieldBorderRadius,
        border: "1px solid " + tokens$3.textFieldDefaultOutlineColor,
        backgroundColor: tokens$3.textFieldDisableBackgroundColor + " !important",
        transition: 'all 0.15s ease-in-out 0s'
      },
      wrappNormal: {
        position: 'absolute',
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        border: "1px solid " + tokens$3.textFieldDefaultOutlineColor,
        borderRadius: "" + tokens$3.textFieldBorderRadius,
        transition: 'all 0.15s ease-in-out 0s'
      },
      wrappSuccess: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$3.textFieldBorderRadius,
        border: "1px solid " + tokens$3.textFieldSuccessOutlineColor,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute'
      },
      wrappError: {
        zIndex: 1,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '-webkit-fill-available',
        borderRadius: "" + tokens$3.textFieldBorderRadius,
        border: "1px solid " + tokens$3.textFieldErrorOutlineColor,
        transition: 'all 0.15s ease-in-out 0s',
        position: 'absolute'
      },
      wrappPrefRightIconRight: {
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        zIndex: 2,
        marginRight: '12px'
      },
      wrappIconRight: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        marginRight: "" + tokens$3.textFieldPaddingLeftRight,
        cursor: 'pointer'
      },
      containPrefRight: {
        textAlign: 'center',
        paddingRight: "" + tokens$3.textFieldPaddingLeftRight,
        display: 'flex',
        zIndex: 3
      },
      limitPrefRight: {
        height: '24px',
        borderRight: "1px solid " + tokens$3.textFieldPrefixsufixLineColor,
        marginRight: "" + tokens$3.textFieldPaddingLeftRight
      },
      wrapperPrefRight: /*#__PURE__*/_extends({
        color: "" + tokens$3.textFieldPrefixsufixTextColor
      }, text.body.sm.semibold),
      wrappLabelField: /*#__PURE__*/_extends({
        marginBottom: '5px',
        color: "" + tokens$3.textFieldDefaultLabelColor
      }, text.body.sm.semibold),
      wrapErrorMessage: /*#__PURE__*/_extends({
        marginTop: '-25px',
        color: "" + tokens$3.textFieldErrorOutlineColor
      }, text.caption.lg.regular),
      '&:disabled': {
        zIndex: 2,
        border: 0,
        backgroundColor: 'transparent !important'
      },
      normal: {
        '&::placeholder': {
          color: tokens$3.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover ~ .css-ib4mcl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$3.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus  ~ .css-ib4mcl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$3.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$3.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        '& .css-ib4mcl-Textfield': {
          paddingLeft: '30px !important'
        },
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$3.textFieldPaddingTopBottom + " " + tokens$3.textFieldPaddingLeftRight + " " + tokens$3.textFieldPaddingTopBottom + " " + tokens$3.textFieldPaddingLeftRight + " !important",
        zIndex: '2'
      },
      success: {
        '&::placeholder': {
          color: tokens$3.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover ~ .css-1hm5k8u-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$3.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus ~ .css-1hm5k8u-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$3.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$3.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$3.textFieldPaddingTopBottom + " " + tokens$3.textFieldPaddingLeftRight + " " + tokens$3.textFieldPaddingTopBottom + " " + tokens$3.textFieldPaddingLeftRight + " !important"
      },
      error: {
        '&::placeholder': {
          color: tokens$3.textFieldDefaultPlaceholderColor
        },
        '&:focus': {
          outline: 'none'
        },
        '&:hover  ~ .css-1ahjwsl-Textfield': {
          outline: 'none',
          border: "1px solid " + tokens$3.textFieldActiveOutlineColor + " !important",
          transition: 'all 0.10s ease-in-out 0s'
        },
        '&:focus ~ .css-1ahjwsl-Textfield': {
          border: "1px solid " + tokens$3.textFieldActiveOutlineColor,
          boxShadow: "0px 0px 0px 2px " + tokens$3.textFieldActiveBorderColor + " !important",
          transition: 'all 0.15s ease-in-out 0s'
        },
        zIndex: 2,
        border: '0',
        backgroundColor: 'transparent',
        padding: tokens$3.textFieldPaddingTopBottom + " " + tokens$3.textFieldPaddingLeftRight + " " + tokens$3.textFieldPaddingTopBottom + " " + tokens$3.textFieldPaddingLeftRight + " !important"
      }
    },
    textarea: {
      backgroundColor: "" + tokens$3.textFieldDefaultBackgroundColor,
      borderRadius: "" + tokens$3.textFieldBorderRadius,
      labelTextArea: /*#__PURE__*/_extends({
        color: "" + tokens$3.textFieldDefaultLabelColor
      }, text.body.sm.semibold),
      '&::placeholder': {
        color: "" + tokens$3.textFieldDefaultPlaceholderColor
      },
      ':disabled': {
        border: "1px solid " + tokens$3.textFieldDefaultOutlineColor + " !important",
        backgroundColor: tokens$3.textFieldDisableBackgroundColor + " !important",
        ':hover': {
          border: "1px solid " + tokens$3.textFieldDefaultOutlineColor + " !important",
          outline: 'none',
          transition: 'all 0.15s ease-in-out 0s'
        }
      },
      ':hover': {
        outline: 'none',
        border: "1px solid " + tokens$3.textFieldActiveOutlineColor + " !important",
        transition: 'all 0.15s ease-in-out 0s'
      },
      ':focus': {
        outline: 'none',
        border: "1px solid " + tokens$3.textFieldActiveOutlineColor,
        boxShadow: "0px 0px 0px 2px " + tokens$3.textFieldActiveBorderColor
      },
      normal: {
        border: "1px solid " + tokens$3.textFieldDefaultOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      },
      success: {
        border: "1px solid " + tokens$3.textFieldSuccessOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      },
      error: {
        border: "1px solid " + tokens$3.textFieldErrorOutlineColor,
        transition: 'all 0.15s ease-in-out 0s'
      }
    }
  },
  buttons: {
    sm: /*#__PURE__*/_extends({
      padding: tokens$3.buttonsSmPaddingTopBottom + " " + tokens$3.buttonsSmPaddingLeftRight + " " + tokens$3.buttonsSmPaddingTopBottom + " " + tokens$3.buttonsSmPaddingLeftRight + " !important"
    }, text.caption.lg.semibold),
    md: /*#__PURE__*/_extends({
      padding: tokens$3.buttonsMdPaddingTopBottom + " " + tokens$3.buttonsMdPaddingLeftRight + " " + tokens$3.buttonsMdPaddingTopBottom + " " + tokens$3.buttonsMdPaddingLeftRight + " !important"
    }, text.body.sm.semibold),
    lg: /*#__PURE__*/_extends({
      padding: tokens$3.buttonsLgPaddingTopBottom + " " + tokens$3.buttonsLgPaddingLeftRight + " " + tokens$3.buttonsLgPaddingTopBottom + " " + tokens$3.buttonsLgPaddingLeftRight + " !important"
    }, text.body.sm.semibold),
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
      border: '0px',
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
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
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
    },
    soft: {
      alignItems: 'center',
      borderRadius: "" + tokens$3.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$3.buttonsSecondaryDefaultBackgroundColor,
      color: tokens$3.buttonsSecondaryDefaultColor,
      border: '0px',
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
        backgroundColor: tokens$3.buttonsSecondaryHoverBackgroundColor,
        color: tokens$3.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$3.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$3.buttonsSecondaryActiveBackgroundColor,
        color: tokens$3.buttonsSecondaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens$3.buttonsSecondaryDisabledBackgroundColor,
        color: tokens$3.buttonsSecondaryDisabledColor
      }
    },
    outline: {
      alignItems: 'center',
      borderRadius: "" + tokens$3.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: tokens$3.buttonsSecondaryDefaultBackgroundColor,
      border: "1px solid " + tokens$3.buttonsSecondaryDefaultColor,
      color: tokens$3.buttonsSecondaryDefaultColor,
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
        backgroundColor: tokens$3.buttonsSecondaryHoverBackgroundColor,
        border: "1px solid " + tokens$3.buttonsSecondaryHoverColor,
        color: tokens$3.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        boxShadow: "0px 0px 0px 2px " + tokens$3.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$3.buttonsSecondaryActiveBackgroundColor,
        border: "1px solid " + tokens$3.buttonsSecondaryActiveColor,
        color: tokens$3.buttonsSecondaryActiveColor,
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: tokens$3.buttonsSecondaryDisabledBackgroundColor + " !important",
        border: "1px solid " + tokens$3.buttonsSecondaryDisabledColor + " !important",
        color: tokens$3.buttonsSecondaryDisabledColor + " !important"
      }
    },
    transparent: {
      alignItems: 'center',
      borderRadius: "" + tokens$3.buttonsBorderRadius,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      color: tokens$3.buttonsSecondaryDefaultColor,
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
        backgroundColor: tokens$3.buttonsSecondaryDefaultBackgroundColor,
        color: tokens$3.buttonsSecondaryHoverColor,
        boxShadow: 'none !important',
        transition: 'all 0.15s ease-in-out 0s'
      },
      '&:focus': {
        backgroundColor: tokens$3.buttonsSecondaryDefaultBackgroundColor + " !important",
        color: tokens$3.buttonsSecondaryHoverColor + " !important",
        boxShadow: "0px 0px 0px 2px " + tokens$3.buttonsSecondaryFocusBorderColors + " !important"
      },
      '&:active': {
        backgroundColor: tokens$3.buttonsSecondaryHoverBackgroundColor + " !important",
        color: tokens$3.buttonsSecondaryActiveColor + " !important",
        boxShadow: 'none !important'
      },
      '&:disabled': {
        cursor: 'unset',
        appearance: 'none',
        backgroundColor: 'transparent !important',
        border: 'none !important',
        color: tokens$3.buttonsSecondaryDisabledColor + " !important"
      }
    }
  },
  badges: {
    primary: {
      bg: "" + tokens$3.badgePrimaryBackgroundColor,
      color: tokens$3.badgePrimaryColor
    },
    secondary: {
      bg: "" + tokens$3.badgeSecondaryBackgroundColor,
      color: tokens$3.badgeSecondaryColor
    },
    error: {
      bg: "" + tokens$3.badgeErrorBackgroundColor,
      color: tokens$3.badgeErrorColor
    },
    info: {
      bg: "" + tokens$3.badgeInfoBackgroundColor,
      color: tokens$3.badgeInfoColor
    },
    success: {
      bg: "" + tokens$3.badgeSuccessBackgroundColor,
      color: tokens$3.badgeSuccessColor
    },
    warning: {
      bg: "" + tokens$3.badgeWarningBackgroundColor,
      color: tokens$3.badgeWarningColor
    },
    small: /*#__PURE__*/_extends({
      width: 8,
      height: 8,
      borderRadius: 8 / 2
    }, text.body.sm.regular),
    smallWithBorder: /*#__PURE__*/_extends({
      border: '1px solid white',
      height: 10,
      borderRadius: 10 / 2
    }, text.body.sm.regular),
    largeWithBorder: /*#__PURE__*/_extends({
      border: '2px solid white'
    }, text.body.lg.regular),
    smallWithContent: /*#__PURE__*/_extends({
      display: 'inline-flex',
      alignItems: 'center',
      height: 21,
      borderRadius: 24,
      paddingX: '7px'
    }, text.body.sm.regular),
    largeWithContent: /*#__PURE__*/_extends({
      display: 'inline-flex',
      alignItems: 'center',
      height: 28,
      borderRadius: tokens$3.badgeBorderRadius,
      paddingX: '14px'
    }, text.body.lg.regular),
    large: /*#__PURE__*/_extends({
      width: 12,
      height: 12,
      borderRadius: 12 / 2
    }, text.body.lg.regular)
  },
  text: {
    "default": {
      fontFamily: 'Nunito Sans, sans-serif',
      color: tokens$3.tertiary800,
      // Body
      lg_regular: /*#__PURE__*/_extends({}, text.body.lg.regular),
      lg_regular_respon: /*#__PURE__*/_extends({}, text.body.lg.regular, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_semibold: /*#__PURE__*/_extends({}, text.body.lg.semibold),
      lg_semibold_respon: /*#__PURE__*/_extends({}, text.body.lg.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_bold: /*#__PURE__*/_extends({}, text.body.lg.bold),
      lg_bold_respon: /*#__PURE__*/_extends({}, text.body.lg.bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_italic: /*#__PURE__*/_extends({}, text.body.lg.italic),
      lg_italic_respon: /*#__PURE__*/_extends({}, text.body.lg.italic, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline: /*#__PURE__*/_extends({}, text.body.lg.underline),
      lg_underline_respon: /*#__PURE__*/_extends({}, text.body.lg.underline, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline_semibold: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold),
      lg_underline_semibold_respon: /*#__PURE__*/_extends({}, text.body.lg.underline_semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      lg_underline_bold: /*#__PURE__*/_extends({}, text.body.lg.underline_bold),
      lg_underline_bold_respon: /*#__PURE__*/_extends({}, text.body.lg.underline_bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      sm_regular: /*#__PURE__*/_extends({}, text.body.sm.regular),
      sm_regular_respon: /*#__PURE__*/_extends({}, text.body.sm.regular, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_semibold: /*#__PURE__*/_extends({}, text.body.sm.semibold),
      sm_semibold_respon: /*#__PURE__*/_extends({}, text.body.sm.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_bold: /*#__PURE__*/_extends({}, text.body.sm.bold),
      sm_bold_respon: /*#__PURE__*/_extends({}, text.body.sm.semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_italic: /*#__PURE__*/_extends({}, text.body.sm.italic),
      sm_italic_respon: /*#__PURE__*/_extends({}, text.body.sm.italic, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline: /*#__PURE__*/_extends({}, text.body.sm.underline),
      sm_underline_respon: /*#__PURE__*/_extends({}, text.body.sm.underline, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline_semibold: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold),
      sm_underline_semibold_respon: /*#__PURE__*/_extends({}, text.body.sm.underline_semibold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      sm_underline_bold: /*#__PURE__*/_extends({}, text.body.sm.underline_bold),
      sm_underline_bold_respon: /*#__PURE__*/_extends({}, text.body.sm.underline_bold, {
        '@media screen and (max-width: 400px)': {
          fontSize: '14px',
          lineHeight: '21px'
        }
      }),
      // Caption
      sizes: {
        lg_regular: /*#__PURE__*/_extends({}, text.caption.lg.regular),
        lg_regular_respon: /*#__PURE__*/_extends({}, text.caption.lg.regular, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_semibold: /*#__PURE__*/_extends({}, text.caption.lg.semibold),
        lg_semibold_respon: /*#__PURE__*/_extends({}, text.caption.lg.semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_bold: /*#__PURE__*/_extends({}, text.caption.lg.bold),
        lg_bold_respon: /*#__PURE__*/_extends({}, text.caption.lg.bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_italic: /*#__PURE__*/_extends({}, text.caption.lg.italic),
        lg_italic_respon: /*#__PURE__*/_extends({}, text.caption.lg.italic, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline: /*#__PURE__*/_extends({}, text.caption.lg.underline),
        lg_underline_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline_semibold: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold),
        lg_underline_semibold_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline_semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        lg_underline_bold: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold),
        lg_underline_bold_respon: /*#__PURE__*/_extends({}, text.caption.lg.underline_bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }),
        sm_regular: /*#__PURE__*/_extends({}, text.caption.sm.regular),
        sm_regular_respon: /*#__PURE__*/_extends({}, text.caption.sm.regular, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_semibold: /*#__PURE__*/_extends({}, text.caption.sm.semibold),
        sm_semibold_respon: /*#__PURE__*/_extends({}, text.caption.sm.semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_bold: /*#__PURE__*/_extends({}, text.caption.sm.bold),
        sm_bold_respon: /*#__PURE__*/_extends({}, text.caption.sm.bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_italic: /*#__PURE__*/_extends({}, text.caption.sm.italic),
        sm_italic_respon: /*#__PURE__*/_extends({}, text.caption.sm.italic, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline: /*#__PURE__*/_extends({}, text.caption.sm.underline),
        sm_underline_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline_semibold: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold),
        sm_underline_semibold_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline_semibold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        }),
        sm_underline_bold: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold),
        sm_underline_bold_respon: /*#__PURE__*/_extends({}, text.caption.sm.underline_bold, {
          '@media screen and (max-width: 400px)': {
            fontSize: '10px',
            lineHeight: '18px'
          }
        })
      }
    },
    // Heading
    heading: {
      h1: /*#__PURE__*/_extends({}, text.heading.h1),
      h1Respon: /*#__PURE__*/_extends({}, text.heading.h1, {
        '@media screen and (max-width: 400px)': {
          fontSize: '34px',
          lineHeight: '48px',
          fontWeight: '700'
        }
      }),
      h2: /*#__PURE__*/_extends({}, text.heading.h2),
      h2Respon: /*#__PURE__*/_extends({}, text.heading.h2, {
        '@media screen and (max-width: 400px)': {
          fontSize: '28px',
          lineHeight: '42px',
          fontWeight: '700'
        }
      }),
      h3: /*#__PURE__*/_extends({}, text.heading.h3),
      h3Respon: /*#__PURE__*/_extends({}, text.heading.h3, {
        '@media screen and (max-width: 400px)': {
          fontSize: '24px',
          lineHeight: '36px',
          fontWeight: '700'
        }
      }),
      h4: /*#__PURE__*/_extends({}, text.heading.h4),
      h4Respon: /*#__PURE__*/_extends({}, text.heading.h4, {
        '@media screen and (max-width: 400px)': {
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: '700'
        }
      }),
      h5: /*#__PURE__*/_extends({}, text.heading.h5),
      h5Respon: /*#__PURE__*/_extends({}, text.heading.h5, {
        '@media screen and (max-width: 400px)': {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '700'
        }
      }),
      h6: /*#__PURE__*/_extends({}, text.heading.h6),
      h6Respon: /*#__PURE__*/_extends({}, text.heading.h6, {
        '@media screen and (max-width: 400px)': {
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: '700'
        }
      })
    }
  },
  spinner: {
    primary: {
      color: tokens$3.primary500
    },
    secondary: {
      color: tokens$3.secondary500
    }
  },
  cards: {
    containerColors: {
      marginBottom: '20px'
    },
    wrappValueColors: /*#__PURE__*/_extends({}, text.caption.sm.semibold, {
      padding: '10px'
    }),
    // Colors Primary
    primary25: {
      backgroundColor: "" + tokens$3.primary25,
      color: "" + tokens$3.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary50: {
      backgroundColor: "" + tokens$3.primary50,
      color: "" + tokens$3.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary100: {
      backgroundColor: "" + tokens$3.primary100,
      color: "" + tokens$3.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary200: {
      backgroundColor: "" + tokens$3.primary200,
      color: "" + tokens$3.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary300: {
      backgroundColor: "" + tokens$3.primary300,
      color: "" + tokens$3.primary900,
      padding: '1rem',
      width: '100%'
    },
    primary400: {
      backgroundColor: "" + tokens$3.primary400,
      color: "" + tokens$3.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary500: {
      backgroundColor: "" + tokens$3.primary500,
      color: "" + tokens$3.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary600: {
      backgroundColor: "" + tokens$3.primary600,
      color: "" + tokens$3.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary700: {
      backgroundColor: "" + tokens$3.primary700,
      color: "" + tokens$3.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary800: {
      backgroundColor: "" + tokens$3.primary800,
      color: "" + tokens$3.primary25,
      padding: '1rem',
      width: '100%'
    },
    primary900: {
      backgroundColor: "" + tokens$3.primary900,
      color: "" + tokens$3.primary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Secondary
    secondary25: {
      backgroundColor: "" + tokens$3.secondary25,
      color: "" + tokens$3.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary50: {
      backgroundColor: "" + tokens$3.secondary50,
      color: "" + tokens$3.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary100: {
      backgroundColor: "" + tokens$3.secondary100,
      color: "" + tokens$3.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary200: {
      backgroundColor: "" + tokens$3.secondary200,
      color: "" + tokens$3.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary300: {
      backgroundColor: "" + tokens$3.secondary300,
      color: "" + tokens$3.secondary900,
      padding: '1rem',
      width: '100%'
    },
    secondary400: {
      backgroundColor: "" + tokens$3.secondary400,
      color: "" + tokens$3.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary500: {
      backgroundColor: "" + tokens$3.secondary500,
      color: "" + tokens$3.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary600: {
      backgroundColor: "" + tokens$3.secondary600,
      color: "" + tokens$3.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary700: {
      backgroundColor: "" + tokens$3.secondary700,
      color: "" + tokens$3.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary800: {
      backgroundColor: "" + tokens$3.secondary800,
      color: "" + tokens$3.secondary25,
      padding: '1rem',
      width: '100%'
    },
    secondary900: {
      backgroundColor: "" + tokens$3.secondary900,
      color: "" + tokens$3.secondary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Tertiary
    tertiary25: {
      backgroundColor: "" + tokens$3.tertiary25,
      color: "" + tokens$3.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary50: {
      backgroundColor: "" + tokens$3.tertiary50,
      color: "" + tokens$3.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary100: {
      backgroundColor: "" + tokens$3.tertiary100,
      color: "" + tokens$3.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary200: {
      backgroundColor: "" + tokens$3.tertiary200,
      color: "" + tokens$3.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary300: {
      backgroundColor: "" + tokens$3.tertiary300,
      color: "" + tokens$3.tertiary900,
      padding: '1rem',
      width: '100%'
    },
    tertiary400: {
      backgroundColor: "" + tokens$3.tertiary400,
      color: "" + tokens$3.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary500: {
      backgroundColor: "" + tokens$3.tertiary500,
      color: "" + tokens$3.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary600: {
      backgroundColor: "" + tokens$3.tertiary600,
      color: "" + tokens$3.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary700: {
      backgroundColor: "" + tokens$3.tertiary700,
      color: "" + tokens$3.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary800: {
      backgroundColor: "" + tokens$3.tertiary800,
      color: "" + tokens$3.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    tertiary900: {
      backgroundColor: "" + tokens$3.tertiary900,
      color: "" + tokens$3.tertiary25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Success
    success25: {
      backgroundColor: "" + tokens$3.success25,
      color: "" + tokens$3.success900,
      padding: '1rem',
      width: '100%'
    },
    success50: {
      backgroundColor: "" + tokens$3.success50,
      color: "" + tokens$3.success900,
      padding: '1rem',
      width: '100%'
    },
    success100: {
      backgroundColor: "" + tokens$3.success100,
      color: "" + tokens$3.success900,
      padding: '1rem',
      width: '100%'
    },
    success200: {
      backgroundColor: "" + tokens$3.success200,
      color: "" + tokens$3.success900,
      padding: '1rem',
      width: '100%'
    },
    success300: {
      backgroundColor: "" + tokens$3.success300,
      color: "" + tokens$3.success900,
      padding: '1rem',
      width: '100%'
    },
    success400: {
      backgroundColor: "" + tokens$3.success400,
      color: "" + tokens$3.success25,
      padding: '1rem',
      width: '100%'
    },
    success500: {
      backgroundColor: "" + tokens$3.success500,
      color: "" + tokens$3.success25,
      padding: '1rem',
      width: '100%'
    },
    success600: {
      backgroundColor: "" + tokens$3.success600,
      color: "" + tokens$3.success25,
      padding: '1rem',
      width: '100%'
    },
    success700: {
      backgroundColor: "" + tokens$3.success700,
      color: "" + tokens$3.success25,
      padding: '1rem',
      width: '100%'
    },
    success800: {
      backgroundColor: "" + tokens$3.success800,
      color: "" + tokens$3.success25,
      padding: '1rem',
      width: '100%'
    },
    success900: {
      backgroundColor: "" + tokens$3.success900,
      color: "" + tokens$3.success25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Warning
    warning25: {
      backgroundColor: "" + tokens$3.warning25,
      color: "" + tokens$3.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning50: {
      backgroundColor: "" + tokens$3.warning50,
      color: "" + tokens$3.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning100: {
      backgroundColor: "" + tokens$3.warning100,
      color: "" + tokens$3.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning200: {
      backgroundColor: "" + tokens$3.warning200,
      color: "" + tokens$3.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning300: {
      backgroundColor: "" + tokens$3.warning300,
      color: "" + tokens$3.warning900,
      padding: '1rem',
      width: '100%'
    },
    warning400: {
      backgroundColor: "" + tokens$3.warning400,
      color: "" + tokens$3.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning500: {
      backgroundColor: "" + tokens$3.warning500,
      color: "" + tokens$3.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning600: {
      backgroundColor: "" + tokens$3.warning600,
      color: "" + tokens$3.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning700: {
      backgroundColor: "" + tokens$3.warning700,
      color: "" + tokens$3.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning800: {
      backgroundColor: "" + tokens$3.warning800,
      color: "" + tokens$3.warning25,
      padding: '1rem',
      width: '100%'
    },
    warning900: {
      backgroundColor: "" + tokens$3.warning900,
      color: "" + tokens$3.warning25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Error
    error25: {
      backgroundColor: "" + tokens$3.error25,
      color: "" + tokens$3.error900,
      padding: '1rem',
      width: '100%'
    },
    error50: {
      backgroundColor: "" + tokens$3.error50,
      color: "" + tokens$3.error900,
      padding: '1rem',
      width: '100%'
    },
    error100: {
      backgroundColor: "" + tokens$3.error100,
      color: "" + tokens$3.error900,
      padding: '1rem',
      width: '100%'
    },
    error200: {
      backgroundColor: "" + tokens$3.error200,
      color: "" + tokens$3.error900,
      padding: '1rem',
      width: '100%'
    },
    error300: {
      backgroundColor: "" + tokens$3.error300,
      color: "" + tokens$3.error900,
      padding: '1rem',
      width: '100%'
    },
    error400: {
      backgroundColor: "" + tokens$3.error400,
      color: "" + tokens$3.error25,
      padding: '1rem',
      width: '100%'
    },
    error500: {
      backgroundColor: "" + tokens$3.error500,
      color: "" + tokens$3.error25,
      padding: '1rem',
      width: '100%'
    },
    error600: {
      backgroundColor: "" + tokens$3.error600,
      color: "" + tokens$3.error25,
      padding: '1rem',
      width: '100%'
    },
    error700: {
      backgroundColor: "" + tokens$3.error700,
      color: "" + tokens$3.error25,
      padding: '1rem',
      width: '100%'
    },
    error800: {
      backgroundColor: "" + tokens$3.error800,
      color: "" + tokens$3.error25,
      padding: '1rem',
      width: '100%'
    },
    error900: {
      backgroundColor: "" + tokens$3.error900,
      color: "" + tokens$3.error25,
      padding: '1rem',
      width: '100%'
    },
    // Colors Information
    info25: {
      backgroundColor: "" + tokens$3.information25,
      color: "" + tokens$3.information900,
      padding: '1rem',
      width: '100%'
    },
    info50: {
      backgroundColor: "" + tokens$3.information50,
      color: "" + tokens$3.information900,
      padding: '1rem',
      width: '100%'
    },
    info100: {
      backgroundColor: "" + tokens$3.information100,
      color: "" + tokens$3.information900,
      padding: '1rem',
      width: '100%'
    },
    info200: {
      backgroundColor: "" + tokens$3.information200,
      color: "" + tokens$3.information900,
      padding: '1rem',
      width: '100%'
    },
    info300: {
      backgroundColor: "" + tokens$3.information300,
      color: "" + tokens$3.information900,
      padding: '1rem',
      width: '100%'
    },
    info400: {
      backgroundColor: "" + tokens$3.information400,
      color: "" + tokens$3.information25,
      padding: '1rem',
      width: '100%'
    },
    info500: {
      backgroundColor: "" + tokens$3.information500,
      color: "" + tokens$3.information25,
      padding: '1rem',
      width: '100%'
    },
    info600: {
      backgroundColor: "" + tokens$3.information600,
      color: "" + tokens$3.information25,
      padding: '1rem',
      width: '100%'
    },
    info700: {
      backgroundColor: "" + tokens$3.information700,
      color: "" + tokens$3.information25,
      padding: '1rem',
      width: '100%'
    },
    info800: {
      backgroundColor: "" + tokens$3.information800,
      color: "" + tokens$3.information25,
      padding: '1rem',
      width: '100%'
    },
    info900: {
      backgroundColor: "" + tokens$3.information900,
      color: "" + tokens$3.information25,
      padding: '1rem',
      width: '100%'
    }
  }
});

exports.merge = deepmerge;
exports.agl = agl;
exports.agr = agr;
exports.aqf = aqf;
exports.color = color;
exports.spacer = spacer;
exports.text = text;
exports.tokens = tokens;
//# sourceMappingURL=agree.cjs.development.js.map
