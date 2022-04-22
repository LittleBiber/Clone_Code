import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card } from './Card'

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const CardList = () => {
  const DATA_LIST = [
    {
      id: 'question_1',
      question: 'Q.2주 무료체험 후 요금이 자동결제 되나요?',
      answer:
        '첫 회원가입 후, 카드 등록 유무와 관계없이 2주간 무료체험 기간을 드리고 있습니다. 무료 체험 기간이 종료되면 서비스 이용이 어려우며 지속적인 사용을 위해 카드 등록을 해 주셔야 합니다.',
    },
    {
      id: 'question_2',
      question: 'Q.남은 계약 체결 건 수는 이월되나요?',
      answer:
        '도뉴의 요금제는 월 결제 혹은 연 결제 시스템으로써 매달 계약 체결 건수가 초기화되어 이월이 불가합니다.',
    },
    {
      id: 'question_3',
      question:
        'Q.결제한 요금제 이용 중 그룹원을 추가할 경우 추가 비용이 발생하나요?',
      answer:
        '네, 사용하고 계신 요금제에서 추가 그룹원이 필요할 경우, 필요한 계정 수 만큼 추가할 수 있으며 계정수에 따라 추가 요금이 발생합니다. 추가 계정이 필요하시면, 실시간 상담으로 문의주시기 바랍니다.',
    },
    {
      id: 'question_4',
      question: 'Q.정기결제는 언제 청구되나요?',
      answer:
        '처음 결제한 날짜를 기준으로 다음 달 동일한 일자에 청구됩니다. 예를 들어 2월 8일에 첫 결제를 하셨을 경우, 익월인 3월 8일에 자동결제 됩니다.',
    },
  ]

  return (
    <Main>
      {DATA_LIST.map((one, idx) => (
        <Card {...one} key={idx} />
      ))}
    </Main>
  )
}

CardList.propTypes = {}
