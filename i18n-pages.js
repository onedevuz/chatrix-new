// Shared i18n for non-index pages (blog, privacy, terms, 404)
(function() {
  const T = {
    ru: {
      nav_features: "Возможности", nav_pricing: "Цены", nav_blog: "Блог", nav_help: "Справка",
      nav_start: "Начать бесплатно", nav_login: "Войти",
      footer_privacy: "Конфиденциальность", footer_terms: "Условия",
      footer_blog: "Блог", footer_copy: "Ташкент, Узбекистан",
      footer_secure: "Все платежи защищены по стандартам 3D Secure и PCI DSS",
      // privacy
      priv_title: "Политика конфиденциальности",
      priv_updated: "Последнее обновление: 18 апреля 2026 г.",
      priv_effective: "Действует с 1 января 2026 г.",
      // terms
      terms_title: "Условия использования",
      terms_updated: "Последнее обновление: 18 апреля 2026 г.",
      terms_sub: "Публичная оферта на оказание услуг",
      terms_effective: "Действует с 1 января 2026 г.",
      // 404
      err_title: "Страница не найдена",
      err_sub: "Такой страницы не существует. Возможно, ссылка устарела.",
      err_home: "На главную",
      err_blog: "Читать блог",
      // blog index
      blog_title: "Блог Prochat",
      blog_sub: "Советы по росту конверсии, настройке чата и работе с клиентами",
      blog_read: "Читать →",
      // lang not available
      lang_na: "Статья доступна только на русском языке.",
    },
    uz: {
      nav_features: "Imkoniyatlar", nav_pricing: "Narxlar", nav_blog: "Blog", nav_help: "Yordam",
      nav_start: "Bepul boshlash", nav_login: "Kirish",
      footer_privacy: "Maxfiylik", footer_terms: "Shartlar",
      footer_blog: "Blog", footer_copy: "Toshkent, O'zbekiston",
      footer_secure: "Barcha to'lovlar 3D Secure va PCI DSS standartlari bilan himoyalangan",
      priv_title: "Maxfiylik siyosati",
      priv_updated: "Oxirgi yangilanish: 18 aprel 2026 yil",
      priv_effective: "2026 yil 1 yanvardan kuchga kirgan",
      terms_title: "Foydalanish shartlari",
      terms_updated: "Oxirgi yangilanish: 18 aprel 2026 yil",
      terms_sub: "Xizmatlar ko'rsatish bo'yicha ommaviy oferta",
      terms_effective: "2026 yil 1 yanvardan kuchga kirgan",
      err_title: "Sahifa topilmadi",
      err_sub: "Bunday sahifa mavjud emas. Ehtimol, havola eskirgan.",
      err_home: "Bosh sahifaga",
      err_blog: "Blogni o'qish",
      blog_title: "Prochat blogi",
      blog_sub: "Konversiyani oshirish, chatni sozlash va mijozlar bilan ishlash bo'yicha maslahatlar",
      blog_read: "O'qish →",
      lang_na: "Maqola faqat rus tilida mavjud.",
    },
    en: {
      nav_features: "Features", nav_pricing: "Pricing", nav_blog: "Blog", nav_help: "Help",
      nav_start: "Start free", nav_login: "Log in",
      footer_privacy: "Privacy", footer_terms: "Terms",
      footer_blog: "Blog", footer_copy: "Tashkent, Uzbekistan",
      footer_secure: "All payments are protected with 3D Secure and PCI DSS",
      priv_title: "Privacy Policy",
      priv_updated: "Last updated: April 18, 2026",
      priv_effective: "Effective from January 1, 2026",
      terms_title: "Terms of Service",
      terms_updated: "Last updated: April 18, 2026",
      terms_sub: "Public offer for services",
      terms_effective: "Effective from January 1, 2026",
      err_title: "Page not found",
      err_sub: "This page doesn't exist. The link may be outdated.",
      err_home: "Go home",
      err_blog: "Read blog",
      blog_title: "Prochat Blog",
      blog_sub: "Tips on conversion growth, chat setup, and customer service",
      blog_read: "Read →",
      lang_na: "This article is available in Russian only.",
    }
  };

  function applyPageLang(lang) {
    const tr = T[lang] || T.ru;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (tr[key] !== undefined) el.textContent = tr[key];
    });
    // Show/hide lang-not-available notice
    const notice = document.getElementById('lang-na-notice');
    if (notice) notice.style.display = (lang !== 'ru') ? 'block' : 'none';
    // Update active state
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'uz' ? 'uz' : lang === 'en' ? 'en' : 'ru';
  }

  function buildLangSwitcher() {
    const wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    wrap.style.cssText = 'display:flex;gap:2px;background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:3px;';
    ['RU','UZ','EN'].forEach(code => {
      const btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.dataset.lang = code.toLowerCase();
      btn.textContent = code;
      btn.style.cssText = 'font-size:11px;font-weight:600;padding:4px 8px;border:none;border-radius:6px;background:transparent;color:var(--text-muted);cursor:pointer;transition:.2s;';
      btn.addEventListener('click', () => {
        const l = btn.dataset.lang;
        localStorage.setItem('prochat_lang', l);
        applyPageLang(l);
      });
      wrap.appendChild(btn);
    });
    return wrap;
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Inject lang switcher into nav-right if it exists
    const navRight = document.querySelector('.nav-right');
    if (navRight && !navRight.querySelector('.lang-switcher')) {
      navRight.insertBefore(buildLangSwitcher(), navRight.firstChild);
    }

    // Apply saved language
    const lang = localStorage.getItem('prochat_lang') || 'ru';
    applyPageLang(lang);

    // Dark mode
    const dt = document.getElementById('darkToggle');
    const st = localStorage.getItem('prochat_theme');
    if (st) document.documentElement.setAttribute('data-theme', st);
    if (dt) {
      dt.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
      dt.addEventListener('click', () => {
        const d = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', d ? 'light' : 'dark');
        dt.textContent = d ? '🌙' : '☀️';
        localStorage.setItem('prochat_theme', d ? 'light' : 'dark');
      });
    }

    // Style active lang btn
    const styleEl = document.createElement('style');
    styleEl.textContent = '.lang-btn.active{background:var(--bg)!important;color:var(--text)!important;box-shadow:0 1px 3px rgba(0,0,0,.1);}';
    document.head.appendChild(styleEl);
  });
})();
