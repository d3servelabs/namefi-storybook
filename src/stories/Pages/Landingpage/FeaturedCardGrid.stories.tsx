import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedCard as FeaturedCardGridComponent } from '../../../pages/Landingpage/FeaturedCard';
import '../../../index.css'
import '../../../App.css'
import { SaferIcon } from '../../../pages/Landingpage/icons/SaferIcon';
import { FasterIcon } from '../../../pages/Landingpage/icons/FasterIcon';
import { DefiIcon } from '../../../pages/Landingpage/icons/DefiIcon';

const meta = {
  title: 'Pages/Landingpage',
  component: FeaturedCardGridComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof FeaturedCardGridComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturedCardGrid: Story = {
  args: { 
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