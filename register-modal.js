/* Prochat - единый попап «Войдите или зарегистрируйтесь» (2026-10).
 *
 * Один экран: «Продолжить с Google / Apple / Telegram». Новый человек
 * регистрируется, существующий входит. Входа по почте на лендинге нет
 * (он только для сотрудников, по отдельному адресу).
 *
 * Открывают: ссылки на register, «Войти» (app.prochat.uz/login), [data-auth].
 * ПК - окно по центру, телефон - bottom-sheet (свайп вниз закрывает).
 * Кнопки показываются по GET /auth/oauth/providers: нет провайдера - нет кнопки.
 * ?auth_error=<code> в адресе открывает попап с понятным текстом ошибки.
 * На register.html компонент рисуется прямо в странице: <div data-auth-inline></div>.
 */
(function () {
  if (window.__pcAuthLoaded) return;
  window.__pcAuthLoaded = true;

  // URL соцвхода - от разработчика кабинета (09.10.2026).
  var CFG = {
    providersUrl: 'https://api.prochat.uz/api/v1/auth/oauth/providers',
    google: 'https://api.prochat.uz/api/v1/auth/oauth/google/start?returnTo=landing&mode={mode}&lang={lang}',
    apple: 'https://api.prochat.uz/api/v1/auth/oauth/apple/start?returnTo=landing&mode={mode}&lang={lang}',
    telegram: 'https://app.prochat.uz/auth/telegram?mode={mode}&lang={lang}',
    appOrigin: 'https://app.prochat.uz'
  };

  var T = {
    ru: {
      title: 'Войдите или зарегистрируйтесь',
      sub: 'Если аккаунта ещё нет, он создастся сам. Это бесплатно.',
      offerTitle: 'Чат на сайте за 5 минут',
      offerSub: 'Тариф Free бесплатный и без срока. Войдите, и чат сразу готов к установке.',
      offerBubble1: 'Assalomu alaykum! Yetkazib berish bormi?', offerBubble2: 'Ha, ertaga olib boramiz.',
      google: 'Продолжить с Google', apple: 'Продолжить с Apple', telegram: 'Продолжить с Telegram',
      going: 'Открываем {p}…',
      legal: 'Продолжая, вы принимаете <a href="/terms">оферту</a> и <a href="/privacy">политику конфиденциальности</a>.',
      loading: 'Загружаем способы входа…',
      failed: 'Не удалось загрузить способы входа. Проверьте интернет.', retry: 'Повторить',
      none: 'Вход через сервисы временно недоступен. Напишите нам в чат, поможем.',
      close: 'Закрыть',
      err: {
        disabled: 'Этот способ входа пока недоступен. Выберите другой.',
        state: 'Вход не завершился. Так бывает, если окно было открыто слишком долго. Попробуйте ещё раз.',
        provider: 'Не получилось войти через этот сервис. Попробуйте ещё раз или выберите другой.',
        code: 'Ссылка для входа устарела. Попробуйте ещё раз.',
        telegram_signature: 'Telegram не подтвердил вход. Попробуйте ещё раз.',
        telegram_expired: 'Подтверждение Telegram устарело. Попробуйте ещё раз.',
        inactive: 'Аккаунт не активирован. Обратитесь к владельцу организации.',
        platform_account: 'Для этого аккаунта вход только по почте и паролю.',
        _: 'Не получилось войти. Попробуйте ещё раз.'
      }
    },
    uz: {
      title: 'Kiring yoki ro‘yxatdan o‘ting',
      sub: 'Akkaunt bo‘lmasa, u avtomatik yaratiladi. Bu bepul.',
      offerTitle: 'Saytga chat 5 daqiqada',
      offerSub: 'Free tarifi bepul va muddatsiz. Kiring, chat o‘rnatishga darhol tayyor.',
      offerBubble1: 'Assalomu alaykum! Yetkazib berish bormi?', offerBubble2: 'Ha, ertaga olib boramiz.',
      google: 'Google orqali davom etish', apple: 'Apple orqali davom etish', telegram: 'Telegram orqali davom etish',
      going: '{p} ochilmoqda…',
      legal: 'Davom etish orqali siz <a href="/terms">oferta</a> va <a href="/privacy">maxfiylik siyosati</a>ni qabul qilasiz.',
      loading: 'Kirish usullari yuklanmoqda…',
      failed: 'Kirish usullarini yuklab bo‘lmadi. Internetni tekshiring.', retry: 'Qayta urinish',
      none: 'Servislar orqali kirish vaqtincha ishlamayapti. Chatga yozing, yordam beramiz.',
      close: 'Yopish',
      err: {
        disabled: 'Bu kirish usuli hozircha mavjud emas. Boshqasini tanlang.',
        state: 'Kirish yakunlanmadi. Oyna juda uzoq ochiq qolgan bo\'lishi mumkin. Qaytadan urinib ko\'ring.',
        provider: 'Bu xizmat orqali kirib bo\'lmadi. Qaytadan urinib ko\'ring yoki boshqasini tanlang.',
        code: 'Kirish havolasi eskirgan. Qaytadan urinib ko\'ring.',
        telegram_signature: 'Telegram kirishni tasdiqlamadi. Qaytadan urinib ko\'ring.',
        telegram_expired: 'Telegram tasdig\'i eskirgan. Qaytadan urinib ko\'ring.',
        inactive: 'Akkaunt faollashtirilmagan. Tashkilot egasiga murojaat qiling.',
        platform_account: 'Bu akkaunt uchun faqat pochta va parol bilan kirish mumkin.',
        _: 'Kirish amalga oshmadi. Qaytadan urinib ko\'ring.'
      }
    },
    en: {
      title: 'Log in or sign up',
      sub: 'No account yet? It will be created automatically, free of charge.',
      offerTitle: 'Chat on your site in 5 minutes',
      offerSub: 'The Free plan costs nothing and has no time limit. Sign in and the chat is ready to install.',
      offerBubble1: 'Assalomu alaykum! Yetkazib berish bormi?', offerBubble2: 'Ha, ertaga olib boramiz.',
      google: 'Continue with Google', apple: 'Continue with Apple', telegram: 'Continue with Telegram',
      going: 'Opening {p}…',
      legal: 'By continuing you accept the <a href="/terms">terms of service</a> and the <a href="/privacy">privacy policy</a>.',
      loading: 'Loading sign-in options…',
      failed: 'Could not load sign-in options. Check your connection.', retry: 'Try again',
      none: 'Sign-in with these services is temporarily unavailable. Write to us in the chat and we will help.',
      close: 'Close',
      err: {
        disabled: 'This sign-in option isn\'t available yet. Please choose another one.',
        state: 'Sign-in didn\'t complete. The window may have been open too long. Please try again.',
        provider: 'Couldn\'t sign in with this service. Try again or choose another one.',
        code: 'The sign-in link has expired. Please try again.',
        telegram_signature: 'Telegram didn\'t confirm the sign-in. Please try again.',
        telegram_expired: 'The Telegram confirmation has expired. Please try again.',
        inactive: 'Your account is not activated. Contact the organization owner.',
        platform_account: 'This account signs in with email and password only.',
        _: 'Sign-in failed. Please try again.'
      }
    }
  };

  var ICONS = {
    google: '<svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true"><path fill="#EA4335" d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"/><path fill="#4285F4" d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"/><path fill="#FBBC05" d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"/></svg>',
    apple: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/></svg>',
    telegram: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>',
    close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    alert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>'
  };
  var NAMES = { google: 'Google', apple: 'Apple', telegram: 'Telegram' };
  var ORDER = ['google', 'apple', 'telegram'];

  var css = ''
    + '.pca-overlay{position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;padding:24px 16px;background:rgba(15,23,42,.55);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);opacity:0;transition:opacity .18s ease}'
    + '.pca-overlay.open{display:flex}.pca-overlay.shown{opacity:1}'
    + '.pca-card{--pca-bg:#fff;--pca-text:#111827;--pca-muted:#4b5563;--pca-border:#e5e7eb;position:relative;width:100%;max-width:440px;background:var(--pca-bg);color:var(--pca-text);border-radius:20px;padding:32px 28px 22px;box-shadow:0 30px 80px rgba(0,0,0,.3);font-family:Inter,system-ui,-apple-system,sans-serif;text-align:center;transform:translateY(8px) scale(.98);transition:transform .2s cubic-bezier(.2,.8,.2,1)}'
    + '.pca-overlay.shown .pca-card{transform:none}'
    + '.pca-inline .pca-card{box-shadow:0 12px 40px rgba(17,24,39,.08);border:1px solid var(--pca-border);margin:0 auto;transform:none}'
    + '.pca-handle{display:none}'
    + '.pca-hero{margin:-32px -28px 22px;padding:26px 24px 22px;border-radius:20px 20px 0 0;background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%);position:relative;overflow:hidden}'
    + '.pca-hero::after{content:"";position:absolute;right:-40px;top:-40px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.12)}'
    + '.pca-mini{position:relative;z-index:1;max-width:260px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 14px 34px rgba(30,27,75,.35);padding:10px;text-align:left;font-size:12.5px;color:#111827}'
    + '.pca-mini-h{display:flex;align-items:center;gap:8px;padding:2px 2px 8px;border-bottom:1px solid #eef0f4;margin-bottom:8px;font-weight:700;font-size:12px}'
    + '.pca-mini-h i{width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block}'
    + '.pca-mini-b{padding:7px 10px;border-radius:12px;line-height:1.35;max-width:88%;margin-bottom:6px}'
    + '.pca-mini-b.v{background:#f3f4f6}.pca-mini-b.o{background:#6366f1;color:#fff;margin-left:auto;margin-bottom:0}'
    + '.pca-offer .pca-logo{display:none}'
    + '.pca-offer .pca-close{color:#fff;z-index:2}.pca-offer .pca-close:hover{background:rgba(255,255,255,.18);color:#fff}'
    + '.pca-close{position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;border:0;background:transparent;color:var(--pca-muted);display:grid;place-items:center;cursor:pointer}'
    + '.pca-close:hover{background:rgba(127,127,127,.12);color:var(--pca-text)}'
    + '.pca-logo{font-weight:800;font-size:20px;letter-spacing:-.5px;color:#6366f1;margin-bottom:14px}.pca-logo span{color:var(--pca-text)}'
    + '.pca-card h2{font-size:22px;line-height:1.25;font-weight:800;letter-spacing:-.4px;margin:0 0 6px}'
    + '.pca-sub{font-size:14.5px;line-height:1.5;color:var(--pca-muted);margin:0 0 22px}'
    + '.pca-err{display:none;align-items:flex-start;gap:8px;text-align:left;padding:10px 12px;margin:-6px 0 16px;border-radius:12px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b;font-size:14px;line-height:1.45}'
    + '.pca-err.show{display:flex}.pca-err svg{flex-shrink:0;margin-top:1px}'
    + '.pca-btns{display:flex;flex-direction:column;gap:10px}'
    + '.pca-btn{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:50px;padding:0 48px;border-radius:12px;font:600 16px/1 Inter,system-ui,-apple-system,sans-serif;cursor:pointer;text-decoration:none;transition:background .15s,border-color .15s,box-shadow .15s;-webkit-tap-highlight-color:transparent}'
    + '.pca-btn .pca-ic{position:absolute;left:16px;top:50%;transform:translateY(-50%);display:grid;place-items:center}'
    + '.pca-btn:focus-visible{outline:3px solid #6366f1;outline-offset:2px}'
    + '.pca-btn[aria-busy=true]{pointer-events:none;opacity:.75}'
    + '.pca-google{background:#fff;color:#1f1f1f;border:1px solid #747775}.pca-google:hover{background:#f8f9fa}'
    + '.pca-apple{background:#000;color:#fff;border:1px solid #000}.pca-apple:hover{background:#1f1f1f}'
    + '.pca-telegram{background:#2aabee;color:#fff;border:1px solid #2aabee}.pca-telegram:hover{background:#229ed9;border-color:#229ed9}'
    + '.pca-spin{width:18px;height:18px;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:pcaSpin .7s linear infinite}'
    + '@keyframes pcaSpin{to{transform:rotate(360deg)}}'
    + '.pca-state{font-size:14px;color:var(--pca-muted);padding:12px 0;line-height:1.5}'
    + '.pca-state button{margin-top:10px;border:1px solid var(--pca-border);background:transparent;color:var(--pca-text);border-radius:10px;padding:9px 16px;font:600 14px Inter,system-ui,sans-serif;cursor:pointer}'
    + '.pca-skel{height:50px;border-radius:12px;background:linear-gradient(90deg,rgba(127,127,127,.08),rgba(127,127,127,.16),rgba(127,127,127,.08));background-size:200% 100%;animation:pcaSkel 1.2s ease-in-out infinite}'
    + '@keyframes pcaSkel{to{background-position:-200% 0}}'
    + '.pca-legal{font-size:12.5px;line-height:1.5;color:var(--pca-muted);margin:18px 0 0}'
    + '.pca-legal a{color:#4f46e5;font-weight:600;text-decoration:none}.pca-legal a:hover{text-decoration:underline}'
        + '[data-theme=dark] .pca-card{--pca-bg:#1f2937;--pca-text:#f9fafb;--pca-muted:#cbd5e1;--pca-border:#374151}'
    + '[data-theme=dark] .pca-google{background:#131314;color:#e3e3e3;border-color:#8e918f}[data-theme=dark] .pca-google:hover{background:#1f1f20}'
    + '[data-theme=dark] .pca-apple{background:#fff;color:#000;border-color:#fff}[data-theme=dark] .pca-apple:hover{background:#e5e7eb}'
    + '[data-theme=dark] .pca-legal a{color:#a5b4fc}'
    + '[data-theme=dark] .pca-err{background:#3f1d1d;border-color:#7f1d1d;color:#fecaca}'
    + '@media (max-width:600px){'
    + '.pca-overlay{align-items:flex-end;padding:0}'
    + '.pca-overlay .pca-card{max-width:none;border-radius:22px 22px 0 0;padding:10px 20px calc(18px + env(safe-area-inset-bottom));transform:translateY(100%);transition:transform .28s cubic-bezier(.2,.8,.2,1);max-height:92vh;overflow-y:auto;overscroll-behavior:contain}'
    + '.pca-overlay.shown .pca-card{transform:translateY(0)}'
    + '.pca-overlay .pca-hero{margin:-10px -20px 18px;padding:22px 18px 18px;border-radius:22px 22px 0 0}'
    + '.pca-offer .pca-handle{position:absolute;left:50%;top:8px;margin:0;transform:translateX(-50%);background:rgba(255,255,255,.55);z-index:2}'
    + '.pca-overlay .pca-handle{display:block;width:40px;height:5px;border-radius:3px;background:rgba(127,127,127,.35);margin:0 auto 14px}'
    + '.pca-overlay .pca-close{top:8px;right:8px}'
    + '.pca-inline .pca-card{padding:26px 18px 18px}'
    + '.pca-card h2{font-size:21px}'
    + '}'
    + 'html.pca-lock #livechat-ai-widget,html.pca-lock .sticky-cta,html.pca-lock .cookie-banner{display:none!important}'
    + '@media (prefers-reduced-motion:reduce){.pca-overlay,.pca-card{transition:none!important}.pca-spin,.pca-skel{animation:none}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function lang() {
    // /uz/ и /en/ - язык страницы; иначе выбранный на сайте (localStorage), иначе lang документа.
    var h = document.documentElement, pl = h.getAttribute('data-page-lang');
    if (pl && pl !== 'ru' && T[pl]) return pl;
    var l = null;
    try { l = localStorage.getItem('prochat_lang'); } catch (e) {}
    if (T[l]) return l;
    return T[h.lang] ? h.lang : 'ru';
  }
  function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (m, k) { return o[k] != null ? o[k] : m; }); }

  // ---------- провайдеры ----------
  var providers = null, providersReq = null;
  function loadProviders(force) {
    if (providers && !force) return Promise.resolve(providers);
    if (providersReq && !force) return providersReq;
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 8000) : null;
    providersReq = fetch(CFG.providersUrl, { credentials: 'omit', signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
      .then(function (j) { providers = j || {}; return providers; })
      .finally(function () { if (timer) clearTimeout(timer); providersReq = null; });
    return providersReq;
  }

  // ---------- разметка ----------
  function cardHtml(withClose, variant) {
    var t = T[lang()];
    var offer = variant === 'offer';
    var hero = offer
      ? '<div class="pca-hero" aria-hidden="true"><div class="pca-mini"><div class="pca-mini-h"><i></i>prochat</div>'
        + '<div class="pca-mini-b v">' + t.offerBubble1 + '</div><div class="pca-mini-b o">' + t.offerBubble2 + '</div></div></div>'
      : '';
    return ''
      + '<div class="pca-handle" aria-hidden="true"></div>'
      + (withClose ? '<button type="button" class="pca-close" aria-label="' + t.close + '">' + ICONS.close + '</button>' : '')
      + '<div class="pca-logo">prochat<span>.</span></div>'
      + hero
      + '<h2 id="pca-title">' + (offer ? t.offerTitle : t.title) + '</h2>'
      + '<p class="pca-sub">' + (offer ? t.offerSub : t.sub) + '</p>'
      + '<div class="pca-err" role="alert">' + ICONS.alert + '<span></span></div>'
      + '<div class="pca-btns" aria-live="polite"></div>'
      + '<p class="pca-legal">' + t.legal + '</p>';
  }

  function renderButtons(card, mode) {
    var t = T[lang()];
    var box = card.querySelector('.pca-btns');
    box.innerHTML = '<div class="pca-skel"></div><div class="pca-skel"></div><div class="pca-skel"></div>'
      + '<div class="pca-state" style="position:absolute;left:-9999px">' + t.loading + '</div>';
    loadProviders().then(function (p) {
      var html = '';
      ORDER.forEach(function (k) {
        if (!p[k]) return;
        html += '<a class="pca-btn pca-' + k + '" data-provider="' + k + '" href="' + fill(CFG[k], { lang: lang(), mode: mode === 'login' ? 'login' : 'register' }) + '">'
          + '<span class="pca-ic">' + ICONS[k] + '</span><span class="pca-label">' + t[k] + '</span></a>';
      });
      box.innerHTML = html || '<div class="pca-state">' + t.none + '</div>';
    }).catch(function () {
      box.innerHTML = '<div class="pca-state">' + t.failed + '<br><button type="button" class="pca-retry">' + t.retry + '</button></div>';
      box.querySelector('.pca-retry').addEventListener('click', function () { providers = null; renderButtons(card, mode); });
    });
  }

  function wireCard(card) {
    card.addEventListener('click', function (e) {
      var a = e.target.closest('.pca-btn');
      if (!a) return;
      // Индикатор перехода: страница провайдера может открываться секунду-две.
      var t = T[lang()];
      a.setAttribute('aria-busy', 'true');
      a.querySelector('.pca-ic').innerHTML = '<span class="pca-spin"></span>';
      var label = a.querySelector('.pca-label').textContent;
      a.querySelector('.pca-label').textContent = fill(t.going, { p: NAMES[a.getAttribute('data-provider')] });
      // Telegram на ПК - отдельным окном, кабинет пришлёт postMessage и окно закроется.
      if (a.getAttribute('data-provider') === 'telegram' && !matchMedia('(max-width: 600px), (pointer: coarse)').matches) {
        var w = window.open(a.href, 'tg', 'width=520,height=640');
        if (w) {
          e.preventDefault();
          var ic = ICONS.telegram;
          setTimeout(function () { a.removeAttribute('aria-busy'); a.querySelector('.pca-ic').innerHTML = ic; a.querySelector('.pca-label').textContent = label; }, 2500);
        } // окно заблокировано - обычный переход по ссылке
      }
    });
  }

  function showError(card, code) {
    if (!code) return;
    var t = T[lang()];
    var el = card.querySelector('.pca-err');
    el.querySelector('span').textContent = t.err[code] || t.err._;
    el.classList.add('show');
  }

  // ---------- модальное окно ----------
  var overlay, card, lastFocus, scrollY = 0;

  function lockScroll() {
    scrollY = window.scrollY || window.pageYOffset;
    var b = document.body.style;
    document.documentElement.classList.add('pca-lock');
    b.position = 'fixed'; b.top = -scrollY + 'px'; b.left = '0'; b.right = '0'; b.width = '100%'; b.overflow = 'hidden';
  }
  function unlockScroll() {
    var b = document.body.style;
    document.documentElement.classList.remove('pca-lock');
    b.position = ''; b.top = ''; b.left = ''; b.right = ''; b.width = ''; b.overflow = '';
    window.scrollTo(0, scrollY);
  }

  function build() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'pca-overlay';
    overlay.id = 'pc-auth';
    overlay.innerHTML = '<div class="pca-card" role="dialog" aria-modal="true" aria-labelledby="pca-title"></div>';
    card = overlay.firstChild;
    document.body.appendChild(overlay);
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
    card.addEventListener('click', function (e) { if (e.target.closest('.pca-close')) close(); });
    wireCard(card);
    wireSwipe();
  }

  function open(e, errCode, variant, mode) {
    if (e && e.preventDefault) e.preventDefault();
    build();
    lastFocus = document.activeElement;
    card.innerHTML = cardHtml(true, variant);
    card.classList.toggle('pca-offer', variant === 'offer');
    if (variant !== 'offer') { try { sessionStorage.setItem('prochat_auth_seen', '1'); } catch (x) {} }
    renderButtons(card, variant === 'offer' ? 'register' : mode);
    showError(card, errCode);
    card.style.transform = '';
    overlay.classList.add('open');
    lockScroll();
    requestAnimationFrame(function () { requestAnimationFrame(function () { overlay.classList.add('shown'); }); });
    // Фокус: на телефоне не трогаем (лишний прыжок), на ПК - на крестик, чтобы Tab шёл по кнопкам.
    if (!matchMedia('(max-width: 600px)').matches) setTimeout(function () { var c = card.querySelector('.pca-close'); if (c) c.focus({ preventScroll: true }); }, 30);
  }

  function close() {
    if (!overlay || !overlay.classList.contains('open')) return;
    overlay.classList.remove('shown');
    var done = function () { overlay.classList.remove('open'); card.style.transform = ''; unlockScroll(); if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) done(); else setTimeout(done, 220);
  }

  document.addEventListener('keydown', function (e) {
    if (!overlay || !overlay.classList.contains('open')) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'Tab') {
      var f = card.querySelectorAll('a[href],button:not([disabled])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Свайп вниз закрывает bottom-sheet (только на телефоне и когда лист не прокручен).
  function wireSwipe() {
    var startY = 0, lastY = 0, startT = 0, dragging = false;
    card.addEventListener('touchstart', function (e) {
      if (!matchMedia('(max-width: 600px)').matches || card.scrollTop > 0) return;
      dragging = true; startY = lastY = e.touches[0].clientY; startT = Date.now();
      card.style.transition = 'none';
    }, { passive: true });
    card.addEventListener('touchmove', function (e) {
      if (!dragging) return;
      lastY = e.touches[0].clientY;
      var dy = Math.max(0, lastY - startY);
      card.style.transform = 'translateY(' + dy + 'px)';
    }, { passive: true });
    card.addEventListener('touchend', function () {
      if (!dragging) return;
      dragging = false;
      card.style.transition = '';
      var dy = lastY - startY, v = dy / Math.max(1, Date.now() - startT);
      if (dy > 110 || v > 0.6) { card.style.transform = 'translateY(100%)'; close(); }
      else card.style.transform = '';
    });
  }

  // ---------- кто открывает ----------
  var SELECTORS = [
    'a[href="register"]', 'a[href="/register"]', 'a[href="../register"]', 'a[href="../../register"]', 'a[href="./register"]',
    'a[href$="/register.html"]', 'a[href="register.html"]', 'a[href$="prochat.uz/register"]',
    'a[href^="https://app.prochat.uz/login"]', 'a[href^="https://app.prochat.uz/register"]', '[data-auth]'
  ].join(',');

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest(SELECTORS);
    if (!a || a.closest('.pca-card') || a.closest('[data-auth-inline]')) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // новая вкладка - как обычная ссылка
    if (document.querySelector('[data-auth-inline]')) { e.preventDefault(); document.querySelector('[data-auth-inline]').scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    var href = a.getAttribute('href') || '';
    open(e, null, null, /app\.prochat\.uz\/login/.test(href) || a.getAttribute('data-auth') === 'login' ? 'login' : 'register');
  });

  // ---------- старт ----------
  function init() {
    var params = new URLSearchParams(location.search);
    var err = params.get('auth_error');
    var urlLang = params.get('lang');
    if (err) {
      // Язык, с которого человек уходил на вход, кабинет возвращает в ?lang=.
      if (T[urlLang]) {
        try { localStorage.setItem('prochat_lang', urlLang); } catch (x) {}
        if (typeof window.applyLang === 'function') { try { window.applyLang(urlLang); } catch (x) {} }
      }
      params.delete('auth_error');
      params.delete('lang');
      var q = params.toString();
      history.replaceState(null, '', location.pathname + (q ? '?' + q : '') + location.hash);
    }
    var inline = document.querySelector('[data-auth-inline]');
    if (inline) {
      inline.classList.add('pca-inline');
      inline.innerHTML = '<div class="pca-card" role="region" aria-labelledby="pca-title"></div>';
      var c = inline.firstChild;
      c.innerHTML = cardHtml(false);
      wireCard(c);
      renderButtons(c, 'register');
      showError(c, err === 'cancelled' ? null : err);
      // При смене языка на странице - перерисовать.
      document.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('.lang-btn')) setTimeout(function () { c.innerHTML = cardHtml(false); renderButtons(c, 'register'); }, 0);
      });
    } else if (err) {
      // cancelled - человек сам закрыл окно провайдера: попап без текста ошибки.
      open(null, err === 'cancelled' ? null : err, null, 'register');
    }
    // Прогреваем список провайдеров заранее, чтобы попап открывался без ожидания.
    setTimeout(function () { loadProviders().catch(function () {}); }, 1500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  // Успешный вход через Telegram-окно: кабинет присылает адрес, куда перейти.
  window.addEventListener('message', function (e) {
    if (e.origin !== CFG.appOrigin) return;
    var d = e.data;
    if (!d || d.type !== 'prochat:auth' || d.status !== 'ok') return;
    var to = typeof d.redirect === 'string' && d.redirect.indexOf(CFG.appOrigin + '/') === 0 ? d.redirect : CFG.appOrigin + '/';
    location.href = to;
  });

  window.ProchatAuth = { open: open, close: close, offer: function () { open(null, null, 'offer', 'register'); }, config: CFG };
  window.ProchatRegister = { open: open, close: close }; // совместимость со старым кодом
})();
