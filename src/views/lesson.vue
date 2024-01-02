<template>
    <section :class="['container', 'lesson-container', 'text-center', isRtl]">
        <div class="second-container">
            <div class="first-p">
                <p data-trans="lesson-header">השיעורים מתקיימים בסטודיו הביתי שלנו באווירה נעימה. יש אפשרות לשיעור פרטי, או
                    למתכונת של קבוצה קטנה- עד 3
                    משתתפים. כל שיעור מותאם לתלמיד- לרצונות שלו, לקצב שלו תוך שאיפה להגיע רחוק</p>
                <img src="../assets/imgs/sheetsWhite.svg" alt="">
            </div>
            <div class="note-book">
                <div class="bookmarks">
                    <div v-for="(instrument, idx) in instruments" :class="[instrument, displayInstrument(instrument)]"
                        :key="instrument + 1" @click="chooseInstrument(instrument)">
                        <p class="instrument-name" :data-trans=instrument>{{ instrument }}</p>
                        <img :src=imgs[idx] alt="">
                    </div>
                </div>
                <div class="instrument-pages">
                    <div v-for="instrument in instruments" :class="[instrument, displayInstrument(instrument)]"
                        :key=instrument>
                        <h3 class="instrument-name" :data-trans=instrument>{{ instrument }}</h3>
                        <p :data-trans="`${instrument}-details`" :class=recFontSize(this.instrumentText[instrument])>{{
                            this.instrumentText[instrument] }} </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import { i18Service } from '../services/i18-service.js'
import guitarImg from '../assets/imgs/guitar.svg'
import pianoImg from '../assets/imgs/piano.svg'
import harmonicaImg from '../assets/imgs/harmonica.svg'
import bassImg from '../assets/imgs/bass.svg'

export default {
    name: 'home',
    data() {
        return {
            currentInstrument: 'guitar',
            instruments: ['guitar', 'piano', 'harmonica', 'bass'],
            instrumentText: {
                guitar: `  נלמד גיטרה קלאסית / אקוסטית / חשמלית, נתחיל במנגינות פשוטות ואקורדים פשוטים, משם נעבור לתאוריה ואקורדים מורכבים, עם סגנונות שונים כמו ג'אז, בלוז, גוספל ועוד, עד שנוכל לנגן כל שיר שנרצה. נעבוד עם תכנית מסודרת כדי להבטיח שלא נדלג על שלבים חיוניים והתקדמות טובה ויציבה`,
                piano: `נתחיל מהיכרות עם הכלי. נלמד לנגן מתווים בשתי הידיים, נתחיל בשירים ומנגינות פשוטות ונגיע ליצירות קלאסיות מורכבות.
לאלו שיותר מעוניינים ללמוד לנגן שירים עכשוויים, נלמד לנגן משמיעה, אקורדים וליווי. 
כל השיעורים מלווים בהבנת הנושאים מעבר ל"איך" לנגן אותם. נלמד תיאוריה, הרמוניה ונרחיב בהתאם לרצון התלמיד.
יצחק מלמד בדגש על מוזיקת ג'אז, גוספל, פאנק, מרים מלמדת בדגש קלאסי.`,
                harmonica: `נכיר את המפוחית– נעבוד על הפקת צליל, אחיזה נכונה ונלמד להתמצא על פני הכלי כולו. נלמד לנגן מתווים ומשמיעה. מיועד למתחילים`,
                bass: ` נלמד בצורה בסיסית. הכרת הכלי על בוריו, איפה כל צליל נמצא על הגיטרה, ליווי שירים, בייסליינים מפורסמים והרבה הרבה גרוב. מיועד למתחילים`,
            },
            imgs: [guitarImg, pianoImg, harmonicaImg, bassImg],
            direction: i18Service.getTransLang()
        }
    },
    created() {
        const id = this.$route.params.id
        if (id) this.currentInstrument = id
    },
    mounted() {
        i18Service.setLang()
        i18Service.doTrans()
    },
    computed: {
        isRtl() {
            return this.$store.getters.isRtl === 'he' ? 'rtl-lesson' : ''
        }
    },
    methods: {
        displayInstrument(instrument) {
            return instrument === this.currentInstrument ? 'current-instrument' : ''
        },
        chooseInstrument(instrument) {
            this.currentInstrument = instrument
        },
        recFontSize(p) {
            if (p.length > 300) {
                return 'fs-p'
            }
        },
    }

}
</script>
  