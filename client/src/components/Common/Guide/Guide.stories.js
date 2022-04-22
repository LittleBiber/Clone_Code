import React from 'react'

import { Guide } from './index'

export default {
  title: 'Guide',
  component: Guide,
}

const Template = (args) => <Guide {...args} />

export const Default = Template.bind({})
Default.args = {}
