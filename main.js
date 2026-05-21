// ===== i18n TRANSLATIONS =====
const translations = {
  ru: {
    meta_title: "Prochat — Онлайн-чат и AI для вашего сайта",
    nav_features: "Возможности", nav_how: "Как работает", nav_pricing: "Цены",
    nav_integrations: "Интеграции", nav_blog: "Блог", nav_help: "Справка",
    nav_login: "Войти", nav_start: "Попробовать бесплатно",
    footer_partners: "Партнёрам", footer_api: "API / Webhooks",
    hero_badge_ai: "ИИ-консультант отвечает 24/7",
    hero_badge_local: "Поддержка на русском и узбекском",
    hero_title: "Превращайте посетителей<br/>в <span class=\"gradient-text\">клиентов</span> — прямо с сайта",
    hero_sub: "Онлайн-чат, AI-автопилот и аналитика для бизнеса. Устанавливается за 5 минут. Без карты.",
    hero_cta_primary: "Начать бесплатно →", hero_cta_demo: "Смотреть демо",
    stat_companies: "компаний", stat_min: "мин", stat_setup: "установка",
    stat_ai: "AI-поддержка", stat_days: "дней", stat_guarantee: "гарантия",
    chat_agent_name: "Алина", chat_online: "онлайн",
    chat_msg1: "Привет! Чем могу помочь? 👋",
    chat_msg2: "Какие у вас тарифы?",
    chat_msg3: "Есть бесплатный план и Business от 390 000 сум/мес. Показать подробнее?",
    chat_placeholder: "Напишите сообщение...",
    notif_title: "Новый посетитель", notif_sub: "Просматривает страницу цен",
    float_conversion: "конверсия",
    logos_label: "Нам доверяют компании по всему Узбекистану",
    features_title: "Всё что нужно — в одном инструменте",
    features_sub: "Не нужно собирать из 10 сервисов. Prochat делает всё сам.",
    feat1_title: "AI-автопилот", feat1_sub: "Отвечает на типовые вопросы 24/7. Обучается на ваших данных. Передаёт оператору когда нужен человек.",
    feat2_title: "Живой чат", feat2_sub: "Общайтесь с клиентами в реальном времени. Работает прямо в браузере, без установок.",
    feat3_title: "Аналитика", feat3_sub: "Кто на сайте, откуда пришёл, что смотрит. Триггеры по действиям посетителей.",
    feat4_title: "Маршрутизация", feat4_sub: "Автоматически распределяет чаты между отделами. Очереди и приоритеты.",
    feat5_title: "Telegram + сайт", feat5_sub: "Чат на сайте и Telegram-бот — в одном окне оператора. WhatsApp и Instagram — в дорожной карте.",
    feat6_title: "Быстрые ответы", feat6_sub: "База шаблонов. Подсказки от AI прямо в интерфейсе оператора.",
    feat7_title: "Авто-перевод в реальном времени",
    feat7_sub: "Клиент пишет на английском — оператор видит по-русски. Оператор отвечает по-русски — клиент получает на английском. Поддержка 50+ языков без переключений.",
    feat_ai_title: "ИИ-консультант — отвечает за 5 секунд",
    feat_ai_sub: "Загрузите свои FAQ — бот будет отвечать посетителям на типовые вопросы мгновенно. Сложные кейсы передаёт оператору. Учится на ответах ваших операторов. Работает на русском, узбекском, английском и любом другом языке.",
    feat_ai_bullet_speed: "Отвечает за 2-5 секунд вместо часа",
    feat_ai_bullet_persite: "Свой бот на каждом сайте",
    feat_ai_bullet_byok: "Свой ИИ-ключ → без лимита диалогов",
    feat_ai_bullet_escalate: "Сложные вопросы — оператору",
    plan_ai_no: "ИИ-консультант",
    plan_ai_start: "ИИ-консультант: 3 сайта, 100 ИИ-диалогов/мес",
    plan_ai_business: "ИИ-консультант: 10 сайтов, 300 ИИ-диалогов/мес",
    plan_kb_start: "База знаний: до 20 документов",
    plan_kb_business: "База знаний: до 100 документов",
    plan_byok: "Свой ИИ-ключ → без лимита",
    demo_autotranslate: "Авто-перевод: EN → RU",
    demo_translated_label: "Перевод:",
    demo_sent_as: "Клиент получит на EN",
    feat_popular: "Популярно",
    roi_title: "Сколько вы теряете без чата?",
    roi_sub: "Введите данные и узнайте упущенную выручку",
    roi_visitors_label: "Посетителей сайта в месяц",
    roi_order_label: "Средний чек (USD)",
    roi_conv_label: "Текущая конверсия (%)",
    roi_result_label: "Дополнительная выручка с Prochat",
    roi_result_sub: "в месяц при росте конверсии на +18%",
    roi_cta: "Начать зарабатывать больше →",
    how_title: "Запуск за 3 шага", how_sub: "От регистрации до первого чата — 5 минут",
    step1_title: "Зарегистрируйтесь", step1_sub: "Создайте аккаунт. Карту вводить не нужно.",
    step2_title: "Установите виджет", step2_sub: "Скопируйте 2 строки кода на свой сайт.",
    step3_title: "Общайтесь", step3_sub: "Принимайте чаты прямо в браузере — на компьютере или телефоне.",
    code_comment: "Вставьте перед",
    demo_title: "Посмотрите как это работает", demo_sub: "Интерфейс оператора прямо в браузере",
    demo_chats: "Чаты", demo_anon: "Аноним #1",
    demo_q1: "Какой у вас тариф?", demo_q2: "Спасибо, всё понял!", demo_q3: "Как подключить Instagram?",
    demo_now: "сейчас",
    demo_visitor_info: "На сайте 3 мин · Страница: /pricing",
    demo_answer: "Есть Free навсегда, Start 149 000 сум и Business 390 000 сум/мес. Могу рассказать подробнее о каждом!",
    demo_reply_placeholder: "Ответить клиенту...", demo_send: "Отправить",
    demo_ai_hint_label: "AI подсказка:", demo_ai_hint_text: "\"Предложите пробный период Pro на 14 дней\"",
    integr_title: "Работает с вашими инструментами",
    integr_sub: "Подключается к популярным платформам за пару кликов",
    integr_more: "И ещё 50+",
    pricing_title: "Прозрачные цены",
    pricing_sub: "Без скрытых платежей. Начните бесплатно — без карты.",
    plan_forever: "/навсегда", plan_per_month: "/мес", plan_per_op: "/оператор/мес",
    plan_operator: "оператор", plan_dialogs: "диалогов/мес",
    plan_ai_hints: "AI-подсказок/мес", plan_widget: "Чат-виджет (RU/UZ/EN)",
    plan_kb: "База знаний", plan_autopilot: "AI автопилот",
    plan_telegram: "Telegram", plan_up_to_3_ops: "До 3 операторов",
    plan_analytics: "Аналитика", plan_priority: "Приоритетная поддержка",
    plan_popular_badge: "Популярный",
    plan_unlimited_ops: "Безлимит операторов", plan_unlimited_dialogs: "Безлимит диалогов",
    plan_integrations: "интеграции",
    plan_trial: "Попробовать 10 дней",
    plan_guarantee_text: "30 дней — возврат денег",
    plan_all_essential: "Всё из Start", plan_kb_rag: "База знаний (RAG + pgvector)",
    plan_unlimited_ai: "Безлимит AI-подсказок", plan_custom_brand: "Кастомный брендинг",
    plan_start: "Начать", plan_choose_pro: "Выбрать Business",
    plan_choose_business: "Выбрать Business",
    pricing_note: "Не уверены? Напишите нам — подберём тариф под ваш бизнес.",
    pricing_contact: "Связаться →",
    payment_label: "Способы оплаты:",
    payment_wire: "🏦 Безналичный расчёт",
    onprem_title: "Нужно развернуть на своих серверах?",
    onprem_text: "Мы предоставляем On-Premise вариант для компаний, которые не хотят передавать данные клиентов третьим лицам. Полный контроль над данными на вашей инфраструктуре.",
    onprem_cta: "Обсудить условия →",
    why_title: "Почему выбирают Prochat",
    why_sub: "Сделан для бизнеса в Узбекистане и СНГ",
    why1_title: "Родной язык клиента", why1_text: "Единственный чат с полноценной поддержкой узбекского языка. AI отвечает на UZ и RU — клиент пишет как ему удобно.",
    why2_title: "Telegram + сайт в одном окне", why2_text: "Все обращения — из чата на сайте и из Telegram — в едином интерфейсе оператора. Ничего не теряется.",
    why3_title: "AI работает ночью и в выходные", why3_text: "Автопилот отвечает на типовые вопросы 24/7. Утром оператор видит готовые лиды, не пропущенные обращения.",
    why4_title: "Готово за 5 минут", why4_text: "Одна строчка кода на сайте — и чат работает. Никаких интеграторов, разработчиков и долгих внедрений.",
    early_tag: "🚀 Мы только запустились",
    early_title: "Станьте первыми — получите особые условия",
    early_sub: "Prochat — новый продукт. Мы честно говорим об этом. Взамен предлагаем то, чего не дают зрелые сервисы: прямой доступ к команде, влияние на продукт и цены, которые зафиксируем навсегда.",
    early_b1: "Цена зафиксирована навсегда", early_b1s: "Ранние клиенты платят 149 000 сум/мес за Start всегда — даже когда тариф вырастет",
    early_b2: "Прямой доступ к основателям", early_b2s: "Онбординг с командой, ответы в Telegram в течение часа",
    early_b3: "Влияете на продукт", early_b3s: "Ваши запросы идут в первую очередь. Голосование за фичи раз в месяц",
    early_b4: "30 дней — полный возврат", early_b4s: "Не понравится — вернём деньги без вопросов",
    early_cta: "Стать ранним клиентом →",
    early_spots: "мест раннего доступа", early_taken: "Занято:",
    ep1: "Start навсегда за 149 000 сум", ep2: "Business — 3 месяца бесплатно",
    ep3: "Персональный онбординг", ep4: "Бейдж «Ранний клиент»",
    stats_title: "Почему бизнес выбирает онлайн-чат",
    stats_sub: "Данные отраслевых исследований Forrester, Econsultancy, Gartner",
    stat1_text: "покупателей предпочитают чат — потому что получают ответ немедленно, без ожидания на линии",
    stat2_text: "средний рост конверсии у интернет-магазинов после внедрения живого чата на сайте",
    stat3_text: "клиентов уходят без покупки, если не получают быстрый ответ на вопрос во время выбора",
    stat4_text: "выше вероятность покупки у посетителей, которые вступили в диалог с оператором или ботом",
    stat5_text: "типовых обращений в поддержку решаются автоматически с помощью AI без участия оператора",
    stat6_text: "снижение стоимости обработки одного обращения при переходе на гибридную модель AI + оператор",
    reviews_title: "Что говорят клиенты",
    review1_text: "\"Конверсия с сайта выросла на 18% за первый месяц. AI отвечает ночью — клиенты довольны.\"",
    review2_text: "\"Поставили за 10 минут. Интерфейс понятный, операторы освоились без обучения.\"",
    review2_role: "Руководитель поддержки, Shopper.uz",
    review3_text: "\"Нравится что чат с сайта и Telegram — в одном кабинете. Не теряем обращения.\"",
    review3_role: "Основатель, Delivery Pro",
    faq1_q: "Нужно ли вводить карту при регистрации?",
    faq1_a: "Нет. Бесплатный план работает без карты. Карта нужна только при переходе на платный тариф.",
    faq2_q: "Как работает AI-автопилот?",
    faq2_a: "AI обучается на ваших данных: FAQ, документации, прошлых диалогах. Отвечает автоматически, при сложных вопросах передаёт живому оператору.",
    faq3_q: "Что такое гарантия возврата 30 дней?",
    faq3_a: "Если за 30 дней конверсия не вырастет — вернём оплату без вопросов. Просто напишите в поддержку.",
    faq4_q: "Можно ли настроить виджет под свой стиль?",
    faq4_a: "Да — цвет, форма, позиция, аватар оператора, текст приветствия. В плане Pro — полное удаление брендинга Prochat.",
    faq5_q: "Есть ли поддержка на узбекском языке?",
    faq5_a: "Да. Команда поддержки работает на русском и узбекском языках. Виджет также поддерживает мультиязычность.",
    cta_title: "Готовы начать?",
    cta_sub: "Бесплатно. Без карты. Первый чат — через 5 минут.",
    cta_btn: "Создать аккаунт →",
    footer_tagline: "Онлайн-чат и AI для бизнеса",
    footer_product: "Продукт", footer_company: "Компания", footer_integrations: "Интеграции",
    footer_docs: "Документация", footer_about: "О нас", footer_contacts: "Контакты",
    footer_city: "Ташкент, Узбекистан",
    footer_privacy: "Политика конфиденциальности", footer_terms: "Условия",
  },

  uz: {
    meta_title: "Prochat — Saytingiz uchun onlayn chat va AI",
    nav_features: "Imkoniyatlar", nav_how: "Qanday ishlaydi", nav_pricing: "Narxlar",
    nav_integrations: "Integratsiyalar", nav_blog: "Blog", nav_help: "Yordam",
    nav_login: "Kirish", nav_start: "Bepul sinab ko'ring",
    footer_partners: "Hamkorlar", footer_api: "API / Webhooks",
    hero_badge_ai: "AI-maslahatchi 24/7 javob beradi",
    hero_badge_local: "O'zbek va rus tilida qo'llab-quvvatlash",
    hero_title: "Tashrif buyuruvchilarni<br/><span class=\"gradient-text\">mijozlarga</span> aylantiring — saytdan",
    hero_sub: "Onlayn-chat, AI-avtopilot va tahlil. 5 daqiqada o'rnatiladi. Karta talab etilmaydi.",
    hero_cta_primary: "Bepul boshlash →", hero_cta_demo: "Demoni ko'rish",
    stat_companies: "kompaniya", stat_min: "daq", stat_setup: "o'rnatish",
    stat_ai: "AI-qo'llab-quvvatlash", stat_days: "kun", stat_guarantee: "kafolat",
    chat_agent_name: "Alina", chat_online: "onlayn",
    chat_msg1: "Salom! Qanday yordam bera olaman? 👋",
    chat_msg2: "Narxlaringiz qanday?",
    chat_msg3: "Bepul tarif va Business 390 000 so'm/oy mavjud. Batafsil ko'rsataymi?",
    chat_placeholder: "Xabar yozing...",
    notif_title: "Yangi tashrif buyuruvchi", notif_sub: "Narxlar sahifasini ko'rmoqda",
    float_conversion: "konversiya",
    logos_label: "O'zbekiston bo'ylab kompaniyalar bizga ishonadi",
    features_title: "Hamma narsa — bir joyda",
    features_sub: "10 ta servisdan yig'maslik kerak. Prochat hammasini o'zi qiladi.",
    feat1_title: "AI-avtopilot", feat1_sub: "Standart savollarga 24/7 javob beradi. Ma'lumotlaringizda o'qiydi. Kerak bo'lsa operatorga uzatadi.",
    feat2_title: "Jonli chat", feat2_sub: "Mijozlar bilan real vaqtda muloqot. Brauzerda to'g'ridan-to'g'ri ishlaydi.",
    feat3_title: "Tahlil", feat3_sub: "Kim saytda, qayerdan keldi, nima ko'rmoqda. Harakatlarga qarab triggerlar.",
    feat4_title: "Yo'naltirish", feat4_sub: "Chatlarni bo'limlar o'rtasida avtomatik taqsimlaydi. Navbatlar va ustuvorliklar.",
    feat5_title: "Telegram + sayt", feat5_sub: "Saytdagi chat va Telegram-bot — bitta operator oynasida. WhatsApp va Instagram yo'l xaritasida.",
    feat6_title: "Tez javoblar", feat6_sub: "Shablonlar bazasi. Operator interfeysida AI maslahatlar.",
    feat7_title: "Real vaqtda avtomatik tarjima",
    feat7_sub: "Mijoz inglizcha yozadi — operator ruscha ko'radi. Operator ruscha javob beradi — mijoz inglizcha oladi. 50+ til, almashtirishsiz.",
    feat_ai_title: "AI-maslahatchi — 5 soniyada javob beradi",
    feat_ai_sub: "FAQ'ingizni yuklang — bot tashrif buyuruvchilarga oddiy savollarga darhol javob beradi. Murakkab holatlarni operatorga uzatadi. Operatorlaringiz javoblarida o'qiydi. Rus, o'zbek, ingliz va boshqa har qanday tilda ishlaydi.",
    feat_ai_bullet_speed: "Soatlar o'rniga 2-5 soniyada javob",
    feat_ai_bullet_persite: "Har bir sayt uchun o'z boti",
    feat_ai_bullet_byok: "O'z AI-kalitingiz → cheklovsiz",
    feat_ai_bullet_escalate: "Murakkab savollar — operatorga",
    plan_ai_no: "AI-maslahatchi",
    plan_ai_start: "AI-maslahatchi: 3 sayt, 100 AI-suhbat/oy",
    plan_ai_business: "AI-maslahatchi: 10 sayt, 300 AI-suhbat/oy",
    plan_kb_start: "Bilim bazasi: 20 hujjatgacha",
    plan_kb_business: "Bilim bazasi: 100 hujjatgacha",
    plan_byok: "O'z AI-kaliti → cheklovsiz",
    demo_autotranslate: "Avto-tarjima: EN → RU",
    demo_translated_label: "Tarjima:",
    demo_sent_as: "Mijoz EN tilida oladi",
    stats_title: "Nega biznes onlayn-chatni tanlaydi",
    stats_sub: "Forrester, Econsultancy, Gartner tarmoq tadqiqotlari ma'lumotlari",
    stat1_text: "xaridorlar chatni afzal ko'radi — chunki javobni darhol olishadi, navbatsiz",
    stat2_text: "onlayn-chat joriy etgan internet-do'konlarda konversiyaning o'rtacha o'sishi",
    stat3_text: "mijozlar tanlov paytida tez javob olmasalar, xarid qilmasdan ketadi",
    stat4_text: "operator yoki bot bilan suhbatga kirgan tashrif buyuruvchilarda xarid ehtimoli yuqori",
    stat5_text: "standart murojaatlar AI yordamida operator ishtirokisiz avtomatik hal qilinadi",
    stat6_text: "AI + operator gibrid modeliga o'tishda bitta murojaat qayta ishlash narxining pasayishi",
    early_tag: "🚀 Biz endigina ishga tushirdik",
    early_title: "Birinchilar bo'ling — maxsus shartlar oling",
    early_sub: "Prochat — yangi mahsulot. Buni ochiq aytamiz. Buning evaziga yetuk servislar bera olmaydigan narsani taklif qilamiz: jamoa bilan to'g'ridan-to'g'ri aloqa, mahsulotga ta'sir va abadiy narx.",
    early_b1: "Narx abadiy qotib qoladi", early_b1s: "Dastlabki mijozlar Start uchun har doim 149 000 so'm/oy to'laydi — tarif ko'tarilsa ham",
    early_b2: "Asoschilarga to'g'ridan-to'g'ri kirish", early_b2s: "Jamoa bilan onboarding, Telegramda bir soat ichida javob",
    early_b3: "Mahsulotga ta'sir qilasiz", early_b3s: "Sizning so'rovlar birinchi o'rinda. Oyda bir marta xususiyat ovoz berish",
    early_b4: "30 kun — to'liq qaytarish", early_b4s: "Yoqmasa — savolsiz pulni qaytaramiz",
    early_cta: "Dastlabki mijoz bo'lish →",
    early_spots: "erta kirish o'rni", early_taken: "Band:",
    ep1: "Start abadiy 149 000 so'mga", ep2: "Business — 3 oy bepul",
    ep3: "Shaxsiy onboarding", ep4: "«Dastlabki mijoz» nishoni",
    feat_popular: "Mashhur",
    roi_title: "Chat bo'lmasa qancha yo'qotasiz?",
    roi_sub: "Ma'lumotlarni kiriting va yo'qolgan daromadni bilib oling",
    roi_visitors_label: "Oylik sayt tashrif buyuruvchilari",
    roi_order_label: "O'rtacha buyurtma (USD)",
    roi_conv_label: "Joriy konversiya (%)",
    roi_result_label: "Prochat bilan qo'shimcha daromad",
    roi_result_sub: "oyiga +18% konversiya o'sishi bilan",
    roi_cta: "Ko'proq ishlashni boshlash →",
    how_title: "3 bosqichda ishga tushirish", how_sub: "Ro'yxatdan o'tishdan birinchi chatgacha — 5 daqiqa",
    step1_title: "Ro'yxatdan o'ting", step1_sub: "Hisob yarating. Karta talab etilmaydi.",
    step2_title: "Vidjetni o'rnating", step2_sub: "Saytingizga 2 qator kod nusxalang.",
    step3_title: "Muloqot qiling", step3_sub: "Chatlarni to'g'ridan-to'g'ri brauzerda qabul qiling — kompyuter yoki telefon.",
    code_comment: "Qo'yish kerak",
    demo_title: "Qanday ishlashini ko'ring", demo_sub: "Operator interfeysi to'g'ridan-to'g'ri brauzerda",
    demo_chats: "Chatlar", demo_anon: "Anonim #1",
    demo_q1: "Tarifingiz qanday?", demo_q2: "Rahmat, tushundim!", demo_q3: "Instagramni qanday ulash mumkin?",
    demo_now: "hozir",
    demo_visitor_info: "Saytda 3 daq · Sahifa: /pricing",
    demo_answer: "Abadiy Free, Start 149 000 so'm va Business 390 000 so'm/oy mavjud. Har biri haqida batafsilroq ayta olamanmi!",
    demo_reply_placeholder: "Mijozga javob bering...", demo_send: "Yuborish",
    demo_ai_hint_label: "AI maslahat:", demo_ai_hint_text: "\"Pro uchun 14 kunlik sinov muddatini taklif qiling\"",
    integr_title: "Asboblaringiz bilan ishlaydi",
    integr_sub: "Mashhur platformalarga bir necha klik bilan ulanadi",
    integr_more: "Va yana 50+",
    pricing_title: "Shaffof narxlar",
    pricing_sub: "Yashirin to'lovlar yo'q. Kartasiz bepul boshlang.",
    plan_forever: "/abadiy", plan_per_month: "/oy", plan_per_op: "/operator/oy",
    plan_operator: "operator", plan_dialogs: "muloqot/oy",
    plan_ai_hints: "AI-maslahat/oy", plan_widget: "Chat vidjet (RU/UZ/EN)",
    plan_kb: "Bilimlar bazasi", plan_autopilot: "AI avtopilot",
    plan_telegram: "Telegram", plan_up_to_3_ops: "3 tagacha operator",
    plan_analytics: "Tahlil", plan_priority: "Ustuvor qo'llab-quvvatlash",
    plan_popular_badge: "Mashhur",
    plan_unlimited_ops: "Cheksiz operatorlar", plan_unlimited_dialogs: "Cheksiz muloqotlar",
    plan_integrations: "integratsiyalar",
    plan_trial: "10 kun sinab ko'rish",
    plan_guarantee_text: "30 kun — pulni qaytarish kafolati",
    plan_all_essential: "Start dagi hamma narsa", plan_kb_rag: "Bilimlar bazasi (RAG + pgvector)",
    plan_unlimited_ai: "Cheksiz AI-maslahatlar", plan_custom_brand: "Maxsus brending",
    plan_start: "Boshlash", plan_choose_pro: "Business tanlash",
    plan_choose_business: "Business tanlash",
    pricing_note: "Ishonmayapsizmi? Bizga yozing — biznesingizga mos tarifni tanlaymiz.",
    pricing_contact: "Bog'lanish →",
    payment_label: "To'lov usullari:",
    payment_wire: "🏦 Bank o'tkazma",
    onprem_title: "O'z serveringizda joylashtirish kerakmi?",
    onprem_text: "Mijozlar ma'lumotlarini uchinchi shaxslarga o'tkazishni istamaydiganlar uchun On-Premise variant mavjud. Ma'lumotlar ustidan to'liq nazorat.",
    onprem_cta: "Shartlarni muhokama qilish →",
    why_title: "Nima uchun Prochat tanlashadi",
    why_sub: "O'zbekiston va MDH biznesi uchun yaratilgan",
    why1_title: "Mijozning ona tili", why1_text: "O'zbek tili uchun to'liq qo'llab-quvvatlashga ega yagona chat. AI UZ va RU tillarida javob beradi.",
    why2_title: "Telegram + sayt bitta oynada", why2_text: "Saytdan va Telegramdan barcha murojaatlar operatorning yagona interfeysida. Hech narsa yo'qolmaydi.",
    why3_title: "AI kecha va dam olish kunlari ishlaydi", why3_text: "Avtopilot 24/7 odatdagi savollarga javob beradi. Ertalab operator tayyor leadlarni ko'radi.",
    why4_title: "5 daqiqada tayyor", why4_text: "Saytga bir qator kod — va chat ishlaydi. Integratorlar, dasturchilar va uzoq joriy etish kerak emas.",
    reviews_title: "Mijozlar nima deydi",
    review1_text: "\"Saytdan konversiya birinchi oyda 18% ga oshdi. AI tunlari javob beradi — mijozlar mamnun.\"",
    review2_text: "\"10 daqiqada o'rnatdik. Interfeys tushunarli, operatorlar o'qitmasdan o'rganib oldi.\"",
    review2_role: "Qo'llab-quvvatlash rahbari, Shopper.uz",
    review3_text: "\"Saytdagi chat va Telegram bitta kabinetda — yoqadi. Hech qanday murojaat yo'qolmaydi.\"",
    review3_role: "Asoschisi, Delivery Pro",
    faq1_q: "Ro'yxatdan o'tishda karta kerakmi?",
    faq1_a: "Yo'q. Bepul tarif kartasiz ishlaydi. Karta faqat pullik tarifga o'tishda kerak bo'ladi.",
    faq2_q: "AI-avtopilot qanday ishlaydi?",
    faq2_a: "AI ma'lumotlaringizda o'qiydi: FAQ, hujjatlar, o'tgan muloqotlar. Avtomatik javob beradi, murakkab savollarda tirik operatorga uzatadi.",
    faq3_q: "30 kunlik qaytarish kafolati nima?",
    faq3_a: "Agar 30 kun ichida konversiya oshmasa — savolsiz pulni qaytaramiz. Qo'llab-quvvatlashga yozing.",
    faq4_q: "Vidjetni o'z uslubingizga moslash mumkinmi?",
    faq4_a: "Ha — rang, shakl, joylashuv, operator avatari, salomlashish matni. Pro rejada — Prochat brendingini to'liq olib tashlash.",
    faq5_q: "O'zbek tilida qo'llab-quvvatlash bormi?",
    faq5_a: "Ha. Qo'llab-quvvatlash jamoasi rus va o'zbek tillarida ishlaydi. Vidjet ham ko'p tilli qo'llab-quvvatlashga ega.",
    cta_title: "Boshlashga tayyormisiz?",
    cta_sub: "Bepul. Kartasiz. Birinchi chat — 5 daqiqada.",
    cta_btn: "Hisob yaratish →",
    footer_tagline: "Biznes uchun onlayn-chat va AI",
    footer_product: "Mahsulot", footer_company: "Kompaniya", footer_integrations: "Integratsiyalar",
    footer_docs: "Hujjatlar", footer_about: "Biz haqimizda", footer_contacts: "Aloqa",
    footer_city: "Toshkent, O'zbekiston",
    footer_privacy: "Maxfiylik siyosati", footer_terms: "Shartlar",
  },

  en: {
    meta_title: "Prochat — Live Chat & AI for Your Website",
    nav_features: "Features", nav_how: "How it works", nav_pricing: "Pricing",
    nav_integrations: "Integrations", nav_blog: "Blog", nav_help: "Help",
    nav_login: "Sign in", nav_start: "Try for free",
    footer_partners: "Partners", footer_api: "API / Webhooks",
    hero_badge_ai: "AI assistant answers 24/7",
    hero_badge_local: "Support in Russian & Uzbek",
    hero_title: "Turn visitors into<br/><span class=\"gradient-text\">customers</span> — right from your site",
    hero_sub: "Live chat, AI autopilot and analytics for business. Setup in 5 minutes. No credit card.",
    hero_cta_primary: "Get started free →", hero_cta_demo: "Watch demo",
    stat_companies: "companies", stat_min: "min", stat_setup: "setup",
    stat_ai: "AI support", stat_days: "days", stat_guarantee: "guarantee",
    chat_agent_name: "Alina", chat_online: "online",
    chat_msg1: "Hi! How can I help you? 👋",
    chat_msg2: "What are your pricing plans?",
    chat_msg3: "We have a free plan and Business from 390,000 UZS/mo. Want details?",
    chat_placeholder: "Type a message...",
    notif_title: "New visitor", notif_sub: "Viewing the pricing page",
    float_conversion: "conversion",
    logos_label: "Trusted by companies across Uzbekistan",
    features_title: "Everything you need — in one tool",
    features_sub: "No need to stitch 10 services together. Prochat does it all.",
    feat1_title: "AI Autopilot", feat1_sub: "Answers routine questions 24/7. Learns from your data. Hands off to a human when needed.",
    feat2_title: "Live Chat", feat2_sub: "Talk to customers in real time. Works right in your browser — no install needed.",
    feat3_title: "Analytics", feat3_sub: "Who's on your site, where they came from, what they're viewing. Action-based triggers.",
    feat4_title: "Routing", feat4_sub: "Automatically routes chats between teams. Queues and priorities.",
    feat5_title: "Telegram + website", feat5_sub: "Website chat and Telegram bot — in one operator window. WhatsApp and Instagram on the roadmap.",
    feat6_title: "Quick Replies", feat6_sub: "Template library. AI suggestions right inside the operator interface.",
    feat7_title: "Real-time auto-translation",
    feat7_sub: "Customer writes in English — operator sees it in Russian. Operator replies in Russian — customer gets it in English. 50+ languages, zero switching.",
    feat_ai_title: "AI assistant — answers in 5 seconds",
    feat_ai_sub: "Upload your FAQ — the bot answers visitors' typical questions instantly. Hands off complex cases to an operator. Learns from your operators' replies. Works in Russian, Uzbek, English and any other language.",
    feat_ai_bullet_speed: "Answers in 2-5 sec instead of hours",
    feat_ai_bullet_persite: "Dedicated bot for each site",
    feat_ai_bullet_byok: "Your own AI key → unlimited dialogues",
    feat_ai_bullet_escalate: "Complex questions go to operator",
    plan_ai_no: "AI assistant",
    plan_ai_start: "AI assistant: 3 sites, 100 AI dialogues/mo",
    plan_ai_business: "AI assistant: 10 sites, 300 AI dialogues/mo",
    plan_kb_start: "Knowledge base: up to 20 documents",
    plan_kb_business: "Knowledge base: up to 100 documents",
    plan_byok: "Your AI key → unlimited",
    demo_autotranslate: "Auto-translate: EN → RU",
    demo_translated_label: "Translated:",
    demo_sent_as: "Customer will receive in EN",
    stats_title: "Why businesses choose live chat",
    stats_sub: "Industry research data from Forrester, Econsultancy, Gartner",
    stat1_text: "of buyers prefer chat — because they get an answer instantly, without waiting on hold",
    stat2_text: "average conversion lift for e-commerce stores after adding live chat to their site",
    stat3_text: "of customers leave without buying if they don't get a fast answer while browsing",
    stat4_text: "higher purchase likelihood for visitors who engaged in a chat with an operator or bot",
    stat5_text: "of routine support requests are resolved automatically by AI without operator involvement",
    stat6_text: "reduction in cost per support interaction when switching to an AI + operator hybrid model",
    early_tag: "🚀 We just launched",
    early_title: "Be among the first — get special terms",
    early_sub: "Prochat is a new product. We're honest about that. In return, we offer what mature services can't: direct access to the team, influence over the product, and pricing we'll lock in forever.",
    early_b1: "Price locked forever", early_b1s: "Early customers pay 149,000 UZS/mo for Start forever — even when the plan price increases",
    early_b2: "Direct access to founders", early_b2s: "Onboarding with the team, Telegram replies within an hour",
    early_b3: "Shape the product", early_b3s: "Your requests go first. Monthly feature voting",
    early_b4: "30-day full refund", early_b4s: "Not happy? We'll refund — no questions asked",
    early_cta: "Become an early customer →",
    early_spots: "early access spots", early_taken: "Taken:",
    ep1: "Start forever at 149,000 UZS", ep2: "Business — 3 months free",
    ep3: "Personal onboarding", ep4: "«Early customer» badge",
    feat_popular: "Popular",
    roi_title: "How much are you losing without chat?",
    roi_sub: "Enter your numbers and see missed revenue",
    roi_visitors_label: "Monthly website visitors",
    roi_order_label: "Average order value (USD)",
    roi_conv_label: "Current conversion rate (%)",
    roi_result_label: "Additional revenue with Prochat",
    roi_result_sub: "per month with +18% conversion lift",
    roi_cta: "Start earning more →",
    how_title: "Live in 3 steps", how_sub: "From sign-up to first chat — 5 minutes",
    step1_title: "Sign up", step1_sub: "Create an account. No credit card needed.",
    step2_title: "Install the widget", step2_sub: "Copy 2 lines of code to your site.",
    step3_title: "Start chatting", step3_sub: "Accept chats directly in your browser — desktop or mobile.",
    code_comment: "Paste before",
    demo_title: "See how it works", demo_sub: "Operator interface right in the browser",
    demo_chats: "Chats", demo_anon: "Anonymous #1",
    demo_q1: "What's your pricing?", demo_q2: "Thanks, got it!", demo_q3: "How do I connect Instagram?",
    demo_now: "now",
    demo_visitor_info: "On site 3 min · Page: /pricing",
    demo_answer: "We have Free forever, Start 149,000 UZS and Business 390,000 UZS/mo. Want me to walk you through each one!",
    demo_reply_placeholder: "Reply to customer...", demo_send: "Send",
    demo_ai_hint_label: "AI suggestion:", demo_ai_hint_text: "\"Offer a 14-day Pro trial\"",
    integr_title: "Works with your tools",
    integr_sub: "Connects to popular platforms in a few clicks",
    integr_more: "And 50+ more",
    pricing_title: "Transparent pricing",
    pricing_sub: "No hidden fees. Start free — no card required.",
    plan_forever: "/forever", plan_per_month: "/mo", plan_per_op: "/operator/mo",
    plan_operator: "operator", plan_dialogs: "conversations/mo",
    plan_ai_hints: "AI suggestions/mo", plan_widget: "Chat widget (RU/UZ/EN)",
    plan_kb: "Knowledge base", plan_autopilot: "AI autopilot",
    plan_telegram: "Telegram", plan_up_to_3_ops: "Up to 3 operators",
    plan_analytics: "Analytics", plan_priority: "Priority support",
    plan_popular_badge: "Popular",
    plan_unlimited_ops: "Unlimited operators", plan_unlimited_dialogs: "Unlimited conversations",
    plan_integrations: "integrations",
    plan_trial: "Try free for 10 days",
    plan_guarantee_text: "30-day money-back guarantee",
    plan_all_essential: "Everything in Start", plan_kb_rag: "Knowledge base (RAG + pgvector)",
    plan_unlimited_ai: "Unlimited AI suggestions", plan_custom_brand: "Custom branding",
    plan_start: "Get started", plan_choose_pro: "Choose Business",
    plan_choose_business: "Choose Business",
    pricing_note: "Not sure? Contact us — we'll find the right plan for your business.",
    pricing_contact: "Get in touch →",
    payment_label: "Payment methods:",
    payment_wire: "🏦 Bank transfer (invoice)",
    onprem_title: "Need to deploy on your own servers?",
    onprem_text: "We offer an On-Premise option for companies that don't want to share customer data with third parties. Full control over your data on your infrastructure.",
    onprem_cta: "Discuss terms →",
    why_title: "Why businesses choose Prochat",
    why_sub: "Built for Uzbekistan and CIS markets",
    why1_title: "Customer's native language", why1_text: "The only live chat with full Uzbek language support. AI responds in UZ and RU — customers write however they prefer.",
    why2_title: "Telegram + website in one window", why2_text: "All messages from website chat and Telegram in one operator interface. Nothing gets lost.",
    why3_title: "AI works nights and weekends", why3_text: "Autopilot answers routine questions 24/7. In the morning, operators see ready leads, not missed messages.",
    why4_title: "Ready in 5 minutes", why4_text: "One line of code on your site — and chat works. No integrators, developers, or long implementations.",
    reviews_title: "What customers say",
    review1_text: "\"Site conversion grew 18% in the first month. AI answers at night — customers are happy.\"",
    review2_text: "\"Set up in 10 minutes. The interface is clear, operators picked it up without training.\"",
    review2_role: "Head of Support, Shopper.uz",
    review3_text: "\"Love having website chat and Telegram in one dashboard. No tickets get lost.\"",
    review3_role: "Founder, Delivery Pro",
    faq1_q: "Do I need a credit card to sign up?",
    faq1_a: "No. The free plan works without a card. A card is only needed when upgrading to a paid plan.",
    faq2_q: "How does the AI autopilot work?",
    faq2_a: "AI trains on your data: FAQ, docs, past conversations. It answers automatically and hands off to a human operator for complex questions.",
    faq3_q: "What is the 30-day money-back guarantee?",
    faq3_a: "If your conversion doesn't improve in 30 days, we'll refund you — no questions asked. Just contact support.",
    faq4_q: "Can I customize the widget to match my brand?",
    faq4_a: "Yes — color, shape, position, operator avatar, greeting text. In the Pro plan — full removal of Prochat branding.",
    faq5_q: "Is there support in Uzbek?",
    faq5_a: "Yes. Our support team works in Russian and Uzbek. The widget also supports multilingual mode.",
    cta_title: "Ready to get started?",
    cta_sub: "Free. No card. First chat in 5 minutes.",
    cta_btn: "Create account →",
    footer_tagline: "Live chat and AI for business",
    footer_product: "Product", footer_company: "Company", footer_integrations: "Integrations",
    footer_docs: "Documentation", footer_about: "About", footer_contacts: "Contact",
    footer_city: "Tashkent, Uzbekistan",
    footer_privacy: "Privacy Policy", footer_terms: "Terms",
  }
};

