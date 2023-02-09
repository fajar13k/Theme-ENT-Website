import { ThemeTokens } from '../tokens';

export const stepper = (tokens: ThemeTokens) => {
  return {
    success: {
      backgroundColor: tokens.success500,
      borderColor: tokens.success500,
    },
    warning: {
      backgroundColor: tokens.warning500,
      borderColor: tokens.warning500,
    },
    error: {
      backgroundColor: tokens.error500,
      borderColor: tokens.error500,
    },
    stepItem: {
      width: '40px',
      height: '40px',
      border: '2px solid #ddd',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      margin: '0',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    stepItemActive: {
      backgroundColor: '#ddd',
      borderColor: '#000',
      color: '#000',
      boxShadow: '0 0 10px #ddd',
    },
    stepTitle: {
      fontWeight: 'bold',
      mt: 1,
    },
    stepDescription: {
      fontSize: '14px',
      color: '#A0A0A0',
    },
  };
};
