import { ThemeTokens } from '..';

export const dataTable = (tokens: ThemeTokens) => {
  return {
    search: {
      width: '200px !important',
    },
    table: {
      width: '100%',
    },
    tableCell: {
      borderBottom: `1px solid ${tokens.tertiary300}`,
      padding: 10,
    },
    tableHead: {
      borderBottom: `1px solid ${tokens.tertiary300}`,
      borderTop: `1px solid ${tokens.tertiary300}`,
      padding: 10,
    },
    tableRow: {
      textAlign: 'left',
    },
  }
};