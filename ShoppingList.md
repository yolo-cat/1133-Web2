# 程式碼修改規則
1. 完成每項任務後，將清單標示已完成．
2. 每個任務都應該有一個對應的程式碼片段，並且在程式碼片段中加入功能說明和修改時間（2025-07-03 15:30）註釋。
3. 每次完成任務後，必須更新 “# 程式碼架構” 區塊，總結目標程式碼的整體架構。

## index.html
- ### 基本架構
  - [x] 使用 JavaScript 來處理新增項目的邏輯。
  - [x] 使用 HTML 和 CSS 來設計表單和清單的外觀。

- ### 功能需求
  - [x] 使用表單樣式呈現購物清單，提供新增項目功能。
  - [x] 每個項目應包含名稱、數量。
  - [x] 按下新增按鈕，會將各個項目新增到清單中，使用 addEventListener 方法處理按鈕點擊事件。
  - [x] 清單應顯示所有已新增的項目。
  - [x] 按下新增按鈕後，清空輸入框內容。

- ### 顯示清單
  - [x] 清單初始狀態包含一件物品：
    - 名稱：特價
    - 數量：0
  - [x] 使用 JavaScript 來動態更新清單內容。
  - [x] 清單應該能夠顯示所有已新增的項目，並且每個項目應包含名稱和數量。
  - [x] 使用 CSS 來美化清單的外觀。
  - [x] 清單應該能夠自動更新，當新增項目時，清單內容會即時顯示。

# 程式碼架構（2025-07-03 15:30 更新）
- index.html
  - HTML：購物清單主體、表單、清單區塊。
  - CSS：美化表單與清單外觀。
  - JavaScript：
    - 初始化清單（含預設項目「特價」）。
    - 監聽表單送出事件，新增項目並即時更新清單。
    - 新增後自動清空輸入框。
    - 動態渲染所有項目（名稱、數量）。
    - 所有主要功能與樣式均集中於 index.html，並於程式碼片段中加入功能說明與修改時間註釋。
