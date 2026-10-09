/* Макеты «оживления» лендинга: тексты новых блоков (RU/UZ/EN) и email-форма в первом экране.
   Тексты — предложение, не утверждённый маркетинг. На прод не выкатывается. */
(function () {
  var T = {
    ru: {
      a_eyebrow: 'Сделано в Ташкенте · по-русски и по-узбекски',
      a_h1: 'Онлайн-чат для сайта, который отвечает клиентам <span class="gradient-text">даже ночью</span>',
      a_sub: 'Посетитель пишет на сайте — вы отвечаете с компьютера или из Telegram. Когда вас нет, ИИ-ассистент отвечает по вашим же ответам, а утром вы видите все заявки.',
      a_ph: 'Ваш рабочий email', a_btn: 'Начать бесплатно',
      a_micro: '<b>0 сум навсегда</b> на тарифе Free · без карты · установка за 5 минут',
      a_login: 'Уже есть аккаунт? <a href="https://app.prochat.uz/login">Войти</a>',
      a_bar: 'app.prochat.uz — Чаты', a_night: 'Гость · 23:40', a_night_m: 'Вы работаете в субботу?', a_tag_ai: 'ответил ИИ-ассистент',
      a_tg_t: 'Prochat в Telegram', a_tg_s: 'Новое сообщение с сайта: «Zo‘r, ertaga olib kelasizlarmi?»',
      f1_b: 'По-узбекски и по-русски', f1_s: 'Виджет и ответы ИИ — на языке клиента',
      f2_b: 'Ответы из Telegram', f2_s: 'Не нужно сидеть в кабинете — отвечайте с телефона',
      f3_b: 'Ставится на любой сайт', f3_s: 'Tilda, WordPress, Bitrix или свой код — одна строка',
      f4_b: 'Оплата в сумах', f4_s: 'Uzcard, Humo, Click, Uzum, счёт для юрлиц',
      b_eyebrow: 'Новый сервис из Ташкента — первым клиентам цена Start фиксируется навсегда',
      b_h1: 'Онлайн-чат для сайта с ответами <span class="gradient-text">из Telegram</span>',
      b_sub: 'Клиент пишет на сайте по-узбекски или по-русски — сообщение сразу приходит вам в Telegram. Отвечаете с телефона, клиент видит ответ на сайте. Ночью отвечает ИИ-ассистент.',
      b_btn1: 'Подключить бесплатно →', b_btn2: 'Спросить в Telegram',
      b_price: '<span><b>Free</b> — 0 сум навсегда</span><span><b>Start</b> с Telegram и ИИ — 149 000 сум/мес, первые 10 дней бесплатно</span>',
      s1_cap: '1 · На сайте', s1_h: 'Клиент задаёт вопрос', s1_p: 'Чат открывается на любой странице, на языке посетителя.',
      s2_cap: '2 · В Telegram', s2_h: 'Вы отвечаете с телефона', s2_p: 'Уведомление приходит в Telegram — ответ уходит клиенту на сайт.',
      s3_cap: '3 · Ночью', s3_h: 'ИИ-ассистент отвечает сам', s3_p: 'Отвечает по вашим текстам и прайсу, сложное оставляет вам на утро.',
      p_title: 'Цены в сумах. Начните бесплатно', p_sub: 'Платите, когда чат начнёт приносить заявки. Карта на старте не нужна.',
      rec: 'Рекомендуем', som: 'сум', mo: '/мес', forever: 'навсегда',
      free_for: 'Попробовать на своём сайте', start_for: 'Магазин или сервис, 1–3 менеджера', biz_for: 'Несколько сайтов или отдел продаж',
      start_day: '≈ 5 000 сум в день', biz_day: '≈ 13 000 сум в день',
      fr1: '1 оператор, 1 сайт', fr2: '50 диалогов в месяц', fr3: 'Виджет на RU / UZ / EN', fr4: 'Telegram и ИИ-ассистент',
      st1: 'До 3 операторов, 3 сайта', st2: '500 диалогов в месяц', st3: 'Ответы из Telegram', st4: 'ИИ-ассистент: 100 диалогов в месяц', st5: 'Свой логотип в чате вместо нашего',
      bz1: 'Без лимита операторов, сайтов и диалогов', bz2: 'ИИ-ассистент: 300 диалогов в месяц', bz3: 'База знаний до 100 документов', bz4: 'Свой брендинг', bz5: 'Приоритетная поддержка',
      free_cta: 'Начать бесплатно', start_cta: 'Попробовать 10 дней бесплатно', biz_cta: 'Выбрать Business', refund: 'Не подойдёт — вернём деньги в течение 30 дней',
      pay: 'Оплата: <b>Uzcard</b> · <b>Humo</b> · <b>Visa / Mastercard</b> · <b>Click</b> · <b>Uzum</b> · счёт и договор для юрлиц',
      t_h: 'Мы новый сервис — и говорим об этом прямо', t_p: 'Вместо чужих логотипов — то, что можно проверить самому:',
      t1: '<b>Чат в углу этой страницы — это Prochat.</b> Напишите — ответим мы сами.',
      t2: '<b>Команда на связи в Telegram:</b> <a href="https://t.me/prochat_support">@prochat_support</a>, отвечаем в течение часа.',
      t3: '<b>Поможем подключить:</b> первым клиентам ставим чат и настраиваем ответы вместе.',
      t4: '<b>Цена фиксируется:</b> первые клиенты платят 149 000 сум за Start, даже когда тариф подорожает.',
      c_slot: 'Место для первого кейса', c_quote: '«Раньше вопросы с сайта терялись. Теперь отвечаем из Telegram за пару минут — за месяц N новых заказов»',
      c_who: 'Имя, название магазина · реальная цифра после первого месяца'
    },
    uz: {
      a_eyebrow: 'Toshkentda yaratilgan · o‘zbek va rus tillarida',
      a_h1: 'Sayt uchun onlayn-chat: mijozlarga <span class="gradient-text">tunda ham</span> javob beradi',
      a_sub: 'Tashrif buyuruvchi saytda yozadi — siz kompyuterdan yoki Telegramdan javob berasiz. Siz yo‘q paytda AI-yordamchi sizning javoblaringiz asosida javob beradi, ertalab esa barcha arizalarni ko‘rasiz.',
      a_ph: 'Ish email manzilingiz', a_btn: 'Bepul boshlash',
      a_micro: '<b>Free</b> tarifida <b>0 so‘m, muddatsiz</b> · kartasiz · 5 daqiqada o‘rnatiladi',
      a_login: 'Akkauntingiz bormi? <a href="https://app.prochat.uz/login">Kirish</a>',
      a_bar: 'app.prochat.uz — Chatlar', a_night: 'Mehmon · 23:40', a_night_m: 'Shanba kuni ishlaysizlarmi?', a_tag_ai: 'AI-yordamchi javob berdi',
      a_tg_t: 'Prochat Telegramda', a_tg_s: 'Saytdan yangi xabar: «Zo‘r, ertaga olib kelasizlarmi?»',
      f1_b: 'O‘zbek va rus tilida', f1_s: 'Vidjet va AI javoblari — mijoz tilida',
      f2_b: 'Telegramdan javob', f2_s: 'Kabinetda o‘tirish shart emas — telefondan javob bering',
      f3_b: 'Har qanday saytga', f3_s: 'Tilda, WordPress, Bitrix yoki o‘z kodingiz — bitta qator',
      f4_b: 'So‘mda to‘lov', f4_s: 'Uzcard, Humo, Click, Uzum, yuridik shaxslar uchun hisob',
      b_eyebrow: 'Toshkentdan yangi xizmat — birinchi mijozlar uchun Start narxi umrbod saqlanadi',
      b_h1: 'Sayt uchun onlayn-chat — <span class="gradient-text">Telegramdan</span> javob bering',
      b_sub: 'Mijoz saytda o‘zbek yoki rus tilida yozadi — xabar darhol Telegramingizga keladi. Telefondan javob berasiz, mijoz javobni saytda ko‘radi. Tunda AI-yordamchi javob beradi.',
      b_btn1: 'Bepul ulash →', b_btn2: 'Telegramda so‘rash',
      b_price: '<span><b>Free</b> — 0 so‘m, muddatsiz</span><span><b>Start</b> Telegram va AI bilan — 149 000 so‘m/oy, dastlabki 10 kun bepul</span>',
      s1_cap: '1 · Saytda', s1_h: 'Mijoz savol beradi', s1_p: 'Chat istalgan sahifada, tashrif buyuruvchi tilida ochiladi.',
      s2_cap: '2 · Telegramda', s2_h: 'Telefondan javob berasiz', s2_p: 'Bildirishnoma Telegramga keladi — javob mijozga saytda yetib boradi.',
      s3_cap: '3 · Tunda', s3_h: 'AI-yordamchi o‘zi javob beradi', s3_p: 'Matnlaringiz va narxlaringiz bo‘yicha javob beradi, murakkabini ertalabga qoldiradi.',
      p_title: 'Narxlar so‘mda. Bepul boshlang', p_sub: 'Chat arizalar keltira boshlaganda to‘laysiz. Boshlash uchun karta kerak emas.',
      rec: 'Tavsiya qilamiz', som: 'so‘m', mo: '/oy', forever: 'muddatsiz',
      free_for: 'O‘z saytingizda sinab ko‘rish', start_for: 'Do‘kon yoki xizmat, 1–3 menejer', biz_for: 'Bir nechta sayt yoki savdo bo‘limi',
      start_day: 'kuniga ≈ 5 000 so‘m', biz_day: 'kuniga ≈ 13 000 so‘m',
      fr1: '1 operator, 1 sayt', fr2: 'Oyiga 50 ta dialog', fr3: 'RU / UZ / EN vidjet', fr4: 'Telegram va AI-yordamchi',
      st1: '3 tagacha operator, 3 sayt', st2: 'Oyiga 500 ta dialog', st3: 'Telegramdan javob', st4: 'AI-yordamchi: oyiga 100 ta dialog', st5: 'Chatda bizning logotip o‘rniga sizniki',
      bz1: 'Operator, sayt va dialoglar cheklanmagan', bz2: 'AI-yordamchi: oyiga 300 ta dialog', bz3: '100 tagacha hujjatli bilimlar bazasi', bz4: 'O‘z brendingiz', bz5: 'Ustuvor yordam',
      free_cta: 'Bepul boshlash', start_cta: '10 kun bepul sinab ko‘rish', biz_cta: 'Business tanlash', refund: 'Yoqmasa — 30 kun ichida pulni qaytaramiz',
      pay: 'To‘lov: <b>Uzcard</b> · <b>Humo</b> · <b>Visa / Mastercard</b> · <b>Click</b> · <b>Uzum</b> · yuridik shaxslar uchun hisob va shartnoma',
      t_h: 'Biz yangi xizmatmiz — buni ochiq aytamiz', t_p: 'Begona logotiplar o‘rniga — o‘zingiz tekshira oladigan narsalar:',
      t1: '<b>Ushbu sahifa burchagidagi chat — bu Prochat.</b> Yozing — o‘zimiz javob beramiz.',
      t2: '<b>Jamoa Telegramda aloqada:</b> <a href="https://t.me/prochat_support">@prochat_support</a>, bir soat ichida javob beramiz.',
      t3: '<b>Ulashga yordam beramiz:</b> birinchi mijozlar uchun chatni birga o‘rnatamiz va javoblarni sozlaymiz.',
      t4: '<b>Narx saqlanadi:</b> birinchi mijozlar Start uchun 149 000 so‘m to‘laydi, tarif qimmatlashsa ham.',
      c_slot: 'Birinchi keys uchun joy', c_quote: '«Ilgari saytdagi savollar yo‘qolib ketardi. Endi Telegramdan bir necha daqiqada javob beramiz — bir oyda N ta yangi buyurtma»',
      c_who: 'Ism, do‘kon nomi · birinchi oydan keyingi haqiqiy raqam'
    },
    en: {
      a_eyebrow: 'Made in Tashkent · in Uzbek and Russian',
      a_h1: 'Live chat for your website that answers customers <span class="gradient-text">even at night</span>',
      a_sub: 'A visitor writes on your site — you reply from your computer or from Telegram. When you are away, the AI assistant answers using your own replies, and in the morning you see every request.',
      a_ph: 'Your work email', a_btn: 'Start free',
      a_micro: '<b>0 UZS forever</b> on Free · no card · 5-minute setup',
      a_login: 'Already have an account? <a href="https://app.prochat.uz/login">Log in</a>',
      a_bar: 'app.prochat.uz — Chats', a_night: 'Guest · 23:40', a_night_m: 'Are you open on Saturday?', a_tag_ai: 'answered by AI assistant',
      a_tg_t: 'Prochat in Telegram', a_tg_s: 'New message from your site: “Zo‘r, ertaga olib kelasizlarmi?”',
      f1_b: 'Uzbek and Russian', f1_s: 'Widget and AI replies in the customer’s language',
      f2_b: 'Reply from Telegram', f2_s: 'No need to sit in the dashboard — answer from your phone',
      f3_b: 'Works on any site', f3_s: 'Tilda, WordPress, Bitrix or custom code — one line',
      f4_b: 'Pay in UZS', f4_s: 'Uzcard, Humo, Click, Uzum, invoices for companies',
      b_eyebrow: 'New service from Tashkent — early customers lock the Start price forever',
      b_h1: 'Live chat for your website, <span class="gradient-text">answered from Telegram</span>',
      b_sub: 'A customer writes on your site in Uzbek or Russian — the message lands in your Telegram right away. You reply from your phone, they see it on the site. At night the AI assistant answers.',
      b_btn1: 'Connect for free →', b_btn2: 'Ask on Telegram',
      b_price: '<span><b>Free</b> — 0 UZS forever</span><span><b>Start</b> with Telegram and AI — 149 000 UZS/mo, first 10 days free</span>',
      s1_cap: '1 · On your site', s1_h: 'A customer asks', s1_p: 'The chat opens on any page, in the visitor’s language.',
      s2_cap: '2 · In Telegram', s2_h: 'You reply from your phone', s2_p: 'The alert comes to Telegram — your reply goes back to the site.',
      s3_cap: '3 · At night', s3_h: 'The AI assistant answers', s3_p: 'It answers from your texts and prices and leaves hard questions for the morning.',
      p_title: 'Prices in UZS. Start free', p_sub: 'Pay once the chat starts bringing requests. No card to start.',
      rec: 'Recommended', som: 'UZS', mo: '/mo', forever: 'forever',
      free_for: 'Try it on your own site', start_for: 'Shop or service, 1–3 managers', biz_for: 'Several sites or a sales team',
      start_day: '≈ 5 000 UZS a day', biz_day: '≈ 13 000 UZS a day',
      fr1: '1 operator, 1 site', fr2: '50 chats a month', fr3: 'RU / UZ / EN widget', fr4: 'Telegram and AI assistant',
      st1: 'Up to 3 operators, 3 sites', st2: '500 chats a month', st3: 'Reply from Telegram', st4: 'AI assistant: 100 chats a month', st5: 'Your logo in the chat instead of ours',
      bz1: 'Unlimited operators, sites and chats', bz2: 'AI assistant: 300 chats a month', bz3: 'Knowledge base up to 100 documents', bz4: 'Custom branding', bz5: 'Priority support',
      free_cta: 'Start free', start_cta: 'Try 10 days free', biz_cta: 'Choose Business', refund: 'Not a fit — money back within 30 days',
      pay: 'Payment: <b>Uzcard</b> · <b>Humo</b> · <b>Visa / Mastercard</b> · <b>Click</b> · <b>Uzum</b> · invoice and contract for companies',
      t_h: 'We are new — and we say so', t_p: 'Instead of other people’s logos, things you can check yourself:',
      t1: '<b>The chat in the corner of this page is Prochat.</b> Write — we answer ourselves.',
      t2: '<b>The team is on Telegram:</b> <a href="https://t.me/prochat_support">@prochat_support</a>, we reply within an hour.',
      t3: '<b>We help you set up:</b> for early customers we install the chat and tune replies together.',
      t4: '<b>Price lock:</b> early customers pay 149 000 UZS for Start even when the plan gets more expensive.',
      c_slot: 'Slot for the first case study', c_quote: '“Questions from the site used to get lost. Now we answer from Telegram in minutes — N new orders in a month”',
      c_who: 'Name, shop name · real number after the first month'
    }
  };

  function lang() {
    var l = document.documentElement.lang;
    try { l = localStorage.getItem('prochat_lang') || l; } catch (e) {}
    return T[l] ? l : 'ru';
  }
  function apply() {
    var t = T[lang()];
    document.querySelectorAll('[data-rv]').forEach(function (el) {
      var k = el.getAttribute('data-rv'); if (t[k] !== undefined) el.innerHTML = t[k];
    });
    document.querySelectorAll('[data-rv-ph]').forEach(function (el) {
      var k = el.getAttribute('data-rv-ph'); if (t[k] !== undefined) el.placeholder = t[k];
    });
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.lang-btn')) setTimeout(apply, 0);
  });

  // Email в первом экране: открываем существующую форму регистрации и подставляем адрес.
  document.addEventListener('submit', function (e) {
    var f = e.target.closest && e.target.closest('.rv-email-form');
    if (!f) return;
    e.preventDefault();
    var email = (f.querySelector('input[type=email]') || {}).value || '';
    if (window.ProchatRegister) {
      window.ProchatRegister.open();
      var el = document.getElementById('rm-email');
      if (el) el.value = email.trim();
    } else {
      location.href = 'register?email=' + encodeURIComponent(email);
    }
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
  window.addEventListener('load', apply);
})();
