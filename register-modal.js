(function () {
  if (window.__regModalLoaded) return;
  window.__regModalLoaded = true;

  var API_URL = 'https://api.prochat.uz/api/v1/auth/register';
  var LOGIN_URL = 'https://app.prochat.uz/login';

  var css = ''
    + '#reg-modal{position:fixed;inset:0;z-index:10000;display:none;align-items:flex-start;justify-content:center;overflow-y:auto;padding:24px 16px;font-family:Inter,system-ui,sans-serif}'
    + '#reg-modal.open{display:flex}'
    + '#reg-modal-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}'
    + '#reg-modal-card{position:relative;width:100%;max-width:480px;background:#fff;border-radius:16px;padding:28px 28px 24px;box-shadow:0 30px 80px rgba(0,0,0,.35);z-index:1;animation:regFadeIn .2s ease-out}'
    + '@keyframes regFadeIn{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}'
    + '#reg-modal-close{position:absolute;top:-14px;right:-14px;width:36px;height:36px;border-radius:50%;border:0;background:#fff;color:#0f172a;font-size:22px;line-height:1;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;z-index:2}'
    + '#reg-modal-close:hover{background:#f1f5f9}'
    + '#reg-modal h2{font-size:20px;font-weight:800;margin:0 0 18px;color:#111827}'
    + '.rm-form{display:flex;flex-direction:column;gap:12px}'
    + '.rm-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.rm-field{display:flex;flex-direction:column;gap:5px}'
    + '.rm-field label{font-size:12.5px;font-weight:600;color:#111827}'
    + '.rm-req{color:#ef4444}'
    + '.rm-opt{color:#6b7280;font-weight:500;margin-left:3px;font-size:11.5px}'
    + '.rm-form input{width:100%;padding:10px 12px;font:500 14px Inter,system-ui,sans-serif;color:#111827;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-sizing:border-box;transition:border-color .15s,box-shadow .15s}'
    + '.rm-form input:hover{border-color:#cbd5e1}'
    + '.rm-form input:focus{outline:none;border-color:#6366f1;box-shadow:0 0 0 3px rgba(99,102,241,.15)}'
    + '.rm-hint{font-size:11.5px;color:#6b7280}'
    + '.rm-error{display:none;padding:9px 12px;border-radius:10px;background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;font-size:12.5px;line-height:1.5}'
    + '.rm-error.show{display:block}'
    + '.rm-submit{width:100%;padding:13px;background:#6366f1;color:#fff;border:0;border-radius:10px;font:700 15px Inter,system-ui,sans-serif;cursor:pointer;transition:background .15s,transform .1s;margin-top:4px}'
    + '.rm-submit:hover:not(:disabled){background:#4f46e5}'
    + '.rm-submit:active:not(:disabled){transform:translateY(1px)}'
    + '.rm-submit:disabled{opacity:.6;cursor:not-allowed}'
    + '.rm-login-hint{text-align:center;margin:12px 0 0;font-size:13px;color:#6b7280}'
    + '.rm-login-hint a{color:#6366f1;text-decoration:none;font-weight:600}'
    + '.rm-login-hint a:hover{text-decoration:underline}'
    + '@media (max-width:600px){#reg-modal{padding:16px 12px}#reg-modal-card{padding:22px 20px 20px}#reg-modal-close{top:8px;right:8px}}'
    + '[data-theme="dark"] #reg-modal-card{background:#1f2937}'
    + '[data-theme="dark"] #reg-modal h2{color:#f9fafb}'
    + '[data-theme="dark"] .rm-field label{color:#f9fafb}'
    + '[data-theme="dark"] .rm-form input{background:#111827;border-color:#374151;color:#f9fafb}'
    + '[data-theme="dark"] .rm-form input:hover{border-color:#4b5563}'
    + '[data-theme="dark"] #reg-modal-close{background:#111827;color:#e5e7eb}'
    + '[data-theme="dark"] .rm-error{background:#3f1d1d;border-color:#7f1d1d;color:#fca5a5}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var modal = document.createElement('div');
  modal.id = 'reg-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Регистрация Prochat');
  modal.innerHTML = ''
    + '<div id="reg-modal-backdrop"></div>'
    + '<div id="reg-modal-card">'
    +   '<button id="reg-modal-close" aria-label="Закрыть">\u00d7</button>'
    +   '<h2>Создать аккаунт</h2>'
    +   '<form id="rm-form" class="rm-form" novalidate>'
    +     '<div class="rm-field"><label for="rm-orgName">Название компании <span class="rm-req">*</span></label><input id="rm-orgName" name="orgName" type="text" required autocomplete="organization"></div>'
    +     '<div class="rm-field"><label for="rm-name">Ваше имя <span class="rm-req">*</span></label><input id="rm-name" name="name" type="text" required autocomplete="name"></div>'
    +     '<div class="rm-field"><label for="rm-email">Email <span class="rm-req">*</span></label><input id="rm-email" name="email" type="email" required autocomplete="email"></div>'
    +     '<div class="rm-field"><label for="rm-password">Пароль <span class="rm-req">*</span></label><input id="rm-password" name="password" type="password" required minlength="8" autocomplete="new-password"><div class="rm-hint">Минимум 8 символов</div></div>'
    +     '<div class="rm-row">'
    +       '<div class="rm-field"><label for="rm-phone">Телефон <span class="rm-opt">(необязательно)</span></label><input id="rm-phone" name="phone" type="tel" placeholder="+998 90 123 45 67" autocomplete="tel"></div>'
    +       '<div class="rm-field"><label for="rm-telegram">Telegram <span class="rm-opt">(необязательно)</span></label><input id="rm-telegram" name="telegram" type="text" placeholder="@username"></div>'
    +     '</div>'
    +     '<div class="rm-field"><label for="rm-website">Ваш сайт <span class="rm-opt">(необязательно)</span></label><input id="rm-website" name="website" type="text" placeholder="example.com"></div>'
    +     '<div class="rm-error" id="rm-error"></div>'
    +     '<button type="submit" class="rm-submit" id="rm-submit">Создать аккаунт</button>'
    +   '</form>'
    +   '<p class="rm-login-hint">Уже есть аккаунт? <a href="' + LOGIN_URL + '">Войти</a></p>'
    + '</div>';
  document.body.appendChild(modal);

  var backdrop = modal.querySelector('#reg-modal-backdrop');
  var closeBtn = modal.querySelector('#reg-modal-close');
  var form = modal.querySelector('#rm-form');
  var errEl = modal.querySelector('#rm-error');
  var submitBtn = modal.querySelector('#rm-submit');

  function open(e) {
    if (e && e.preventDefault) e.preventDefault();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    var firstInput = modal.querySelector('#rm-orgName');
    if (firstInput) setTimeout(function () { firstInput.focus(); }, 50);
  }
  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  backdrop.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    errEl.classList.remove('show');
    errEl.textContent = '';

    var data = Object.fromEntries(new FormData(form));
    Object.keys(data).forEach(function (k) { if (typeof data[k] === 'string') data[k] = data[k].trim(); });
    Object.keys(data).forEach(function (k) { if (data[k] === '') delete data[k]; });

    submitBtn.disabled = true;
    submitBtn.textContent = 'Создаём аккаунт…';

    try {
      var res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        var body = await res.json().catch(function () { return {}; });
        var msg = Array.isArray(body.message) ? body.message.join(', ') : (body.message || 'Ошибка регистрации');
        throw new Error(msg);
      }
      window.location.href = LOGIN_URL + '?registered=1&email=' + encodeURIComponent(data.email || '');
    } catch (err) {
      errEl.textContent = err.message || 'Не удалось создать аккаунт. Попробуйте ещё раз.';
      errEl.classList.add('show');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Создать аккаунт';
    }
  });

  function wire() {
    var selectors = [
      'a[href="register.html"]',
      'a[href="/register.html"]',
      'a[href="../register.html"]',
      'a[href="./register.html"]',
      'a[href$="/register.html"]',
      'a[href="register"]',
      'a[href="/register"]',
      'a[href="../register"]',
      'a[href="./register"]',
      'a[href$="/register"]',
      '[data-register]'
    ];
    document.querySelectorAll(selectors.join(',')).forEach(function (el) {
      if (el.__regWired) return;
      el.__regWired = true;
      el.addEventListener('click', open);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }

  window.ProchatRegister = { open: open, close: close };
})();
