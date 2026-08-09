/* =========================================================
   Rafa'a Center — React app (English / اردو / العربية)
   Pre-compiled to app.js (classic runtime) — runs as a plain
   script, no Babel at runtime.
   ========================================================= */

const { useState, useEffect } = React;

/* ---------- Non-translated config ---------- */
const IMG = {
  logo:  "https://rafaacenter.com/wp-content/uploads/2026/02/cropped-cropped-Rafaa-logo-versions-copy-01-1-1-140x88.png",
  hero1: "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-01_58_22-PM.png",
  hero2: "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-02_04_35-PM.png",
  hero3: "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-02_09_10-PM.png",
  who:   "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-08_32_20-PM-1024x683.png",
  s1:    "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-08_15_13-PM-1024x831.png",
  s2:    "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-08_19_54-PM-1024x818.png",
  s3:    "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-08_23_19-PM-1024x808.png",
  s4:    "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-08_25_27-PM-1024x808.png",
  s5:    "https://rafaacenter.com/wp-content/uploads/2026/05/ChatGPT-Image-May-11-2026-08_27_38-PM-1024x811.png",
};
const WA = "https://wa.me/923114522233";
const PHONE = "+923114522233";
const PHONE_DISPLAY = "+92 311 4522233";
const EMAIL = "info@rafaacenter.com";
const ADDRESS_EN = "House No. 5, Street No. 4, Mohammedia Colony, Bahawalpur, Pakistan";
const MAP_Q = encodeURIComponent(ADDRESS_EN);
const MAP_SRC  = "https://maps.google.com/maps?q=" + MAP_Q + "&t=m&z=15&output=embed&iwloc=near";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=" + MAP_Q;
const SOCIAL = {
  instagram: "https://www.instagram.com/rafaacenter/",
  facebook:  "https://www.facebook.com/people/Rafaa-Center/61590453042439/",
  linkedin:  "https://www.linkedin.com/company/112232484/",
  youtube:   "https://www.youtube.com/@RafaaCenter",
};
const IMGS = [IMG.s1, IMG.s2, IMG.s3, IMG.s4, IMG.s5];
const HERO_IMGS = [IMG.hero1, IMG.hero2, IMG.hero3];
const AV = ["P", "H"];

