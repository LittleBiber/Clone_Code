import React from 'react'

import { Promotion } from './index'

export default {
  title: 'Promition',
  component: Promotion,
}

const Template = (args) => <Promotion {...args} />

export const Default = Template.bind({})
Default.args = {}
