# Storybook - Universal App Starter

This Storybook instance showcases the React Native Web components from the `ui` package.

## Getting Started

### Development

Run Storybook in development mode:

```bash
yarn dev
```

This will start Storybook at `http://localhost:6006`

### Build

Build Storybook for production:

```bash
yarn build
```

The static build will be output to `storybook-static/`

## Features

- ✅ React Native Web component testing
- ✅ NativeWind/Tailwind CSS support
- ✅ Interactive component playground
- ✅ Auto-generated documentation
- ✅ TypeScript support
- ✅ Hot module reloading

## Adding Stories

Create new story files in `./stories/`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "ui/your-component";

const meta = {
  title: "UI/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // your props
  },
};
```

## Architecture

- **Webpack 5**: Bundler with React Native Web support
- **SWC**: Fast TypeScript/JavaScript compiler
- **PostCSS**: For Tailwind CSS processing
- **Monorepo Integration**: Shares code with other apps via workspace packages

## Learn More

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [React Native Web](https://necolas.github.io/react-native-web/)
- [NativeWind](https://www.nativewind.dev/)
