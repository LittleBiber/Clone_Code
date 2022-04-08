import fs from "fs";

export const readDB = () => {
  try {
    return JSON.parse(
      fs.readFileSync("./src/controllers/db/users.json", "utf-8")
    );
  } catch (err) {
    console.error(err);
  }
};

export const findOne = (email: string) => {
  try {
    const found = JSON.parse(
      fs.readFileSync("./src/controllers/db/users.json", "utf-8")
    ).filter((user: any) => user.email === email);

    if (!found) return;

    return found[0];
  } catch (err) {
    console.error(err);
  }
};

export const writeDB = (data: any) => {
  const original = JSON.parse(
    fs.readFileSync("./src/controllers/db/users.json", "utf-8")
  );

  original.push(data);

  try {
    return fs.writeFileSync(
      "./src/controllers/db/users.json",
      JSON.stringify(original)
    );
  } catch (err) {
    console.error(err);
  }
};
