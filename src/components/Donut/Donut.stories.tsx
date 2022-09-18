import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Donut from './Donut'

export default {
  title: 'Donut',
  component: Donut,
} as ComponentMeta<typeof Donut>

const Template: ComponentStory<typeof Donut> = args => <Donut {...args} />

export const Default = Template.bind({})

Default.args = {
  withTotal: true,
  totalClassName: 'yourClassName',
  sectionColors: ['cyan', 'pink'],
  donutData: [
    {
      slug: 'example-1',
      label: 'A value',
      value: 100,
    },
    {
      slug: 'example-2',
      label: 'B value',
      value: 300,
    },
  ],
}
