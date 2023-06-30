const models = require("../models");

const browse = (req, res) => {
  models.brands
    .getAllbrands()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const product = req.body;

  // TODO validations (length, format...)

  models.brands
    .insert(product)
    .then(([result]) => {
      res.location(`/brands/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
