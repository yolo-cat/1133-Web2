#完成每項任務後，將其勾選為已完成，並在本文件新增程式碼詳細架構說明，並對修改的程式碼區塊加入功能備註和修改時間（格式：“日期_小時：分鐘”）備註。

1. 設計後端架構
   - [x] 確定使用的技術棧（Express）。
     - 已於 index.js 建立基本 Express 伺服器。// 2025-07-02_15:00
   - [x] 根據 big-mac-full-index.csv 設計數據庫結構。
     - 已於 DB.js 建立 big_mac_index 資料表，欄位對應 CSV。// 2025-07-02_15:00
   - [x] 設計 API 路由，包括 GET、POST、PUT、DELETE 方法。
     - 已於 index.js 新增 big_mac_index RESTful API 路由，含基本驗證。// 2025-07-02_15:05
   - [ ] 設計數據模型和驗證規則。

---

## 架構說明

- index.js：Express 伺服器主程式，負責啟動伺服器與註冊 API 路由。
  - 已設計 /api/bigmac 路由群組，支援 GET、POST、PUT、DELETE，並有基本必填欄位驗證與錯誤處理。
- DB.js：資料庫連線與 big_mac_index 資料表建立。
- big_mac_index 資料表：欄位包含 date, iso_a3, currency_code, name, local_price, dollar_ex, dollar_price, USD_raw, EUR_raw, GBP_raw, JPY_raw, CNY_raw, GDP_bigmac, adj_price, USD_adjusted, EUR_adjusted, GBP_adjusted, JPY_adjusted, CNY_adjusted。

// [功能] 勾選API路由設計並補充說明。2025-07-02_15:06
