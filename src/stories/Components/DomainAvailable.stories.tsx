import type { Meta, StoryObj } from "@storybook/react";
import {DomainAvailable} from '../../pages/DomainAvailable/DomainAvailable'

const meta = {
    title: 'Components/DomainAvailable',
    component: DomainAvailable,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof DomainAvailable>

export default meta;
type Story = StoryObj<typeof meta>

export const DomainAvailableWalletConnected: Story = {
    args: {
        connectButtonProps: {
            onClick: () => {},
            
        },
        domainAvailableRegisterFormProps: {
            userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
            years:1,
            price: 71,
            onRegisterClicked: ()=>{},
            onYearsChanged: ()=>{},
        },
        userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        registerAotherOne: false
    }
}
export const DomainAvailableNotConnected: Story = {
    args: {
        connectButtonProps: {
            onClick: () => {},           
        },
        domainAvailableRegisterFormProps: {
            userAddress: '',
            years:1,
            price: 71,
            onRegisterClicked: ()=>{},
            onYearsChanged: ()=>{},
        },
        userAddress: '',
        registerAotherOne: false
    }
}
export const DomainAvailableSetForNow: Story = {
    args: {
        connectButtonProps: {
            onClick: () => {},           
        },
        domainAvailableRegisterFormProps: {
            userAddress: '',
            years:1,
            price: 71,
            onRegisterClicked: ()=>{},
            onYearsChanged: ()=>{},
        },
        userAddress: '',
        registerAotherOne: true
    }
}