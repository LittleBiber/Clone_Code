import React from "react";

import { DropdownMenu } from "./index";

export default {
  title: "DropdownMenu",
  component: DropdownMenu,
};

const Template = (args) => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "서비스 소개",
  options: ["전자계약 소개", "기업 솔루션 소개", "전자 서명/도장 만들기"],
};
