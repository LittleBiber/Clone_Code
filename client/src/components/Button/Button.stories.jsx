import React from "react";

import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: "로그인",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "회원가입",
};
