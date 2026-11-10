/* Prompt 食譜本：首頁卡片渲染、搜尋篩選、Prompt 複製與【】高亮 */
(function () {
  // 分類中文名 → CSS class 後綴（新增分類時要在這裡加，見 CLAUDE.md 第 8 節）
  var CATEGORIES = { "學習": "study", "寫作": "write", "工作": "work", "生活": "life" };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function catClass(name) { return "cat cat-" + (CATEGORIES[name] || "study"); }

  /* ---------- 首頁 ---------- */
  var grid = document.getElementById("recipe-grid");
  if (grid && window.RECIPES) {
    var search = document.getElementById("search");
    var chipBox = document.getElementById("chips");
    var countEl = document.getElementById("count");
    var current = "全部";

    ["全部"].concat(Object.keys(CATEGORIES)).forEach(function (name) {
      var b = document.createElement("button");
      b.className = "chip";
      b.type = "button";
      b.textContent = name;
      b.setAttribute("aria-pressed", name === current ? "true" : "false");
      b.addEventListener("click", function () {
        current = name;
        chipBox.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", c.textContent === name ? "true" : "false");
        });
        render();
      });
      chipBox.appendChild(b);
    });

    function render() {
      var q = (search.value || "").trim().toLowerCase();
      var list = window.RECIPES.filter(function (r) {
        if (current !== "全部" && r.category !== current) return false;
        if (!q) return true;
        return [r.title, r.summary, r.category].concat(r.tags || []).join(" ").toLowerCase().indexOf(q) !== -1;
      });
      countEl.textContent = "共 " + list.length + " 道食譜";
      if (!list.length) {
        grid.innerHTML = '<p class="empty">找不到符合的食譜，換個關鍵字試試看。</p>';
        return;
      }
      grid.innerHTML = list.map(function (r) {
        return '<a class="card" href="recipes/' + esc(r.slug) + '.html">' +
          '<div class="meta"><span class="' + catClass(r.category) + '">' + esc(r.category) + '</span>' +
          '<span>' + esc(r.level) + '</span><span>·</span><span>' + esc(r.time) + '</span></div>' +
          '<h3>' + esc(r.title) + '</h3>' +
          '<p>' + esc(r.summary) + '</p>' +
          '<div class="tags">' + (r.tags || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join("") + '</div>' +
          '</a>';
      }).join("");
    }
    search.addEventListener("input", render);
    render();
  }

  /* ---------- 食譜頁：分類顏色 ---------- */
  document.querySelectorAll("[data-category]").forEach(function (el) {
    el.className = catClass(el.getAttribute("data-category"));
  });

  /* ---------- 食譜頁：【】高亮 + 複製按鈕 ---------- */
  document.querySelectorAll("pre.prompt").forEach(function (pre) {
    var raw = pre.textContent;
    pre.innerHTML = esc(raw).replace(/【[^】]*】/g, function (m) { return '<span class="blank">' + m + '</span>'; });

    var box = document.createElement("div");
    box.className = "prompt-box";
    pre.parentNode.insertBefore(box, pre);
    box.appendChild(pre);

    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.textContent = "複製 Prompt";
    btn.addEventListener("click", function () {
      var done = function () {
        btn.textContent = "已複製 ✓";
        setTimeout(function () { btn.textContent = "複製 Prompt"; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(raw).then(done, function () { fallback(raw); done(); });
      } else { fallback(raw); done(); }
    });
    box.appendChild(btn);
  });

  function fallback(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }
})();
