import { ThemeTokens } from '..';

export const sidebarWrapper = (tokens: ThemeTokens) => {
  return {
    position: 'fixed',
    top: 0,
    width: '280px',
    height: 'auto',
    overflow: 'hidden',
    zIndex: 99,
    textAlign: 'left',
    left: 0,

    '.sidebarHeader, .sidebarBody, .sidebarFooter': {
      padding: tokens.spacing4,
    },

    '.sidebarHeader': {
      borderBottom: `1px solid ${tokens.tertiary100}`,
    },

    '.sidebarBody': {
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: '85vh',
    },

    '.sidebarFooter': {
      bottom: 0,
      position: 'absolute',
      width: '100%',
      background: 'white',
      borderTop: `1px solid ${tokens.tertiary100}`,
    },

    '#sidebarMenu': {
      height: '100%',
      position: 'fixed',
      left: 0,
      zIndex: 99,
      width: '280px',
      marginTop: 0,
      transform: 'translateX(-280px)',
      transition: 'transform 250ms ease-in-out',
      background: 'white',
      boxShadow: `6px 6px 6px -2px ${tokens.tertiary100}`,

      '.menu-label:not(:hover), .menu-content': {
        backgroundColor: 'unset',
      },
    },

    'input[type="checkbox"]': {
      '&:checked ~ ': {
        '#sidebarMenu': {
          transform: 'translateX(0)',
        },
      },
    },

    'input[type=checkbox]': {
      transition: 'all 0.3s',
      boxSizing: 'border-box',
      display: 'none',

      '&:checked ~': {
        '.sidebarIconToggle': {
          transform: 'translateX(280px)',
          transition: 'transform 250ms ease-in-out',

          '>.horizontal': {
            transition: 'all 0.3s',
            boxSizing: 'border-box',
            opacity: 0,
          },

          '>.hamburger': {
            display: 'none',
          },

          '>.close': {
            display: 'block',
          },
        },
      },
    },

    '.sidebarIconToggle': {
      boxSizing: 'border-box',
      cursor: 'pointer',
      position: 'fixed',
      zIndex: 999,
      height: '40px',
      width: '48px',
      boxShadow: `6px 6px 6px -2px ${tokens.tertiary100}`,
      background: 'white',
      borderRadius: '0 5px 5px 0',
      top: '12px',
      padding: '10px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      border: `1px solid ${tokens.tertiary100}`,
      borderLeft: 'none',
    },

    '.spinner': {
      transition: 'all 0.3s',
      boxSizing: 'border-box',
      position: 'absolute',
      width: '100%',

      '&.close': {
        display: 'none',
      },
    },
  };
};
