import TokenFunction from "../Token/index.js";

const userdata = async (req, res) => {
  const jwt = req.cookies["jwt"];

  const data = TokenFunction.testToken(jwt);

  console.log(data);

  if (!data) return res.sendStatus(400);
  else return res.status(200).json({ ...data });
};

export default userdata;
