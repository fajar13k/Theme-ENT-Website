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
 * Generated on Mon, 25 Jul 2022 06:22:33 GMT
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
  fontFamiliesPrimary: 'Nunito Sans',
  fontFamiliesSecondary: 'Nunito Sans',
  lineHeights0: '48px',
  lineHeights1: '42px',
  lineHeights2: '36px',
  lineHeights3: '32px',
  lineHeights4: '28px',
  lineHeights5: '12px',
  lineHeights6: '24px',
  lineHeights7: '20px',
  lineHeights8: '18px',
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
  fontSize9: '34px',
  letterSpacing0: '0px',
  letterSpacing1: '-0.08px',
  paragraphSpacing0: '0px',
  paragraphSpacing1: '18px',
  headingHeading1FontFamily: 'Nunito Sans',
  headingHeading1FontWeight: 'Bold',
  headingHeading1LineHeight: '48px',
  headingHeading1FontSize: '34px',
  headingHeading1LetterSpacing: '0px',
  headingHeading1ParagraphSpacing: '0px',
  headingHeading1TextCase: 'none',
  headingHeading1TextDecoration: 'none',
  headingHeading2FontFamily: 'Nunito Sans',
  headingHeading2FontWeight: 'Bold',
  headingHeading2LineHeight: '42px',
  headingHeading2FontSize: '28px',
  headingHeading2LetterSpacing: '0px',
  headingHeading2ParagraphSpacing: '0px',
  headingHeading2TextCase: 'none',
  headingHeading2TextDecoration: 'none',
  headingHeading3FontFamily: 'Nunito Sans',
  headingHeading3FontWeight: 'Bold',
  headingHeading3LineHeight: '36px',
  headingHeading3FontSize: '24px',
  headingHeading3LetterSpacing: '0px',
  headingHeading3ParagraphSpacing: '0px',
  headingHeading3TextCase: 'none',
  headingHeading3TextDecoration: 'none',
  headingHeading4FontFamily: 'Nunito Sans',
  headingHeading4FontWeight: 'Bold',
  headingHeading4LineHeight: '32px',
  headingHeading4FontSize: '22px',
  headingHeading4LetterSpacing: '0px',
  headingHeading4ParagraphSpacing: '0px',
  headingHeading4TextCase: 'none',
  headingHeading4TextDecoration: 'none',
  headingHeading5FontFamily: 'Nunito Sans',
  headingHeading5FontWeight: 'Bold',
  headingHeading5LineHeight: '28px',
  headingHeading5FontSize: '20px',
  headingHeading5LetterSpacing: '0px',
  headingHeading5ParagraphSpacing: '0px',
  headingHeading5TextCase: 'none',
  headingHeading5TextDecoration: 'none',
  headingHeading6FontFamily: 'Nunito Sans',
  headingHeading6FontWeight: 'Bold',
  headingHeading6LineHeight: '12px',
  headingHeading6FontSize: '18px',
  headingHeading6LetterSpacing: '0px',
  headingHeading6ParagraphSpacing: '0px',
  headingHeading6TextCase: 'uppercase',
  headingHeading6TextDecoration: 'none',
  bodyLargeRegularFontFamily: 'Nunito Sans',
  bodyLargeRegularFontWeight: 'Regular',
  bodyLargeRegularLineHeight: '24px',
  bodyLargeRegularFontSize: '16px',
  bodyLargeRegularLetterSpacing: '0px',
  bodyLargeRegularParagraphSpacing: '0px',
  bodyLargeRegularTextCase: 'none',
  bodyLargeRegularTextDecoration: 'none',
  bodyLargeSemiboldFontFamily: 'Nunito Sans',
  bodyLargeSemiboldFontWeight: 'SemiBold',
  bodyLargeSemiboldLineHeight: '24px',
  bodyLargeSemiboldFontSize: '16px',
  bodyLargeSemiboldLetterSpacing: '0px',
  bodyLargeSemiboldParagraphSpacing: '0px',
  bodyLargeSemiboldTextCase: 'none',
  bodyLargeSemiboldTextDecoration: 'none',
  bodyLargeBoldFontFamily: 'Nunito Sans',
  bodyLargeBoldFontWeight: 'Bold',
  bodyLargeBoldLineHeight: '24px',
  bodyLargeBoldFontSize: '16px',
  bodyLargeBoldLetterSpacing: '0px',
  bodyLargeBoldParagraphSpacing: '0px',
  bodyLargeBoldTextCase: 'none',
  bodyLargeBoldTextDecoration: 'none',
  bodyLargeItalicFontFamily: 'Nunito Sans',
  bodyLargeItalicFontWeight: 'Italic',
  bodyLargeItalicLineHeight: '24px',
  bodyLargeItalicFontSize: '16px',
  bodyLargeItalicLetterSpacing: '0px',
  bodyLargeItalicParagraphSpacing: '0px',
  bodyLargeItalicTextCase: 'none',
  bodyLargeItalicTextDecoration: 'none',
  bodyLargeUnderlineFontFamily: 'Nunito Sans',
  bodyLargeUnderlineFontWeight: 'Regular',
  bodyLargeUnderlineLineHeight: '24px',
  bodyLargeUnderlineFontSize: '16px',
  bodyLargeUnderlineLetterSpacing: '0px',
  bodyLargeUnderlineParagraphSpacing: '0px',
  bodyLargeUnderlineTextCase: 'none',
  bodyLargeUnderlineTextDecoration: 'underline',
  bodyLargeUnderlineSemiboldFontFamily: 'Nunito Sans',
  bodyLargeUnderlineSemiboldFontWeight: 'SemiBold',
  bodyLargeUnderlineSemiboldLineHeight: '24px',
  bodyLargeUnderlineSemiboldFontSize: '16px',
  bodyLargeUnderlineSemiboldLetterSpacing: '0px',
  bodyLargeUnderlineSemiboldParagraphSpacing: '0px',
  bodyLargeUnderlineSemiboldTextCase: 'none',
  bodyLargeUnderlineSemiboldTextDecoration: 'underline',
  bodyLargeUnderlineBoldFontFamily: 'Nunito Sans',
  bodyLargeUnderlineBoldFontWeight: 'Bold',
  bodyLargeUnderlineBoldLineHeight: '24px',
  bodyLargeUnderlineBoldFontSize: '16px',
  bodyLargeUnderlineBoldLetterSpacing: '0px',
  bodyLargeUnderlineBoldParagraphSpacing: '0px',
  bodyLargeUnderlineBoldTextCase: 'none',
  bodyLargeUnderlineBoldTextDecoration: 'underline',
  bodySmallRegularFontFamily: 'Nunito Sans',
  bodySmallRegularFontWeight: 'Regular',
  bodySmallRegularLineHeight: '20px',
  bodySmallRegularFontSize: '14px',
  bodySmallRegularLetterSpacing: '0px',
  bodySmallRegularParagraphSpacing: '0px',
  bodySmallRegularTextCase: 'none',
  bodySmallRegularTextDecoration: 'none',
  bodySmallSemiboldFontFamily: 'Nunito Sans',
  bodySmallSemiboldFontWeight: 'SemiBold',
  bodySmallSemiboldLineHeight: '20px',
  bodySmallSemiboldFontSize: '14px',
  bodySmallSemiboldLetterSpacing: '0px',
  bodySmallSemiboldParagraphSpacing: '0px',
  bodySmallSemiboldTextCase: 'none',
  bodySmallSemiboldTextDecoration: 'none',
  bodySmallBoldFontFamily: 'Nunito Sans',
  bodySmallBoldFontWeight: 'Bold',
  bodySmallBoldLineHeight: '20px',
  bodySmallBoldFontSize: '14px',
  bodySmallBoldLetterSpacing: '0px',
  bodySmallBoldParagraphSpacing: '0px',
  bodySmallBoldTextCase: 'none',
  bodySmallBoldTextDecoration: 'none',
  bodySmallItalicFontFamily: 'Nunito Sans',
  bodySmallItalicFontWeight: 'Italic',
  bodySmallItalicLineHeight: '20px',
  bodySmallItalicFontSize: '14px',
  bodySmallItalicLetterSpacing: '0px',
  bodySmallItalicParagraphSpacing: '0px',
  bodySmallItalicTextCase: 'none',
  bodySmallItalicTextDecoration: 'none',
  bodySmallUnderlineFontFamily: 'Nunito Sans',
  bodySmallUnderlineFontWeight: 'Regular',
  bodySmallUnderlineLineHeight: '20px',
  bodySmallUnderlineFontSize: '14px',
  bodySmallUnderlineLetterSpacing: '0px',
  bodySmallUnderlineParagraphSpacing: '18px',
  bodySmallUnderlineTextCase: 'none',
  bodySmallUnderlineTextDecoration: 'underline',
  bodySmallUnderlineSemiboldFontFamily: 'Nunito Sans',
  bodySmallUnderlineSemiboldFontWeight: 'SemiBold',
  bodySmallUnderlineSemiboldLineHeight: '20px',
  bodySmallUnderlineSemiboldFontSize: '14px',
  bodySmallUnderlineSemiboldLetterSpacing: '0px',
  bodySmallUnderlineSemiboldParagraphSpacing: '0px',
  bodySmallUnderlineSemiboldTextCase: 'none',
  bodySmallUnderlineSemiboldTextDecoration: 'underline',
  bodySmallUnderlineBoldFontFamily: 'Nunito Sans',
  bodySmallUnderlineBoldFontWeight: 'Bold',
  bodySmallUnderlineBoldLineHeight: '20px',
  bodySmallUnderlineBoldFontSize: '14px',
  bodySmallUnderlineBoldLetterSpacing: '-0.08px',
  bodySmallUnderlineBoldParagraphSpacing: '0px',
  bodySmallUnderlineBoldTextCase: 'none',
  bodySmallUnderlineBoldTextDecoration: 'underline',
  captionLargeRegularFontFamily: 'Nunito Sans',
  captionLargeRegularFontWeight: 'Regular',
  captionLargeRegularLineHeight: '18px',
  captionLargeRegularFontSize: '12px',
  captionLargeRegularLetterSpacing: '0px',
  captionLargeRegularParagraphSpacing: '0px',
  captionLargeRegularTextCase: 'none',
  captionLargeRegularTextDecoration: 'none',
  captionLargeSemiboldFontFamily: 'Nunito Sans',
  captionLargeSemiboldFontWeight: 'SemiBold',
  captionLargeSemiboldLineHeight: '18px',
  captionLargeSemiboldFontSize: '12px',
  captionLargeSemiboldLetterSpacing: '0px',
  captionLargeSemiboldParagraphSpacing: '0px',
  captionLargeSemiboldTextCase: 'none',
  captionLargeSemiboldTextDecoration: 'none',
  captionLargeBoldFontFamily: 'Nunito Sans',
  captionLargeBoldFontWeight: 'Bold',
  captionLargeBoldLineHeight: '18px',
  captionLargeBoldFontSize: '12px',
  captionLargeBoldLetterSpacing: '0px',
  captionLargeBoldParagraphSpacing: '0px',
  captionLargeBoldTextCase: 'none',
  captionLargeBoldTextDecoration: 'none',
  captionLargeItalicFontFamily: 'Nunito Sans',
  captionLargeItalicFontWeight: 'Italic',
  captionLargeItalicLineHeight: '18px',
  captionLargeItalicFontSize: '12px',
  captionLargeItalicLetterSpacing: '0px',
  captionLargeItalicParagraphSpacing: '0px',
  captionLargeItalicTextCase: 'none',
  captionLargeItalicTextDecoration: 'none',
  captionLargeUnderlineFontFamily: 'Nunito Sans',
  captionLargeUnderlineFontWeight: 'Regular',
  captionLargeUnderlineLineHeight: '18px',
  captionLargeUnderlineFontSize: '12px',
  captionLargeUnderlineLetterSpacing: '0px',
  captionLargeUnderlineParagraphSpacing: '0px',
  captionLargeUnderlineTextCase: 'none',
  captionLargeUnderlineTextDecoration: 'underline',
  captionLargeUnderlineSemiboldFontFamily: 'Nunito Sans',
  captionLargeUnderlineSemiboldFontWeight: 'SemiBold',
  captionLargeUnderlineSemiboldLineHeight: '18px',
  captionLargeUnderlineSemiboldFontSize: '12px',
  captionLargeUnderlineSemiboldLetterSpacing: '0px',
  captionLargeUnderlineSemiboldParagraphSpacing: '0px',
  captionLargeUnderlineSemiboldTextCase: 'none',
  captionLargeUnderlineSemiboldTextDecoration: 'underline',
  captionLargeUnderlineBoldFontFamily: 'Nunito Sans',
  captionLargeUnderlineBoldFontWeight: 'Bold',
  captionLargeUnderlineBoldLineHeight: '18px',
  captionLargeUnderlineBoldFontSize: '12px',
  captionLargeUnderlineBoldLetterSpacing: '0px',
  captionLargeUnderlineBoldParagraphSpacing: '0px',
  captionLargeUnderlineBoldTextCase: 'none',
  captionLargeUnderlineBoldTextDecoration: 'underline',
  captionSmallRegularFontFamily: 'Nunito Sans',
  captionSmallRegularFontWeight: 'Regular',
  captionSmallRegularLineHeight: '18px',
  captionSmallRegularFontSize: '10px',
  captionSmallRegularLetterSpacing: '0px',
  captionSmallRegularParagraphSpacing: '0px',
  captionSmallRegularTextCase: 'none',
  captionSmallRegularTextDecoration: 'none',
  captionSmallSemiboldFontFamily: 'Nunito Sans',
  captionSmallSemiboldFontWeight: 'SemiBold',
  captionSmallSemiboldLineHeight: '18px',
  captionSmallSemiboldFontSize: '10px',
  captionSmallSemiboldLetterSpacing: '0px',
  captionSmallSemiboldParagraphSpacing: '0px',
  captionSmallSemiboldTextCase: 'none',
  captionSmallSemiboldTextDecoration: 'none',
  captionSmallBoldFontFamily: 'Nunito Sans',
  captionSmallBoldFontWeight: 'Bold',
  captionSmallBoldLineHeight: '18px',
  captionSmallBoldFontSize: '10px',
  captionSmallBoldLetterSpacing: '0px',
  captionSmallBoldParagraphSpacing: '0px',
  captionSmallBoldTextCase: 'none',
  captionSmallBoldTextDecoration: 'none',
  captionSmallItalicFontFamily: 'Nunito Sans',
  captionSmallItalicFontWeight: 'Italic',
  captionSmallItalicLineHeight: '18px',
  captionSmallItalicFontSize: '10px',
  captionSmallItalicLetterSpacing: '0px',
  captionSmallItalicParagraphSpacing: '0px',
  captionSmallItalicTextCase: 'none',
  captionSmallItalicTextDecoration: 'none',
  captionSmallUnderlineFontFamily: 'Nunito Sans',
  captionSmallUnderlineFontWeight: 'Regular',
  captionSmallUnderlineLineHeight: '18px',
  captionSmallUnderlineFontSize: '10px',
  captionSmallUnderlineLetterSpacing: '0px',
  captionSmallUnderlineParagraphSpacing: '18px',
  captionSmallUnderlineTextCase: 'none',
  captionSmallUnderlineTextDecoration: 'underline',
  captionSmallUnderlineSemiboldFontFamily: 'Nunito Sans',
  captionSmallUnderlineSemiboldFontWeight: 'SemiBold',
  captionSmallUnderlineSemiboldLineHeight: '18px',
  captionSmallUnderlineSemiboldFontSize: '10px',
  captionSmallUnderlineSemiboldLetterSpacing: '0px',
  captionSmallUnderlineSemiboldParagraphSpacing: '0px',
  captionSmallUnderlineSemiboldTextCase: 'none',
  captionSmallUnderlineSemiboldTextDecoration: 'underline',
  captionSmallUnderlineBoldFontFamily: 'Nunito Sans',
  captionSmallUnderlineBoldFontWeight: 'Bold',
  captionSmallUnderlineBoldLineHeight: '18px',
  captionSmallUnderlineBoldFontSize: '10px',
  captionSmallUnderlineBoldLetterSpacing: '-0.08px',
  captionSmallUnderlineBoldParagraphSpacing: '0px',
  captionSmallUnderlineBoldTextCase: 'none',
  captionSmallUnderlineBoldTextDecoration: 'underline',
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
  lgt25: '#fdf9f8',
  lgt50: '#fcf3f1',
  lgt100: '#fae7e4',
  lgt200: '#f6cdc5',
  lgt300: '#f1afa1',
  lgt400: '#ec8b72',
  lgt500: '#e8590c',
  lgt600: '#cf4f0a',
  lgt700: '#b34409',
  lgt800: '#923807',
  lgt900: '#672705',
  lgc25: '#f8faf8',
  lgc50: '#f1f5f2',
  lgc100: '#e4ece5',
  lgc200: '#c5d7c8',
  lgc300: '#a1c0a5',
  lgc400: '#72a67a',
  lgc500: '#008832',
  lgc600: '#00792c',
  lgc700: '#006926',
  lgc800: '#00561f',
  lgc900: '#003c16',
  lgd25: '#f8fafc',
  lgd50: '#f1f5f9',
  lgd100: '#e4eaf3',
  lgd200: '#c5d4e6',
  lgd300: '#a1bbd9',
  lgd400: '#729ecb',
  lgd500: '#007bbc',
  lgd600: '#006ea8',
  lgd700: '#005f91',
  lgd800: '#004d76',
  lgd900: '#003754',
  secondary25: '#f9f8fb',
  secondary50: '#f3f2f7',
  secondary100: '#e7e4f0',
  secondary200: '#ccc6e0',
  secondary300: '#aea3d0',
  secondary400: '#8975be',
  secondary500: '#5620aa',
  secondary600: '#4c1c98',
  secondary700: '#421883',
  secondary800: '#36146b',
  secondary900: '#260e4c',
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
  error25: '#fbf8f8',
  error50: '#f8f1f1',
  error100: '#f1e4e4',
  error200: '#e3c5c5',
  error300: '#d5a1a1',
  error400: '#c57272',
  error500: '#b4000f',
  error600: '#a0000d',
  error700: '#8b000b',
  error800: '#710009',
  error900: '#500006',
  warning25: '#fefaf8',
  warning50: '#fef6f2',
  warning100: '#fdeee4',
  warning200: '#fbdcc5',
  warning300: '#f9c9a2',
  warning400: '#f7b473',
  warning500: '#f59c15',
  warning600: '#db8b12',
  warning700: '#bd7810',
  warning800: '#9a620d',
  warning900: '#6d4509',
  success25: '#f8faf8',
  success50: '#f1f5f2',
  success100: '#e4ebe4',
  success200: '#c5d6c6',
  success300: '#a1bfa2',
  success400: '#72a474',
  success500: '#00851a',
  success600: '#007617',
  success700: '#006714',
  success800: '#005410',
  success900: '#003b0b',
  information25: '#f8f9fc',
  information50: '#f1f4f9',
  information100: '#e4eaf3',
  information200: '#c5d3e6',
  information300: '#a1b9d9',
  information400: '#729bcb',
  information500: '#0077bc',
  information600: '#006aa8',
  information700: '#005c91',
  information800: '#004b76',
  information900: '#003554'
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

