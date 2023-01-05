import { ThemeTokens } from '../tokens';

export const tabbar = (tokens: ThemeTokens) => {
  return {
    position: 'relative',

    wrapper: {
      width: '100%',
      margin: `${tokens.spacing6} 0`,
      textAlign: 'left',
      paddingLeft: 0,
      paddingBottom: tokens.spacing4,
    },

    horizontal: {
      display: 'flex',
      overflowX: 'auto',
    },

    vertical: {
      display: 'block',
      overflowY: 'auto',
      maxWidth: '220px',

      '& .tab-item': {
        display: 'block !important',

        label: {
          whiteSpace: 'break-spaces !important',

          '&:hover': {
            borderBottom: 'none !important',
            borderRight: `4px solid ${tokens.primary500}`,
          },
        },

        '& .tab-content': {
          top: '4px !important',
          left: '225px !important',
          width: 'calc( 100% - 240px ) !important',
        },

        '[id^="legionTab_"]:checked + label': {
          borderRight: `4px solid ${tokens.primary500}`,
          borderBottom: 'none !important',
          color: tokens.primary500,
        },
      },
    },

    tabItem: {
      display: 'flex',
      justifyContent: 'flex-start',

      '& input[type="radio"]': {
        display: 'none',
      },

      label: {
        display: 'block',
        padding: tokens.spacing5,
        fontSize: '16px',
        lineHeight: tokens.spacing6,
        fontWeight: '600',
        background: 'white',
        cursor: 'pointer',
        position: 'relative',
        top: '4px',
        transition: 'all 0.2s ease-in-out',
        whiteSpace: 'nowrap',
        color: tokens.tertiary700,

        '& .prefix': {
          marginRight: '6px',
          position: 'relative',
          top: '1px',
        },

        '& .tab-badges': {
          marginLeft: '6px',
          background: '#E4EAF3',
          borderRadius: '8px',
          color: '#0077BC',
          fontSize: '14px',
          padding: '3px 6px',
        },

        '&:hover': {
          borderBottom: `4px solid ${tokens.primary500}`,
          background: tokens.primary25,
        },
      },

      '.tab-content': {
        zIndex: 2,
        display: 'none',
        overflow: 'hidden',
        width: '100%',
        fontSize: '17px',
        lineHeight: tokens.spacing6,
        padding: tokens.spacing5,
        position: 'absolute',
        top: '74px',
        left: 0,
        background: 'white',
      },

      '[id^="legionTab_"]:checked + label': {
        borderBottom: `4px solid ${tokens.primary500}`,
        color: tokens.primary500,
      },

      '[id^="legionTab"]:checked ~ [id^="legionTabContent"]': {
        display: 'block',
      },

      '[id^="legionTab"]:disabled + label': {
        color: tokens.tertiary400,

        '&:hover': {
          background: 'white',
          borderBottom: 'none !important',
          borderRight: 'none !important',
          cursor: 'not-allowed',
        },
      },
    },
  };
};
