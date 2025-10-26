import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "ui/text-input";

const meta = {
  title: "UI/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    editable: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    placeholder: "Outline variant",
    variant: "outline",
  },
};

export const WithValue: Story = {
  args: {
    value: "Pre-filled text",
    variant: "default",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter password",
    secureTextEntry: true,
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    editable: false,
    variant: "default",
    className: "opacity-50",
  },
};

export const CustomStyles: Story = {
  args: {
    placeholder: "Custom styled input",
    variant: "outline",
    className: "bg-blue-50 border-blue-400 rounded-lg",
  },
};

export const Email: Story = {
  args: {
    placeholder: "email@example.com",
    keyboardType: "email-address",
    autoCapitalize: "none",
    variant: "outline",
  },
};

export const Multiline: Story = {
  args: {
    placeholder: "Enter multiple lines...",
    multiline: true,
    numberOfLines: 4,
    variant: "outline",
    className: "h-32 py-2",
  },
};
