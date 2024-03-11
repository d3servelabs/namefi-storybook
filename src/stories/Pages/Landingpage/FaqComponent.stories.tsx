import type { Meta, StoryObj } from '@storybook/react';
import { FaqComponent as FaqComponentComponent } from '../../../pages/Landingpage/FaqComponent';

const meta = {
  title: 'Pages/Landingpage',
  component: FaqComponentComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof FaqComponentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FaqComponent: Story = {
  args: {
    faqContent: [
      {
        question: 'What is Namefi??',
        answer: [
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                  fuga inventore id cumque, 
                  ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                  `ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                  `ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                  `ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                ]
      },
      {
        question: 'How does Namefi work?',
        answer: [ 
                  `Namefi is a web3 platform that lives on multi-chain supporting DNS domains on chain. 
                  With Namefi, you could manage your domains as an NFT asset, which means you can transfer,
                  list for sell, and integrate it with all the DeFi protocols.`,
                  `Besides, Namefi also aims to provide superb domain management
                  features such as AutoPark™, AutoENS™, DNS Records, Nameservers and URL forwarding.`
                ]
      },
      {
        question: 'What is $NFSC?',
        answer: [
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                  fuga inventore id cumque, 
                  ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                  `ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`
                ]
      },
      {
        question: 'What is AutoPark™?',
        answer: [
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                  fuga inventore id cumque, 
                  ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                  `ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`
                ]
      },
      {
        question: 'What is AutoENS™?',
        answer: [
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                  fuga inventore id cumque, 
                  ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                  `ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                  `ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
                ]
      },
    ]
  }
}