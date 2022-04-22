import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`

const One = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  img {
    width: 70px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
  }

  .desc {
    letter-spacing: -0.5px;
    word-break: keep-all;
  }

  @media (max-width: 991px) {
    width: 160px;

    .title {
      font-size: 16px;
    }

    .desc {
      font-size: 14px;
      width: 160px;
    }
  }
`

export const Pro = () => {
  return (
    <Main>
      <One>
        <img src="chat.png" alt="chat" />
        <div className="title">채팅</div>
        <div className="desc">
          계약 참여자간 채팅으로 실시간 협의가 가능합니다.
        </div>
      </One>
      <One>
        <img src="folder.png" alt="folder" />
        <div className="title">폴더 관리</div>
        <div className="desc">
          수많은 계약서를 폴더 기능으로 쉽게 관리할 수 있습니다.
        </div>
      </One>
      <One>
        <img src="group.png" alt="group" />
        <div className="title">그룹 관리</div>
        <div className="desc">
          그룹원들의 계약 현황을 한눈에 파악하고 관리할 수 있습니다.
        </div>
      </One>
      <One>
        <img src="mass.png" alt="mass" />
        <div className="title">대량 전송</div>
        <div className="desc">
          한번의 클릭으로 동일한 계약을 여러명에게 전송할 수 있습니다.
        </div>
      </One>
    </Main>
  )
}

Pro.propTypes = {}
