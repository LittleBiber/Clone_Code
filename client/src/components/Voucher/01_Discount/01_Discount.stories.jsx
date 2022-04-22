import React from 'react'

import { Discount } from './index'

export default {
  title: 'Voucher/01_Discount',
  component: Discount,
}

const Template = (args) => <Discount {...args} />

export const Default = Template.bind({})
Default.args = {}
