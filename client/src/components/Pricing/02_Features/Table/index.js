import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'
import { Option } from '../Option'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 0 0 0;

  @media (max-width: 991px) {
    padding: 0;
  }
`

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px 0;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;

  .table_title {
    color: #763e3e;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: flex-start;
    padding-left: 100px;
    height: 60px;

    @media (max-width: 991px) {
      padding-left: 20px;
    }
  }
`

export const Table = ({ title, options, type }) => {
  return (
    <Wrapper>
      <Main>
        <div className="table_title">{title}</div>
        {options.map((one, idx) => (
          <Option {...one} key={idx} type={type} />
        ))}
      </Main>
    </Wrapper>
  )
}

Table.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
}
