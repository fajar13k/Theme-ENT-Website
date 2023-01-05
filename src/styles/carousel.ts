import { ThemeTokens } from '../tokens';

export const carousel = (tokens: ThemeTokens) => {
  return {
    primary50: {
      backgroundColor: tokens.primary50,
    },
    primary500: {
      backgroundColor: tokens.primary500,
    },
    tertiary100: {
      backgroundColor: tokens.tertiary100,
    },
    imageTitle: {
      fontWeight: 700,
      color: tokens.tertiary800,
    },
    imageDesc: {
      fontWeight: 400,
      color: tokens.tertiary500,
    },
  };
};
