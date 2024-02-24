import type { Meta, StoryObj } from '@storybook/react';
import { FullPage as FullPageComponent } from '@pages/Landingpage/FullPage';
import '../../../index.css'
import '../../../App.css'
import { FasterIcon } from '@pages/Landingpage/icons/FasterIcon';
import { SaferIcon } from '@pages/Landingpage/icons/SaferIcon';
import { DefiIcon } from '@pages/Landingpage/icons/DEfiIcon';

const meta = {
  title: 'Pages/Landingpage',
  component: FullPageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FullPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {
  args: {
    featuredCardProps: {
      cardContent: [
        {
          label: 'FASTER',  
          text:['transact in secs, not weeks', 'sellers get paid faster', 'buyers get domains faster'],
          img: <FasterIcon className={''} />
      },
      {
          label: 'SAFER', 
          text:['safer than Auth-code', 'safer than centralized database'],
          img: <SaferIcon className=''/>
      },
      {
          label: 'Defi', 
          text:['domains as collateral', 'NFT marketplaces integration', 'DeFi protocols integration'],
          img: <DefiIcon className=''/>
      }
      ]
    }
  }
}