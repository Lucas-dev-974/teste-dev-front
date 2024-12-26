import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "@storybook/test";

import { Button } from "./Button";
import { PlayerIcon } from "../../icons/PlayerIcon";
import { within } from "@storybook/testing-library";

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

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", { name: /Button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
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

// -- Test cases
