import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "ui/view";
import { Text } from "ui/text";

const meta = {
  title: "UI/View",
  component: View,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof View>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>View Container</Text>,
    className: "p-4 bg-gray-100 rounded",
  },
};

export const FlexRow: Story = {
  args: {
    className: "flex flex-row gap-4 p-4 bg-gray-100 rounded",
    children: (
      <>
        <View className="w-16 h-16 bg-blue-500 rounded" />
        <View className="w-16 h-16 bg-green-500 rounded" />
        <View className="w-16 h-16 bg-red-500 rounded" />
      </>
    ),
  },
};

export const FlexColumn: Story = {
  args: {
    className: "flex flex-col gap-4 p-4 bg-gray-100 rounded",
    children: (
      <>
        <View className="w-32 h-16 bg-blue-500 rounded" />
        <View className="w-32 h-16 bg-green-500 rounded" />
        <View className="w-32 h-16 bg-red-500 rounded" />
      </>
    ),
  },
};

export const Card: Story = {
  args: {
    className: "p-6 bg-white rounded-lg shadow-md border border-gray-200",
    children: (
      <>
        <Text className="text-xl font-bold mb-2">Card Title</Text>
        <Text className="text-gray-600">
          This is a card component built with View.
        </Text>
      </>
    ),
  },
};

export const Nested: Story = {
  args: {
    className: "p-4 bg-blue-100 rounded",
    children: (
      <View className="p-4 bg-white rounded shadow">
        <Text className="font-semibold">Nested View</Text>
        <Text className="text-sm text-gray-600">
          Views can be nested for complex layouts
        </Text>
      </View>
    ),
  },
};
