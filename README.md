# Prompt 食譜本 🍳

給大學生的提示詞（Prompt）範本網站。每一個提示詞都寫成一道「食譜」：

- **食材**：使用前要先準備好的資訊
- **食譜**：可以直接複製的 Prompt，要填的地方用【】標示
- **步驟**：怎麼使用、怎麼跟 AI 來回修正
- **成品示範**：實際填好的例子與 AI 的回覆
- **小撇步**：讓結果更好的技巧與常見錯誤

## 線上瀏覽

開啟 GitHub Pages 後的網址：`https://<你的帳號>.github.io/prompt-cookbook/`

## 專案特色：用 CLAUDE.md 讓 AI 接手擴充

這個專案的重點不是單一網頁，而是一套**可以讓 AI 照著繼續做下去的規則**，寫在 [`CLAUDE.md`](./CLAUDE.md)（`AGENTS.md` 指向同一份規則）。

想新增一道食譜，只要對 AI 說：

> 請先讀 CLAUDE.md，然後新增一道「讀書計畫排程」的食譜。

AI 就會依照規則：複製 `recipes/_template.html` → 填好 6 個固定區塊 → 登記到 `assets/recipes.js`，首頁會自動出現新卡片。

## 檔案結構

```
├── CLAUDE.md / AGENTS.md   AI 開發規則
├── index.html              首頁（卡片由 JS 自動產生）
├── assets/
│   ├── style.css           全站樣式（含深色模式）
│   ├── main.js             搜尋、篩選、複製按鈕
│   └── recipes.js          食譜目錄
└── recipes/
    ├── _template.html      新食譜範本
    └── *.html              各道食譜
```

## 本機預覽

純靜態網站，直接用瀏覽器開啟 `index.html` 即可。
