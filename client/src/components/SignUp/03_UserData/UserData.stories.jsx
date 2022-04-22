import React from 'react'

import { UserData } from './index'

export default {
  title: 'SignUp/UserData',
  component: UserData,
}

const Template = (args) => <UserData {...args} />

export const Default = Template.bind({})
Default.args = {}
