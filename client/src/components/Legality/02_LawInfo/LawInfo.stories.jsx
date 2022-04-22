import React from 'react'

import { LawInfo } from './index'

export default {
  title: 'Legality/02_LawInfo',
  component: LawInfo,
}

const Template = (args) => <LawInfo {...args} />

export const Default = Template.bind({})
Default.args = {}
