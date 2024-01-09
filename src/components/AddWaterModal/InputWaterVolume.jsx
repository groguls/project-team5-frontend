import React from 'react';
import { TextField, createTheme, ThemeProvider } from '@mui/material';

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

export const InputWaterVolume = ({
  placeholderText,
  error,
  type,
  name,
  value,
  onChange,
  onBlur,
  id,
  helperText,
  ...otherProps
}) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        sx={{
          '& .MuiInputBase-input': {
            color: theme.colors.secondaryBlue,
            padding: '12px 10px 12px 10px',
            fontSize: theme.typography.fontSize,
            lineHeight: theme.typography.lineHeight,

            '&:hover': {
              color: theme.colors.primaryBlue,
            },
            '&:focus': {
              color: theme.colors.primaryBlue,
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
              borderRadius: '6px',
              borderColor: error
                ? theme.colors.secondaryRed // Change border color when in error state
                : theme.colors.secondaryBlue,
              padding: '12px 10px 12px 10px',
              gap: '10px',
            },
            '&:hover fieldset': {
              borderColor: theme.colors.secondaryBlue,
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px',
              borderColor: error
                ? theme.colors.secondaryRed // Change border color when in error state
                : theme.colors.secondaryBlue,
            },
          },
          '&.Mui-error': {
            '& .MuiInputBase-input': {
              color: error
                ? theme.colors.secondaryRed // Change text color when in error state
                : theme.colors.secondaryBlue,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: error
                  ? theme.colors.secondaryRed // Change border color when in error state
                  : theme.colors.secondaryBlue,
              },
            },
          },
          '& .MuiFormHelperText-root': {
            fontSize: '14px',
            lineHeight: '18px',
            margin: '0',
            marginTop: '2px',
          },
        }}
        id={id}
        placeholder={placeholderText}
        variant="outlined"
        error={error}
        helperText={error ? `${helperText}` : ''}
        type={type}
        name={name}
        value={value}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        inputProps={{ ...otherProps }}
      />
    </ThemeProvider>
  );
};
