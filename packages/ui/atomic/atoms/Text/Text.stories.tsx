import {Meta, StoryObj} from '@storybook/react'

import {Text, TextProps} from './index'

const meta: Meta<TextProps> = {
    argTypes: {},
    component: Text,
    title: 'Atoms/Text'
}

export default meta

type Story = StoryObj<TextProps>

export const Basic: Story = {
    args: {
        children: 'Tap me',
    },
    name: 'Basic'
}
