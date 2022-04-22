import React from 'react'

import { Card } from './index'

export default {
  title: 'Pricing/03_Questions/CardList/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  Question: [
    'question_1',
    'Q.2주 무료체험 후 요금이 자동결제 되나요?',
    '첫 회원가입 후, 카드 등록 유무와 관계없이 2주간 무료체험 기간을 드리고 있습니다. 무료 체험 기간이 종료되면 서비스 이용이 어려우며 지속적인 사용을 위해 카드 등록을 해 주셔야 합니다.',
  ],
}
