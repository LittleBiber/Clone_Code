import React from 'react'

import { Plan } from './index'

export default {
  title: 'Voucher/03_Price/Plan',
  component: Plan,
}

const Template = (args) => <Plan {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'PRO I',
  expense: ['479,040', '335,328', '143,712'],
  reuslt: ['300건', '무제한', '3명'],
}
