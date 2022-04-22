const signout = async (req, res) => {
  const jwt = req.cookies["jwt"];

  if (!jwt) return res.sendStatus(400);

  res.clearCookie("jwt").sendStatus(200);
};

export default signout;
