import React from 'react'

import { CardList } from './index'

export default {
  title: 'Legality/02_LawInfo/CardList',
  component: CardList,
}

const Template = (args) => <CardList {...args} />

export const Default = Template.bind({})
Default.args = {}
