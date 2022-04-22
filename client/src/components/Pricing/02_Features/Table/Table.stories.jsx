import React from 'react'

import { Table } from './index'

export default {
  name: 'Pricing/02_Features/Table',
  component: Table,
}

const Template = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  type: '개인',
  data: {
    table_title: '기본 제공 기능',
    options: [
      { name: '첨부파일 업로드', basic: true, pro: true },
      { name: '실시간 채팅 기능', basic: true, pro: true },
      { name: '이메일/SMS/카카오톡 알림', basic: true, pro: true },
      { name: '나만의 서명 꾸미기', basic: true, pro: true },
      { name: '온라인/전화 지원', basic: true, pro: true },
    ],
  },
}
