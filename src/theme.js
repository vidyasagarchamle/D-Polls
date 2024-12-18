import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  colors: {
    brand: {
      50: '#e6f0ff',
      100: '#b3d1ff',
      200: '#80b3ff',
      300: '#4d94ff',
      400: '#1a75ff',
      500: '#0066ff',
      600: '#0052cc',
      700: '#003d99',
      800: '#002966',
      900: '#001433',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
          },
          _active: {
            bg: 'brand.700',
          },
          transition: 'all 0.2s',
        },
        ghost: {
          color: 'gray.600',
          _hover: {
            bg: 'gray.100',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: 'xl',
          borderWidth: '1px',
          borderColor: 'gray.200',
          boxShadow: 'sm',
          p: 6,
          _hover: {
            borderColor: 'brand.500',
            transform: 'translateY(-2px)',
            boxShadow: 'md',
            transition: 'all 0.2s',
          },
        },
      },
    },
    Alert: {
      variants: {
        subtle: {
          container: {
            bg: 'white',
            borderWidth: '1px',
            borderColor: 'gray.200',
            borderRadius: 'xl',
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        overlay: {
          bg: 'blackAlpha.600',
          backdropFilter: 'blur(4px)',
        },
        dialog: {
          bg: 'white',
          borderRadius: 'xl',
          boxShadow: 'xl',
        },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: 'gray.800',
        color: 'white',
        borderRadius: 'md',
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        px: 3,
        py: 1,
        textTransform: 'none',
        fontWeight: 'medium',
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: 'white',
            borderColor: 'gray.300',
            _hover: {
              borderColor: 'brand.500',
            },
            _focus: {
              borderColor: 'brand.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
            },
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: 'gray.300',
          _checked: {
            bg: 'brand.500',
            borderColor: 'brand.500',
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          borderColor: 'gray.300',
          _checked: {
            bg: 'brand.500',
            borderColor: 'brand.500',
          },
        },
      },
    },
  },
});

export default theme; 