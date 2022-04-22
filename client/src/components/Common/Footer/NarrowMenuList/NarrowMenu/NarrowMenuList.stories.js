import React from 'react'

import { NarrowMenu } from './index'

export default {
  title: 'Footer/NarrowMenuList/NarrowMenu',
  component: NarrowMenu,
}

const Template = (args) => <NarrowMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'intro',
  head: { title: '서비스 소개', href: '#' },
  tail: [
    { title: '전자계약 소개', href: '#' },
    { title: '기업 솔루션 소개', href: '#' },
    { title: '전자 서명/도장 만들기', href: '#' },
  ],
}
