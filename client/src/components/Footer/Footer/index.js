import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

import { FooterMenu } from "../FooterMenu";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_company_info">
        <img src="logo_footer.png" alt="footer" className="logo_wrapper" />
        <div className="company_info">
          주식회사 도뉴 <br />
          서울특별시 중구 퇴계로 10, 14층 <br />
          대표이사 : 김정완 <br />
          사업자등록번호 : 447-81-02244 <br />
          통신판매번호 : 2021-서울중구-1839 <br />
          이메일 : contact@donue.co.kr <br />
          전화번호 : 02-6250-5300
        </div>
      </div>
      <div className="footer_options">
        <FooterMenu
          title="서비스 소개"
          options={[
            "전자계약 소개",
            "기업 솔루션 소개",
            "전자 서명/도장 만들기",
          ]}
        />
        <FooterMenu title="법적효력/보안" options={["법적효력", "보안"]} />
        <FooterMenu
          title="리소스"
          options={["고객 사례", "블로그", "사용 가이드"]}
        />
        <FooterMenu title="요금 안내" options={["요금 안내"]} />
        <FooterMenu title="비대면 바우처" options={["비대면 바우처"]} />
      </div>
    </div>
  );
};

PropTypes.propTypes = {};
