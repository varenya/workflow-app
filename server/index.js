const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const database = require("./database");
const app = express();
const port = 3000;

const frontEndFolder = path.join(__dirname, "../frontend");

app.use(bodyParser.json());

app.use(express.static(frontEndFolder));

app.get("/get-studies", (req, res) => {
  let sql = `select * from study_details`;
  let params = [];
  database.all(sql, params, (err, rows) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.json({
      data: rows,
    });
  });
});

app.post("/add-study", (req, res) => {
  const { studyName, visitNumber } = req.body;
  if (!/^[0-9]*$/.match(visitNumber)) {
    res.sendStatus(400).json({ message: "invalid visitNumber" });
  }
  let sql = `insert into study_details (study_name,visit_number) values (?,?)`;
  let params = [studyName, visitNumber];
  database.run(sql, params, (err) => {
    if (err) {
      console.error(err);
    }
    res.json({ message: "done" });
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
