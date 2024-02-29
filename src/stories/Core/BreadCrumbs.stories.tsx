import type { Meta, StoryObj } from "@storybook/react";
import BreadCrumbsRoot from "../../components/Core/BreadCrumbs";

const meta = {
    title: 'CoreBreadCrumbs',
    component: BreadCrumbsRoot,
    parameters: {
        layout: 'centered'
    },
    tags:['autodocs']
}satisfies Meta<typeof BreadCrumbsRoot>

export default meta;

type Story = StoryObj<typeof meta> 
export const Default : Story = {
    args: {
        activeIndex:2,

    },
    render(props){
        return <BreadCrumbsRoot>
            <BreadCrumbsRoot.Crumb href={'#'}>
                ...
            </BreadCrumbsRoot.Crumb>
            <BreadCrumbsRoot.Crumb href={'#'}>
               example.com
            </BreadCrumbsRoot.Crumb>
            <BreadCrumbsRoot.Crumb href={'#'}>
                Settings
            </BreadCrumbsRoot.Crumb>
        </BreadCrumbsRoot>
    }
}
