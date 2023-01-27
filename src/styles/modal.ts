import { ThemeTokens } from '../tokens';

export const modal = (tokens: ThemeTokens) => {
  return {
    '.modal': {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      textAlign: 'left',
      background: 'rgba(0,0,0, .5)',
      transition: 'opacity .25s ease',
      zIndex: 99999,

      '&__bg': {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        cursor: 'pointer',
      },

      '&-state': {
        display: 'none',

        '&:checked + .modal': {
          opacity: 1,
          visibility: 'visible',

          '.modal__inner': {
            top: '50%',
          },
        },
      },

      '&__inner': {
        transition: 'top .25s ease',
        position: 'relative',
        top: 0,
        left: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        maxHeight: '90%',
        maxWidth: '90%',
        overflow: 'auto',
        background: '#FFF',
        borderRadius: '6px',
        padding: 0,

        '&_wrapper': {
          height: '100%',
        },
      },

      '&__title': {
        padding: `${tokens.spacing6} ${tokens.spacing11} ${tokens.spacing3} ${tokens.spacing6}`,

        span: {
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: tokens.spacing7,
          marginLeft: tokens.spacing3,
        },
      },

      '&__content': {
        padding: `${tokens.spacing3} ${tokens.spacing6}`,
      },

      '&__footer': {
        padding: `${tokens.spacing3} ${tokens.spacing6} ${tokens.spacing6}`,
        position: 'relative',
        bottom: 0,
        width: '100%',

        '&.fixed': {
          position: 'fixed',
        },
      },

      '&__close': {
        position: 'absolute',
        right: tokens.spacing6,
        top: '30px',
        cursor: 'pointer',
      },
    },
  };
};
