// DB.js
// 這是資料庫連線的基本範例，可根據實際需求修改

// 以 sqlite3 為例
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('資料庫連線失敗:', err.message);
  } else {
    console.log('成功連線到 SQLite 資料庫');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS big_mac_index (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    iso_a3 TEXT NOT NULL,
    currency_code TEXT NOT NULL,
    name TEXT NOT NULL,
    local_price REAL NOT NULL,
    dollar_ex REAL NOT NULL,
    dollar_price REAL NOT NULL,
    USD_raw REAL,
    EUR_raw REAL,
    GBP_raw REAL,
    JPY_raw REAL,
    CNY_raw REAL,
    GDP_bigmac REAL,
    adj_price REAL,
    USD_adjusted REAL,
    EUR_adjusted REAL,
    GBP_adjusted REAL,
    JPY_adjusted REAL,
    CNY_adjusted REAL
  )`);
});
// [功能] 建立 big_mac_index 資料表，對應 CSV 欄位。2025-07-02_15:00

module.exports = db;
