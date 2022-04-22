import React from 'react'

import { CardMenu } from './index'

export default {
  title: 'Legality/02_LawInfo/CardMenu',
  component: CardMenu,
}

const Template = (args) => <CardMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    'law_01',
    '한국 민법 (낙성불요식 계약 원칙)',
    [
      '「 계약에 대한 별도의 형식을 요구하지 않고, 당사자간의 합의만으로 계약의 성립을 인정하는 낙성불요식 원칙을 준수한다. 」',
      '「 계약 참여자들이 해당 계약 내용에 대해 동의한 사실을 증명할 수 있으면 그 형태가 무엇이든 법적 효력이 인정된다. 」',
    ],
    '- 도뉴는 이메일, 휴대폰 번호 등 개인의 신원이 인증된 계약 참여자들의 모든 행동 및 데이터를 기록한 후 블록체인을 통해 계약서 원본의 진위 여부를 판별하고 있습니다.',
  ],
}
