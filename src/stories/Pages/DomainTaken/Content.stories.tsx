import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import {DomainTakenContent} from "../../../pages/DomainTaken/content";

const meta = { 
  title: 'Pages/DomainTaken/Content',
  component: DomainTakenContent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof DomainTakenContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    domainCardProps:{ domainName:'namefi.io'},
    domainMessageProps:{
      isLoading: false,
      ownerAddress: null,
      buttonProps: {
        label: '',
        children: null,
        onClick: () => {}
      }
    },
  },
}