// ===== LANG SWITCHER =====
let currentLang = 'ru';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  if (t.meta_title) document.title = t.meta_title;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('prochat_lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

const savedLang = localStorage.getItem('prochat_lang');
if (savedLang && translations[savedLang]) applyLang(savedLang);

// ===== ROI CALCULATOR =====
function calcROI() {
  const visitors = parseInt(document.getElementById('visitors').value);
  const order = parseInt(document.getElementById('order-val-input').value);
  const conv = parseFloat(document.getElementById('conv').value);

  document.getElementById('visitors-val').textContent = visitors.toLocaleString('ru');
  document.getElementById('order-display').textContent = order;
  document.getElementById('conv-val').textContent = conv + '%';

  const currentRevenue = visitors * (conv / 100) * order;
  const newRevenue = visitors * ((conv * 1.18) / 100) * order;
  const uplift = Math.round(newRevenue - currentRevenue);
  document.getElementById('roi-amount').textContent = '$' + uplift.toLocaleString('ru');
}

['visitors', 'order-val-input', 'conv'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', calcROI);
});
calcROI();

// ===== MOBILE MENU =====
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
}

// ===== DARK MODE =====
const darkToggle = document.getElementById('darkToggle');
const savedTheme = localStorage.getItem('prochat_theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
if (darkToggle) {
  darkToggle.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  darkToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    darkToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('prochat_theme', isDark ? 'light' : 'dark');
  });
}

