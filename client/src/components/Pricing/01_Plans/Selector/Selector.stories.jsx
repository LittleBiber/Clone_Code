import React from 'react'

import { Selector } from './index'

export default {
  title: 'Pricing/01_Plans/Selector',
  component: Selector,
}

const Template = (args) => <Selector {...args} />

export const Default = Template.bind({})
Default.args = {}
