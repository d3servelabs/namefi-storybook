import type { Meta, StoryObj } from '@storybook/react';

import {DomainTakenMessage} from '../../components/DomainTakenMessage';
import '../../index.css'
import '../../App.css'

const meta = {
  title: 'Components/DomainTakenMessage',
  component: DomainTakenMessage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof DomainTakenMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DomainTakenMessageStory: Story = {
  args: {
    isLoading: false,
    buttonProps: {
        onClick: () => {},
        label: '',
        children: null
    }
  }
}