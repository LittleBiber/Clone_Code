import React from 'react'

import { Option } from './index'

export default {
  title: 'Pricing/02_Features/Table/Option',
  component: Option,
}

const Template = (args) => <Option {...args} />

export const Default = Template.bind({})
Default.args = {
  name: '첨부파일 업로드',
  basic: true,
  pro: true,
  type: '개인',
}
