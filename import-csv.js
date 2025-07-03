// import-csv.js
// [功能] 讀取 big-mac-full-index.csv 並將資料寫入 big_mac_index 資料表。2025-07-03_15:30

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const db = require('./DB');

const csvFilePath = path.resolve(__dirname, 'big-mac-full-index.csv');

const insertRow = (row) => {
  const fields = Object.keys(row);
  const values = fields.map(f => row[f] === '' ? null : row[f]);
  const placeholders = fields.map(() => '?').join(',');
  db.run(`INSERT INTO big_mac_index (${fields.join(',')}) VALUES (${placeholders})`, values, (err) => {
    if (err) console.error('插入失敗:', err.message, row);
  });
};

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', insertRow)
  .on('end', () => {
    console.log('CSV 匯入完成');
    db.close();
  });

