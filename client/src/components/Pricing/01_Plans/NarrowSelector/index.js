import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 150px;
  width: 100%;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #dddddd;
  background: white;

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
    text-align: center;
    width: 45px;
    height: 30px;
    color: #dddddd;
    font-weight: 600;
    font-size: 16px;
  }

  .checked {
    color: #713838;
    border-bottom: 3px solid #713838;
  }
`

export const NarrowSelector = ({ setType, type }) => {
  return (
    <Main>
      <TypeSelector target="personal">
        <input
          type="radio"
          name="type"
          id="personal"
          onClick={() => setType('개인')}
        />
        <label htmlFor="personal" className="type_label">
          <div
            className={
              type === '개인' ? 'type_indicator checked' : 'type_indicator'
            }
          >
            개인
          </div>
        </label>
      </TypeSelector>
      <TypeSelector target="enterprise">
        <input
          type="radio"
          name="type"
          id="enterprise"
          onClick={() => setType('기업')}
        />
        <label htmlFor="enterprise" className="type_label">
          <div
            className={
              type === '기업' ? 'type_indicator checked' : 'type_indicator'
            }
          >
            기업
          </div>
        </label>
      </TypeSelector>
    </Main>
  )
}

NarrowSelector.propTypes = {
  onClick: PropTypes.func,
}
