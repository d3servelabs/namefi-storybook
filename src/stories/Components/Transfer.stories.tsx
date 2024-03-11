import type { Meta, StoryObj } from "@storybook/react";
import { Transfer } from "../../pages/DomainOwned/Transfer";

const meta = {
    title: 'Components/DomainOwned/Transfer',
    component: Transfer,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Transfer>

export default meta;

type Story = StoryObj<typeof meta>

export const TransferStory : Story = {
    args: {
      unlocked: false,
      progressWidth: 30,
      domainName: 'doodle.com',
        receiverAddress: '0xB5856d4598c919834913b8656ebc15a64d3C7836'
    }
}
