import React from 'react'

import { Box01 } from './index'

export default {
  component: Box01,
  title: 'Voucher/Box01',
}

const Template = (args) => <Box01 {...args} />

export const Default = Template.bind({})
Default.args = {
  title: '지원 금액',
  desc: '4,000,000원',
  sub_desc: '(자부담 30% 포함, VAT 별도)',
}
