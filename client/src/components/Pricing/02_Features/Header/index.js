import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  position: sticky;
  top: 70px;
  z-index: 99;
  width: 100%;
  max-width: 1200px;
`

const Wide = styled.div`
  height: 100px;
  background-color: #f9f9f9;
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 8px 0px;

  div {
    flex: 1 1 0%; // flex-grow | flex-shrink | flex-basis
    min-height: 1px;
    text-align: center;
  }

  .dummy {
    margin-left: 100px;
  }

  .type {
    font-family: Lato;
    font-size: 24px;
    font-weight: bold;
    color: #763e3e;
  }

  @media (max-width: 991px) {
    display: none;
  }
`

const Narrow = styled.div`
  width: 100%;
  position: sticky;
  top: 70px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dddddd;
  background-color: white;
  gap: 120px;

  @media (min-width: 991px) {
    display: none;
  }
`

const TypeSelector = styled.div`
  margin-top: 15px;
  input[type='radio'] {
    display: none;
  }

  .type_label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .type_indicator {
    transition: all 0.1s ease-in-out 0s;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80px;
    color: #dddddd;
    font-weight: 600;
    font-size: 16px;
    border-bottom: 3px solid white;

    .type_title {
      font-size: 18px;
      padding: 10px 0 0 0;
    }

    .type_title_kor {
      font-size: 14px;
      font-weight: normal;
      padding: 8px 0;
    }
  }

  #${(props) => props.target}:checked ~ .type_label .type_indicator {
    color: #713838;
    border-bottom: 3px solid #713838;
  }
`

export const Header = ({ setType, type }) => {
  return (
    <Main>
      <Wide>
        <div className="dummy" />
        <div>
          <div className="type">BASIC</div>
          <div>개인</div>
        </div>
        <div>
          <div className="type">PRO</div>
          <div>기업</div>
        </div>
      </Wide>
      <Narrow>
        <TypeSelector target="function_personal">
          <input
            type="radio"
            name="function_type"
            id="function_personal"
            onClick={() => setType('개인')}
            defaultChecked={type === '개인' ? 'checked' : ''}
          />
          <label htmlFor="function_personal" className="type_label">
            <div className="type_indicator">
              <div className="type_title">BASIC</div>
              <div className="type_title_kor">개인</div>
            </div>
          </label>
        </TypeSelector>
        <TypeSelector target="function_enterprise">
          <input
            type="radio"
            name="function_type"
            id="function_enterprise"
            onClick={() => setType('기업')}
            defaultChecked={type === '기업' ? 'checked' : ''}
          />
          <label htmlFor="function_enterprise" className="type_label">
            <div className="type_indicator">
              <div className="type_title">PRO</div>
              <div className="type_title_kor">기업</div>
            </div>
          </label>
        </TypeSelector>
      </Narrow>
    </Main>
  )
}

Header.propTypes = {}
