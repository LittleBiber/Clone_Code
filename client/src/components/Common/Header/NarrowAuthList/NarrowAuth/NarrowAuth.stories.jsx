import React from 'react'

import { NarrowAuth } from './index'

export default {
  title: 'NarrowAuth',
  component: NarrowAuth,
}

const Template = (args) => <NarrowAuth {...args} />

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
