"use strict";

import dotenv from "dotenv";

dotenv.config();

import chalk from "chalk";
import express from "express";
import { uniqueNamesGenerator, starWars } from "unique-names-generator";

const config = {
  dictionaries: [starWars],
};

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  const characterName = uniqueNamesGenerator(config);

  res
    .json({
      name: characterName,
    })
    .status(200);
});

app.listen(port, () => {
  console.log(chalk.green("Server is listening at Port: ", port));
});
