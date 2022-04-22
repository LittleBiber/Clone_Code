import React from 'react'

import { NarrowAuthList } from './index'

export default {
  title: 'NarrowAuthList',
  component: NarrowAuthList,
}

const Template = (args) => <NarrowAuthList {...args} />

export const Default = Template.bind({})
Default.args = {}
