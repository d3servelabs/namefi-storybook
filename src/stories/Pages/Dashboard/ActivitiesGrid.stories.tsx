import type { Meta, StoryObj } from '@storybook/react';
import { ActivitiesGrid } from '@pages/DashBoard/ActivitiesGrid';

const meta = {
  title: 'Pages/Dashboard/ActivitiesGrid',
  component: ActivitiesGrid,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof ActivitiesGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Status: Story = { 
  args: {
    activities: [
      {todo: 'Register', domainName: 'NAmefi.io', isLoading: true},
        {todo: 'Release', domainName: 'NAmefi.io', isLoading: true},
        {todo: 'Burn', domainName: 'NAmefi.io', isLoading: false},
        {todo: 'Mint', domainName: 'abrac...fa.com', isLoading: false},
        {todo: 'Transfer', domainName: 'abrac...fa.com', isLoading: false},
        {todo: 'List', domainName: 'abrac...fa.com', isLoading: true}
    ]
  }
 
}