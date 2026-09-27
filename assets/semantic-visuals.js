/* Each illustration is a content diagram tied to an explicit passage, not a motif. */
(() => {
  const visual = (title, intro, body, caption = '') => `<aside class="explain-visual" aria-label="${title}"><h3>${title}</h3><p>${intro}</p>${body}${caption ? `<p class="explain-caption">${caption}</p>` : ''}</aside>`;
  const node = (tag, title, detail, kind = '') => `<div class="explain-node ${kind}"><em>${tag}</em><b>${title}</b><span>${detail}</span></div>`;
  const page = key => document.querySelector(`[data-route-page="${key}"]`);
  const panelByEyebrow = (root, text) => [...root.querySelectorAll('.panel')].find(p => p.querySelector(':scope > .eyebrow')?.textContent.trim() === text);

  const home = page('home');
  const entry = panelByEyebrow(home, 'A → B → C → D ＋ E');
  entry?.insertAdjacentHTML('afterend', visual(
    '一項工作如何連回 2030？',
    '從上位方向逐層轉成可驗證的行動；E 的正式定義讓各層使用同一套語言。',
    `<div class="explain-flow">${node('A｜方向', '全球車用加熱核心供應夥伴', '以願景與四大經營目標確認終點')}${node('B｜選擇', '突破 Tier 1 信任與量產瓶頸', '決定產品接棒及必須掌握的能力')}${node('C｜承接', '設定專案 Stage、Owner 與交付物', '看下一個可驗證結果，而非只看活動量')}${node('D｜持續', '用證據、積分與回饋推進', '讓跨部門團隊持續做高價值行為', 'is-outcome')}</div>`,
    'E｜知識定義不是第五道工作流程，而是上述每一層共同使用的詞彙基準。'
  ));

  const a = page('a');
  panelByEyebrow(a, 'Mission')?.insertAdjacentHTML('beforeend', visual(
    '使命如何影響一個產品選型決策？',
    '客戶提出的規格是起點，不直接等同最適合的加熱方案。',
    `<div class="explain-flow">${node('客戶情境', '先理解應用', '確認升溫、環境、成本與品質條件')}${node('方案比較', '比較可行加熱方式', '用技術與客製化能力檢查適配性')}${node('價值觀關卡', '守住可靠品質', '不以低價作為唯一決策依據', 'is-gate')}${node('交付結果', '選對方案並可靠交付', '降低客戶成本與風險，建立長期信任', 'is-outcome')}</div>`,
    '此圖是使命與價值觀的應用示意，不新增產品設計或審核 SOP。'
  ));

  const b = page('b');
  const logic = b?.querySelector('.logic')?.closest('.panel');
  logic?.insertAdjacentHTML('afterend', visual(
    '為什麼增加詢價，還不能解除成長瓶頸？',
    '把表面現象、真正原因與資源選擇放在同一條因果鏈，避免直接從問題跳到工作清單。',
    `<div class="explain-flow" style="--steps:3">${node('SITUATION｜現象', '一線案例與量產信任不足', '新產品驗證中，既有產品受成本結構限制')}${node('ROOT CAUSE｜根因', '供應夥伴身份尚未完成轉換', '必須同時建立車用能力與可支撐大量供應的模式', 'is-gate')}${node('CORE STRATEGY｜選擇', '核心自己掌握，供應鏈整合', '集中 Non-PTC Coolant 成長引擎，深化 OEM＋Tier 1 開發', 'is-outcome')}</div>`,
    '因果關係整理自本頁正式戰略；「增加詢價」不能替代信任、成本與量產能力建設。'
  ));

  const c = page('c');
  c?.querySelector('.stage-explainer .stage-example')?.insertAdjacentHTML('afterend', visual(
    '如何判斷本週工作真的推進了 Stage？',
    '以 Coolant Heater 的 Sample → Validation 為閱讀示例：工作要能指向下一個可查證結果。',
    `<div class="explain-flow">${node('目前位置', 'Sample｜樣品導入', '先確認專案所處 Stage 與現有基準')}${node('本週行動', '處理樣品與驗證的 Blocker', '明確 Owner、Next Action 與期限')}${node('進展證據', '取得客戶驗證進展紀錄', '以 CRM 或正式專案資料留存可查證依據', 'is-gate')}${node('下一結果', 'Validation｜驗證推進', '依正式專案 Gate 判斷是否真的前進', 'is-outcome')}</div>`,
    '此為閱讀示例；正式 Stage Gate、證據要求及責任人仍以各專案核定規則為準。'
  ));

  const d = page('d');
  panelByEyebrow(d, '12-week Rule')?.querySelector('h3')?.insertAdjacentHTML('afterend', visual(
    '一筆進展如何成為有效積分？',
    '把公平、證據與優勝條件放在同一個判斷流程；不是做了活動就直接加分。',
    `<div class="explain-flow">${node('WEEK 0', '凍結 Baseline Stage', '只計入遊戲啟動後的新進展')}${node('每週審核', '檢查新 Stage 與證據', '客戶、樣品、驗證或系統紀錄須可查證', 'is-gate')}${node('積分回饋', '依里程碑權重計分', '越接近 Design-in、Nomination，權重越高')}${node('勝出門檻', '總分最高且實質推進', '不能只靠 CRM 維護分取得優勝', 'is-outcome')}</div>`
  ));

  const e = page('e');
  e?.querySelector('.knowledge-search-head')?.closest('section')?.insertAdjacentHTML('beforebegin', visual(
    '遇到管理問題，先查哪一層定義？',
    '同樣叫「目標」或「計畫」，其實可能在不同層級；先判斷問題，再進入下方正式定義。',
    `<div class="explain-map">${node('方向與原則', '藍圖', '願景、使命、價值觀與特定時期的經營目標')}${node('瓶頸與取捨', '戰略計畫', 'Situation → Root Cause → Purpose → Core Strategy')}${node('標的與責任', '戰術計畫', '生產型量化產出；發展型建立能力與狀態改變')}${node('日常落地', '營運計畫', '排程、SOP、KPI 追蹤與管理工具')}</div>`,
    'D 團隊遊戲用於強化 C 的關鍵行為；E 提供各層用詞的正式定義，不是另一層計畫。'
  ));
})();
