/*
 * 食譜目錄：首頁會依照這個陣列自動產生卡片。
 * 新增食譜時，請在陣列「最前面」加入一筆資料（規則見 CLAUDE.md 第 5 節）。
 * category 只能是：學習、寫作、工作、生活
 * level 只能是：簡單、中等、進階
 */
window.RECIPES = [
  {
    slug: "trip-planner",
    title: "小旅行行程規劃",
    category: "生活",
    level: "簡單",
    time: "5 分鐘",
    summary: "給它天數、預算和喜好，排出一份不趕路、有備案的行程表。",
    tags: ["旅遊", "行程", "預算"],
    date: "2026-11-10"
  },
  {
    slug: "study-flashcards",
    title: "考前重點抽認卡",
    category: "學習",
    level: "簡單",
    time: "3 分鐘",
    summary: "把講義或筆記丟進去，變成一問一答的抽認卡，考前快速自我測驗。",
    tags: ["考試", "複習", "記憶"],
    date: "2026-11-10"
  },
  {
    slug: "meeting-notes",
    title: "會議紀錄整理師",
    category: "工作",
    level: "簡單",
    time: "3 分鐘",
    summary: "把雜亂的會議逐字稿，整理成決議、待辦事項與負責人。",
    tags: ["會議", "摘要", "待辦"],
    date: "2026-11-10"
  },
  {
    slug: "email-polish",
    title: "正式信件潤稿",
    category: "寫作",
    level: "簡單",
    time: "2 分鐘",
    summary: "把口語草稿改成寄給教授或主管也不失禮的正式信件。",
    tags: ["Email", "潤稿", "禮貌"],
    date: "2026-11-10"
  },
  {
    slug: "report-outline",
    title: "期末報告大綱產生器",
    category: "寫作",
    level: "中等",
    time: "10 分鐘",
    summary: "從一個模糊的題目出發，生出有研究問題、章節與資料方向的報告大綱。",
    tags: ["報告", "大綱", "研究"],
    date: "2026-11-10"
  }
];
