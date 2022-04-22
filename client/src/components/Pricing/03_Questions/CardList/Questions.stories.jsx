import React from 'react'

import { CardList } from './index'

export default {
  title: 'Pricing/03_Questions/CardList',
  component: CardList,
}

const Template = (args) => <CardList {...args} />

export const Default = Template.bind({})
Default.args = {}
