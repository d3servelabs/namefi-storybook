import type { Meta, StoryObj } from "@storybook/react";
import * as CreateOrderComponent from "../../../components/Templates/RegistrationFlow/CreateOrder";
import {useEffect, useState} from "react";

const meta = {
    title: 'Templates/DomainRegistration/CreateOrder',
    component: CreateOrderComponent.Root,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof CreateOrderComponent.Root>

export default meta;
type Story = StoryObj<typeof meta>

export const CreateOrder: Story = {
    args: {
        years:1
    } as any,
    render({years:_years}:any){
        const [years, setYears] = useState(_years)
        useEffect(() => {
            setYears(_years)
        }, [_years,setYears]);
        return <CreateOrderComponent.Root>
            <CreateOrderComponent.YearCounter years={years} onYearsChanged={setYears}/>
            <CreateOrderComponent.ActionButton disabled={!years}/>
        </CreateOrderComponent.Root>
    }
}