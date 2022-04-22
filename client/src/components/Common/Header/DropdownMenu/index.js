import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const OptionsList = styled.div`
  margin-top: 20px;
  padding: 8px 0;
  display: none;
  border-radius: 4px;
  background-color: white;
  min-width: 140px;
`

const Menu = styled.div`
  padding: 14px;

  .menu_name,
  .link {
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
  }

  :hover {
    .menu_name {
      color: red;
    }

    .menu_title {
      color: red;
    }

    ${OptionsList} {
      display: block;
      box-shadow: rgb(0 0 0 / 16%) 0px 0px 12px 0px;
      position: absolute;
    }
  }

  .menu_title {
    color: black;
    font-weight: 500;
  }
`

const Option = styled.div`
  padding: 15px;
  color: black;

  :hover {
    background-color: #f8f8f8;
    cursor: pointer;
    border-radius: 4px;
  }
`

export const DropdownMenu = ({ title, options = [], nav_title }) => {
  return (
    <Menu>
      <div className="menu_name">
        <Link to={nav_title || '#'} className="link">
          <div className="menu_title">{title}</div>
        </Link>

        {options.length ? (
          <FontAwesomeIcon icon={faAngleDown} className="angle-down" />
        ) : null}
      </div>
      {options.length > 0 ? (
        <OptionsList>
          {options.map((one, idx) => (
            <Link to={one.href} key={idx}>
              <Option>{one.title}</Option>
            </Link>
          ))}
        </OptionsList>
      ) : (
        ''
      )}
    </Menu>
  )
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
}
