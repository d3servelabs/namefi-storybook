import type { Meta, StoryObj } from "@storybook/react";
import {DomainAvailableRegisterForm} from '../../components/DomainAvailableRegisterForm'

const meta = {
    title: 'Components/DomainAvailableRegisterForm',
    component: DomainAvailableRegisterForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof DomainAvailableRegisterForm>

export default meta;
type Story = StoryObj<typeof meta>

export const DomainAvailableWalletConnected: Story = {
    args: {
        buttonProps: {
            label: '',
            onClick: () => {},
            
        },
        userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        years:1,
        price: 71,
        onRegisterClicked: ()=>{},
        onYearsChanged: ()=>{},
    }
}
export const DomainAvailableNotConnected: Story = {
    args: {
        buttonProps: {
            label: '',
            onClick: () => {},
            
        },
        userAddress: '',
        years:1,
        price: 71,
        onRegisterClicked: ()=>{},
        onYearsChanged: ()=>{},
    }
}