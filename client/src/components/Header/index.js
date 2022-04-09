import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

import { Button } from "../Button";
import { DropdownMenu } from "../DropdownMenu";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo_wrapper">
        <img src="logo.png" alt="logo" className="logo" />
      </div>
      <div className="menu_list">
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
      </div>
      <div className="auth">
        <Button primary={true} label="로그인" />
        <Button primary={false} label="회원가입" />
      </div>
    </div>
  );
};

PropTypes.propTypes = {};
