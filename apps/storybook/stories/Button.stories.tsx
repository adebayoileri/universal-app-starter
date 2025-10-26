import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    onPress: { action: "pressed" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const CustomStyles: Story = {
  args: {
    children: "Custom Styled",
    variant: "default",
    className: "bg-green-500 hover:bg-green-600",
    textClassName: "text-white font-bold",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "default",
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: "This is a button with a very long text to test wrapping",
    variant: "default",
    className: "max-w-xs",
  },
};
