import React from 'react'

import { Plans } from './index'

export default {
  title: 'Pricing/01_Plans',
  component: Plans,
}

const Template = (args) => <Plans {...args} />

export const Default = Template.bind({})
Default.args = {}