// ===== USE CASE TABS =====
document.querySelectorAll('.uc-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.uc-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.uc-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.querySelector(`.uc-panel[data-panel="${tab.dataset.tab}"]`);
    if (panel) panel.classList.add('active');
  });
});

// ===== STICKY CTA =====
const stickyCta = document.getElementById('stickyCta');
const stickyClose = document.getElementById('stickyClose');
let stickyClosed = false;
window.addEventListener('scroll', () => {
  if (stickyClosed) return;
  const show = window.scrollY > 600;
  stickyCta && stickyCta.classList.toggle('visible', show);
});
if (stickyClose) stickyClose.addEventListener('click', () => {
  stickyClosed = true;
  stickyCta.classList.remove('visible');
});

// ===== POPUP =====
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupShown = sessionStorage.getItem('prochat_popup');
if (!popupShown && popup) {
  setTimeout(() => {
    popup.classList.add('visible');
    sessionStorage.setItem('prochat_popup', '1');
  }, 15000);
}
if (popupClose) popupClose.addEventListener('click', () => popup.classList.remove('visible'));
if (popup) popup.addEventListener('click', e => { if (e.target === popup) popup.classList.remove('visible'); });

// ===== COOKIE BANNER =====
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');
if (localStorage.getItem('prochat_cookie')) {
  cookieBanner && cookieBanner.classList.add('hidden');
}
if (cookieAccept) cookieAccept.addEventListener('click', () => {
  localStorage.setItem('prochat_cookie', '1');
  cookieBanner.classList.add('hidden');
});
if (cookieDecline) cookieDecline.addEventListener('click', () => {
  cookieBanner.classList.add('hidden');
});

