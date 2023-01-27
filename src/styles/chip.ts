import { ThemeTokens } from '../tokens';

const defaultChipStyle = {
  borderRadius: '24px',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
};

const defaultChipIconSpacing = (tokens: ThemeTokens) => {
  return {
    '.chip--prefix:not(.icon-only)': {
      marginRight: tokens.spacing1,
    },

    '.chip--postfix:not(.icon-only)': {
      marginLeft: tokens.spacing1,
    },
  };
};

export const chip = (tokens: ThemeTokens) => {
  return {
    display: 'inline-block',

    '.chip': {
      '&--sm': {
        ...defaultChipStyle,
        padding: `0 ${tokens.spacing1}`,
        height: '18px',
        lineHeight: '18px',

        '&.outline': {
          lineHeight: '16px',
        },

        ...defaultChipIconSpacing,

        'svg, img': {
          width: '12px',
          height: '12px',
          position: 'relative',
          top: '1.5px',
        },
      },

      '&--md': {
        ...defaultChipStyle,
        padding: `3px ${tokens.spacing2}`,
        height: '24px',
        lineHeight: '18px',

        '&.outline': {
          lineHeight: '16px',
        },

        ...defaultChipIconSpacing,

        'svg, img': {
          width: '18px',
          height: '18px',
          position: 'relative',
          top: '2px',
        },
      },

      '&--lg': {
        ...defaultChipStyle,
        padding: `${tokens.spacing2}`,
        height: '32px',
        lineHeight: '15px',

        '.chip--prefix:not(.icon-only)': {
          marginRight: tokens.spacing2,
        },

        '.chip--postfix:not(.icon-only)': {
          marginLeft: tokens.spacing2,
        },

        'svg, img': {
          width: '24px',
          height: '24px',
          position: 'relative',
          top: '1.5px',
        },
      },
    },

    '& input[type="checkbox"]': {
      display: 'none',

      '&:not(disabled) ~ .chip': {
        cursor: 'pointer',
      },

      '&:disabled ~ .chip': {
        cursor: 'text',
      },

      '&:checked ~ .chip': {
        '&.soft, &.outline': {
          '&--primary, &--tertiary, &--error, &--warning, &--success, &--info': {
            color: '#FFF',
          },

          '&--primary': {
            background: tokens.primary500,
          },
          '&--tertiary': {
            background: tokens.tertiary500,
          },
          '&--error': {
            background: tokens.error500,
          },
          '&--warning': {
            background: tokens.warning500,
          },
          '&--success': {
            background: tokens.success500,
          },
          '&--info': {
            background: tokens.information500,
          },
        },
      },
    },

    '.soft': {
      '&--primary': {
        backgroundColor: tokens.primary100,
        color: tokens.primary500,

        '&:hover': {
          background: tokens.primary200,
        },
      },
      '&--tertiary': {
        backgroundColor: tokens.tertiary100,
        color: tokens.tertiary500,

        '&:hover': {
          background: tokens.tertiary200,
        },
      },
      '&--error': {
        backgroundColor: tokens.error100,
        color: tokens.error500,

        '&:hover': {
          background: tokens.error200,
        },
      },
      '&--warning': {
        backgroundColor: tokens.warning100,
        color: tokens.warning500,

        '&:hover': {
          background: tokens.warning200,
        },
      },
      '&--success': {
        backgroundColor: tokens.success100,
        color: tokens.success500,

        '&:hover': {
          background: tokens.success200,
        },
      },
      '&--info': {
        backgroundColor: tokens.information100,
        color: tokens.information500,

        '&:hover': {
          background: tokens.information200,
        },
      },
    },

    '.outline': {
      backgroundColor: 'transparent',
      border: '1px solid',

      '&--primary': {
        borderColor: tokens.primary500,
        color: tokens.primary500,

        '&:hover': {
          background: tokens.primary100,
        },
      },
      '&--tertiary': {
        borderColor: tokens.tertiary500,
        color: tokens.tertiary500,

        '&:hover': {
          background: tokens.tertiary100,
        },
      },
      '&--error': {
        borderColor: tokens.error500,
        color: tokens.error500,

        '&:hover': {
          background: tokens.error100,
        },
      },
      '&--info': {
        borderColor: tokens.information500,
        color: tokens.information500,

        '&:hover': {
          background: tokens.information100,
        },
      },
      '&--success': {
        borderColor: tokens.success500,
        color: tokens.success500,

        '&:hover': {
          background: tokens.success100,
        },
      },
      '&--warning': {
        borderColor: tokens.warning500,
        color: tokens.warning500,

        '&:hover': {
          background: tokens.warning100,
        },
      },
    },
  };
};
