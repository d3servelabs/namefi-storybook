import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import {DomainOwnedContent} from "../../../pages/DomainOwned/content";

const meta = { 
  title: 'Pages/DomainOwned/Content',
  component: DomainOwnedContent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof DomainOwnedContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    domainCardProps: {
        loading: false,
        userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        domainName: 'namefi.eth',
        isOwned: true,
        isOwnedOrTaken: true
    }
  }
}