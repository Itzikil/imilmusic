import { storageService } from "./storage.service";

export const i18Service = {
    doTrans,
    getTrans,
    setLang,
    getTransLang
}

var gTrans = {
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
    console.log(els);
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
    console.log(lang);
    // if (lang === 'he') document.body.classList.add('rtl')
    // else document.body.classList.remove('rtl')
    storageService.store('lang', gCurrLang)
}

function getTransLang() {
    return gCurrLang
}