/* ---------- Translations ---------- */
const I18N = {
  en: {
    dir: "ltr", name: "English",
    nav: { home: "Home", services: "Services", about: "About", how: "How We Work", contact: "Contact" },
    book: "Book Appointment",
    hero: [
      { eyebrow: "Care Across People", title: "Personalized psychological support for children, adolescents, and adults.", text: "Compassionate, confidential care for emotional wellbeing, behavioral concerns, developmental challenges, relationships, stress, and psychological growth at every stage of life.", cta: "Book an Appointment" },
      { eyebrow: "Care Across Organizations", title: "Healthier, more productive, emotionally resilient workplaces.", text: "We support schools, colleges, workplaces, and institutions through psychological assessment, mental-health coaching, and wellbeing programs that improve performance and communication.", cta: "Schedule a Consultation" },
      { eyebrow: "Care Across Communities", title: "Building awareness and psychological support within communities.", text: "We partner with institutions and community groups on awareness campaigns, workshops, mental-health camps, and outreach that promote emotional wellbeing and psychological education.", cta: "Partner With Us" },
    ],
    about: { kicker: "Who We Support", h2: "Supporting individuals, organizations, and communities.",
      p1: "Rafa'a Center is a psychological wellbeing center committed to supporting individuals, families, organizations, and communities through professional psychological services and emotional wellbeing programs.",
      p2: "We believe support should be accessible, ethical, compassionate, and culturally responsive — focused on emotional wellbeing, behavioral understanding, developmental support, and psychological growth.",
      audience: ["Children & Adolescents", "Adults & Couples", "Families", "Schools & Colleges", "Workplaces", "Communities"],
      btn: "Book an Appointment", badgeTitle: "Ethical & Confidential", badgeSub: "Culturally responsive care" },
    services: { kicker: "Our Core Services", h2: "Psychological services designed for diverse needs.",
      lead: "A full spectrum of ethical, evidence-based support — from one-on-one care to organization-wide wellbeing programs. Tap any service to see the full details.",
      learn: "Learn more", whatsIncluded: "What's included", book: "Book this service", ask: "Ask a question",
      items: [
        { title: "Individual & Family Services", short: "Support for emotional wellbeing, communication challenges, family relationships, behavioral concerns, and personal growth.", ideal: "Adults, couples & families", desc: "One-to-one and family-based psychological support for adults navigating stress, anxiety, low mood, life transitions, grief, self-esteem, and relationship or communication difficulties. Sessions are collaborative, confidential, and paced around your goals.", includes: ["Individual counselling for adults", "Couples & marital support", "Family communication sessions", "Stress, anxiety & low-mood support", "Grief and life-transition guidance", "Self-esteem & personal growth work"] },
        { title: "Child & Adolescent Support", short: "Developmental guidance, emotional support, behavioral assessment, parent guidance, and child-focused psychological care.", ideal: "Children, adolescents & parents", desc: "Warm, developmentally-informed care for children and teenagers, with practical guidance for parents. We assess and support emotional regulation, behavior, focus and learning concerns, social skills, and confidence — always in a child-friendly, reassuring environment.", includes: ["Emotional & behavioral support", "Developmental screening & guidance", "Parent coaching & guidance", "School & learning-related concerns", "Social skills & confidence building", "Play-based, age-appropriate sessions"] },
        { title: "Therapy & Assessment Services", short: "Psychological assessments, behavioral evaluations, speech support, occupational support, and emotional wellbeing services.", ideal: "Anyone needing assessment or therapy", desc: "Structured psychological assessment and targeted therapy delivered by qualified professionals. From formal evaluations to speech and occupational therapy support and evidence-based approaches, we build a clear picture and a practical plan tailored to each person.", includes: ["Psychological & behavioral assessment", "Speech and language therapy support", "Occupational therapy support", "Evidence-based individual therapy", "Cognitive & emotional evaluations", "Personalized therapy planning"] },
        { title: "Institutional & Organizational Programs", short: "Mental-health awareness sessions, workplace wellbeing initiatives, school support programs, and training workshops.", ideal: "Schools, colleges & workplaces", desc: "Wellbeing programs for schools, colleges, workplaces, and institutions. We help teams build healthier, more resilient environments through awareness sessions, staff coaching, and structured support that improves communication, performance, and overall wellbeing.", includes: ["Workplace wellbeing initiatives", "Mental-health awareness sessions", "Staff & leadership coaching", "School & college support programs", "Psychological training workshops", "Consultation for institutions"] },
        { title: "Community Outreach & Awareness", short: "Awareness campaigns, psychoeducation programs, workshops, and community-based emotional wellbeing initiatives.", ideal: "Communities & partner organizations", desc: "Community-focused initiatives that make psychological support more visible and accessible. We run awareness campaigns, psychoeducation programs, workshops, and mental-health camps in partnership with institutions and community groups to promote wellbeing and reduce stigma.", includes: ["Awareness campaigns", "Psychoeducation programs", "Community workshops", "Mental-health camps", "Outreach partnerships", "Wellbeing education sessions"] },
      ] },
    why: { kicker: "Why Choose Rafa'a Center", h2: "Professional care built on trust, ethics, and support.",
      reasons: ["Certified Clinical Psychologist", "Certified Child Psychologist", "Speech & Occupational Therapy", "Ethical & Confidential Services", "Compassionate Environment", "Evidence-Based Approaches", "Personalized Support Plans", "Culturally Responsive Care"], btn: "Book an Appointment" },
    how: { kicker: "How It Works", h2: "A supportive, structured consultation process.",
      steps: [{ t: "Reach Out", d: "Connect with Rafa'a Center through WhatsApp, phone, email, or the consultation form." }, { t: "Initial Consultation", d: "Discuss concerns, goals, emotional wellbeing needs, or organizational requirements with a professional." }, { t: "Assessment & Planning", d: "A personalized support plan, guidance strategy, or wellbeing program is designed around your needs." }] },
    tst: { kicker: "Testimonials", h2: "What the people we support say.",
      items: [{ q: "The team met us with real warmth and patience. My child felt safe from the very first session, and the guidance we received as parents made a genuine difference at home.", who: "Parent of a client", role: "Child & Adolescent Support" }, { q: "Thoughtful, ethical, and completely confidential. The wellbeing workshop gave our staff practical tools and opened up conversations we'd never had before at work.", who: "HR Lead", role: "Organizational Program" }] },
    cta: { h2: "Begin your psychological wellbeing journey today.", p: "Schedule a free 15-minute introductory consultation with a licensed psychologist.", book: "Book Your Consultation" },
    contact: { kicker: "Contact", h2: "Reach out for consultation, guidance, and support.", lead: "Have questions? Send us a message and our team will get back to you within 24 hours.",
      email: "Email Us", call: "Call / WhatsApp", callVal: "\u200E+92 311 4522233 — tap to chat", location: "Our Location", address: ADDRESS_EN, hours: "Consultation Hours", hoursVal: "Afternoon 4–6 PM · Evening 6–8 PM",
      form: { title: "Request a Consultation", sub: "Fill in your details and we'll be in touch shortly.", name: "Full Name *", namePh: "Your full name", number: "Contact Number *", numberPh: "\u200E+92 3xx xxxxxxx", who: "Who is this for? *", whoOpts: ["Individual", "Couple", "Organization", "School or College"], slot: "Preferred Time Slot *", slotOpts: ["Afternoon 4 PM – 6 PM", "Evening 6 PM – 8 PM"], msg: "Message or Concern", msgPh: "Tell us a little about how we can help…", submit: "Submit Request", sent: "Thank you — we'll be in touch ✓", note: "We reply within 24 hours · 100% confidential" } },
    faq: { kicker: "FAQs", h2: "Questions, answered.",
      items: [{ q: "Who can receive services at Rafa'a Center?", a: "Rafa'a Center supports children, adolescents, adults, couples, families, organizations, schools, colleges, and communities." }, { q: "What services does Rafa'a Center provide?", a: "Psychological consultation, assessment, child and adult support, family guidance, speech and occupational therapy support, wellbeing programs, and awareness sessions." }, { q: "Does Rafa'a Center support organizations and institutions?", a: "Yes. We support workplaces, schools, colleges, and institutions through wellbeing programs, staff coaching, awareness sessions, and consultation." }, { q: "Are the services confidential?", a: "Yes. Rafa'a Center provides ethical, respectful, and confidential psychological support in a safe environment." }, { q: "How can I book a consultation?", a: "You can book through the website form, WhatsApp, a phone call, or email — whichever is easiest for you." }] },
    footer: { tagline: "Psychological care across people, organizations, and communities.", desc: "Ethical, evidence-based psychological care and emotional wellbeing support in a safe, confidential, and culturally sensitive environment — Bahawalpur, Pakistan.", quick: "Quick Links", getInTouch: "Get in Touch", hoursVal: "Afternoon 4–6 PM · Evening 6–8 PM", rights: "All rights reserved.", made: "Compassionate · Confidential · Culturally responsive" },
  },

  ur: {
    dir: "rtl", name: "اردو",
    nav: { home: "ہوم", services: "خدمات", about: "تعارف", how: "ہمارا طریقہ کار", contact: "رابطہ" },
    book: "اپائنٹمنٹ بک کریں",
    hero: [
      { eyebrow: "افراد کے لیے نگہداشت", title: "بچوں، نوجوانوں اور بالغوں کے لیے ذاتی نفسیاتی معاونت۔", text: "زندگی کے ہر مرحلے پر جذباتی تندرستی، رویّہ جاتی مسائل، نشوونما کے چیلنجز، تعلقات، تناؤ اور نفسیاتی نشوونما کے لیے ہمدردانہ اور خفیہ نگہداشت۔", cta: "اپائنٹمنٹ بک کریں" },
      { eyebrow: "اداروں کے لیے نگہداشت", title: "صحت مند، زیادہ نتیجہ خیز اور جذباتی طور پر مضبوط کام کی جگہیں۔", text: "ہم اسکولوں، کالجوں، دفاتر اور اداروں کی نفسیاتی جانچ، ذہنی صحت کی کوچنگ اور تندرستی کے پروگراموں کے ذریعے مدد کرتے ہیں جو کارکردگی اور رابطے کو بہتر بناتے ہیں۔", cta: "مشاورت کا وقت لیں" },
      { eyebrow: "کمیونٹی کے لیے نگہداشت", title: "کمیونٹی میں شعور اور نفسیاتی معاونت کا فروغ۔", text: "ہم اداروں اور کمیونٹی گروپوں کے ساتھ مل کر آگاہی مہمات، ورکشاپس، ذہنی صحت کے کیمپ اور آؤٹ ریچ کے ذریعے جذباتی تندرستی اور نفسیاتی تعلیم کو فروغ دیتے ہیں۔", cta: "ہمارے ساتھ شراکت کریں" },
    ],
    about: { kicker: "ہم کن کی مدد کرتے ہیں", h2: "افراد، اداروں اور کمیونٹیز کی معاونت۔",
      p1: "رفاء سینٹر ایک نفسیاتی تندرستی مرکز ہے جو پیشہ ورانہ نفسیاتی خدمات اور جذباتی تندرستی کے پروگراموں کے ذریعے افراد، خاندانوں، اداروں اور کمیونٹیز کی مدد کے لیے پُرعزم ہے۔",
      p2: "ہمارا یقین ہے کہ معاونت قابلِ رسائی، اخلاقی، ہمدردانہ اور ثقافتی طور پر ہم آہنگ ہونی چاہیے — جو جذباتی تندرستی، رویّے کی سمجھ، نشوونما اور نفسیاتی ترقی پر مرکوز ہو۔",
      audience: ["بچے اور نوجوان", "بالغ اور جوڑے", "خاندان", "اسکول اور کالج", "کام کی جگہیں", "کمیونٹیز"],
      btn: "اپائنٹمنٹ بک کریں", badgeTitle: "اخلاقی اور خفیہ", badgeSub: "ثقافتی طور پر ہم آہنگ نگہداشت" },
    services: { kicker: "ہماری بنیادی خدمات", h2: "مختلف ضروریات کے لیے تیار کردہ نفسیاتی خدمات۔",
      lead: "انفرادی نگہداشت سے لے کر ادارہ جاتی تندرستی پروگراموں تک — اخلاقی اور شواہد پر مبنی معاونت کا مکمل دائرہ۔ تفصیل دیکھنے کے لیے کسی بھی خدمت پر کلک کریں۔",
      learn: "مزید جانیں", whatsIncluded: "کیا شامل ہے", book: "یہ خدمت بک کریں", ask: "سوال پوچھیں",
      items: [
        { title: "انفرادی اور خاندانی خدمات", short: "جذباتی تندرستی، رابطے کے مسائل، خاندانی تعلقات، رویّے کے خدشات اور ذاتی ترقی کے لیے معاونت۔", ideal: "بالغ، جوڑے اور خاندان", desc: "بالغوں کے لیے انفرادی اور خاندان پر مبنی نفسیاتی معاونت جو تناؤ، بے چینی، افسردگی، زندگی کی تبدیلیوں، غم، خوداعتمادی اور تعلقات یا رابطے کی مشکلات میں مدد دیتی ہے۔ سیشنز باہمی، خفیہ اور آپ کے اہداف کے مطابق ہوتے ہیں۔", includes: ["بالغوں کے لیے انفرادی کاؤنسلنگ", "جوڑوں اور ازدواجی معاونت", "خاندانی رابطہ سیشنز", "تناؤ، بے چینی اور افسردگی کی معاونت", "غم اور زندگی کی تبدیلیوں میں رہنمائی", "خوداعتمادی اور ذاتی ترقی"] },
        { title: "بچوں اور نوجوانوں کی معاونت", short: "نشوونما کی رہنمائی، جذباتی معاونت، رویّے کی جانچ، والدین کی رہنمائی اور بچوں پر مرکوز نفسیاتی نگہداشت۔", ideal: "بچے، نوجوان اور والدین", desc: "بچوں اور نوجوانوں کے لیے نرم، نشوونما سے آگاہ نگہداشت، والدین کے لیے عملی رہنمائی کے ساتھ۔ ہم جذباتی توازن، رویّہ، توجہ اور سیکھنے کے مسائل، سماجی مہارتیں اور خوداعتمادی کی جانچ اور مدد کرتے ہیں۔", includes: ["جذباتی اور رویّہ جاتی معاونت", "نشوونما کی جانچ اور رہنمائی", "والدین کی کوچنگ اور رہنمائی", "اسکول اور سیکھنے کے مسائل", "سماجی مہارت اور خوداعتمادی", "کھیل پر مبنی، عمر کے مطابق سیشنز"] },
        { title: "تھراپی اور جانچ کی خدمات", short: "نفسیاتی جانچ، رویّے کی تشخیص، اسپیچ سپورٹ، آکوپیشنل سپورٹ اور جذباتی تندرستی کی خدمات۔", ideal: "جانچ یا تھراپی کے خواہش مند سب افراد", desc: "ماہرین کی جانب سے منظم نفسیاتی جانچ اور ہدف مند تھراپی۔ باقاعدہ تشخیص سے لے کر اسپیچ اور آکوپیشنل تھراپی کی معاونت اور شواہد پر مبنی طریقوں تک، ہم واضح تصویر اور ہر فرد کے مطابق عملی منصوبہ بناتے ہیں۔", includes: ["نفسیاتی اور رویّہ جاتی جانچ", "اسپیچ اور لینگویج تھراپی معاونت", "آکوپیشنل تھراپی معاونت", "شواہد پر مبنی انفرادی تھراپی", "ذہنی اور جذباتی تشخیص", "ذاتی تھراپی منصوبہ بندی"] },
        { title: "ادارہ جاتی اور تنظیمی پروگرام", short: "ذہنی صحت کے آگاہی سیشنز، دفتری تندرستی کے اقدامات، اسکول سپورٹ پروگرام اور تربیتی ورکشاپس۔", ideal: "اسکول، کالج اور دفاتر", desc: "اسکولوں، کالجوں، دفاتر اور اداروں کے لیے تندرستی پروگرام۔ ہم آگاہی سیشنز، عملے کی کوچنگ اور منظم معاونت کے ذریعے صحت مند اور مضبوط ماحول بنانے میں مدد کرتے ہیں جو رابطہ، کارکردگی اور مجموعی تندرستی بہتر کرتے ہیں۔", includes: ["دفتری تندرستی کے اقدامات", "ذہنی صحت آگاہی سیشنز", "عملے اور قیادت کی کوچنگ", "اسکول اور کالج سپورٹ پروگرام", "نفسیاتی تربیتی ورکشاپس", "اداروں کے لیے مشاورت"] },
        { title: "کمیونٹی آؤٹ ریچ اور آگاہی", short: "آگاہی مہمات، نفسیاتی تعلیم کے پروگرام، ورکشاپس اور کمیونٹی پر مبنی جذباتی تندرستی کے اقدامات۔", ideal: "کمیونٹیز اور شراکت دار ادارے", desc: "کمیونٹی پر مرکوز اقدامات جو نفسیاتی معاونت کو زیادہ نمایاں اور قابلِ رسائی بناتے ہیں۔ ہم اداروں اور کمیونٹی گروپوں کے ساتھ مل کر آگاہی مہمات، تعلیمی پروگرام، ورکشاپس اور ذہنی صحت کیمپ چلاتے ہیں تاکہ جذباتی تندرستی کو فروغ اور بدنما داغ کو کم کیا جا سکے۔", includes: ["آگاہی مہمات", "نفسیاتی تعلیم پروگرام", "کمیونٹی ورکشاپس", "ذہنی صحت کیمپ", "آؤٹ ریچ شراکتیں", "تندرستی تعلیم سیشنز"] },
      ] },
    why: { kicker: "رفاء سینٹر کیوں؟", h2: "بھروسے، اخلاق اور معاونت پر مبنی پیشہ ورانہ نگہداشت۔",
      reasons: ["مصدقہ کلینیکل ماہرِ نفسیات", "مصدقہ چائلڈ ماہرِ نفسیات", "اسپیچ اور آکوپیشنل تھراپی", "اخلاقی اور خفیہ خدمات", "ہمدردانہ ماحول", "شواہد پر مبنی طریقے", "ذاتی معاونت منصوبے", "ثقافتی طور پر ہم آہنگ نگہداشت"], btn: "اپائنٹمنٹ بک کریں" },
    how: { kicker: "یہ کیسے کام کرتا ہے", h2: "ایک معاون، منظم مشاورتی عمل۔",
      steps: [{ t: "رابطہ کریں", d: "واٹس ایپ، فون، ای میل یا مشاورتی فارم کے ذریعے رفاء سینٹر سے رابطہ کریں۔" }, { t: "ابتدائی مشاورت", d: "کسی ماہر کے ساتھ اپنے خدشات، اہداف، جذباتی ضروریات یا ادارہ جاتی تقاضوں پر بات کریں۔" }, { t: "جانچ اور منصوبہ بندی", d: "آپ کی ضروریات کے مطابق ذاتی معاونت منصوبہ، رہنمائی حکمتِ عملی یا تندرستی پروگرام تیار کیا جاتا ہے۔" }] },
    tst: { kicker: "آراء", h2: "جن کی ہم مدد کرتے ہیں وہ کیا کہتے ہیں۔",
      items: [{ q: "ٹیم نے ہمیں حقیقی گرم جوشی اور صبر سے ملا۔ میرا بچہ پہلے ہی سیشن سے محفوظ محسوس کرنے لگا، اور والدین کے طور پر ملنے والی رہنمائی نے گھر میں واضح فرق ڈالا۔", who: "ایک کلائنٹ کے والدین", role: "بچوں اور نوجوانوں کی معاونت" }, { q: "سوچ سمجھ کر، اخلاقی اور مکمل طور پر خفیہ۔ تندرستی ورکشاپ نے ہمارے عملے کو عملی اوزار دیے اور ایسی گفتگو کا آغاز کیا جو پہلے کبھی نہ ہوئی تھی۔", who: "ایچ آر لیڈ", role: "تنظیمی پروگرام" }] },
    cta: { h2: "آج ہی اپنی نفسیاتی تندرستی کا سفر شروع کریں۔", p: "کسی مستند ماہرِ نفسیات کے ساتھ مفت 15 منٹ کی تعارفی مشاورت کا وقت لیں۔", book: "اپنی مشاورت بک کریں" },
    contact: { kicker: "رابطہ", h2: "مشاورت، رہنمائی اور معاونت کے لیے رابطہ کریں۔", lead: "کوئی سوال ہے؟ ہمیں پیغام بھیجیں، ہماری ٹیم 24 گھنٹوں میں جواب دے گی۔",
      email: "ای میل کریں", call: "کال / واٹس ایپ", callVal: "\u200E+92 311 4522233 — چیٹ کے لیے دبائیں", location: "ہمارا مقام", address: ADDRESS_EN, hours: "مشاورت کے اوقات", hoursVal: "دوپہر 4–6 بجے · شام 6–8 بجے",
      form: { title: "مشاورت کی درخواست", sub: "اپنی تفصیلات درج کریں، ہم جلد رابطہ کریں گے۔", name: "پورا نام *", namePh: "آپ کا پورا نام", number: "رابطہ نمبر *", numberPh: "\u200E+92 3xx xxxxxxx", who: "یہ کس کے لیے ہے؟ *", whoOpts: ["فرد", "جوڑا", "ادارہ", "اسکول یا کالج"], slot: "پسندیدہ وقت *", slotOpts: ["دوپہر 4–6 بجے", "شام 6–8 بجے"], msg: "پیغام یا مسئلہ", msgPh: "بتائیں ہم کیسے مدد کر سکتے ہیں…", submit: "درخواست بھیجیں", sent: "شکریہ — ہم رابطہ کریں گے ✓", note: "ہم 24 گھنٹوں میں جواب دیتے ہیں · 100% خفیہ" } },
    faq: { kicker: "عمومی سوالات", h2: "سوالات کے جوابات۔",
      items: [{ q: "رفاء سینٹر سے کون خدمات حاصل کر سکتا ہے؟", a: "رفاء سینٹر بچوں، نوجوانوں، بالغوں، جوڑوں، خاندانوں، اداروں، اسکولوں، کالجوں اور کمیونٹیز کی معاونت کرتا ہے۔" }, { q: "رفاء سینٹر کون سی خدمات فراہم کرتا ہے؟", a: "نفسیاتی مشاورت، جانچ، بچوں اور بالغوں کی معاونت، خاندانی رہنمائی، اسپیچ اور آکوپیشنل تھراپی معاونت، تندرستی پروگرام اور آگاہی سیشنز۔" }, { q: "کیا رفاء سینٹر اداروں کی معاونت کرتا ہے؟", a: "جی ہاں۔ ہم دفاتر، اسکولوں، کالجوں اور اداروں کی تندرستی پروگراموں، عملے کی کوچنگ، آگاہی سیشنز اور مشاورت کے ذریعے مدد کرتے ہیں۔" }, { q: "کیا خدمات خفیہ ہیں؟", a: "جی ہاں۔ رفاء سینٹر محفوظ ماحول میں اخلاقی، بامروّت اور خفیہ نفسیاتی معاونت فراہم کرتا ہے۔" }, { q: "میں مشاورت کیسے بک کروں؟", a: "آپ ویب سائٹ فارم، واٹس ایپ، فون کال یا ای میل کے ذریعے بک کر سکتے ہیں — جو بھی آسان ہو۔" }] },
    footer: { tagline: "افراد، اداروں اور کمیونٹیز کے لیے نفسیاتی نگہداشت۔", desc: "محفوظ، خفیہ اور ثقافتی طور پر حساس ماحول میں اخلاقی، شواہد پر مبنی نفسیاتی نگہداشت اور جذباتی تندرستی معاونت — بہاولپور، پاکستان۔", quick: "فوری روابط", getInTouch: "رابطہ کریں", hoursVal: "دوپہر 4–6 بجے · شام 6–8 بجے", rights: "جملہ حقوق محفوظ ہیں۔", made: "ہمدرد · خفیہ · ثقافتی طور پر ہم آہنگ" },
  },

  ar: {
    dir: "rtl", name: "العربية",
    nav: { home: "الرئيسية", services: "الخدمات", about: "من نحن", how: "كيف نعمل", contact: "تواصل" },
    book: "احجز موعدًا",
    hero: [
      { eyebrow: "رعاية للأفراد", title: "دعم نفسي شخصي للأطفال والمراهقين والبالغين.", text: "رعاية رحيمة وسرّية للصحة العاطفية والمخاوف السلوكية وتحديات النمو والعلاقات والتوتر والنمو النفسي في كل مرحلة من مراحل الحياة.", cta: "احجز موعدًا" },
      { eyebrow: "رعاية للمؤسسات", title: "بيئات عمل أكثر صحة وإنتاجية ومرونة عاطفية.", text: "ندعم المدارس والكليات وأماكن العمل والمؤسسات من خلال التقييم النفسي والتدريب على الصحة النفسية وبرامج العافية التي تحسّن الأداء والتواصل.", cta: "احجز استشارة" },
      { eyebrow: "رعاية للمجتمعات", title: "بناء الوعي والدعم النفسي داخل المجتمعات.", text: "نتعاون مع المؤسسات والمجموعات المجتمعية في حملات التوعية وورش العمل ومخيمات الصحة النفسية والبرامج المجتمعية التي تعزّز العافية والتثقيف النفسي.", cta: "كن شريكًا معنا" },
    ],
    about: { kicker: "من ندعم", h2: "دعم الأفراد والمؤسسات والمجتمعات.",
      p1: "مركز رفاء هو مركز للعافية النفسية ملتزم بدعم الأفراد والعائلات والمؤسسات والمجتمعات من خلال خدمات نفسية احترافية وبرامج للعافية العاطفية.",
      p2: "نؤمن بأن الدعم يجب أن يكون متاحًا وأخلاقيًا ورحيمًا ومراعيًا للثقافة — يركّز على العافية العاطفية وفهم السلوك ودعم النمو والتطور النفسي.",
      audience: ["الأطفال والمراهقون", "البالغون والأزواج", "العائلات", "المدارس والكليات", "أماكن العمل", "المجتمعات"],
      btn: "احجز موعدًا", badgeTitle: "أخلاقي وسرّي", badgeSub: "رعاية مراعية للثقافة" },
    services: { kicker: "خدماتنا الأساسية", h2: "خدمات نفسية مصمّمة لاحتياجات متنوعة.",
      lead: "طيف كامل من الدعم الأخلاقي القائم على الأدلة — من الرعاية الفردية إلى برامج العافية على مستوى المؤسسات. انقر على أي خدمة لعرض التفاصيل الكاملة.",
      learn: "اعرف المزيد", whatsIncluded: "ما الذي يشمله", book: "احجز هذه الخدمة", ask: "اطرح سؤالًا",
      items: [
        { title: "خدمات الأفراد والعائلات", short: "دعم للعافية العاطفية وصعوبات التواصل والعلاقات الأسرية والمخاوف السلوكية والنمو الشخصي.", ideal: "البالغون والأزواج والعائلات", desc: "دعم نفسي فردي وأسري للبالغين الذين يواجهون التوتر والقلق وتدنّي المزاج وتحولات الحياة والحزن وتقدير الذات وصعوبات العلاقات أو التواصل. الجلسات تعاونية وسرّية ومصمّمة وفق أهدافك.", includes: ["استشارات فردية للبالغين", "دعم الأزواج والحياة الزوجية", "جلسات التواصل الأسري", "دعم التوتر والقلق وتدنّي المزاج", "إرشاد في الحزن وتحولات الحياة", "تقدير الذات والنمو الشخصي"] },
        { title: "دعم الأطفال والمراهقين", short: "إرشاد تنموي ودعم عاطفي وتقييم سلوكي وإرشاد للوالدين ورعاية نفسية تركّز على الطفل.", ideal: "الأطفال والمراهقون والوالدان", desc: "رعاية دافئة ومراعية للنمو للأطفال والمراهقين، مع إرشاد عملي للوالدين. نقيّم وندعم التنظيم العاطفي والسلوك والتركيز وصعوبات التعلّم والمهارات الاجتماعية والثقة — دائمًا في بيئة ملائمة للطفل.", includes: ["الدعم العاطفي والسلوكي", "الفحص والإرشاد التنموي", "تدريب وإرشاد الوالدين", "المخاوف المدرسية والتعلّمية", "بناء المهارات الاجتماعية والثقة", "جلسات قائمة على اللعب ومناسبة للعمر"] },
        { title: "خدمات العلاج والتقييم", short: "تقييمات نفسية وتقييمات سلوكية ودعم النطق والدعم الوظيفي وخدمات العافية العاطفية.", ideal: "كل من يحتاج تقييمًا أو علاجًا", desc: "تقييم نفسي منظّم وعلاج موجّه يقدّمه مختصون مؤهلون. من التقييمات الرسمية إلى دعم علاج النطق والعلاج الوظيفي والأساليب القائمة على الأدلة، نبني صورة واضحة وخطة عملية لكل شخص.", includes: ["تقييم نفسي وسلوكي", "دعم علاج النطق واللغة", "دعم العلاج الوظيفي", "علاج فردي قائم على الأدلة", "تقييمات معرفية وعاطفية", "تخطيط علاجي شخصي"] },
        { title: "البرامج المؤسسية والتنظيمية", short: "جلسات التوعية بالصحة النفسية ومبادرات العافية في العمل وبرامج دعم المدارس وورش التدريب.", ideal: "المدارس والكليات وأماكن العمل", desc: "برامج عافية للمدارس والكليات وأماكن العمل والمؤسسات. نساعد الفرق على بناء بيئات أكثر صحة ومرونة عبر جلسات التوعية وتدريب الموظفين وبرامج الدعم المنظّمة التي تحسّن التواصل والأداء والعافية العامة.", includes: ["مبادرات العافية في العمل", "جلسات التوعية بالصحة النفسية", "تدريب الموظفين والقيادة", "برامج دعم المدارس والكليات", "ورش تدريب نفسية", "استشارات للمؤسسات"] },
        { title: "التواصل المجتمعي والتوعية", short: "حملات التوعية وبرامج التثقيف النفسي وورش العمل ومبادرات العافية العاطفية المجتمعية.", ideal: "المجتمعات والمؤسسات الشريكة", desc: "مبادرات تركّز على المجتمع تجعل الدعم النفسي أكثر وضوحًا وسهولة في الوصول. ننظّم حملات التوعية وبرامج التثقيف وورش العمل ومخيمات الصحة النفسية بالشراكة مع المؤسسات والمجموعات المجتمعية لتعزيز العافية وتقليل الوصمة.", includes: ["حملات التوعية", "برامج التثقيف النفسي", "ورش عمل مجتمعية", "مخيمات الصحة النفسية", "شراكات التواصل", "جلسات تثقيف حول العافية"] },
      ] },
    why: { kicker: "لماذا مركز رفاء؟", h2: "رعاية احترافية مبنية على الثقة والأخلاق والدعم.",
      reasons: ["أخصائي نفسي إكلينيكي معتمد", "أخصائي نفسي أطفال معتمد", "علاج النطق والعلاج الوظيفي", "خدمات أخلاقية وسرّية", "بيئة رحيمة", "أساليب قائمة على الأدلة", "خطط دعم شخصية", "رعاية مراعية للثقافة"], btn: "احجز موعدًا" },
    how: { kicker: "كيف نعمل", h2: "عملية استشارية داعمة ومنظّمة.",
      steps: [{ t: "تواصل معنا", d: "تواصل مع مركز رفاء عبر واتساب أو الهاتف أو البريد الإلكتروني أو نموذج الاستشارة." }, { t: "الاستشارة الأولية", d: "ناقش مخاوفك وأهدافك واحتياجاتك العاطفية أو متطلبات مؤسستك مع مختص." }, { t: "التقييم والتخطيط", d: "تُصمّم خطة دعم شخصية أو استراتيجية إرشاد أو برنامج عافية وفق احتياجاتك." }] },
    tst: { kicker: "آراء", h2: "ماذا يقول من ندعمهم.",
      items: [{ q: "قابلنا الفريق بدفء وصبر حقيقيين. شعر طفلي بالأمان منذ الجلسة الأولى، وأحدث الإرشاد الذي تلقّيناه كوالدين فرقًا واضحًا في المنزل.", who: "أحد أولياء الأمور", role: "دعم الأطفال والمراهقين" }, { q: "مدروس وأخلاقي وسرّي تمامًا. منحت ورشة العافية موظفينا أدوات عملية وفتحت حوارات لم تحدث من قبل في العمل.", who: "مسؤول الموارد البشرية", role: "برنامج مؤسسي" }] },
    cta: { h2: "ابدأ رحلة عافيتك النفسية اليوم.", p: "احجز استشارة تعريفية مجانية لمدة 15 دقيقة مع أخصائي نفسي مرخّص.", book: "احجز استشارتك" },
    contact: { kicker: "تواصل", h2: "تواصل معنا للاستشارة والإرشاد والدعم.", lead: "لديك أسئلة؟ أرسل لنا رسالة وسيعاود فريقنا التواصل خلال 24 ساعة.",
      email: "راسلنا", call: "اتصال / واتساب", callVal: "\u200E+92 311 4522233 — اضغط للمحادثة", location: "موقعنا", address: ADDRESS_EN, hours: "ساعات الاستشارة", hoursVal: "بعد الظهر 4–6 · مساءً 6–8",
      form: { title: "طلب استشارة", sub: "أدخل بياناتك وسنتواصل معك قريبًا.", name: "الاسم الكامل *", namePh: "اسمك الكامل", number: "رقم التواصل *", numberPh: "\u200E+92 3xx xxxxxxx", who: "لمن هذه الاستشارة؟ *", whoOpts: ["فرد", "زوجان", "مؤسسة", "مدرسة أو كلية"], slot: "الوقت المفضّل *", slotOpts: ["بعد الظهر 4–6", "مساءً 6–8"], msg: "رسالة أو استفسار", msgPh: "أخبرنا كيف يمكننا المساعدة…", submit: "إرسال الطلب", sent: "شكرًا — سنتواصل معك ✓", note: "نردّ خلال 24 ساعة · سرّية 100%" } },
    faq: { kicker: "الأسئلة الشائعة", h2: "إجابات على أسئلتك.",
      items: [{ q: "من يمكنه تلقّي الخدمات في مركز رفاء؟", a: "يدعم مركز رفاء الأطفال والمراهقين والبالغين والأزواج والعائلات والمؤسسات والمدارس والكليات والمجتمعات." }, { q: "ما الخدمات التي يقدّمها مركز رفاء؟", a: "استشارات نفسية وتقييم ودعم للأطفال والبالغين وإرشاد أسري ودعم علاج النطق والعلاج الوظيفي وبرامج عافية وجلسات توعية." }, { q: "هل يدعم مركز رفاء المؤسسات؟", a: "نعم. ندعم أماكن العمل والمدارس والكليات والمؤسسات عبر برامج العافية وتدريب الموظفين وجلسات التوعية والاستشارة." }, { q: "هل الخدمات سرّية؟", a: "نعم. يقدّم مركز رفاء دعمًا نفسيًا أخلاقيًا ومحترمًا وسرّيًا في بيئة آمنة." }, { q: "كيف أحجز استشارة؟", a: "يمكنك الحجز عبر نموذج الموقع أو واتساب أو مكالمة هاتفية أو البريد الإلكتروني — أيّها أسهل لك." }] },
    footer: { tagline: "رعاية نفسية للأفراد والمؤسسات والمجتمعات.", desc: "رعاية نفسية أخلاقية قائمة على الأدلة ودعم للعافية العاطفية في بيئة آمنة وسرّية ومراعية للثقافة — بهاولبور، باكستان.", quick: "روابط سريعة", getInTouch: "تواصل معنا", hoursVal: "بعد الظهر 4–6 · مساءً 6–8", rights: "جميع الحقوق محفوظة.", made: "رحيم · سرّي · مراعٍ للثقافة" },
  },
};

