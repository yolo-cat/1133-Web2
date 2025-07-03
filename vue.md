# Vue3 導入與程式碼改寫步驟

## 程式碼修改規則
1. 完成每項任務後，將該項目標示已完成．
2. 每個任務都應該有一個對應的程式碼片段，並且在程式碼片段中加入功能說明和修改時間（範例：日期 - 小時：分鐘）註釋。
3. 每次完成任務後，必須更新 “# 程式碼架構” 區塊，總結目標程式碼的整體架構。

## 任務
### 1. 導入 Vue3
- [x] 於 public/index.html 以 CDN 方式引入 Vue3（或可選用 npm 安裝並搭配 webpack/vite，若需完整 SPA 架構）。
- [x] 建議先用 CDN 方式，快速體驗與整合。

### 2. HTML 結構調整
- [x] 將原本的表單與 table 包在一個 id="app" 的 div 內，作為 Vue 掛載點。
- [x] 移除原本的 script，改由 Vue3 控制資料與事件。

### 3. Vue3 App 建立
- [x] 於 script 區塊建立 Vue3 app：
  - [x] 使用 `Vue.createApp({ data, methods })` 形式。
  - [x] data: 提供 quotes（陣列）、form（物件）、msg（訊息）等資料。
  - [x] methods: fetchQuotes、submitForm，分別對應 API 取得資料與送出表單。

### 4. 表單與資料綁定
- [x] 使用 v-model 雙向綁定 form 物件欄位。
- [x] 送出表單時呼叫 submitForm 方法。

### 5. 資料顯示
- [x] 使用 v-for 於 table 動態渲染 quotes 陣列。
- [x] 顯示 msg 訊息。

### 6. 事件處理
- [x] 表單 submit 改用 @submit.prevent 觸發 submitForm。
- [x] 新增成功後自動清空表單並重新取得 quotes。

[//]: # (## 7. 進階（可選）)

[//]: # (- [ ] 可將 app 拆分為多個 component（如 QuoteForm, QuoteTable）。)

[//]: # (- [ ] 可導入 Vite/webpack 進行模組化開發。)

---

# 程式碼架構（2025-07-03 15:00 更新）

- public/index.html
  - 以 CDN 方式引入 Vue3。
  - 將表單與 table 包在 id="app" 的 div 內。
  - 移除原生 JS，改用 Vue3 控制資料與事件。
  - Vue3 app 實現：
    - data: quotes（陣列）、form（物件）、msg（訊息）。
    - methods: fetchQuotes（取得資料）、submitForm（送出表單）。
    - v-model 雙向綁定表單欄位。
    - v-for 動態渲染 quotes。
    - @submit.prevent 處理表單送出。
    - 新增成功自動清空表單並重新取得 quotes。

---
