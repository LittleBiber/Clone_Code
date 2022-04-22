const Templete = (type, data) => {
  if (type === "verify") {
    return `<div
    class="main"
    style="width: 100%; display: flex; flex-direction: column; align-items: center; background: white;"
  >
    <div>
      <img
        id="logo"
        src="https://s3.ap-northeast-2.amazonaws.com/img.stibee.com/35089_1608005944.png"
        alt="logo"
        style="height: 100px"
      />
      <div
        class="desc"
        style=" width: 100%; max-width: 630px; border-top: 1px solid grey; border-bottom: 1px solid grey; display: flex; flex-direction: column; align-items: center;"
      >
        <div class="header" style="text-align: center; margin: 20px 0">
          <div
            id="verify"
            style="font-size: 20px; font-weight: 700; margin: 0 0 10px 0"
          >
            가입 인증
          </div>
          <div id="verify_desc" style="font-size: 14px">
            아래 링크를 클릭하여 로그인하세요.
          </div>
        </div>
        <div
          class="linkbox"
          style=" width: 85%; height: 100%; padding: 40px; background: #f9f9f9; text-align: center;"
        >
          <a
            class="link_wrapper"
            href="${data}"
            style=" width: 100%; padding: 20px; color: #cc2121;
                    font-weight: 500;
                    word-break: break-all;
                    text-decoration: none;
                    font-size: 16px;
                    padding: 20px;
                    letter-spacing: -0.48px;
                  "
          >
            ${data}
          </a>
        </div>
        <div
          id="verify_caution"
          style="font-size: 14px; margin: 20px 0 40px 0; color: grey"
        >
          이메일 인증 유효 시간은
          <span style="color: black">30분</span> 입니다.
        </div>
        <div
          class="need_help"
          style="
                  width: 100%;
                  font-size: 14px;
                  padding: 0 15px;
                  line-height: 25px;
                "
        >
          가입 인증 후 로그인에 어려움이 있으시다면
          <br />
          언제든지
          <a
            href="#"
            style="
                    color: rgb(232, 88, 77);
                    font-style: normal;
                    font-weight: bold;
                    text-decoration: underline;
                  "
          >
            도움이 필요하신가요?
          </a>
          를 통해 문의해 주시길 바랍니다.
        </div>
        <div
          class="thanks"
          style="
                  width: 100%;
                  padding: 0 15px;
                  margin: 40px 0 20px;
                  font-size: 14px;
                  line-height: 25px;
                "
        >
          감사합니다.
          <br />
          도뉴팀 드림
        </div>
      </div>
  
      <div
        class="icon_wrapper"
        style="
                margin: 30px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                gap: 24px;
              "
      >
        <a href="https://donue.co.kr/" style="text-decoration: none; color: grey">
          <img
            src="https://stibee.com/assets/images/sns/grey/sns_icon_homepage.png"
            alt="homepage"
            style="height: 30px"
          />
        </a>
        <a
          href="https://blog.naver.com/donue_solution"
          style="text-decoration: none; color: grey"
        >
          <img
            src="https://stibee.com/assets/images/sns/grey/sns_icon_blog.png"
            alt="blog"
            style="height: 30px"
          />
        </a>
        <a
          href="https://www.facebook.com/donue.solution/"
          style="text-decoration: none; color: grey"
        >
          <img
            src="https://stibee.com/assets/images/sns/grey/sns_icon_facebook.png"
            alt="facebook"
            style="height: 30px"
          />
        </a>
      </div>
      <div
        class="company_info"
        style="
                width: 100%;
                font-size: 12px;
                color: grey;
                text-align: center;
                line-height: 20px;
              "
      >
        <div>도뉴</div>
        <div>contact@donue.co.kr</div>
        <div>서울 중구 퇴계로 10, 14층 02-6250-5300</div>
        <div>
          <a
            href="https://mail.naver.com/read/$%unsubscribe%$"
            style="color: grey; text-decoration: underline"
          >
            수신거부
          </a>
          <a
            href="https://mail.naver.com/read/$%unsubscribe%$"
            style="color: grey; text-decoration: underline"
          >
            Unsubscribe
          </a>
        </div>
      </div>
    </div>
  </div>;
  `;
  } else if (type === "welcome") {
    return `<div
    class="main"
    style="
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: white;
          "
  >
    <img
      id="logo"
      src="https://s3.ap-northeast-2.amazonaws.com/img.stibee.com/35089_1608005944.png"
      alt="logo"
      style="height: 100px"
    />
    <div
      class="desc"
      style="
              width: 100%;
              max-width: 630px;
              border-top: 1px solid grey;
              border-bottom: 1px solid grey;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
    >
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/img.stibee.com/35089_1607938723.png"
        alt="welcome"
        class="welcome_img"
        style="width: 600px; margin: 20px"
      />
      <div
        class="need_help"
        style="
                width: 100%;
                font-size: 14px;
                padding: 0 15px;
                line-height: 25px;
              "
      >
        안녕하세요 ${data}님!
        <br />
        도뉴 회원이 되신 것을 진심으로 환영합니다.
        <br />
        <br />
        앞으로 ${data}님의
        <br />
        보다 편리한 계약과 문서 관리를 위해 최선을 다하겠습니다.
        <br />
        <br />
        서비스 사용하기에 앞서 저희가 제공하는 기능들이
        <br />
        궁금하시다면
        <a
          style="
                  color: rgb(232, 88, 77);
                  font-style: normal;
                  font-weight: bold;
                  text-decoration: underline;
                "
          href="https://www.notion.so/firmacorp/5670296a663d4732a6e12c48dc0ff87a"
        >
          도뉴 사용 가이드
        </a>
        를 확인해주세요.
        <br />
        여러가지 기능들을 한눈에 파악하실 수 있습니다!
        <br />
        <br />
        이 외에, 추가적으로 궁금하신 사항이 있을 경우 <br />
        언제든지
        <a
          style="
                  color: rgb(232, 88, 77);
                  font-style: normal;
                  font-weight: bold;
                  text-decoration: underline;
                "
        >
          도움이 필요하신가요?
        </a>
        를 통해 문의해 주시길 바랍니다.
      </div>
      <div
        class="thanks"
        style="
                width: 100%;
                padding: 0 15px;
                margin: 40px 0 20px;
                font-size: 14px;
                line-height: 25px;
              "
      >
        감사합니다.
        <br />
        도뉴팀 드림
      </div>
      <a
        href="https://portal.donue.co.kr/user/signin"
        class="start_button"
        style="
                background: #cd001a;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                margin: 10px 0 20px 0;
                text-decoration: none;
                width: 170px;
                height: 50px;
              "
      >
        도뉴 시작하기
      </a>
      <div
        class="help"
        style="
                font-size: 15px;
                display: flex;
                text-align: center;
                justify-content: center;
                text-decoration: underline;
                gap: 5px;
                flex-direction: column;
                margin-bottom: 30px;
              "
      >
        <div>
          <a
            href="https://www.notion.so/firmacorp/5670296a663d4732a6e12c48dc0ff87a"
            style="color: #cd001a"
          >
            도뉴 사용 가이드
          </a>
        </div>
        <div>
          <a style="color: #cd001a">도움이 필요하신가요?</a>
        </div>
      </div>
    </div>
  
    <div
      class="icon_wrapper"
      style="
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              gap: 24px;
              padding: 30px;
            "
    >
      <a href="https://donue.co.kr/" style="text-decoration: none; color: grey">
        <img
          src="https://stibee.com/assets/images/sns/grey/sns_icon_homepage.png"
          alt="homepage"
          style="height: 30px"
        />
      </a>
      <a
        href="https://blog.naver.com/donue_solution"
        style="text-decoration: none; color: grey"
      >
        <img
          src="https://stibee.com/assets/images/sns/grey/sns_icon_blog.png"
          alt="blog"
          style="height: 30px"
        />
      </a>
      <a
        href="https://www.facebook.com/donue.solution/"
        style="text-decoration: none; color: grey"
      >
        <img
          src="https://stibee.com/assets/images/sns/grey/sns_icon_facebook.png"
          alt="facebook"
          style="height: 30px"
        />
      </a>
    </div>
    <div
      class="company_info"
      style="
              width: 100%;
              font-size: 12px;
              color: grey;
              text-align: center;
              line-height: 20px;
            "
    >
      <div>도뉴</div>
      <div>contact@donue.co.kr</div>
      <div>서울 중구 퇴계로 10, 14층 02-6250-5300</div>
      <div>
        <a
          href="https://mail.naver.com/read/$%unsubscribe%$"
          style="color: grey; text-decoration: underline"
        >
          수신거부
        </a>
        <a
          href="https://mail.naver.com/read/$%unsubscribe%$"
          style="color: grey; text-decoration: underline"
        >
          Unsubscribe
        </a>
      </div>
    </div>
  </div>;
  `;
  }
};

export default Templete;
