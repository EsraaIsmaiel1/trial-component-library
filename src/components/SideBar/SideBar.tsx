import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import type { SidebarProps } from './SideBar.types';

export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  bgColor = 'teal.700',
  header,
  footer,
  width = 250,
}) => (
  <Box
    bg={bgColor}
    w={width}
    minH="100vh"
    color="white"
    p={4}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Box>
      {header && <Box mb={6}>{header}</Box>}
      <VStack align="stretch" spacing={2}>
        {navItems.map((item, idx) => (
          <HStack
            as={item.href ? Link : 'button'}
            href={item.href}
            onClick={item.onClick}
            key={idx}
            p={2}
            borderRadius="md"
            _hover={{ bg: 'teal.600' }}
            cursor="pointer"
            spacing={3}
          >
            <Box>{item.icon}</Box>
            <Text>{item.label}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
    {footer && <Box mt={6}>{footer}</Box>}
  </Box>
);