/* ---------- Icons ---------- */
const Ico = {
  instagram: () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4m6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44"/></svg>),
  facebook:  () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07"/></svg>),
  linkedin:  () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0"/></svg>),
  youtube:   () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.8M9.6 15.6V8.4l6.24 3.6z"/></svg>),
  whatsapp:  () => (<svg viewBox="0 0 24 24"><path d="M.06 24l1.68-6.15a11.87 11.87 0 0 1-1.6-5.94C.15 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.42 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45zm6.6-3.8c1.68.99 3.28 1.58 5.4 1.58 5.45 0 9.9-4.43 9.9-9.88a9.83 9.83 0 0 0-2.9-7 9.83 9.83 0 0 0-7-2.9c-5.46 0-9.9 4.44-9.9 9.9 0 2.2.65 3.85 1.74 5.57l-.99 3.63zm11.4-5.56c-.07-.12-.27-.2-.57-.35s-1.76-.87-2.03-.96-.47-.15-.66.15-.76.95-.93 1.15-.35.22-.64.07a8.13 8.13 0 0 1-2.39-1.47 9 9 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52s-.66-1.6-.9-2.19c-.24-.57-.48-.5-.66-.5l-.57-.02c-.2 0-.51.07-.78.37s-1.03 1-1.03 2.45 1.05 2.85 1.2 3.05 2.07 3.16 5.02 4.43c.7.3 1.25.48 1.67.62.7.22 1.35.19 1.85.11.56-.08 1.76-.72 2-1.41s.25-1.29.17-1.41z" fill="currentColor"/></svg>),
  mail:  () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 6.5L21 6"/></svg>,
  pin:   () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-6-7-11a7 7 0 1 1 14 0c0 5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z"/></svg>,
  clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  arrow: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  sun:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>,
  moon:  () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>,
  globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/></svg>,
};

