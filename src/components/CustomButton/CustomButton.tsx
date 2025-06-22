// src/components/CustomButton/CustomButton.tsx
import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import type { CustomButtonProps } from './CustomButton.types';
export const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  label,
  ...props
}) => {
  const getColorScheme = () => {
    switch (variant) {
      case 'primary':
        return 'blue';
      case 'secondary':
        return 'gray';
      case 'danger':
        return 'red';
      default:
        return 'blue';
    }
  };

  return (
    <ChakraButton colorScheme={getColorScheme()} {...props}>
      {label}
    </ChakraButton>
  );
};
