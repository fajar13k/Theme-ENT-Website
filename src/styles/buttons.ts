import { Theme } from '@theme-ui/css';
import { ThemeTokens } from '../tokens';
import { typography } from './typography';

export const buttons = (tokens: ThemeTokens): Theme['buttons'] => {
  const text = typography(tokens);
  
  return {
    sm: {
      minWidth: '32px',
      minHeight: '32px',
      padding: '5px 7px !important',
      ...text.caption.lg.semibold,
      lineHeight: '20px',
    },
    md: {
      minWidth: '40px',
      minHeight: '40px',
      padding: '7px 11px !important',
      ...text.body.sm.semibold,
      lineHeight: '24px',
    },
    lg: {
      minWidth: '56px',
      minHeight: '56px',
      padding: '13px 15px !important',
      ...text.body.sm.semibold,
      lineHeight: '28px',
    },
    solid: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      primary: {
        backgroundColor: tokens.primary500,
        color: '#ffffff',

        '&:hover': {
          backgroundColor: tokens.primary600,
          boxShadow: 'none !important',
        },
        '&:focus': {
          border: `2px solid ${tokens.primary400}`,
          boxShadow: `0px 0px 0px 2px ${tokens.primary400} !important`,
        },
        '&:active': {
          backgroundColor: `${tokens.primary700} !important`,
          border: 'none',
          boxShadow: 'none !important',
        },
        '&:disabled': {
          cursor: 'unset !important',
          backgroundColor: `${tokens.tertiary300} !important`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      secondary: {
        backgroundColor: tokens.secondary500,
        color: '#ffffff',

        '&:hover': {
          backgroundColor: tokens.secondary600,
          boxShadow: 'none !important',
        },
        '&:focus': {
          border: `2px solid ${tokens.secondary400}`,
          boxShadow: `0px 0px 0px 2px ${tokens.secondary400} !important`,
        },
        '&:active': {
          backgroundColor: `${tokens.secondary700} !important`,
          border: 'none',
          boxShadow: 'none !important',
        },
        '&:disabled': {
          cursor: 'unset !important',
          backgroundColor: `${tokens.tertiary300} !important`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      tertiary: {
        backgroundColor: tokens.tertiary500,
        color: '#ffffff',

        '&:hover': {
          backgroundColor: tokens.tertiary600,
          boxShadow: 'none !important',
        },
        '&:focus': {
          border: `2px solid ${tokens.tertiary400}`,
          boxShadow: `0px 0px 0px 2px ${tokens.tertiary400} !important`,
        },
        '&:active': {
          backgroundColor: `${tokens.tertiary700} !important`,
          border: 'none',
          boxShadow: 'none !important',
        },
        '&:disabled': {
          cursor: 'unset !important',
          backgroundColor: `${tokens.tertiary300} !important`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      success: {
        backgroundColor: tokens.success500,
        color: '#ffffff',

        '&:hover': {
          backgroundColor: tokens.success600,
          boxShadow: 'none !important',
        },
        '&:focus': {
          border: `2px solid ${tokens.success400}`,
          boxShadow: `0px 0px 0px 2px ${tokens.success400} !important`,
        },
        '&:active': {
          backgroundColor: `${tokens.success700} !important`,
          border: 'none',
          boxShadow: 'none !important',
        },
        '&:disabled': {
          cursor: 'unset !important',
          backgroundColor: `${tokens.tertiary300} !important`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      warning: {
        backgroundColor: tokens.warning500,
        color: '#ffffff',

        '&:hover': {
          backgroundColor: tokens.warning600,
          boxShadow: 'none !important',
        },
        '&:focus': {
          border: `2px solid ${tokens.warning400}`,
          boxShadow: `0px 0px 0px 2px ${tokens.warning400} !important`,
        },
        '&:active': {
          backgroundColor: `${tokens.warning700} !important`,
          border: 'none',
          boxShadow: 'none !important',
        },
        '&:disabled': {
          cursor: 'unset !important',
          backgroundColor: `${tokens.tertiary300} !important`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      info: {
        backgroundColor: tokens.information500,
        color: '#ffffff',

        '&:hover': {
          backgroundColor: tokens.information600,
          boxShadow: 'none !important',
        },
        '&:focus': {
          border: `2px solid ${tokens.information400}`,
          boxShadow: `0px 0px 0px 2px ${tokens.information400} !important`,
        },
        '&:active': {
          backgroundColor: `${tokens.information700} !important`,
          border: 'none',
          boxShadow: 'none !important',
        },
        '&:disabled': {
          cursor: 'unset !important',
          backgroundColor: `${tokens.tertiary300} !important`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      error: {
        backgroundColor: tokens.error500,
        color: '#ffffff',

        '&:hover': {
          backgroundColor: tokens.error600,
          boxShadow: 'none !important',
        },
        '&:focus': {
          border: `2px solid ${tokens.error400}`,
          boxShadow: `0px 0px 0px 2px ${tokens.error400} !important`,
        },
        '&:active': {
          backgroundColor: `${tokens.error700} !important`,
          border: 'none',
          boxShadow: 'none !important',
        },
        '&:disabled': {
          cursor: 'unset !important',
          backgroundColor: `${tokens.tertiary300} !important`,
          color: `${tokens.tertiary500} !important`,
        },
      },
    },
    soft: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      primary: {
        backgroundColor: tokens.primary50,
        color: tokens.primary500,

        '&:hover': {
          backgroundColor: tokens.primary200,
          boxShadow: 'none',
          color: tokens.primary600,
        },
        '&:focus': {
          backgroundColor: tokens.primary50,
          border: `2px solid ${tokens.primary400}`,
          boxShadow: 'none',
          color: tokens.primary500,
        },
        '&:active': {
          backgroundColor: tokens.primary300,
          border: 'none',
          boxShadow: 'none !important',
          color: tokens.primary700,
        },
        '&:disabled': {
          appearance: 'none',
          backgroundColor: tokens.tertiary200,
          border: 'none',
          color: tokens.tertiary500,
          cursor: 'unset',
        },
      },
      secondary: {
        backgroundColor: tokens.secondary50,
        color: tokens.secondary500,

        '&:hover': {
          backgroundColor: tokens.secondary200,
          boxShadow: 'none',
          color: tokens.secondary600,
        },
        '&:focus': {
          backgroundColor: tokens.secondary50,
          border: `2px solid ${tokens.secondary400}`,
          boxShadow: 'none',
          color: tokens.secondary500,
        },
        '&:active': {
          backgroundColor: tokens.secondary300,
          border: 'none',
          boxShadow: 'none !important',
          color: tokens.secondary700,
        },
        '&:disabled': {
          appearance: 'none',
          backgroundColor: tokens.tertiary200,
          border: 'none',
          color: tokens.tertiary500,
          cursor: 'unset',
        },
      },
      tertiary: {
        backgroundColor: tokens.tertiary50,
        color: tokens.tertiary500,

        '&:hover': {
          backgroundColor: tokens.tertiary200,
          boxShadow: 'none',
          color: tokens.tertiary600,
        },
        '&:focus': {
          backgroundColor: tokens.tertiary50,
          border: `2px solid ${tokens.tertiary400}`,
          boxShadow: 'none',
          color: tokens.tertiary500,
        },
        '&:active': {
          backgroundColor: tokens.tertiary300,
          border: 'none',
          boxShadow: 'none !important',
          color: tokens.tertiary700,
        },
        '&:disabled': {
          appearance: 'none',
          backgroundColor: tokens.tertiary200,
          border: 'none',
          color: tokens.tertiary500,
          cursor: 'unset',
        },
      },
      success: {
        backgroundColor: tokens.success50,
        color: tokens.success500,

        '&:hover': {
          backgroundColor: tokens.success200,
          boxShadow: 'none',
          color: tokens.success600,
        },
        '&:focus': {
          backgroundColor: tokens.success50,
          border: `2px solid ${tokens.success400}`,
          boxShadow: 'none',
          color: tokens.success500,
        },
        '&:active': {
          backgroundColor: tokens.success300,
          border: 'none',
          boxShadow: 'none !important',
          color: tokens.success700,
        },
        '&:disabled': {
          appearance: 'none',
          backgroundColor: tokens.tertiary200,
          border: 'none',
          color: tokens.tertiary500,
          cursor: 'unset',
        },
      },
      warning: {
        backgroundColor: tokens.warning50,
        color: tokens.warning500,

        '&:hover': {
          backgroundColor: tokens.warning200,
          boxShadow: 'none',
          color: tokens.warning600,
        },
        '&:focus': {
          backgroundColor: tokens.warning50,
          border: `2px solid ${tokens.warning400}`,
          boxShadow: 'none',
          color: tokens.warning500,
        },
        '&:active': {
          backgroundColor: tokens.warning300,
          border: 'none',
          boxShadow: 'none !important',
          color: tokens.warning700,
        },
        '&:disabled': {
          appearance: 'none',
          backgroundColor: tokens.tertiary200,
          border: 'none',
          color: tokens.tertiary500,
          cursor: 'unset',
        },
      },
      info: {
        backgroundColor: tokens.information50,
        color: tokens.information500,

        '&:hover': {
          backgroundColor: tokens.information200,
          boxShadow: 'none',
          color: tokens.information600,
        },
        '&:focus': {
          backgroundColor: tokens.information50,
          border: `2px solid ${tokens.information400}`,
          boxShadow: 'none',
          color: tokens.information500,
        },
        '&:active': {
          backgroundColor: tokens.information300,
          border: 'none',
          boxShadow: 'none !important',
          color: tokens.information700,
        },
        '&:disabled': {
          appearance: 'none',
          backgroundColor: tokens.tertiary200,
          border: 'none',
          color: tokens.tertiary500,
          cursor: 'unset',
        },
      },
      error: {
        backgroundColor: tokens.error50,
        color: tokens.error500,

        '&:hover': {
          backgroundColor: tokens.error200,
          boxShadow: 'none',
          color: tokens.error600,
        },
        '&:focus': {
          backgroundColor: tokens.error50,
          border: `2px solid ${tokens.error400}`,
          boxShadow: 'none',
          color: tokens.error500,
        },
        '&:active': {
          backgroundColor: tokens.error300,
          border: 'none',
          boxShadow: 'none !important',
          color: tokens.error700,
        },
        '&:disabled': {
          appearance: 'none',
          backgroundColor: tokens.tertiary200,
          border: 'none',
          color: tokens.tertiary500,
          cursor: 'unset',
        },
      },
    },
    outline: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      primary: {
        backgroundColor: tokens.primary50,
        border: `2px solid ${tokens.primary500}`,
        color: tokens.primary500,

        '&:hover': {
          backgroundColor: tokens.primary100,
          border: `2px solid ${tokens.primary600}`,
          color: tokens.primary600,
          boxShadow: 'none !important',
        },
        '&:active': {
          backgroundColor: tokens.primary200,
          border: `2px solid ${tokens.primary700}`,
          color: tokens.primary700,
          boxShadow: 'none !important',
        },
        '&:focus': {
          backgroundColor: tokens.primary100,
          boxShadow: `0px 0px 0px 2px ${tokens.primary400}`,
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: `${tokens.tertiary200} !important`,
          border: `none`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      secondary: {
        backgroundColor: tokens.secondary50,
        border: `2px solid ${tokens.secondary500}`,
        color: tokens.secondary500,

        '&:hover': {
          backgroundColor: tokens.secondary100,
          border: `2px solid ${tokens.secondary600}`,
          color: tokens.secondary600,
          boxShadow: 'none !important',
        },
        '&:active': {
          backgroundColor: tokens.secondary200,
          border: `2px solid ${tokens.secondary700}`,
          color: tokens.secondary700,
          boxShadow: 'none !important',
        },
        '&:focus': {
          backgroundColor: tokens.secondary100,
          boxShadow: `0px 0px 0px 2px ${tokens.secondary400}`,
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: `${tokens.tertiary200} !important`,
          border: `none`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      tertiary: {
        backgroundColor: tokens.tertiary50,
        border: `2px solid ${tokens.tertiary500}`,
        color: tokens.tertiary500,

        '&:hover': {
          backgroundColor: tokens.tertiary100,
          border: `2px solid ${tokens.tertiary600}`,
          color: tokens.tertiary600,
          boxShadow: 'none !important',
        },
        '&:active': {
          backgroundColor: tokens.tertiary200,
          border: `2px solid ${tokens.tertiary700}`,
          color: tokens.tertiary700,
          boxShadow: 'none !important',
        },
        '&:focus': {
          backgroundColor: tokens.tertiary100,
          boxShadow: `0px 0px 0px 2px ${tokens.tertiary400}`,
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: `${tokens.tertiary200} !important`,
          border: `none`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      success: {
        backgroundColor: tokens.success50,
        border: `2px solid ${tokens.success500}`,
        color: tokens.success500,

        '&:hover': {
          backgroundColor: tokens.success100,
          border: `2px solid ${tokens.success600}`,
          color: tokens.success600,
          boxShadow: 'none !important',
        },
        '&:active': {
          backgroundColor: tokens.success200,
          border: `2px solid ${tokens.success700}`,
          color: tokens.success700,
          boxShadow: 'none !important',
        },
        '&:focus': {
          backgroundColor: tokens.success100,
          boxShadow: `0px 0px 0px 2px ${tokens.success400}`,
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: `${tokens.tertiary200} !important`,
          border: `none`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      warning: {
        backgroundColor: tokens.warning50,
        border: `2px solid ${tokens.warning500}`,
        color: tokens.warning500,

        '&:hover': {
          backgroundColor: tokens.warning100,
          border: `2px solid ${tokens.warning600}`,
          color: tokens.warning600,
          boxShadow: 'none !important',
        },
        '&:active': {
          backgroundColor: tokens.warning200,
          border: `2px solid ${tokens.warning700}`,
          color: tokens.warning700,
          boxShadow: 'none !important',
        },
        '&:focus': {
          backgroundColor: tokens.warning100,
          boxShadow: `0px 0px 0px 2px ${tokens.warning400}`,
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: `${tokens.tertiary200} !important`,
          border: `none`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      info: {
        backgroundColor: tokens.information50,
        border: `2px solid ${tokens.information500}`,
        color: tokens.information500,

        '&:hover': {
          backgroundColor: tokens.information100,
          border: `2px solid ${tokens.information600}`,
          color: tokens.information600,
          boxShadow: 'none !important',
        },
        '&:active': {
          backgroundColor: tokens.information200,
          border: `2px solid ${tokens.information700}`,
          color: tokens.information700,
          boxShadow: 'none !important',
        },
        '&:focus': {
          backgroundColor: tokens.information100,
          boxShadow: `0px 0px 0px 2px ${tokens.information400}`,
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: `${tokens.tertiary200} !important`,
          border: `none`,
          color: `${tokens.tertiary500} !important`,
        },
      },
      error: {
        backgroundColor: tokens.error50,
        border: `2px solid ${tokens.error500}`,
        color: tokens.error500,

        '&:hover': {
          backgroundColor: tokens.error100,
          border: `2px solid ${tokens.error600}`,
          color: tokens.error600,
          boxShadow: 'none !important',
        },
        '&:active': {
          backgroundColor: tokens.error200,
          border: `2px solid ${tokens.error700}`,
          color: tokens.error700,
          boxShadow: 'none !important',
        },
        '&:focus': {
          backgroundColor: tokens.error100,
          boxShadow: `0px 0px 0px 2px ${tokens.error400}`,
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: `${tokens.tertiary200} !important`,
          border: `none`,
          color: `${tokens.tertiary500} !important`,
        },
      },
    },
    transparent: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',

      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px',
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px',
      },
      '& .wrapper-two-icon': {
        marginRight: '10px',
      },
      '& .wrapperIconLeft': {
        marginRight: 10,
      },
      '& .wrapperIconRight': {
        marginLeft: 10,
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      primary: {
        backgroundColor: 'transparent',
        color: tokens.primary500,

        '&:hover': {
          backgroundColor: tokens.primary100,
          color: tokens.primary600,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: tokens.primary25,
          border: `2px solid ${tokens.primary400}`,
          boxShadow: 'none',
          color: tokens.primary500,
        },
        '&:active': {
          backgroundColor: tokens.primary100,
          border: 'none',
          color: tokens.primary700,
          boxShadow: 'none',
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: tokens.tertiary400,
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: tokens.secondary500,

        '&:hover': {
          backgroundColor: tokens.secondary100,
          color: tokens.secondary600,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: tokens.secondary25,
          border: `2px solid ${tokens.secondary400}`,
          boxShadow: 'none',
          color: tokens.secondary500,
        },
        '&:active': {
          backgroundColor: tokens.secondary100,
          border: 'none',
          color: tokens.secondary700,
          boxShadow: 'none',
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: tokens.tertiary400,
        },
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: tokens.tertiary500,

        '&:hover': {
          backgroundColor: tokens.tertiary100,
          color: tokens.tertiary600,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: tokens.tertiary25,
          border: `2px solid ${tokens.tertiary400}`,
          boxShadow: 'none',
          color: tokens.tertiary500,
        },
        '&:active': {
          backgroundColor: tokens.tertiary100,
          border: 'none',
          color: tokens.tertiary700,
          boxShadow: 'none',
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: tokens.tertiary400,
        },
      },
      success: {
        backgroundColor: 'transparent',
        color: tokens.success500,

        '&:hover': {
          backgroundColor: tokens.success100,
          color: tokens.success600,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: tokens.success25,
          border: `2px solid ${tokens.success400}`,
          boxShadow: 'none',
          color: tokens.success500,
        },
        '&:active': {
          backgroundColor: tokens.success100,
          border: 'none',
          color: tokens.success700,
          boxShadow: 'none',
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: tokens.tertiary400,
        },
      },
      warning: {
        backgroundColor: 'transparent',
        color: tokens.warning500,

        '&:hover': {
          backgroundColor: tokens.warning100,
          color: tokens.warning600,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: tokens.warning25,
          border: `2px solid ${tokens.warning400}`,
          boxShadow: 'none',
          color: tokens.warning500,
        },
        '&:active': {
          backgroundColor: tokens.warning100,
          border: 'none',
          color: tokens.warning700,
          boxShadow: 'none',
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: tokens.tertiary400,
        },
      },
      info: {
        backgroundColor: 'transparent',
        color: tokens.information500,

        '&:hover': {
          backgroundColor: tokens.information100,
          color: tokens.information600,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: tokens.information25,
          border: `2px solid ${tokens.information400}`,
          boxShadow: 'none',
          color: tokens.information500,
        },
        '&:active': {
          backgroundColor: tokens.information100,
          border: 'none',
          color: tokens.information700,
          boxShadow: 'none',
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: tokens.tertiary400,
        },
      },
      error: {
        backgroundColor: 'transparent',
        color: tokens.error500,

        '&:hover': {
          backgroundColor: tokens.error100,
          color: tokens.error600,
          boxShadow: 'none',
        },
        '&:focus': {
          backgroundColor: tokens.error25,
          border: `2px solid ${tokens.error400}`,
          boxShadow: 'none',
          color: tokens.error500,
        },
        '&:active': {
          backgroundColor: tokens.error100,
          border: 'none',
          color: tokens.error700,
          boxShadow: 'none',
        },
        '&:disabled': {
          cursor: 'unset',
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: tokens.tertiary400,
        },
      },
    },
  };
};