/* ---------- Theme toggle ---------- */
function useTheme() {
  const getInitial = () => {
    try { if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"; } catch (e) {}
    return "light";
  };
  const [theme, setTheme] = useState(getInitial);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

/* ---------- Language switcher ---------- */
function LangSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);
  const langs = [["en", "English"], ["ur", "اردو"], ["ar", "العربية"]];
  return (
    <div className="lang" onClick={(e) => e.stopPropagation()}>
      <button className="lang-btn" onClick={() => setOpen((o) => !o)} aria-label="Change language" aria-expanded={open}>
        <Ico.globe /> {lang.toUpperCase()}
      </button>
      <div className={"lang-menu" + (open ? " show" : "")}>
        {langs.map(([code, native]) => (
          <button key={code} className={lang === code ? "active" : ""} onClick={() => { setLang(code); setOpen(false); }}>
            <span>{native}</span>{lang === code ? <span>✓</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar({ t, theme, onToggleTheme, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = [["home", "#home"], ["services", "#services"], ["about", "#about"], ["how", "#how"], ["contact", "#contact"]];

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (y < 80) setHidden(false);
      else if (y > last + 4) { setHidden(true); setOpen(false); }
      else if (y < last - 4) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={"nav-shell" + (hidden ? " hidden" : "")}>
        <nav className={"nav" + (scrolled ? " scrolled" : "")}>
          <a className="nav-logo" href="#home"><img src={IMG.logo} alt="Rafa'a Center logo" /></a>
          <div className="nav-links">{nav.map(([k, href]) => <a key={k} href={href}>{t.nav[k]}</a>)}</div>
          <LangSwitcher lang={lang} setLang={setLang} />
          <button className="theme-toggle" onClick={onToggleTheme} aria-label={theme === "dark" ? "Light mode" : "Dark mode"}>
            {theme === "dark" ? <Ico.sun /> : <Ico.moon />}
          </button>
          <a className="nav-cta" href={WA} target="_blank" rel="noopener"><Ico.whatsapp /> {t.book}</a>
          <button className={"nav-burger" + (open ? " open" : "")} aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
      <div className={"mobile-menu" + (open ? " show" : "")}>
        {nav.map(([k, href]) => <a key={k} href={href} onClick={() => setOpen(false)}>{t.nav[k]}</a>)}
        <a className="m-cta" href={WA} target="_blank" rel="noopener" onClick={() => setOpen(false)}>{t.book}</a>
      </div>
    </>
  );
}

/* ---------- Hero ---------- */
function Hero({ t }) {
  const [i, setI] = useState(0);
  const slides = t.hero;
  const go = (n) => setI((n + slides.length) % slides.length);
  useEffect(() => {
    const tm = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(tm);
  }, [slides.length]);
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="slider">
          {slides.map((s, idx) => (
            <div key={idx} className={"slide" + (idx === i ? " active" : "")}>
              <div className="slide-bg"><img src={HERO_IMGS[idx]} alt="" /></div>
              <div className="slide-overlay"></div>
              <div className="slide-inner">
                <span className="eyebrow"><span className="dot"></span>{s.eyebrow}</span>
                <h1>{s.title}</h1>
                <p>{s.text}</p>
                <div className="slide-actions">
                  <a className="btn-gold" href={WA} target="_blank" rel="noopener">{s.cta} <Ico.arrow /></a>
                  <a className="btn-ghost-light" href={"tel:" + PHONE}><Ico.phone /> {PHONE_DISPLAY}</a>
                </div>
              </div>
            </div>
          ))}
          <div className="dots">{slides.map((_, idx) => <button key={idx} className={idx === i ? "on" : ""} aria-label={"Slide " + (idx + 1)} onClick={() => go(idx)}></button>)}</div>
          <div className="slider-nav"><button aria-label="Previous" onClick={() => go(i - 1)}>&#8249;</button><button aria-label="Next" onClick={() => go(i + 1)}>&#8250;</button></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About({ t }) {
  const a = t.about;
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="split reveal">
          <div>
            <div className="kicker">{a.kicker}</div>
            <h2 className="h2">{a.h2}</h2>
            <p className="lead">{a.p1}</p>
            <p className="lead">{a.p2}</p>
            <div className="pill-list">{a.audience.map((x) => <span key={x}>{x}</span>)}</div>
            <a className="btn-teal" href={WA} target="_blank" rel="noopener">{a.btn} <Ico.arrow /></a>
          </div>
          <div className="split-img">
            <img src={IMG.who} alt={a.h2} />
            <div className="badge">{a.badgeTitle}<small>{a.badgeSub}</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services + modal ---------- */
function ServiceModal({ service, labels, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = service ? "hidden" : "";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [service, onClose]);
  return (
    <div className={"modal-overlay" + (service ? " show" : "")} onClick={onClose}>
      {service && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={service.title} onClick={(e) => e.stopPropagation()}>
          <div className="modal-img">
            <img src={service.img} alt={service.title} />
            <button className="modal-close" aria-label="Close" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-body">
            <span className="ideal">{service.ideal}</span>
            <h3>{service.title}</h3>
            <p className="desc">{service.desc}</p>
            <h4>{labels.whatsIncluded}</h4>
            <ul className="modal-incl">{service.includes.map((it) => <li key={it}><span className="tick">✓</span>{it}</li>)}</ul>
            <div className="modal-actions">
              <a className="btn-gold" href={WA} target="_blank" rel="noopener"><Ico.whatsapp /> {labels.book}</a>
              <a className="btn-ghost-light" style={{ color: "var(--teal-500)", borderColor: "var(--cream-2)" }} href="#contact" onClick={onClose}>{labels.ask}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Services({ t }) {
  const s = t.services;
  const items = s.items.map((it, idx) => ({ ...it, img: IMGS[idx] }));
  const [active, setActive] = useState(null);
  return (
    <section className="sec svc-band" id="services">
      <div className="wrap">
        <div className="center reveal" style={{ maxWidth: 640 }}>
          <div className="kicker">{s.kicker}</div>
          <h2 className="h2">{s.h2}</h2>
          <p className="lead">{s.lead}</p>
        </div>
        <div className="svc-grid">
          {items.map((it, idx) => (
            <div className="svc-card reveal" key={idx} role="button" tabIndex={0}
              onClick={() => setActive(it)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(it); } }}>
              <div className="thumb"><img src={it.img} alt={it.title} /></div>
              <div className="svc-body">
                <h3>{it.title}</h3>
                <p>{it.short}</p>
                <span className="svc-more">{s.learn} <Ico.arrow /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal service={active} labels={s} onClose={() => setActive(null)} />
    </section>
  );
}

/* ---------- Why ---------- */
function Why({ t }) {
  const w = t.why;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="why reveal">
          <div className="why-inner">
            <div>
              <div className="kicker">{w.kicker}</div>
              <h2 className="h2">{w.h2}</h2>
              <ul className="why-list">{w.reasons.map((r) => <li key={r}><span className="tick">✓</span>{r}</li>)}</ul>
              <a className="btn-gold" href={WA} target="_blank" rel="noopener" style={{ marginTop: 28 }}>{w.btn} <Ico.arrow /></a>
            </div>
            <div className="why-photo"><img src={IMG.s2} alt={w.h2} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How ---------- */
function How({ t }) {
  const h = t.how;
  const nums = ["01", "02", "03"];
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <div className="center reveal" style={{ maxWidth: 640 }}>
          <div className="kicker">{h.kicker}</div>
          <h2 className="h2">{h.h2}</h2>
        </div>
        <div className="steps">
          {h.steps.map((s, idx) => (
            <div className="step reveal" key={idx}><div className="num">{nums[idx]}</div><h3>{s.t}</h3><p>{s.d}</p><div className="line"></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials({ t }) {
  const ts = t.tst;
  return (
    <section className="sec tst-band">
      <div className="wrap">
        <div className="center reveal" style={{ maxWidth: 600 }}>
          <div className="kicker">{ts.kicker}</div>
          <h2 className="h2">{ts.h2}</h2>
        </div>
        <div className="tst-grid">
          {ts.items.map((it, idx) => (
            <div className="tst reveal" key={idx}>
              <span className="quote">&ldquo;</span>
              <p>{it.q}</p>
              <div className="who"><div className="av">{AV[idx]}</div><div><b>{it.who}</b><small>{it.role}</small></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA({ t }) {
  const c = t.cta;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="cta-band reveal">
          <h2 className="h2">{c.h2}</h2>
          <p>{c.p}</p>
          <div className="cta-actions">
            <a className="btn-gold" href={WA} target="_blank" rel="noopener"><Ico.whatsapp /> {c.book}</a>
            <a className="btn-ghost-light" href={"tel:" + PHONE}><Ico.phone /> {PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact({ t }) {
  const c = t.contact;
  const [sent, setSent] = useState(false);
  const submit = () => { setSent(true); setTimeout(() => setSent(false), 4000); };
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="center reveal" style={{ maxWidth: 640 }}>
          <div className="kicker">{c.kicker}</div>
          <h2 className="h2">{c.h2}</h2>
          <p className="lead">{c.lead}</p>
        </div>
        <div className="contact-grid" style={{ marginTop: 46 }}>
          <div className="reveal">
            <div className="info-cards">
              <a className="info-card" href={"mailto:" + EMAIL}><div className="ic"><Ico.mail /></div><div><b>{c.email}</b><div className="val">{EMAIL}</div></div></a>
              <a className="info-card" href={WA} target="_blank" rel="noopener"><div className="ic"><Ico.whatsapp /></div><div><b>{c.call}</b><div className="val">{c.callVal}</div></div></a>
              <a className="info-card" href={MAP_LINK} target="_blank" rel="noopener"><div className="ic"><Ico.pin /></div><div><b>{c.location}</b><div className="val">{c.address}</div></div></a>
              <div className="info-card"><div className="ic"><Ico.clock /></div><div><b>{c.hours}</b><div className="val">{c.hoursVal}</div></div></div>
            </div>
            <div className="map"><iframe title="Rafa'a Center location" loading="lazy" src={MAP_SRC}></iframe></div>
          </div>
          <div className="form reveal">
            <h3>{c.form.title}</h3>
            <p className="sub">{c.form.sub}</p>
            <div className="field"><label>{c.form.name}</label><input type="text" placeholder={c.form.namePh} /></div>
            <div className="row2">
              <div className="field"><label>{c.form.number}</label><input type="tel" placeholder={c.form.numberPh} /></div>
              <div className="field"><label>{c.form.who}</label><select>{c.form.whoOpts.map((o) => <option key={o}>{o}</option>)}</select></div>
            </div>
            <div className="field"><label>{c.form.slot}</label><select>{c.form.slotOpts.map((o) => <option key={o}>{o}</option>)}</select></div>
            <div className="field"><label>{c.form.msg}</label><textarea placeholder={c.form.msgPh}></textarea></div>
            <button className="submit" onClick={submit}>{sent ? c.form.sent : c.form.submit}</button>
            <div className="form-note">{c.form.note}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ({ t }) {
  const f = t.faq;
  const [open, setOpen] = useState(0);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="center reveal" style={{ maxWidth: 600 }}>
          <div className="kicker">{f.kicker}</div>
          <h2 className="h2">{f.h2}</h2>
        </div>
        <div className="faq">
          {f.items.map((it, idx) => (
            <div className={"qa" + (open === idx ? " open" : "")} key={idx}>
              <button onClick={() => setOpen(open === idx ? -1 : idx)} aria-expanded={open === idx}>{it.q}<span className="ico">+</span></button>
              <div className="ans">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer({ t }) {
  const f = t.footer;
  const nav = [["home", "#home"], ["services", "#services"], ["about", "#about"], ["how", "#how"], ["contact", "#contact"]];
  return (
    <footer>
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <img src={IMG.logo} alt="Rafa'a Center" />
            <div className="tagline">{f.tagline}</div>
            <p>{f.desc}</p>
            <div className="socials">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Ico.instagram /></a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Ico.facebook /></a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Ico.linkedin /></a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener" aria-label="YouTube"><Ico.youtube /></a>
            </div>
          </div>
          <div className="f-col">
            <h4>{f.quick}</h4>
            <ul>{nav.map(([k, href]) => <li key={k}><a href={href}>{t.nav[k]}</a></li>)}</ul>
          </div>
          <div className="f-col">
            <h4>{f.getInTouch}</h4>
            <ul className="f-contact">
              <li><span className="ic"><Ico.mail /></span><a href={"mailto:" + EMAIL}>{EMAIL}</a></li>
              <li><span className="ic"><Ico.phone /></span><a href={WA} target="_blank" rel="noopener">{PHONE_DISPLAY}</a></li>
              <li><span className="ic"><Ico.pin /></span><a href={MAP_LINK} target="_blank" rel="noopener">{t.contact.address}</a></li>
              <li><span className="ic"><Ico.clock /></span><span>{f.hoursVal}</span></li>
            </ul>
          </div>
        </div>
        <div className="f-bottom">
          <div>© {new Date().getFullYear()} Rafa'a Center. {f.rights}</div>
          <div className="made">{f.made}</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Scroll reveal ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- App ---------- */
function App() {
  const [theme, toggleTheme] = useTheme();
  const [lang, setLang] = useState("en");
  const t = I18N[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);
  useReveal();
  return (
    <>
      <Navbar t={t} theme={theme} onToggleTheme={toggleTheme} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Why t={t} />
      <How t={t} />
      <Testimonials t={t} />
      <CTA t={t} />
      <Contact t={t} />
      <FAQ t={t} />
      <Footer t={t} />
      <a className="wa-float" href={WA} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><Ico.whatsapp /></a>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
