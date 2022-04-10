import React from "react";

import { Banner } from "./index";

export default {
  title: "Legality/01_Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {};
