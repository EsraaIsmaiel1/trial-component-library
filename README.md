# My Component Library

A modern React component library built with TypeScript, Chakra UI, and Vite. This library provides reusable UI components that are fully typed and customizable.

## 🚀 Features

- **TypeScript Support**: Full type safety with comprehensive type definitions
- **Chakra UI Integration**: Built on top of Chakra UI for consistent design
- **Modern Build System**: Uses Vite for fast development and optimized builds
- **Tree Shaking**: Only import what you need to keep your bundle size minimal
- **ESM & CJS Support**: Compatible with both modern and legacy module systems

## 📦 Installation

```bash
npm install trial-component-library
```

## 🔧 Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion react react-dom react-icons
```

**Note**: Make sure you have React 18+ installed in your project.

## 🎯 Quick Start

### 1. Set up Chakra UI Provider

First, wrap your app with the `ThemeProvider`:

```tsx
import { ThemeProvider } from 'trial-component-library';

function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

### 2. Use Components

```tsx
import { CustomButton } from 'trial-component-library';

function MyComponent() {
  return (
    <div>
      <CustomButton variant="primary" label="Click me!" />
      <CustomButton variant="secondary" label="Secondary" />
      <CustomButton variant="danger" label="Delete" />
    </div>
  );
}
```

## 📚 Available Components

### CustomButton

A customizable button component with multiple variants.

#### Props

| Prop       | Type                                   | Default     | Description                         |
| ---------- | -------------------------------------- | ----------- | ----------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | The button variant                  |
| `label`    | `string`                               | -           | The button text                     |
| `...props` | `ButtonProps`                          | -           | All standard Chakra UI Button props |

#### Usage Examples

```tsx
import { CustomButton } from 'trial-component-library';

// Primary button (default)
<CustomButton label="Submit" />

// Secondary button
<CustomButton variant="secondary" label="Cancel" />

// Danger button
<CustomButton variant="danger" label="Delete" />

// With additional props
<CustomButton
  variant="primary"
  label="Save"
  size="lg"
  onClick={() => console.log('Clicked!')}
/>
```

### ThemeProvider

A wrapper component that provides Chakra UI theme context.

#### Props

| Prop       | Type        | Default     | Description            |
| ---------- | ----------- | ----------- | ---------------------- |
| `children` | `ReactNode` | -           | The content to wrap    |
| `theme`    | `any`       | `undefined` | Custom Chakra UI theme |

#### Usage Examples

```tsx
import { ThemeProvider } from 'trial-component-library';

// Basic usage
<ThemeProvider>
  <App />
</ThemeProvider>;

// With custom theme
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      500: '#0070f3',
    },
  },
});

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>;
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-component-library
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

### Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build the library for production         |
| `npm run lint`    | Run ESLint to check code quality         |
| `npm run preview` | Preview the built library locally        |

### Project Structure

```
src/
├── components/
│   ├── CustomButton/
│   │   ├── CustomButton.tsx
│   │   └── CustomButton.types.ts
│   └── ThemeProvider/
│       └── ThemeProvider.tsx
├── index.ts          # Main export file
└── assets/           # Static assets
```

### Adding New Components

1. Create a new folder in `src/components/`
2. Add your component file (e.g., `MyComponent.tsx`)
3. Add type definitions (e.g., `MyComponent.types.ts`)
4. Export the component in `src/index.ts`

Example:

```tsx
// src/components/MyComponent/MyComponent.tsx
import React from 'react';
import type { MyComponentProps } from './MyComponent.types';

export const MyComponent: React.FC<MyComponentProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
```

```tsx
// src/components/MyComponent/MyComponent.types.ts
export interface MyComponentProps {
  children?: React.ReactNode;
  className?: string;
}
```

```tsx
// src/index.ts
export { MyComponent } from './components/MyComponent/MyComponent';
export type { MyComponentProps } from './components/MyComponent/MyComponent.types';
```

## 📦 Building for Production

```bash
npm run build
```

This will:

- Build the library in both ESM and CJS formats
- Generate TypeScript declaration files
- Create source maps for debugging
- Output files to the `dist/` directory

## 🚀 Publishing

Before publishing, make sure to:

1. Update the version in `package.json`
2. Run `npm run build` to ensure everything builds correctly
3. Run `npm run lint` to check code quality

```bash
npm publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues or have questions, please [open an issue](https://github.com/EsraaIsmaiel1/trial-component-library/issues) on GitHub.

## 📞 Support

For support, email support@example.com or join our Slack channel.

---

Made with ❤️ by [Esraa Ismail](https://github.com/EsraaIsmaiel1)
