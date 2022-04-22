import React from 'react'

import { SendVerify } from './index'

export default {
  title: 'SignUp/SendVerify',
  component: SendVerify,
}

const Template = (args) => <SendVerify {...args} />

export const Default = Template.bind({})
Default.args = {}
