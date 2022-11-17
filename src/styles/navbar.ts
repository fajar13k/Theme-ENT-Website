import { ThemeTokens } from '..';

export const navbar = (tokens: ThemeTokens) => {
  return {
    hideIn: {
      sm: {
        '@media screen and (max-width: 640px)': {
          display: 'none',
        },
      },
      md: {
        '@media screen and (max-width: 768px)': {
          display: 'none',
        },
      },
      lg: {
        '@media screen and (max-width: 1024px)': {
          display: 'none',
        },
      },
      xl: {
        '@media screen and (max-width: 1280px)': {
          display: 'none',
        },
      },
    },
    showIn: {
      sm: {
        display: 'none',
        '@media screen and (max-width: 640px)': {
          display: 'flex',
        },
      },
      md: {
        display: 'none',
        '@media screen and (max-width: 768px)': {
          display: 'flex',
        },
      },
      lg: {
        display: 'none',
        '@media screen and (max-width: 1024px)': {
          display: 'flex',
        },
      },
      xl: {
        display: 'none',
        '@media screen and (max-width: 1280px)': {
          display: 'flex',
        },
      },
    },
    navbarBrand: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',

      '@media screen and (max-width: 768px)': {
        alignItems: 'center',
        height: '100%',
      },
    },
    navbarCollapse: {
      div: {
        p: tokens.spacing4,

        li: {
          fontSize: '1rem',
          fontWeight: '600',
          lineHeight: '1.5rem',
          listStyleType: 'none',
        },
      },
      '@media screen and (max-width: 768px)': {
        borderTop: `2px solid ${tokens.tertiary200}`,
        background: 'rgba(255, 255, 255, 0.95)',
        height: '100vh',
        left: 0,
        position: 'absolute',
        width: '100%',
        top: tokens.spacing12,
        borderRadius: tokens.radius4,
      },
    },
    navbarContent: {
      default: {
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',
        gap: tokens.spacing10,
        margin: 0,
        padding: 0,

        li: {
          fontWeight: '600',

          a: {
            '&:hover': {
              opacity: '0.8',
            },
          },
        },
      },
    },
    navbarItem: {
      active: {
        background: tokens.primary500,
        borderRadius: tokens.radius2,
        color: '#ffffff',
        fontWeight: '600',
        padding: tokens.spacing2,
      },
    },
    mode: {
      light: {
        background: '#ffffff',
        color: tokens.tertiary800,
      },
      dark: {
        background: '#000000',
        color: tokens.tertiary500,
      },
    },
    variant: {
      floating: {
        borderRadius: tokens.radius4,
        marginTop: tokens.spacing4,
        marginLeft: tokens.spacing4,
        marginRight: tokens.spacing4,
        position: 'sticky',
        left: 0,
        right: 0,
        top: tokens.spacing4,

        '@media screen and (max-width: 768px)': {
          p: `0px ${tokens.spacing4}`,
        },
      },
      static: {
        position: 'static',
        borderBottom: `1px solid ${tokens.tertiary300}`,

        '@media screen and (max-width: 768px)': {
          display: 'block',
          p: `0px ${tokens.spacing4}`,
        },
      },
      sticky: {
        position: 'sticky',
        top: 0,
        borderBottom: `1px solid ${tokens.tertiary300}`,

        '@media screen and (max-width: 768px)': {
          display: 'block',
          p: `0px ${tokens.spacing4}`,
        },
      },
    },
  };
};
