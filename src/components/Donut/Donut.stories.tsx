import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Donut from './Donut'

export default {
  title: 'Donut',
  component: Donut,
} as ComponentMeta<typeof Donut>

const Template: ComponentStory<typeof Donut> = args => <Donut {...args} />

export const HelloWorld = Template.bind({})
HelloWorld.args = {
  label: 'Hello world!',
}
