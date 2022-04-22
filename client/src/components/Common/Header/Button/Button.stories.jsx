import React from 'react'

import { Button } from './index'

export default {
  title: 'Header/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const SignIn = Template.bind({})
SignIn.args = {
  type: true,
}

export const SignUp = Template.bind({})
SignUp.args = {
  type: false,
}
