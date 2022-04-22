import React from 'react'

import { Selection } from './index'

export default {
  title: 'SignUp/CompanyData/Part1/Selection',
  component: Selection,
}

const Template = (args) => <Selection {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    'question_1',
    '산업군을 선택해주세요',
    [
      '농업, 임업 및 어업',
      '광업',
      '제조업',
      '전기, 가스, 증기 및 공기조절공급업',
      '수도, 하수 및 폐기물 처리, 원료 재생업',
      '건설업',
      '도매 및 소매업',
      '운수 및 창고업',
      '숙박 및 음식점업',
      '정보통신업',
      '금융 및 보험업',
      '부동산업',
      '전문, 과학 및 기술서비스업',
      '사업시설 관리, 사업 지원 및 임대 서비스업',
      '공공행정, 국방 및 사회보장 행정',
      '교육서비스',
      '보건업 및 사회복지 서비스업',
      '예술, 스포츠 및 여가관련 서비스업',
      '협회 및 단체, 수리 및 기타 개인 서비스업',
      '가구 내 고용활동, 자가소비 생산활동',
      '국제 및 외국기관',
    ],
  ],
}
