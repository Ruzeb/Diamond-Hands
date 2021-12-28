const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const uri = "mongodb+srv://ruzeb:mongodb@cluster0.exjb3.mongodb.net/diamond_hands?retryWrites=true&w=majority";

app.use(express.json());

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error });
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
