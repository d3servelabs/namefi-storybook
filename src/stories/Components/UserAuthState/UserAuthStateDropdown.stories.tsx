import type { Meta, StoryObj } from "@storybook/react";
import {
    UserAuthStateDropDown,
    UserAuthStateDropDown as Component
} from "@components/UserAuthState/Dropdown/UserAuthStateDropDown";
import React from "react";

const meta = {
    title: 'Components/UserAuthState/Dropdown',
    component: Component,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes:{
        userAddress:{type:'string',},
        userLoading:{type:'boolean'}
    },
}as Meta<typeof Component>;

export default meta; 

type Story = StoryObj<typeof meta>


export const Loading: Story = {
    args:{
        userAddress: undefined,
        userLoading: true
    } as any,
    render:({userAddress,userLoading}:any)=>{
        return <UserAuthStateDropDown>
            <UserAuthStateDropDown.Header userAddress={userAddress} loading={userLoading}/>
            <UserAuthStateDropDown.Body/>
            <UserAuthStateDropDown.Footer userAddress={userAddress} loading={userLoading}/>
        </UserAuthStateDropDown>
    }
   };

export const Connected: Story = {
    args:{
        userAddress: "0xC90a7048D663EbADccbCb50930778ddDaeb72385",
    } as any,
    render:({userAddress,userLoading}:any)=>{
        return <UserAuthStateDropDown>
            <UserAuthStateDropDown.Header userAddress={userAddress} loading={userLoading}/>
            <UserAuthStateDropDown.Body/>
            <UserAuthStateDropDown.Footer  userAddress={userAddress} loading={userLoading}/>
        </UserAuthStateDropDown>
    }
   };

export const Disconnected: Story = {
    args:{
        userAddress: undefined,
    } as any,
    render:({userAddress,userLoading}:any)=>{
        return <UserAuthStateDropDown>
            <UserAuthStateDropDown.Header userAddress={userAddress} loading={userLoading}/>
            <UserAuthStateDropDown.Body/>
            <UserAuthStateDropDown.Footer userAddress={userAddress} loading={userLoading}/>
        </UserAuthStateDropDown>
    }
   };
