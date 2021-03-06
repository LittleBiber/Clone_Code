import React from 'react'

import { FooterMenu } from './index'

export default {
  title: 'Footer/FooterMenu',
  component: FooterMenu,
}

const Template = (args) => <FooterMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  title: '서비스 소개',
  options: [
    { title: '전자계약 소개', href: '#' },
    { title: '기업 솔루션 소개', href: '#' },
    { title: '전자 서명/도장 만들기', href: '#' },
  ],
}
