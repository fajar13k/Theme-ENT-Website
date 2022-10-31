import { ThemeTokens } from '../tokens';
import { typography } from './typography';

export const colorscard = (tokens: ThemeTokens) => {
  const text = typography(tokens);

  return {
    containerColors: { marginBottom: '20px' },
    wrappValueColors: {
      ...text.caption.sm.semibold,
      padding: '10px',
    },

    // Colors Primary
    primary25: {
      backgroundColor: `${tokens.primary25}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary50: {
      backgroundColor: `${tokens.primary50}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary100: {
      backgroundColor: `${tokens.primary100}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary200: {
      backgroundColor: `${tokens.primary200}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary300: {
      backgroundColor: `${tokens.primary300}`,
      color: `${tokens.primary900}`,
      padding: '1rem',
      width: '100%',
    },
    primary400: {
      backgroundColor: `${tokens.primary400}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary500: {
      backgroundColor: `${tokens.primary500}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary600: {
      backgroundColor: `${tokens.primary600}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary700: {
      backgroundColor: `${tokens.primary700}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary800: {
      backgroundColor: `${tokens.primary800}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    primary900: {
      backgroundColor: `${tokens.primary900}`,
      color: `${tokens.primary25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Secondary
    secondary25: {
      backgroundColor: `${tokens.secondary25}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary50: {
      backgroundColor: `${tokens.secondary50}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary100: {
      backgroundColor: `${tokens.secondary100}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary200: {
      backgroundColor: `${tokens.secondary200}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary300: {
      backgroundColor: `${tokens.secondary300}`,
      color: `${tokens.secondary900}`,
      padding: '1rem',
      width: '100%',
    },
    secondary400: {
      backgroundColor: `${tokens.secondary400}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary500: {
      backgroundColor: `${tokens.secondary500}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary600: {
      backgroundColor: `${tokens.secondary600}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary700: {
      backgroundColor: `${tokens.secondary700}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary800: {
      backgroundColor: `${tokens.secondary800}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    secondary900: {
      backgroundColor: `${tokens.secondary900}`,
      color: `${tokens.secondary25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Tertiary
    tertiary25: {
      backgroundColor: `${tokens.tertiary25}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary50: {
      backgroundColor: `${tokens.tertiary50}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary100: {
      backgroundColor: `${tokens.tertiary100}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary200: {
      backgroundColor: `${tokens.tertiary200}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary300: {
      backgroundColor: `${tokens.tertiary300}`,
      color: `${tokens.tertiary900}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary400: {
      backgroundColor: `${tokens.tertiary400}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary500: {
      backgroundColor: `${tokens.tertiary500}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary600: {
      backgroundColor: `${tokens.tertiary600}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary700: {
      backgroundColor: `${tokens.tertiary700}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary800: {
      backgroundColor: `${tokens.tertiary800}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    tertiary900: {
      backgroundColor: `${tokens.tertiary900}`,
      color: `${tokens.tertiary25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Success
    success25: {
      backgroundColor: `${tokens.success25}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success50: {
      backgroundColor: `${tokens.success50}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success100: {
      backgroundColor: `${tokens.success100}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success200: {
      backgroundColor: `${tokens.success200}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success300: {
      backgroundColor: `${tokens.success300}`,
      color: `${tokens.success900}`,
      padding: '1rem',
      width: '100%',
    },
    success400: {
      backgroundColor: `${tokens.success400}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success500: {
      backgroundColor: `${tokens.success500}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success600: {
      backgroundColor: `${tokens.success600}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success700: {
      backgroundColor: `${tokens.success700}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success800: {
      backgroundColor: `${tokens.success800}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    success900: {
      backgroundColor: `${tokens.success900}`,
      color: `${tokens.success25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Warning
    warning25: {
      backgroundColor: `${tokens.warning25}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning50: {
      backgroundColor: `${tokens.warning50}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning100: {
      backgroundColor: `${tokens.warning100}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning200: {
      backgroundColor: `${tokens.warning200}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning300: {
      backgroundColor: `${tokens.warning300}`,
      color: `${tokens.warning900}`,
      padding: '1rem',
      width: '100%',
    },
    warning400: {
      backgroundColor: `${tokens.warning400}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning500: {
      backgroundColor: `${tokens.warning500}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning600: {
      backgroundColor: `${tokens.warning600}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning700: {
      backgroundColor: `${tokens.warning700}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning800: {
      backgroundColor: `${tokens.warning800}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    warning900: {
      backgroundColor: `${tokens.warning900}`,
      color: `${tokens.warning25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Error
    error25: {
      backgroundColor: `${tokens.error25}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error50: {
      backgroundColor: `${tokens.error50}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error100: {
      backgroundColor: `${tokens.error100}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error200: {
      backgroundColor: `${tokens.error200}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error300: {
      backgroundColor: `${tokens.error300}`,
      color: `${tokens.error900}`,
      padding: '1rem',
      width: '100%',
    },
    error400: {
      backgroundColor: `${tokens.error400}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error500: {
      backgroundColor: `${tokens.error500}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error600: {
      backgroundColor: `${tokens.error600}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error700: {
      backgroundColor: `${tokens.error700}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error800: {
      backgroundColor: `${tokens.error800}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    error900: {
      backgroundColor: `${tokens.error900}`,
      color: `${tokens.error25}`,
      padding: '1rem',
      width: '100%',
    },
    // Colors Information
    info25: {
      backgroundColor: `${tokens.information25}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info50: {
      backgroundColor: `${tokens.information50}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info100: {
      backgroundColor: `${tokens.information100}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info200: {
      backgroundColor: `${tokens.information200}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info300: {
      backgroundColor: `${tokens.information300}`,
      color: `${tokens.information900}`,
      padding: '1rem',
      width: '100%',
    },
    info400: {
      backgroundColor: `${tokens.information400}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info500: {
      backgroundColor: `${tokens.information500}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info600: {
      backgroundColor: `${tokens.information600}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info700: {
      backgroundColor: `${tokens.information700}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info800: {
      backgroundColor: `${tokens.information800}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
    info900: {
      backgroundColor: `${tokens.information900}`,
      color: `${tokens.information25}`,
      padding: '1rem',
      width: '100%',
    },
  };
};
