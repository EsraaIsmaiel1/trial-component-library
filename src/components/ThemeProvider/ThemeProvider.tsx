import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: any;
}

const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
export default CustomThemeProvider;
