import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all.js'

import { CardMenu } from '../Card'

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (max-width: 991px) {
    width: 95%;
    gap: 20px;
  }
`
export const CardList = () => {
  const DATA_LIST = [
    {
      id: 'law_01',
      title: '한국 민법 (낙성불요식 계약 원칙)',
      desc: [
        '「 계약에 대한 별도의 형식을 요구하지 않고, 당사자간의 합의만으로 계약의 성립을 인정하는 낙성불요식 원칙을 준수한다. 」',
        '「 계약 참여자들이 해당 계약 내용에 대해 동의한 사실을 증명할 수 있으면 그 형태가 무엇이든 법적 효력이 인정된다. 」',
      ],
      desc_sub:
        '- 도뉴는 이메일, 휴대폰 번호 등 개인의 신원이 인증된 계약 참여자들의 모든 행동 및 데이터를 기록한 후 블록체인을 통해 계약서 원본의 진위 여부를 판별하고 있습니다.',
    },
    {
      id: 'law_02',
      title: '전자서명법 제 3조 1항, 2항',
      desc: [
        '「 제 3조 1항 : 전자서명은 전자적 형태라는 이유만으로 서명, 서명날인 또는 기명날인으로서의 효력이 부인되지 아니한다. 」',
        '「 제 3조 2항 : 법령의 규정 또는 당사자 간의 약정에 따라 서명, 서명날인 또는 기명날인의 방식으로 전자서명을 선택한 경우 그 전자서명은 서명, 서명날인 또는 기명날인으로서의 효력을 가진다. 」',
      ],
      desc_sub:
        '- 도뉴에서 사용하는 전자서명 및 도장은 실물 서명 및 도장과 동일한 법적 효력을 보장받습니다.',
    },
    {
      id: 'law_03',
      title: '전자문서 및 전자거래 기본법 제 4조 1항',
      desc: [
        '「 제 4조 1항 : 전자문서는 전자적 형태로 되어 있다는 이유만으로 법적 효력이 부인되지 아니한다. 」',
      ],
      desc_sub:
        '- 도뉴의 전자문서는 작성ㆍ변환되거나 송신ㆍ수신 또는 저장된 때의 형태 또는 그와 같이 재현될 수 있는 형태로 보존되며, 열람이 가능한 PDF 파일로 저장됩니다.',
    },
  ]

  return (
    <Main>
      {DATA_LIST.map((one, idx) => (
        <CardMenu {...one} key={idx} />
      ))}
    </Main>
  )
}

CardList.propTypes = {}
