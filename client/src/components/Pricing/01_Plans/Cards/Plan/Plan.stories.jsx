import React from 'react'

import { Plan } from './index'

export default {
  title: 'Pricing/01_Plans/Plan',
  component: Plan,
}

const Template = (args) => <Plan {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'BASIC I',
  color: '#987070',
  type: '개인',
  spic: true,
  expense: '9,900',
  expense_year: '7,920',
  result: { count: 10, attach: 3, group: null },
  status: 1,
}
