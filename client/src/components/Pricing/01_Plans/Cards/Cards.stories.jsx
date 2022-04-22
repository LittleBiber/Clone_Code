import React from 'react'

import { Cards } from './index'

export default {
  title: 'Pricing/01_Plans/Cards',
  component: Cards,
}

const Template = (args) => <Cards {...args} />

export const Default = Template.bind({})
Default.args = {}
