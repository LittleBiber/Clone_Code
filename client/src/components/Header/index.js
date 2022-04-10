import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "./Button";
import { DropdownMenu } from "./DropdownMenu";

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  max-width: 1216px;
  padding: 0px 20px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 7rem;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo_wrapper">
        <Logo src="logo.png" alt="logo" className="logo" />
      </div>
      <MenuList>
        <DropdownMenu
          title="서비스 소개"
          options={[
            "전자계약 소개",
            "기업 솔루션 소개",
            "전자 서명/도장 만들기",
          ]}
        />
        <DropdownMenu title="법적효력/보안" options={["법적효력", "보안"]} />
        <DropdownMenu
          title="리소스"
          options={["고객 사례", "블로그", "사용 가이드"]}
        />
        <DropdownMenu title="요금 안내" />
        <DropdownMenu title="비대면 바우처" />
      </MenuList>
      <div className="auth">
        <Button type={true} />
        <Button type={false} />
      </div>
    </HeaderWrapper>
  );
};

PropTypes.propTypes = {};
