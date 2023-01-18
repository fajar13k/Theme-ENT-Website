import { Theme } from '@theme-ui/css';
import { ThemeTokens } from '../tokens';

export const alerts = (tokens: ThemeTokens): Theme['alerts'] => {
  return {
    outerWrapper: {
      width: '100%',
      paddingTop: tokens.spacing2,
      paddingBottom: tokens.spacing2,
    },
    iconWrapper: {
      borderRadius: tokens.radius7,
      width: 24,
      height: 24,
    },
    titleMargin: {
      marginRight: tokens.spacing3,
    },
    descMargin: {
      marginLeft: '35px',
    },
    info: {
      bg: tokens.information25,
      border: `1px solid ${tokens.information500}`,
    },
    success: {
      bg: tokens.success25,
      border: `1px solid ${tokens.success500}`,
    },
    error: {
      bg: tokens.error25,
      border: `1px solid ${tokens.error500}`,
    },
    warning: {
      bg: tokens.warning25,
      border: `1px solid ${tokens.warning500}`,
    },
    infoIcon: {
      bg: tokens.information500,
    },
    successIcon: {
      bg: tokens.success500,
    },
    errorIcon: {
      bg: tokens.error500,
    },
    warningIcon: {
      bg: tokens.warning500,
    },
    title: {
      fontSize: 16,
      fontWeight: 700,
      color: tokens.tertiary800,
    },
    desc: {
      fontSize: 12,
      fontWeight: 400,
      color: tokens.tertiary500,
    },
    close: {
      width: 28,
      height: 28,
      color: tokens.tertiary800,
      cursor: 'pointer',
    },
  };
};
