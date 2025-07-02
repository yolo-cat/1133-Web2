const express = require('express');
const db = require('./DB');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// [功能] big_mac_index RESTful API 路由，含基本驗證。2025-07-02_15:05

// 取得全部資料
app.get('/api/bigmac', (req, res) => {
  db.all('SELECT * FROM big_mac_index', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 取得單筆資料
app.get('/api/bigmac/:id', (req, res) => {
  db.get('SELECT * FROM big_mac_index WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
  });
});

// 新增資料
app.post('/api/bigmac', (req, res) => {
  const data = req.body;
  // 基本驗證
  const required = ['date','iso_a3','currency_code','name','local_price','dollar_ex','dollar_price'];
  for (const key of required) {
    if (!data[key]) return res.status(400).json({ error: `${key} 為必填` });
  }
  const fields = Object.keys(data);
  const values = fields.map(f => data[f]);
  const placeholders = fields.map(() => '?').join(',');
  db.run(`INSERT INTO big_mac_index (${fields.join(',')}) VALUES (${placeholders})`, values, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

// 更新資料
app.put('/api/bigmac/:id', (req, res) => {
  const data = req.body;
  const fields = Object.keys(data);
  if (fields.length === 0) return res.status(400).json({ error: '無更新內容' });
  const setStr = fields.map(f => `${f} = ?`).join(', ');
  const values = fields.map(f => data[f]);
  values.push(req.params.id);
  db.run(`UPDATE big_mac_index SET ${setStr} WHERE id = ?`, values, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ updated: this.changes });
  });
});

// 刪除資料
app.delete('/api/bigmac/:id', (req, res) => {
  db.run('DELETE FROM big_mac_index WHERE id = ?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ deleted: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
