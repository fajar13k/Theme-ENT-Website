import { ThemeTokens } from '../tokens';

export const megamenu = (tokens: ThemeTokens) => {
  return {
    primary50: {
      backgroundColor: `${tokens.primary50}`,
    },
    primary500: {
      color: `${tokens.primary500}`,
    },
    tertiary800: {
      color: `${tokens.tertiary800}`,
    },
    flexWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    leftWrapper: {
      width: '25%',
      borderRight: `1px solid ${tokens.primary100}`,
      padding: '0.625rem',
      height: 350,
      overflow: 'auto',

      item: {
        display: 'flex',
        padding: `${tokens.spacing2} ${tokens.spacing3}`,
        marginBottom: '0.625rem',
        cursor: 'pointer',

        title: {
          fontWeight: 600,
          fontSize: `${tokens.spacing4}`,
        },
      },
    },
    rightWrapper: {
      width: '75%',
      height: 350,
      overflow: 'auto',
      padding: `${tokens.spacing3} ${tokens.spacing5} ${tokens.spacing3} ${tokens.spacing8}`,

      layoutWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '1.875rem',
      },

      item: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: `${tokens.spacing5}`,
        marginLeft: '0.625rem',

        title: {
          fontWeight: 700,
          fontSize: `${tokens.spacing8}`,
        },

        children: {
          layout: {
            flex: 1,
            marginBottom: `${tokens.spacing8}`,

            title: {
              fontWeight: 700,
              fontSize: '1.125rem',
              marginBottom: '0.9375rem',
              marginLeft: '0.625rem',
            },

            desc: {
              color: `${tokens.tertiary800} !important`,
              fontWeight: 600,
              padding: `${tokens.spacing2} ${tokens.spacing3}`,
              fontSize: `${tokens.spacing4}`,
              '&:hover': {
                display: 'flex',
                textDecoration: 'none',
                background: `${tokens.primary50}`,
                color: `${tokens.primary500} !important`,
                padding: `${tokens.spacing2} ${tokens.spacing3}`,
              },
            },
          },
        },
      },
    },
  };
};