// ===== STAGGER SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.feature-card, .plan, .stat-card, .step, .integr-item, .roi-card, .uc-content, .early-card, .cmp-table'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity .5s ease ${(i % 6) * 80}ms, transform .5s ease ${(i % 6) * 80}ms`;
  observer.observe(el);
});

// ===== HERO CHAT ANIMATION =====
function runHeroChat() {
  const body = document.querySelector('.chat-body');
  if (!body) return;
  const msgs = [
    { type: 'agent', text: { ru: 'Привет! Чем могу помочь? 👋', uz: 'Salom! Qanday yordam bera olaman? 👋', en: 'Hi! How can I help you? 👋' } },
    { type: 'user',  text: { ru: 'Какие у вас тарифы?', uz: 'Narxlaringiz qanday?', en: 'What are your pricing plans?' } },
    { type: 'agent', text: { ru: 'Free, Start 149 000 сум и Business 390 000 сум/мес. Показать подробнее?', uz: 'Free, Start 149 000 so\'m va Business 390 000 so\'m/oy. Batafsil ko\'rsataymi?', en: 'Free, Start 149,000 UZS and Business 390,000 UZS/mo. Want details?' } },
    { type: 'user',  text: { ru: 'Да, и есть ли пробный период?', uz: 'Ha, sinov muddati bormi?', en: 'Yes, is there a trial?' } },
    { type: 'agent', text: { ru: '10 дней Pro бесплатно — без карты! 🎉', uz: '10 kun Pro bepul — kartsiz! 🎉', en: '10 days Pro free — no card! 🎉' } },
  ];
  let idx = 0;
  body.innerHTML = '';

  function showNext() {
    if (idx >= msgs.length) {
      setTimeout(() => { body.innerHTML = ''; idx = 0; showNext(); }, 3000);
      return;
    }
    const m = msgs[idx];
    const lang = localStorage.getItem('prochat_lang') || 'ru';
    const text = m.text[lang] || m.text.ru;

    // typing indicator
    const typing = document.createElement('div');
    typing.className = 'msg msg-typing';
    typing.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    if (m.type === 'user') { typing.className = 'msg msg-user'; typing.innerHTML = '<div class="msg-bubble" style="opacity:.4">...</div>'; }
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
      body.removeChild(typing);
      const div = document.createElement('div');
      div.className = `msg msg-${m.type}`;
      div.innerHTML = `<div class="msg-bubble">${text}</div><div class="msg-time">${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2,'0')}</div>`;
      div.style.opacity = '0';
      div.style.transform = 'translateY(8px)';
      div.style.transition = 'opacity .3s, transform .3s';
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
      requestAnimationFrame(() => { div.style.opacity = '1'; div.style.transform = 'translateY(0)'; });
      idx++;
      setTimeout(showNext, 1800);
    }, 900);
  }
  setTimeout(showNext, 1000);
}
runHeroChat();

