import type { Meta, StoryObj } from '@storybook/react';
import {HomePageContent} from '@pages/home/content';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/HomePage/Content',
  component: HomePageContent,
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof HomePageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {}