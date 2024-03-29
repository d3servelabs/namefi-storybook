import type { Meta, StoryObj } from "@storybook/react";
import * as Success  from "../../../components/Templates/RegistrationFlow/Success";

const meta = {
    title: 'Components/DomainRegistration/Success',
    component: Success.Root,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Success.Root>

export default meta;
type Story = StoryObj<typeof meta>

export const SuccessStory: Story = {
    render(){
        return <Success.Root>
            <Success.Actions>
                <Success.ActionsButton>
                    Register Another One
                </Success.ActionsButton>
            </Success.Actions>
            <Success.LoadingBarSubtitle href={'#'}>
            </Success.LoadingBarSubtitle>
        </Success.Root>
    }
}