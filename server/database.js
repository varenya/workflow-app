const sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    db.run(
      `CREATE TABLE study_details (
            study_name text,
            visit_number text
        )
      `,
      (err) => {
        if (err) {
          //   console.error(err);
        }
      }
    );
  }
});

module.exports = db;
