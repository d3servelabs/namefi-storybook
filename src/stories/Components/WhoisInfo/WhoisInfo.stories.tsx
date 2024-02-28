import type { Meta, StoryObj } from "@storybook/react";
// import { WhoisInfo } from "@components/WhoisInfo/WhoisInfo";
import { WhoisInfo } from "../../../components/WhoisInfo/WhoisInfo";
const meta = {
    title: 'Components/WhoisInfo/WhoisInfo',
    component: WhoisInfo,
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof WhoisInfo>

export default meta;

type Story = StoryObj<typeof meta>
export const Story : Story = {
    args: {
       
    }
}
