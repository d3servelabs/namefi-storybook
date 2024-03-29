import type { Meta, StoryObj } from "@storybook/react";
import * as Failure  from "../../../components/Templates/RegistrationFlow/Failure";

const meta = {
    title: 'Components/DomainRegistration/Failure',
    component: Failure.Root,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Failure.Root>

export default meta;
type Story = StoryObj<typeof meta>

export const FailureStory: Story = {
    render(){
        return <Failure.Root>
            <Failure.Actions>
            <Failure.ActionsButton>
                Register Another One
            </Failure.ActionsButton>
            </Failure.Actions>
            <Failure.LoadingBarSubtitle href={'#'}>
            </Failure.LoadingBarSubtitle>
        </Failure.Root>
    }
}