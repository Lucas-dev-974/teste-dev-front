import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";
import { PlayerIcon } from "../../icons/PlayerIcon";

const meta = {
  title: "Button/SideIconButton",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: "primary",
    text: "Button",
  },
};

export const Dark: Story = {
  args: {
    style: "dark",
    text: "Button",
  },
};

export const LeftSideIcon: Story = {
  args: {
    style: "primary",
    text: "Button",
    sideIcon: {
      icon: PlayerIcon(),
      side: "left",
    },
  },
};

export const RightSideIcon: Story = {
  args: {
    style: "primary",
    text: "Button",
    sideIcon: {
      icon: PlayerIcon(),
      side: "right",
    },
  },
};
