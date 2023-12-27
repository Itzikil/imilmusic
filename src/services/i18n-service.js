import { storageService } from "./storage.service";

export const i18Service = {
    doTrans,
    getTrans,
    setLang,
    getTransLang
}

var gTrans = {
    'itzik-text':{
        en: `Guitarist, pianist, singer - creator I learned from top-class musicians as well as certificate studies at the "Mazmor" high school of music.
        Music has always had a special meaning for me. I believe that it should be treated gently, with great listening and given a place of honor
        I am happy to teach anyone whose heart desires, anyone who is curious and searches and loves to have fun`,
        he:`גיטריסט, פסנתרן, זמר - יוצר
        למדתי מנגנים מהשורה הראשונה וכן לימודי תעודה בביה"ס הגבוה למוזיקה "מזמור". למוזיקה תמיד היתה משמעות מיוחדת עבורי. אני מאמין שצריך להתייחס אליה בעדינות, בהקשבה גדולה ולתת לה מקום של כבוד
        אני שמח ללמד את כל מי שליבו חפץ, את כל מי שסקרן ומחפש ואוהב להינות`,
    },
    'Close': {
        en: 'Close',
        he: 'סגור',
    },
    'Thank you': {
        en: 'Thank you for your message we will back to you asap',
        he: 'תודה שפניתם אלינו נחזור אליכם בהקדם',
    },
    'Come learn with us': {
        en: 'Come learn with us',
        he: 'בואו ללמוד איתנו',
    },
    'Leave us your details': {
        en: 'Leave us your details',
        he: 'השאירו פרטים ונחזור אליכם',
    },
    'Or Contact with us': {
        en: 'Or Contact with us',
        he: 'או צרו קשר',
    },
    'Here': {
        en: 'Here',
        he: 'כאן',
    },
    'name': {
        en: 'name',
        he: 'שם',
    },
    'tel/email': {
        en: 'tel/email',
        he: `ט'ל/מייל`,
    },
    'subject': {
        en: 'subject',
        he: 'נושא',
    },
    'send': {
        en: 'send',
        he: 'שלח',
    },
    'guitar': {
        en: 'guitar',
        he: 'גיטרה',
    },
    'piano': {
        en: 'piano',
        he: 'פסנתר',
    },
    'harmonica': {
        en: 'harmonica',
        he: 'מפוחית',
    },
    'bass': {
        en: 'bass',
        he: 'בס',
    },
    'Lessons': {
        en: 'Lessons',
        he: 'שיעורים',
    },
    'Contact us': {
        en: 'Contact us',
        he: 'צרו איתנו קשר',
    },
    'Miriam': {
        en: 'Miriam',
        he: 'מרים',
    },
    'Itzhak': {
        en: 'Itzhak',
        he: 'יצחק',
    },
    'Media': {
        en: 'Media',
        he: 'מדיה',
    },
    'Lessons': {
        en: 'Lessons',
        he: 'שיעורים',
    },
    'Contact': {
        en: 'Contact',
        he: 'צרו קשר',
    },
    'About': {
        en: 'About',
        he: 'אודות',
    },
  
}

let gCurrLang = storageService.load('lang') || Intl.DateTimeFormat().resolvedOptions().locale

function doTrans() {
    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const trans = getTrans(transKey)
        el.innerText = trans
        if (el.placeholder) el.placeholder = trans
    })
}

function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'
    
    let trans = transMap[gCurrLang]
    if (!trans) trans = transMap.en
    return trans
}

function setLang(lang = gCurrLang) {
    gCurrLang = lang
    // if (lang === 'he') document.body.classList.add('rtl')
    // else document.body.classList.remove('rtl')
    storageService.store('lang', gCurrLang)
}

function getTransLang() {
    return gCurrLang
}