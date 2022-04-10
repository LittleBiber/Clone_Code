import React from "react";

import { BoxItemType01 } from "./index";

export default {
  component: BoxItemType01,
  title: "BoxItemType01",
};

const Template = (args) => <BoxItemType01 {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "지원 금액",
  desc: "4,000,000원",
  sub_desc: "(자부담 30% 포함, VAT 별도)",
};
