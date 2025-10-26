import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "ui/text";

const meta = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    numberOfLines: {
      control: "number",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};

export const Heading: Story = {
  args: {
    children: "This is a Heading",
    className: "text-3xl font-bold",
  },
};

export const Paragraph: Story = {
  args: {
    children:
      "This is a paragraph of text that demonstrates how the Text component can be used for longer content.",
    className: "text-base text-gray-700 max-w-md",
  },
};

export const Colored: Story = {
  args: {
    children: "Colored Text",
    className: "text-blue-600 font-semibold",
  },
};

export const Truncated: Story = {
  args: {
    children:
      "This is a very long text that will be truncated after one line to demonstrate the numberOfLines prop functionality",
    numberOfLines: 1,
    className: "max-w-xs",
  },
};

export const MultipleStyles: Story = {
  args: {
    children: "Styled Text",
    className: "text-2xl font-bold text-purple-600 underline",
  },
};
