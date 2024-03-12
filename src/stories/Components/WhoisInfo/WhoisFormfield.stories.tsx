import type { Meta, StoryObj } from "@storybook/react";
// import { WhoisInfo } from "@components/WhoisInfo/WhoisInfo";
import { WhoisFormDemo } from "../../../components/Templates/WhoisInfo/Form/WhoisFormDemo";
const meta = {
    title: 'Components/WhoisFormfield/WhoisFormfield',
    component: WhoisFormDemo,
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof WhoisFormDemo>

export default meta;

type Story = StoryObj<typeof meta>
export const WhoisForm : Story = {
    args: {
       
    }
}
