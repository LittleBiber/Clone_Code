import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

import { Header } from './Header'
import { Table } from './Table'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 0 0 0;
`

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
`

const Title = styled.div`
  .title {
    font-size: 35px;
    font-weight: bold;
    margin: 20px 0;
  }

  .desc {
    font-size: 20px;
    margin: 10px 0;
  }

  @media (max-width: 991px) {
    text-align: center;
    padding-bottom: 30px;

    .title {
      font-size: 25px;
    }
    .desc {
      font-size: 18px;

      @media (max-width: 991px) {
        font-size: 16px;
      }
    }
  }
`

const TableBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dddddd;
`

export const Tables = () => {
  const [type, setType] = useState('개인')

  const TABLE_DATA = [
    {
      title: '기본 제공 기능',
      options: [
        { title: '첨부파일 업로드', basic: true, pro: true },
        { title: '실시간 채팅 기능', basic: true, pro: true },
        { title: '이메일/SMS/카카오톡 알림', basic: true, pro: true },
        { title: '나만의 서명 꾸미기', basic: true, pro: true },
        { title: '온라인/전화 지원', basic: true, pro: true },
      ],
    },
    {
      title: '보안 기능',
      options: [
        { title: '블록체인 기술로 계약서 위변조 검증', basic: true, pro: true },
        { title: '감사추적인증서', basic: true, pro: true },
        { title: '본인인증 설정', basic: true, pro: true },
      ],
    },
    {
      title: '기업 기능',
      options: [
        { title: '그룹 관리', basic: false, pro: true },
        { title: '그룹원 계약 관리', basic: false, pro: true },
        { title: '대량 전송', basic: false, pro: true },
      ],
    },
  ]

  return (
    <Wrapper>
      <Main>
        <Title>
          <div className="title">요금별 기능 비교</div>
          <div className="desc">
            본인에게 필요한 기능을 제공하는 요금을 선택하세요.
          </div>
        </Title>
        <Header setType={setType} type={type} />
        <Table {...TABLE_DATA[0]} type={type} />
        <TableBar />
        <Table {...TABLE_DATA[1]} type={type} />
        <TableBar />
        <Table {...TABLE_DATA[2]} type={type} />
      </Main>
    </Wrapper>
  )
}

Tables.propTypes = {}
