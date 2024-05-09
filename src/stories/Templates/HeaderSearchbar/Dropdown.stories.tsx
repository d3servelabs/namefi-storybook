import type { Meta, StoryObj } from "@storybook/react";
import {Demo as DropdownDemo} from "../../../components/Templates/SearchDropdown/Demo";
import * as Message from "../../../components/Templates/SearchDropdown/Message";
import React, {useState} from "react";
import SearchDropdown from "../../../components/Templates/SearchDropdown";

const meta = {
    title: 'Templates/HeaderSearchbar/Dropdown',
    component: DropdownDemo,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof DropdownDemo>

export default meta;
type Story = StoryObj<typeof meta>

export const Dropdown: Story = {
    args: {
        isTldSelected: false,
        status: 'AVAILABLE',
        price: 24
    }
}
export const Available: Story = {
    args: {
        price: 20
    } as any,
    render: ({price})=>{
        return <>

            <SearchDropdown.Root>
                    <SearchDropdown.Body>
                        <Message.Root>
                            <Message.Available price={price} />
                        </Message.Root>
                        <SearchDropdown.TryAnother>
                            <SearchDropdown.OtherTldSelector
                                tlds={['eth', 'com', 'base', 'org', 'net', 'co.uk', 'btc', 'cosmos']}
                            />
                        </SearchDropdown.TryAnother>
                    </SearchDropdown.Body>

            </SearchDropdown.Root>
        </>
    }
}



export const Taken: Story = {
    args: {} as any,
    render: ()=>{
        return <>

            <SearchDropdown.Root>

                    <SearchDropdown.Body>

                       <Message.Root>
                           <Message.Taken />
                       </Message.Root>
                        <SearchDropdown.TryAnother>
                            <SearchDropdown.OtherTldSelector
                                tlds={['eth', 'com', 'base', 'org', 'net', 'co.uk', 'btc', 'cosmos']}
                            />
                        </SearchDropdown.TryAnother>
                    </SearchDropdown.Body>

            </SearchDropdown.Root>
        </>
    }
}

export const YouOwntIt: Story = {
    args: {} as any,
    render: ()=>{
        return <>

            <SearchDropdown.Root>

                    <SearchDropdown.Body>

                       <Message.Root>
                           <Message.YouOwnIt />
                       </Message.Root>
                        <SearchDropdown.TryAnother>
                            <SearchDropdown.OtherTldSelector
                                tlds={['eth', 'com', 'base', 'org', 'net', 'co.uk', 'btc', 'cosmos']}
                            />
                        </SearchDropdown.TryAnother>
                    </SearchDropdown.Body>

            </SearchDropdown.Root>
        </>
    }
}


export const NotSupported: Story = {
    args: {} as any,
    render: ()=>{
        return <>

            <SearchDropdown.Root>

                <SearchDropdown.Body>

                    <Message.Root>
                        <Message.NotSupported />
                    </Message.Root>
                    <SearchDropdown.TryAnother>
                        <SearchDropdown.OtherTldSelector
                            tlds={['eth', 'com', 'base', 'org', 'net', 'co.uk', 'btc', 'cosmos']}
                        />
                    </SearchDropdown.TryAnother>
                </SearchDropdown.Body>

            </SearchDropdown.Root>
        </>
    }
}