// ===== STAT COUNTER ANIMATION =====
function parseStatVal(text) {
  const clean = text.trim();
  const match = clean.match(/[\d.]+/);
  if (!match) return null;
  return { raw: clean, num: parseFloat(match[0]), prefix: clean.replace(/[\d.]+.*/, ''), suffix: clean.replace(/^[^0-9]*[\d.]+/, '') };
}

function animateCounter(el, duration = 1600) {
  const parsed = parseStatVal(el.textContent);
  if (!parsed) return;
  const { num, prefix, suffix } = parsed;
  const start = performance.now();
  const isDecimal = num % 1 !== 0;
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const cur = ease * num;
    el.textContent = prefix + (isDecimal ? cur.toFixed(1) : Math.round(cur)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-big').forEach(el => counterObserver.observe(el));

// ===== CARD TILT =====
const isMobile = () => window.innerWidth < 768;
document.querySelectorAll('.feature-card, .stat-card, .plan, .integr-item').forEach(card => {
  card.addEventListener('mousemove', e => {
    if (isMobile()) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-3px)`;
    card.style.transition = 'transform .1s ease, box-shadow .1s ease';
    card.style.boxShadow = `${-x * 12}px ${y * 12}px 32px rgba(99,102,241,0.15)`;
  });
  card.addEventListener('mouseleave', () => {
    if (isMobile()) return;
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.transition = 'transform .4s ease, box-shadow .4s ease';
  });
});

// ===== TYPEWRITER HERO =====
function typewriter() {
  const h1 = document.querySelector('.hero-text h1');
  if (!h1) return;
  // only run once on load, don't interfere with i18n
  h1.style.opacity = '0';
  h1.style.transform = 'translateY(16px)';
  h1.style.transition = 'opacity .6s ease, transform .6s ease';
  setTimeout(() => {
    h1.style.opacity = '1';
    h1.style.transform = 'translateY(0)';
  }, 200);
}
typewriter();

// ===== HERO BADGE PULSE =====
document.querySelectorAll('.hero-badge').forEach((b, i) => {
  b.style.opacity = '0';
  b.style.transform = 'translateY(-8px)';
  b.style.transition = `opacity .5s ease ${i * 120}ms, transform .5s ease ${i * 120}ms`;
  setTimeout(() => { b.style.opacity = '1'; b.style.transform = 'translateY(0)'; }, 100 + i * 120);
});

// ===== INTERACTIVE DEMO =====
const AI_REPLIES = {
  'цен': 'У нас 3 тарифа: Free (бесплатно навсегда), Start 149 000 сум/мес и Business 390 000 сум/мес. Все тарифы с 30-дневной гарантией возврата.',
  'тариф': 'У нас 3 тарифа: Free (бесплатно навсегда), Start 149 000 сум/мес и Business 390 000 сум/мес. Все тарифы с 30-дневной гарантией возврата.',
  'стоит': 'У нас 3 тарифа: Free (бесплатно навсегда), Start 149 000 сум/мес и Business 390 000 сум/мес. Все тарифы с 30-дневной гарантией возврата.',
  'бесплатн': 'Да! Бесплатный план работает навсегда — 1 оператор, 50 диалогов в месяц. Карта не нужна для регистрации.',
  'free': 'Да! Бесплатный план работает навсегда — 1 оператор, 50 диалогов в месяц. Карта не нужна для регистрации.',
  'установ': 'Очень просто! Скопируйте один скрипт из личного кабинета и вставьте перед </body> на сайте. Занимает 2 минуты.',
  'telegram': 'Да, Telegram интегрирован! Создаёте бота через @BotFather, вставляете токен в настройках Prochat — и все сообщения из Telegram и сайта в одном окне.',
  'ai': 'AI-автопилот обучается на вашей базе знаний и отвечает на вопросы 24/7. Когда не знает ответа — передаёт оператору.',
  'возврат': 'Да, 30-дневная гарантия возврата. Если не понравится — вернём деньги без вопросов.',
  'гаранти': 'Да, 30-дневная гарантия возврата. Если не понравится — вернём деньги без вопросов.',
  'опла': 'Принимаем Visa/Mastercard, Uzcard, Humo и безналичный расчёт для юрлиц.',
  'operator': 'На тарифе Start — до 3 операторов, на Business — без ограничений.',
};
const DEFAULT_REPLY = 'Спасибо за вопрос! Наш специалист ответит в ближайшее время. Вы также можете написать нам в Telegram: @prochat_support';

function getAiReply(text) {
  const lower = text.toLowerCase();
  for (const [key, reply] of Object.entries(AI_REPLIES)) {
    if (lower.includes(key)) return reply;
  }
  return DEFAULT_REPLY;
}

function addVwMessage(text, isOut) {
  const msgs = document.getElementById('vwMessages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'vw-msg ' + (isOut ? 'vw-msg-out' : 'vw-msg-in');
  div.innerHTML = `<div class="vw-bubble">${text}</div><div class="vw-time">сейчас</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addOpMessage(text, isUser) {
  const msgs = document.getElementById('opMessages');
  if (!msgs) return;
  // Remove placeholder
  const firstMsg = document.getElementById('firstOpMsg');
  if (firstMsg) firstMsg.closest('.dm').remove();
  const div = document.createElement('div');
  if (isUser) {
    div.className = 'dm dm-user';
    div.innerHTML = `<div class="dm-original">${text}</div>`;
  } else {
    div.className = 'dm dm-agent';
    div.innerHTML = `<div class="dm-avatar" style="width:28px;height:28px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;flex-shrink:0">AI</div><div><div class="dm-bubble">${text}</div><div class="dm-sent-as">🤖 AI-автопилот</div></div>`;
  }
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  // Update sidebar preview
  const lastMsg = document.getElementById('demoLastMsg');
  if (lastMsg) lastMsg.textContent = text.slice(0, 30) + (text.length > 30 ? '…' : '');
}

function showTypingIndicators() {
  // Visitor side typing
  const vwMsgs = document.getElementById('vwMessages');
  if (vwMsgs) {
    const typing = document.createElement('div');
    typing.className = 'vw-msg vw-typing show';
    typing.id = 'vwTyping';
    typing.innerHTML = '<div class="vw-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
    vwMsgs.appendChild(typing);
    vwMsgs.scrollTop = vwMsgs.scrollHeight;
  }
}

function removeTyping() {
  const t = document.getElementById('vwTyping');
  if (t) t.remove();
}

window.sendVisitor = function() {
  const input = document.getElementById('visitorInput');
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  // Hide chips
  const chips = document.getElementById('vwChips');
  if (chips) chips.style.display = 'none';
  // Add to visitor view
  addVwMessage(text, true);
  // Add to operator view
  addOpMessage(text, true);
  // Show typing
  showTypingIndicators();
  // AI reply after delay
  setTimeout(() => {
    removeTyping();
    const reply = getAiReply(text);
    addVwMessage(reply, false);
    addOpMessage(reply, false);
  }, 1200 + Math.random() * 600);
};

window.sendChip = function(btn) {
  const text = btn.textContent;
  const input = document.getElementById('visitorInput');
  if (input) { input.value = text; }
  sendVisitor();
};

window.sendOperator = function() {
  const input = document.getElementById('opInput');
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  addOpMessage(text, false);
  // Also show in visitor view
  addVwMessage(text, false);
};

// ===== WIDGET COLOR PICKER =====
window.setWidgetColor = function(btn) {
  const color = btn.dataset.color;
  // Update header
  const header = document.getElementById('vwHeader');
  if (header) header.style.background = color;
  // Update send button
  const sendBtn = document.getElementById('vwSendBtn');
  if (sendBtn) sendBtn.style.background = color;
  // Update chips border/color
  document.querySelectorAll('.vw-chip').forEach(chip => {
    chip.style.color = color;
    chip.style.borderColor = color + '55';
  });
  // Update online dot
  const dot = header && header.querySelector('.online-dot');
  // Active swatch
  document.querySelectorAll('.demo-swatch').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
};

// ===== OPERATOR DARK THEME =====
window.toggleOpTheme = function(btn) {
  const mockup = document.getElementById('demoMockupInner');
  if (!mockup) return;
  const isDark = mockup.classList.toggle('op-dark');
  btn.classList.toggle('active', isDark);
  btn.textContent = isDark ? '☀️ Светлая тема' : '🌙 Тёмная тема';
};

// Demo tab switcher
document.querySelectorAll('.demo-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const mode = tab.dataset.tab;
    const split = document.getElementById('demoSplit');
    if (split) split.setAttribute('data-mode', mode === 'split' ? '' : mode);
  });
});
