import fs from "fs";

export const readDB = (type) => {
  try {
    return JSON.parse(
      fs.readFileSync(`./controllers/DB/${type}.json`, "utf-8")
    );
  } catch (err) {
    console.error(err);
  }
};

export const findOne = (type, email) => {
  try {
    const found = JSON.parse(
      fs.readFileSync(`./controllers/DB/${type}.json`, "utf-8")
    ).filter((user) => user.email === email);

    if (!found) return null;

    return found[0];
  } catch (err) {
    console.error(err);
  }
};

export const writeDB = (type, data) => {
  const original = JSON.parse(
    fs.readFileSync(`./controllers/DB/${type}.json`, "utf-8")
  );

  newData = [...original, data];

  try {
    fs.writeFileSync(`./controllers/DB/${type}.json`, JSON.stringify(newData));

    delete data.password;

    return data;
  } catch (err) {
    console.error(err);
  }
};
