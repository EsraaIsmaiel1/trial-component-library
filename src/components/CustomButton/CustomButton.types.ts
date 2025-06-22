// src/components/CustomButton/CustomButton.types.ts
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export interface CustomButtonProps extends ChakraButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  label: string;
}
