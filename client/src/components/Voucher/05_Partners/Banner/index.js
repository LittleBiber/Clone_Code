import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 113px;
  position: relative;
  overflow: hidden;
  user-select: none;
  max-width: 1216px;
  margin: 80px 0px 0px;

  .wrapper {
    width: calc(4752px);
    align-items: center;
    animation: bannermove 30s linear infinite;
    display: flex;
    height: 100%;
    user-select: none;

    @media (max-width: 991px) {
      width: calc(2880px);
    }

    .image_wrapper {
      position: relative;
      overflow: hidden;
      min-width: 180px;

      img {
        width: 100%;
        height: 100%;

        @media (max-width: 991px) {
          width: 180px;
        }
      }
    }
  }

  @keyframes bannermove {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .gradient {
    position: absolute;
    // background: grey;
    width: 90px;
    height: 100%;
    z-index: 10;
  }

  .left {
    top: 0;
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0) -2%, white 66%);
  }

  .right {
    top: 0;
    right: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) -2%,
      white 66%
    );
  }
`

export const Banner = () => {
  return (
    <Main>
      <div className="gradient left"></div>
      <div className="wrapper">
        <div className="image_wrapper">
          <img src="Banner/01_ace.png" alt="ace" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/02_blank.png" alt="blank" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/03_pig.png" alt="pig" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/04_pastoboy.png" alt="pastoboy" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/05_liwu.png" alt="liwu" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/06_yoonandyang.png" alt="yoonandyang" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/07_sejonglib.png" alt="sejonglib" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/08_donghohr.png" alt="donghohr" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/01_ace.png" alt="ace" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/02_blank.png" alt="blank" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/03_pig.png" alt="pig" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/04_pastoboy.png" alt="pastoboy" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/05_liwu.png" alt="liwu" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/06_yoonandyang.png" alt="yoonandyang" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/07_sejonglib.png" alt="sejonglib" />
        </div>
        <div className="image_wrapper">
          <img src="Banner/08_donghohr.png" alt="donghohr" />
        </div>
      </div>
      <div className="gradient right"></div>
    </Main>
  )
}

Banner.propTypes = {}