/**
 * Do not edit directly
 * Generated on Mon, 25 Jul 2022 06:22:33 GMT
 */
var tokens$1 = {
  primary25: '#fdf9f8',
  primary50: '#fcf3f1',
  primary100: '#fae7e4',
  primary200: '#f6cdc5',
  primary300: '#f1afa1',
  primary400: '#ec8b72',
  primary500: '#e8590c',
  primary600: '#cf4f0a',
  primary700: '#b34409',
  primary800: '#923807',
  primary900: '#672705',
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgFontSize: '18px',
  buttonsLgTypographyFontFamily: 'Nunito Sans',
  buttonsLgTypographyFontWeight: 'Bold',
  buttonsLgTypographyLineHeight: '24px',
  buttonsLgTypographyFontSize: '16px',
  buttonsLgTypographyLetterSpacing: '0px',
  buttonsLgTypographyParagraphSpacing: '0px',
  buttonsLgTypographyTextCase: 'none',
  buttonsLgTypographyTextDecoration: 'none',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
  buttonsSmFontSize: '14px',
  buttonsSmTypographyFontFamily: 'Nunito Sans',
  buttonsSmTypographyFontWeight: 'Bold',
  buttonsSmTypographyLineHeight: '18px',
  buttonsSmTypographyFontSize: '12px',
  buttonsSmTypographyLetterSpacing: '0px',
  buttonsSmTypographyParagraphSpacing: '0px',
  buttonsSmTypographyTextCase: 'none',
  buttonsSmTypographyTextDecoration: 'none',
  buttonsSmIconSize: '12px',
  buttonsPrimaryDefaultBackgroundColor: '#e8590c',
  buttonsPrimaryDefaultColor: '#ffffff',
  buttonsPrimaryHoverBackgroundColor: '#cf4f0a',
  buttonsPrimaryHoverColor: '#ffffff',
  buttonsPrimaryActiveBackgroundColor: '#b34409',
  buttonsPrimaryActiveColor: '#ffffff',
  buttonsPrimaryFocusBackgroundColors: '#e8590c',
  buttonsPrimaryFocusColor: '#ffffff',
  buttonsPrimaryFocusBorderColors: '#f1afa1',
  buttonsPrimaryDisabledBackgroundColor: '#b1b1b1',
  buttonsPrimaryDisabledColor: '#616161',
  buttonsPrimaryBorderWidth: '0px',
  buttonsSecondaryDefaultBackgroundColor: '#fcf3f1',
  buttonsSecondaryDefaultColor: '#e8590c',
  buttonsSecondaryHoverBackgroundColor: '#fae7e4',
  buttonsSecondaryHoverColor: '#cf4f0a',
  buttonsSecondaryActiveBackgroundColor: '#f6cdc5',
  buttonsSecondaryActiveColor: '#cf4f0a',
  buttonsSecondaryFocusBackgroundColor: '#fcf3f1',
  buttonsSecondaryFocusColor: '#e8590c',
  buttonsSecondaryFocusBorderColors: '#f1afa1',
  buttonsSecondaryDisabledBackgroundColor: '#f3f3f3',
  buttonsSecondaryDisabledColor: '#cecece',
  buttonsSecondaryBorderWidth: '0px',
  buttonsBorderRadius: '8px',
  buttonsMdPaddingLeftRight: '12px',
  buttonsMdPaddingTopBottom: '8px',
  buttonsMdFontSize: '16px',
  buttonsMdTypographyFontFamily: 'Nunito Sans',
  buttonsMdTypographyFontWeight: 'Bold',
  buttonsMdTypographyLineHeight: '20px',
  buttonsMdTypographyFontSize: '14px',
  buttonsMdTypographyLetterSpacing: '0px',
  buttonsMdTypographyParagraphSpacing: '0px',
  buttonsMdTypographyTextCase: 'none',
  buttonsMdTypographyTextDecoration: 'none',
  buttonsMdIconSize: '16px',
  checkboxDefaultBackgroundColor: '#ffffff',
  checkboxDefaultBorder: '#cecece',
  checkboxDisabledBackgroundColor: '#e8e8e8',
  checkboxDisabledBorder: '#b1b1b1',
  checkboxActiveDisableBackgroundColor: '#f1afa1',
  checkboxActiveDisableColor: '#ffffff',
  checkboxActiveDisableBorder: '#e8590c',
  checkboxActiveBackgroundColor: '#e8590c',
  checkboxActiveColor: '#ffffff',
  checkboxActiveBorder: '#cf4f0a',
  checkboxBorderRadius: '4px',
  checkboxBorderWidth: '1px',
  checkboxTextEnable: '#3d3d3d',
  checkboxTextDisable: '#8f8f8f',
  radioBorderWidth: '1px',
  radioDefaultBackgroundColor: '#ffffff',
  radioDefaultBorder: '#cecece',
  radioDisableBackgroundColor: '#e8e8e8',
  radioDisableBorder: '#b1b1b1',
  radioActiveBackgroundColor: '#ffffff',
  radioActiveBorder: '#e8590c',
  radioActiveDisableBackgroundColor: '#ffffff',
  radioActiveDisableBorder: '#f1afa1',
  radioTextEnable: '#3d3d3d',
  radioTextDisable: '#8f8f8f',
  anchorDefaultColor: '#e8590c',
  anchorHoverColor: '#cf4f0a',
  anchorActiveColor: '#b34409',
  anchorFocusColor: '#e8590c',
  anchorFocusBorderColor: '#f1afa1',
  anchorDisableColor: '#b1b1b1',
  anchorLgFontSize: '18px',
  anchorLgIconSize: '20px',
  anchorMdFontSize: '16px',
  anchorMdIconSize: '16px',
  anchorSmFontSize: '14px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#e8590c',
  switchActiveDisableBackgroundColor: '#f6cdc5',
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
var lgt = /*#__PURE__*/makeTheme({
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
      sm: {
        color: tokens$1.anchorDefaultColor + " !important",
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center'
      },
      md: {
        color: tokens$1.anchorDefaultColor,
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center'
      },
      lg: {
        color: tokens$1.anchorDefaultColor,
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center'
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
          border: "2px solid " + color.primary50,
          '&:after': {
            color: color.primary20,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2714"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: color.primary60
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
          border: "2px solid " + color.primary50,
          '&:after': {
            color: color.primary20,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2012"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: color.primary60
          }
        }
      }
    }
  },
  buttons: {
    sm: {
      padding: tokens$1.buttonsSmPaddingTopBottom + " " + tokens$1.buttonsSmPaddingLeftRight + " " + tokens$1.buttonsSmPaddingTopBottom + " " + tokens$1.buttonsSmPaddingLeftRight + " !important",
      fontSize: text.caption.lg.reguler.fontSize + " !important",
      lineHeight: text.caption.lg.reguler.lineHeight + " !important",
      fontWeight: text.caption.lg.reguler.fontWeight + " !important"
    },
    md: {
      padding: tokens$1.buttonsMdPaddingTopBottom + " " + tokens$1.buttonsMdPaddingLeftRight + " " + tokens$1.buttonsMdPaddingTopBottom + " " + tokens$1.buttonsMdPaddingLeftRight + " !important",
      fontSize: text.body.sm.reguler.fontSize + " !important",
      lineHeight: text.body.sm.reguler.lineHeight + " !important",
      fontWeight: text.body.sm.reguler.fontWeight + " !important"
    },
    lg: {
      padding: tokens$1.buttonsLgPaddingTopBottom + " " + tokens$1.buttonsLgPaddingLeftRight + " " + tokens$1.buttonsLgPaddingTopBottom + " " + tokens$1.buttonsLgPaddingLeftRight + " !important",
      fontSize: text.body.sm.reguler.fontSize + " !important",
      lineHeight: text.body.sm.reguler.lineHeight + " !important",
      fontWeight: text.body.sm.reguler.fontWeight + " !important"
    },
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
        boxShadow: "0px 0px 0px 2px " + tokens.lgt500 + " !important"
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
  }
});

