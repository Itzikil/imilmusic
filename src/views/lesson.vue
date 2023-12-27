<template>
    <section class="container lesson-container text-center">
        <div class="second-container">
            <p>השיעורים מתקיימים בסטודיו הביתי שלנו באווירה נעימה. יש אפשרות לשיעור פרטי, או למתכונת של קבוצה קטנה- עד 3
                משתתפים.
                כל שיעור מותאם לתלמיד- לרצונות שלו, לקצב שלו תוך שאיפה להגיע רחוק.</p>
            <div class="note-book">
                <div class="bookmarks">
                    <div v-for="(instrument, idx) in instruments" :class="[instrument, displayInstrument(instrument)]"
                        :key="instrument + 1" @click="chooseInstrument(instrument)">
                        <p class="bold instrument-name" :data-trans=instrument>{{ instrument }}</p>
                        <img :src=imgs[idx] alt="">
                    </div>
                </div>
                <div class="instrument-pages">
                    <div v-for="instrument in instruments" :class="[instrument, displayInstrument(instrument)]"
                        :key=instrument>
                        <h3 class="instrument-name" :data-trans=instrument>{{ instrument }}</h3>
                        <p>{{ this.instrumentText[instrument] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import { i18Service } from '../services/i18n-service.js'
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
                guitar: `  נלמד גיטרה קלאסית / אקוסטית / חשמלית , נתחיל במנגינות פשוטות ואקורדים פשוטים משם נעבור לתאוריה לאקורדים מורכבים יותר עם סגנונות שונים כמו ג'אז בלוז גוספל ועוד עד שנוכל לנגן כל שיר שנרצה, נעבוד בתכנית מסודרת כדי להבטיח שלא נדלג על שלבים חיוניים והתקדמות בריאה ויציבה`,
                piano: ` נלמד גיטרה קלאסית / אקוסטית / חשמלית , נתחיל במנגינות פשוטות ואקורדים פשוטים משם נעבור לאקורדים מורכבים יותר וסגנונות שונים כמו ג'אז בלוז גוספל ועוד עד שנוכל לנגן כל שיר שנרצ`,
                harmonica: `  נלמד גיטרה קלאסית / אקוסטית / חשמלית , נתחיל במנגינות פשוטות ואקורדים פשוטים משם נעבור לאקורדים מורכבים יותר וסגנונות שונים כמו ג'אז בלוז גוספל ועוד עד שנוכל לנגן כל שיר שנרצ`,
                bass: ` מלמד בצורה בסיסית, הכרת הכלי על בוריו, איפה כל צליל נמצא על הגיטרה ומתי לנגן ואיך. מתאים למתחילים`,
            },
            imgs: [guitarImg, pianoImg, harmonicaImg, bassImg]
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
    },
    methods: {
        displayInstrument(instrument) {
            return instrument === this.currentInstrument ? 'current-instrument' : ''
        },
        chooseInstrument(instrument) {
            this.currentInstrument = instrument
        },
    }

}
</script>
  