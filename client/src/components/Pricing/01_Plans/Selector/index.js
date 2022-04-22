import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 30px 0;
  width: 100%;
  justify-content: center;
  position: relative;

  @media (max-width: 991px) {
    background: white;
  }

  input[type='radio'] {
    appearance: none;
    width: 20px;
    height: 20px;
    outline: none;
    flex-shrink: 0;
    border-radius: 50%;
    background-image: url(/radio_button2.svg);
    vertical-align: middle;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;

    :checked {
      background-image: url(/radio_button1.svg);
    }

    @media (max-width: 991px) {
      display: inline;
    }
  }

  .discount {
    width: 110px;
    height: 30px;
    margin: 0px 0px 0px 10px;
    border-radius: 60px;
    background-color: #ffc834;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; // 박스 구조에서 분리시키기
    transform: translate(170px, 0px); // 원래 위치에서 이동시키기
    font-family: SourceHanSansK-Bold;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.42px;

    @media (max-width: 991px) {
      display: none;
    }
  }

  @media (max-width: 991px) {
    display: flex;
    gap: 60px;
    font-size: 16px;
  }

  .period {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const Toggle = styled.div`
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 30px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #713838;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #713838;
  }

  input:checked + .slider:before {
    transform: translateX(40px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 22px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  @media (max-width: 991px) {
    display: none;
  }
`

export const Selector = ({ onClick, period }) => {
  return (
    <Main>
      <div className="period">
        <input
          type="radio"
          name="period"
          id="period_personal"
          value={0}
          onClick={onClick}
          defaultChecked={period === 0 ? 'checked' : ''}
        />
        <label htmlFor="period_personal">월 결제</label>
      </div>
      <Toggle>
        <label className="switch">
          <input type="checkbox" onClick={onClick} />
          <span className="slider round"></span>
        </label>
      </Toggle>
      <div className="period">
        <input
          type="radio"
          name="period"
          id="period_enterprise"
          value={1}
          onClick={onClick}
          defaultChecked={period === 1 ? 'checked' : ''}
        />
        <label htmlFor="period_enterprise">연 결제</label>
      </div>
      <div className="discount">연간 20% 할인</div>
    </Main>
  )
}

Selector.propTypes = {
  onClick: PropTypes.func,
}