/**
 * Do not edit directly
 * Generated on Mon, 25 Jul 2022 06:22:33 GMT
 */
var tokens$2 = {
  primary25: '#f8fafc',
  primary50: '#f1f5f9',
  primary100: '#e4eaf3',
  primary200: '#c5d4e6',
  primary300: '#a1bbd9',
  primary400: '#729ecb',
  primary500: '#007bbc',
  primary600: '#006ea8',
  primary700: '#005f91',
  primary800: '#004d76',
  primary900: '#003754',
  buttonsLgPaddingLeftRight: '16px',
  buttonsLgPaddingTopBottom: '12px',
  buttonsLgFontSize: '18px',
  buttonsLgTypographyFontFamily: 'Nunito Sans',
  buttonsLgTypographyFontWeight: 'Bold',
  buttonsLgTypographyLineHeight: '24px',
  buttonsLgTypographyFontSize: '16px',
  buttonsLgTypographyLetterSpacing: '0px',
  buttonsLgTypographyParagraphSpacing: '0px',
  buttonsLgTypographyTextCase: 'none',
  buttonsLgTypographyTextDecoration: 'none',
  buttonsLgIconSize: '20px',
  buttonsSmPaddingLeftRight: '12px',
  buttonsSmPaddingTopBottom: '8px',
  buttonsSmFontSize: '14px',
  buttonsSmTypographyFontFamily: 'Nunito Sans',
  buttonsSmTypographyFontWeight: 'Bold',
  buttonsSmTypographyLineHeight: '18px',
  buttonsSmTypographyFontSize: '12px',
  buttonsSmTypographyLetterSpacing: '0px',
  buttonsSmTypographyParagraphSpacing: '0px',
  buttonsSmTypographyTextCase: 'none',
  buttonsSmTypographyTextDecoration: 'none',
  buttonsSmIconSize: '12px',
  buttonsPrimaryDefaultBackgroundColor: '#007bbc',
  buttonsPrimaryDefaultColor: '#ffffff',
  buttonsPrimaryHoverBackgroundColor: '#006ea8',
  buttonsPrimaryHoverColor: '#ffffff',
  buttonsPrimaryActiveBackgroundColor: '#005f91',
  buttonsPrimaryActiveColor: '#ffffff',
  buttonsPrimaryFocusBackgroundColors: '#007bbc',
  buttonsPrimaryFocusColor: '#ffffff',
  buttonsPrimaryFocusBorderColors: '#a1bbd9',
  buttonsPrimaryDisabledBackgroundColor: '#b1b1b1',
  buttonsPrimaryDisabledColor: '#616161',
  buttonsPrimaryBorderWidth: '0px',
  buttonsSecondaryDefaultBackgroundColor: '#f1f5f9',
  buttonsSecondaryDefaultColor: '#007bbc',
  buttonsSecondaryHoverBackgroundColor: '#e4eaf3',
  buttonsSecondaryHoverColor: '#006ea8',
  buttonsSecondaryActiveBackgroundColor: '#c5d4e6',
  buttonsSecondaryActiveColor: '#006ea8',
  buttonsSecondaryFocusBackgroundColor: '#f1f5f9',
  buttonsSecondaryFocusColor: '#007bbc',
  buttonsSecondaryFocusBorderColors: '#007bbc',
  buttonsSecondaryDisabledBackgroundColor: '#f3f3f3',
  buttonsSecondaryDisabledColor: '#cecece',
  buttonsSecondaryBorderWidth: '0px',
  buttonsBorderRadius: '500px',
  buttonsMdPaddingLeftRight: '12px',
  buttonsMdPaddingTopBottom: '8px',
  buttonsMdFontSize: '16px',
  buttonsMdTypographyFontFamily: 'Nunito Sans',
  buttonsMdTypographyFontWeight: 'Bold',
  buttonsMdTypographyLineHeight: '20px',
  buttonsMdTypographyFontSize: '14px',
  buttonsMdTypographyLetterSpacing: '0px',
  buttonsMdTypographyParagraphSpacing: '0px',
  buttonsMdTypographyTextCase: 'none',
  buttonsMdTypographyTextDecoration: 'none',
  buttonsMdIconSize: '16px',
  checkboxDefaultBackgroundColor: '#ffffff',
  checkboxDefaultBorder: '#cecece',
  checkboxDisabledBackgroundColor: '#e8e8e8',
  checkboxDisabledBorder: '#b1b1b1',
  checkboxActiveDisableBackgroundColor: '#a1bbd9',
  checkboxActiveDisableColor: '#ffffff',
  checkboxActiveDisableBorder: '#007bbc',
  checkboxActiveBackgroundColor: '#007bbc',
  checkboxActiveColor: '#ffffff',
  checkboxActiveBorder: '#006ea8',
  checkboxBorderRadius: '4px',
  checkboxBorderWidth: '1px',
  checkboxTextEnable: '#36146b',
  checkboxTextDisable: '#8f8f8f',
  radioBorderWidth: '1px',
  radioDefaultBackgroundColor: '#ffffff',
  radioDefaultBorder: '#cecece',
  radioDisableBackgroundColor: '#e8e8e8',
  radioDisableBorder: '#b1b1b1',
  radioActiveBackgroundColor: '#ffffff',
  radioActiveBorder: '#007bbc',
  radioActiveDisableBackgroundColor: '#ffffff',
  radioActiveDisableBorder: '#a1bbd9',
  radioTextEnable: '#36146b',
  radioTextDisable: '#8f8f8f',
  anchorDefaultColor: '#007bbc',
  anchorHoverColor: '#006ea8',
  anchorActiveColor: '#005f91',
  anchorFocusColor: '#007bbc',
  anchorDisableColor: '#b1b1b1',
  anchorLgFontSize: '18px',
  anchorLgIconSize: '20px',
  anchorMdFontSize: '16px',
  anchorMdIconSize: '16px',
  anchorSmFontSize: '14px',
  anchorSmIconSize: '12px',
  switchActiveBackgroundColor: '#007bbc',
  switchActiveDisableBackgroundColor: '#c5d4e6',
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
var lgd = /*#__PURE__*/makeTheme({
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
      sm: {
        color: tokens$2.anchorDefaultColor + " !important",
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center'
      },
      md: {
        color: tokens$2.anchorDefaultColor,
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center'
      },
      lg: {
        color: tokens$2.anchorDefaultColor,
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center'
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
          border: "2px solid " + color.primary50,
          '&:after': {
            color: color.primary20,
            content: '"\\2714"'
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2714"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: color.primary60
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
          border: "2px solid " + color.primary50,
          '&:after': {
            color: color.primary20,
            content: '"\\2012"'
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2012"',
            color: color.grayscale10
          },
          '&:hover': {
            backgroundColor: color.primary60
          }
        }
      }
    }
  },
  buttons: {
    sm: {
      padding: tokens$2.buttonsSmPaddingTopBottom + " " + tokens$2.buttonsSmPaddingLeftRight + " " + tokens$2.buttonsSmPaddingTopBottom + " " + tokens$2.buttonsSmPaddingLeftRight + " !important",
      fontSize: text.caption.lg.reguler.fontSize + " !important",
      lineHeight: text.caption.lg.reguler.lineHeight + " !important",
      fontWeight: text.caption.lg.reguler.fontWeight + " !important"
    },
    md: {
      padding: tokens$2.buttonsMdPaddingTopBottom + " " + tokens$2.buttonsMdPaddingLeftRight + " " + tokens$2.buttonsMdPaddingTopBottom + " " + tokens$2.buttonsMdPaddingLeftRight + " !important",
      fontSize: text.body.sm.reguler.fontSize + " !important",
      lineHeight: text.body.sm.reguler.lineHeight + " !important",
      fontWeight: text.body.sm.reguler.fontWeight + " !important"
    },
    lg: {
      padding: tokens$2.buttonsLgPaddingTopBottom + " " + tokens$2.buttonsLgPaddingLeftRight + " " + tokens$2.buttonsLgPaddingTopBottom + " " + tokens$2.buttonsLgPaddingLeftRight + " !important",
      fontSize: text.body.sm.reguler.fontSize + " !important",
      lineHeight: text.body.sm.reguler.lineHeight + " !important",
      fontWeight: text.body.sm.reguler.fontWeight + " !important"
    },
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
        boxShadow: "0px 0px 0px 2px " + tokens.lgt500 + " !important"
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
  }
});

export { color, lgd, lgt, spacer };
//# sourceMappingURL=theme.esm.js.map
