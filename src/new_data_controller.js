const { GoogleSpreadsheet } = require("google-spreadsheet");
const fs = require("fs");

const RESPONSES_SHEET_ID = "1Yhrk-dU9iEl0m85X03N2vzrMU0rvnmAqwj9hn9bA3S0";
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

const CREDENTIALS = JSON.parse(
  fs.readFileSync("praxis-atrium-370214-0050dec5dbd1.json")
);

module.exports = async function (rows) {
  
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    await sheet.addRow(row);
  }
};
