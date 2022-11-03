import { typography } from './typography';
import { ThemeTokens } from '..';

export const headCell = (tokens: ThemeTokens) => {
  const text = typography(tokens);

  return {
    borderBottom: `1px solid ${tokens.tertiary400}`,
    color: '#000',
    backgroundColor: tokens.tertiary200,
    padding: `${tokens.spacing3} ${tokens.spacing4}`,
    ...text.body.sm.bold,
  };
};
