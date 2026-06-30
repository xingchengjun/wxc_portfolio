/* ============================================================
   吴星呈 · 求职博客 · 交互脚本
   纯原生 JS，无依赖
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 工具函数 ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- 1. 页脚年份 ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 2. 导航栏滚动样式 ---------- */
  const nav = $("#nav");
  const onScrollNav = () => {
    if (window.scrollY > 10) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  /* ---------- 3. 移动端汉堡菜单 ---------- */
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  const toggleMenu = (open) => {
    const isOpen = open ?? !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", isOpen);
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };
  if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMenu());
    // 点击菜单项后自动收起
    $$(".nav-link, .nav-cta", navLinks).forEach((a) =>
      a.addEventListener("click", () => toggleMenu(false))
    );
  }

  /* ---------- 4. 导航高亮当前板块 ---------- */
  const sections = $$("main section[id], #hero");
  const linkMap = new Map();
  $$(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) linkMap.set(href.slice(1), link);
  });

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        const activeLink = linkMap.get(id);
        if (!activeLink) return;
        $$(".nav-link").forEach((l) => l.classList.remove("active"));
        activeLink.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((sec) => spy.observe(sec));

  /* ---------- 5. 滚动渐入动画 ---------- */
  const reveals = $$(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  /* ---------- 6. 回到顶部按钮 ---------- */
  const backTop = $("#backTop");
  const onScrollTop = () => {
    if (window.scrollY > 480) backTop.classList.add("show");
    else backTop.classList.remove("show");
  };
  onScrollTop();
  window.addEventListener("scroll", onScrollTop, { passive: true });
  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 7. 平滑滚动（兼容锚点偏移导航栏高度） ---------- */
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;
      const target = $(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();
