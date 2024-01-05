import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText'; // Import FormHelperText
import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },
  colors: {
    primaryWhite: '#FFFFFF',
    primaryBlack: '#2F2F2F',
    primaryBlue: '#407BFF',
    secondaryGray: '#ECF2FF',
    secondaryRed: '#EF5050',
    secondaryBlue: '#9EBBFF',
    secondaryOrange: '#FF9D43',
    secondaryGrayBlue: '#D7E3FF',
  },
  typography: {
    fontSize: 16,
    lineHeight: 20,
  },
});

const textFieldStyle = {
  width: '280px',
  height: '44px',
  borderWidth: '1px',
  borderRadius: '6px',
  borderColor: theme.colors.secondaryBlue,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '1px',
      borderRadius: '6px',
      borderColor: theme.colors.secondaryBlue,
    },
    '&:hover fieldset': {
      borderColor: theme.colors.secondaryBlue,
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: theme.colors.secondaryBlue,
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '280px',
  },
  [theme.breakpoints.up('md')]: {
    width: '336px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '384px',
  },
};

export default function InputPassword({
  placeholderText,
  error,
  value,
  id,
  onChange,
  onBlur,
  helperText,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{
        ...textFieldStyle,
        '& .MuiInputBase-root': {
          padding: '0',
        },
      }}
      variant="outlined"
      error={error} // Pass the error state to FormControl
    >
      <OutlinedInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
        sx={{
          ...textFieldStyle,
          '& .MuiInputBase-input': {
            color: error
              ? theme.colors.secondaryRed // Change text color for error state
              : theme.colors.secondaryBlue,
            fontSize: theme.typography.fontSize,
            lineHeight: theme.typography.lineHeight,
            padding: '12px 10px',
            '&:hover': {
              color: theme.colors.primaryBlue, // Change hover color
            },
            '&:focus': {
              color: theme.colors.primaryBlue, // Change hover color
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
              borderRadius: '6px',
              borderColor: error
                ? theme.colors.secondaryRed // Change border color for error state
                : theme.colors.secondaryBlue,
            },
            '&:hover fieldset': {
              borderColor: error
                ? theme.colors.secondaryRed // Change hover border color for error state
                : theme.colors.secondaryBlue,
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px',
              borderColor: error
                ? theme.colors.secondaryRed // Change focus border color for error state
                : theme.colors.secondaryBlue,
            },
          },
          '& .MuiSvgIcon-root': {
            fontSize: '1rem',
          },
          '& .MuiIconButton-root.MuiIconButton-sizeMedium': {
            padding: '12px 10px',
            margin: '0',
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{
                color: theme.colors.primaryBlue, // Change icon color
                m: '0px',
                '& .MuiIconButton': {
                  fontSize: '16px',
                  p: '0',
                },
              }}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {/* Helper text added directly to FormControl */}
      <FormHelperText
        sx={{
          ...textFieldStyle,
          color: theme.colors.secondaryRed,
          fontSize: '14px', // Adjust the font size of the helperText
          lineHeight: '18px',
          margin: '0',
        }}
      >
        {error ? `${helperText}` : ''}
      </FormHelperText>
    </FormControl>
  );
}
