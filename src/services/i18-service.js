import { storageService } from "./storage.service";

export const i18Service = {
    doTrans,
    getTrans,
    setLang,
    getTransLang
}

var gTrans = {
    'home p2': {
        en: 'Children from age six years through adults – especially those who agree with us that it is never too late to learn – are welcome to join us for lessons in a patient and warm home atmosphere.',
        he: 'ילדים בגיל 6 ועד מבוגרים שמסכימים איתנו שאף פעם לא מאוחר ללמוד, מוזמנים לשיעורים באווירה ביתית, סבלנית ונעימה',
    },
    'home p1': {
        en: 'You are cordially invited to come study music with us, on a range of instruments. Whether you’ve never touched a musical instrument in your life but have always wanted to, or have been playing for years but would like to take your playing a step forward – this could be the place for you.',
        he: 'זמינים אתכם ללמוד איתנו שיעורי נגינה במגוון כלים, בין אם מעולם לא נגעתם בכלי נגינה ובין אם אתם מנגנים כבר שנים ורוצים להעמיק עוד ולהתפתח',
    },
    'music-couple': {
        en: 'Izhak & Miriam, a musical couple',
        he: 'אנחנו יצחק ומרים, זוג מוזיקאים',
    },
    'bass-details': {
        en: 'We begin with fundamentals. Complete familiarity with the instrument, where each sound is on the guitar, accompanying songs, famous basslines, and lots of groove. Intended for beginners.',
        he: 'נלמד בצורה בסיסית. הכרת הכלי על בוריו, איפה כל צליל נמצא על הגיטרה, ליווי שירים, בייסליינים מפורסמים והרבה הרבה גרוב. מיועד למתחילים',
    },
    'harmonica-details': {
        en: 'We’ll get to know the harmonica – we’ll work on producing sounds, how to hold it, and familiarity with the entire instrument. We’ll learn to play from notes and by rote. Intended for beginners.',
        he: 'נכיר את המפוחית– נעבוד על הפקת צליל, אחיזה נכונה ונלמד להתמצא על פני הכלי כולו. נלמד לנגן מתווים ומשמיעה. מיועד למתחילים',
    },
    'piano-details': {
        en: 'We begin by becoming familiar with the instrument. From the start we play by reading from notes and using both hands on the keyboard – first simple songs and melodies, and eventually accomplishing complex classical pieces. For students who prefer to play contemporary songs, we’ll learn to play chords and accompaniment by rote. In all lessons, topics beyond “how to play” are imparted to students. We study theory and harmony, and get into greater depth per student wishes. Izhak emphasizes jazz, gospel, funk, while Miriam’s focus is classical music.',
        he: `נתחיל מהיכרות עם הכלי. נלמד לנגן מתווים בשתי הידיים, נתחיל בשירים ומנגינות פשוטות ונגיע ליצירות קלאסיות מורכבות. לאלו שיותר מעוניינים ללמוד לנגן שירים עכשוויים, נלמד לנגן משמיעה, אקורדים וליווי. כל השיעורים מלווים בהבנת הנושאים מעבר ל"איך" לנגן אותם. נלמד תיאוריה, הרמוניה ונרחיב בהתאם לרצון התלמיד. יצחק מלמד בדגש על מוזיקת ג'אז, גוספל, פאנק, מרים מלמדת בדגש קלאסי.`,
    },
    'guitar-details': {
        en: 'We’ll learn to play the classical / acoustic / electric guitar, beginning with simple melodies and chords; then we’ll move on to theory and more complex chords, with different styles such as jazz, blues, gospel music, until we can play any song we want. We work with a syllabus to guarantee steady progress to be sure not to skip over any vital steps.',
        he: `נלמד גיטרה קלאסית / אקוסטית / חשמלית, נתחיל במנגינות פשוטות ואקורדים פשוטים, משם נעבור לתאוריה ואקורדים מורכבים, עם סגנונות שונים כמו ג'אז, בלוז, גוספל ועוד, עד שנוכל לנגן כל שיר שנרצה. נעבוד עם תכנית מסודרת כדי להבטיח שלא נדלג על שלבים חיוניים והתקדמות טובה ויציבה`,
    },
    'lesson-header': {
        en: 'Lessons are conducted in our home studio in a pleasant atmosphere. We offer private lessons, or small group lessons of up to three participants. Each lesson is adapted to the individual desires and pace of the student, with a far-reaching target set for them.',
        he: 'שיעורים מתקיימים בסטודיו הביתי שלנו באווירה נעימה. יש אפשרות לשיעור פרטי, או למתכונת של קבוצה קטנה- עד 3 משתתפים. כל שיעור מותאם לתלמיד- לרצונות שלו, לקצב שלו תוך שאיפה להגיע רחוק',
    },
    'miriam p3': {
        en: 'I have always felt that the for me piano is a refuge. Something to be played at times of joy or in moments of pain. Something in the creation of music flows through the body, from the inside, expresses something wonderful.”',
        he: `מאז ומתמיד הרגשתי שהפסנתר הוא מפלט. שאפשר לנגן בו ברגעים של אושר או ברגעים כואבים יותר, משהו ביצירת המוזיקה הנובעת דרך הגוף, מבפנים, מביאה לידי ביטוי דבר מופלא"`,
    },
    'miriam p2': {
        en: '“I studied the piano through the years with private teachers of classical music and jazz, and completed certificate studies at the Mizmor School of Music. Today I am a student in the academic program at the Center for Jazz Studies in collaboration with The New School for Jazz and Contemporary Music in New York.',
        he: `"למדתי פסנתר במהלך השנים באופן פרטי אצל נגנים קלאסיים ואצל נגני ג'אז וכן לימודי תעודה בביה"ס הגבוה למוזיקה "מזמור". כיום סטודנטית בתכנית האקדמית ללימודי ג'אז בשיתוף הניו-סקול ניו יורק.`,
    },
    'miriam p1': {
        en: 'I play jazz, pop and classical music. I accompany singers and play in original instrumental ensembles.',
        he: `מנגנת ג'אז, פופ, מוזיקה קלאסית. מלווה זמרים, מנגנת בהרכבים אינסטרומנטליים מקוריים`,
    },
    'Piano player / artist': {
        en: 'Piano player / artist',
        he: 'פסנתרנית מבצעת / יוצרת',
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
        he: `טל/מייל`,
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
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    storageService.store('lang', gCurrLang)
}

function getTransLang() {
    return gCurrLang
}