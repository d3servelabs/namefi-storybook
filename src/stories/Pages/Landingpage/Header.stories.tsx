import type { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from '../../../pages/Landingpage/Header';
import '../../../index.css'
import '../../../App.css'

const meta:Meta<typeof HeaderComponent> = {
  title: 'Pages/Landingpage',
  component: HeaderComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
}