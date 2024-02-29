import type { Meta, StoryObj } from "@storybook/react";
// import { WhoisInfo } from "@components/WhoisInfo/WhoisInfo";
import { WhoisFormfield } from "../../../components/Templates/WhoisForm/WhoisFormfield";
const meta = {
    title: 'Components/WhoisFormfield/WhoisFormfield',
    component: WhoisFormfield,
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof WhoisFormfield>

export default meta;

type Story = StoryObj<typeof meta>
export const WhoisForm : Story = {
    args: {
       
    }
}
