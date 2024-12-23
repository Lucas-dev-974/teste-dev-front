import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonIcon } from "./ButtonIcon";
import { MenuIcon } from "@/icons/MenuIcon";

const meta = {
  title: "Button/ButtonIcon",
  component: ButtonIcon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonIcon_: Story = {
  args: {
    icon: MenuIcon(),
    style: "primary",
  },
};
