# 程式碼修改規則
1. 完成每項任務後，將清單標示已完成．
2. 每個任務都應該有一個對應的程式碼片段，並且在程式碼片段中加入功能說明和修改時間（2025-07-03 15:30）註釋。
3. 每次完成任務後，必須更新 “# 程式碼架構” 區塊，總結目標程式碼的整體架構。


## 前端程式碼架構說明

## 任務
### 導入 Vue3
- [x] 使用 CDN 方式引入 Vue3

### HTML 結構調整
- [x] 將表單與 table 包在一個 id="app" 的 div 內，作為 Vue 掛載點。
- [x] 移除原本的 script，改由 Vue3 控制資料與事件。
### Vue3 App 建立
- [x] 於 script 區塊建立 Vue3 app：
  - [x] 使用 `Vue.createApp({ data, methods })` 形式。
  - [x] data: 提供 quotes（陣列）、form（物件）、msg（訊息）等資料。
  - [x] methods: fetchQuotes、submitForm，分別對應 API 取得資料與送出表單。
### 表單與資料綁定
- [x] 使用 v-model 雙向綁定 form 物件欄位。
- [x] 送出表單時呼叫 submitForm 方法。
### 資料顯示
- [x] 使用 v-for 於 table 動態渲染 quotes 陣列。
- [x] 顯示 msg 訊息。
### 事件處理
- [x] 表單 submit 改用 @submit.prevent 觸發 submitForm。
- [x] 新增成功後自動清空表單並重新取得 quotes。
- [x] 取消新增資料功能，只能查詢既有資料，無法新增資料。
- [x] 提供依照“國家”名稱進行查詢的功能
