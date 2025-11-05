import React from "react";
import type { Preview } from "@storybook/react-vite";
import "../styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div id="storybook-root" style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
