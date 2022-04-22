import React from 'react'

import { Price } from './index'

export default {
  title: 'Voucher/03_Price',
  component: Price,
}

const Template = (args) => <Price {...args} />

export const Default = Template.bind({})
Default.args = {}
