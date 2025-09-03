<template>
    <section :class="['container', 'about-container', 'text-center', isRtl]">
        <img src="@/assets/imgs/waves.svg" alt="" class="sheets-background">
        <div class="first-about">
            <div class="img-container">
                <img src="@/assets/imgs/miriam.jpeg" alt="מורה פרטית לפסנתר בתל אביב">
            </div>
            <div class="about-text first-text">
                <h3 class="bold fs18" data-trans="Miriam">מרים</h3>
                <p data-trans="Piano player / artist">פסנתרנית מבצעת / יוצרת</p>
                <p data-trans="miriam p1">מנגנת ג'אז, פופ, מוזיקה קלאסית. מלווה זמרים, מנגנת בהרכבים אינסטרומנטליים מקוריים
                </p>
                <p data-trans="miriam p2">
                    "למדתי פסנתר במהלך השנים באופן פרטי אצל נגנים קלאסיים ואצל נגני ג'אז, בוגרת ביה"ס הגבוה
                    למוזיקה "מזמור", בוגרת תכנית האקדמית ללימודי ג'אז בשיתוף הניו-סקול ניו יורק, כיום סטודנטית באקדמיה למוזיקה.
                </p>
                <p data-trans="miriam p3">מאז ומתמיד הרגשתי שהפסנתר הוא מפלט. שאפשר לנגן בו ברגעים של אושר או ברגעים כואבים
                    יותר, משהו ביצירת המוזיקה הנובעת דרך הגוף, מבפנים, מביאה לידי ביטוי דבר מופלא"</p>
            </div>
        </div>
        <div class="second-about">
            <div class="img-container">
                <img src="@/assets/imgs/itzik.jpeg" alt="מורה פרטי לגיטרה בתל אביב">
            </div>
            <div class="about-text second-text">
                <h3 class="bold fs18" data-trans="Itzhak">יצחק</h3>
                <p data-trans="Guitarist, pianist, artist">גיטריסט, פסנתרן, יוצר.</p>
                <p data-trans="Plays gospel, R&B and jazz">מנגן גוספל, אר אנד בי וג׳אז.</p>
                <p data-trans="itzhak p1">
                    התחלתי לנגן לבד בתור ילד, למדתי להכיר את המוזיקה ואת כלי הנגינה בכוחות עצמי, אני זוכר כמה שמחה יש
                    כשמצליחים לנגן שיר פשוט כמו יונתן הקטן, אני גם זוכר את התסכול בהתקדמות כשאין עזרה.
                </p>
                <p data-trans="itzhak p2">בהמשך סיימתי לימודי תעודה בבי״ס הגבוה למוזיקה ״מזמור״, שם למדתי לעומק את תורת המוזיקה והנגינה.</p>
                <p data-trans="itzhak p3">מתוך הנסיון שלי פיתחתי דרך יציבה ומסודרת איך ללמוד גיטרה ופסנתר שמתחילה מלנגן תו אחד עד לנגן ברמה מקצועית
                    כל שיר שרוצים.</p>
            </div>
        </div>
    </section>
</template>
  
<script>
import { i18Service } from '../services/i18-service.js'

export default {
    name: 'about',
    data() {
        return {
        }
    },
    computed: {
        isRtl() {
            return this.$store.getters.isRtl === 'he' ? 'rtl-about' : ''
        }
    },
    created() {
    },
    mounted() {
        i18Service.setLang()
        i18Service.doTrans()
    },
    methods: {
    }

}
</script>
  