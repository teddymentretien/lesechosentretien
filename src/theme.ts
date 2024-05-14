
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b40820', 
    },
    secondary: {
      main: '#fbeb6c',
    },
    background: {
      default: '#f4f4f4',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none',  
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'secondary' && {
            color: '#000',
          }),
          border: 'none', 
          fontSize: 12,
          padding: '10px 20px', 
          fontWeight: 600,
          borderRadius: '20px', 
          textTransform: 'capitalize', 
          boxShadow: 'none',
          cursor: 'pointer', 
          transition: 'background-color 0.3s'
        }),
      }
    }
  }
});

export default theme;
