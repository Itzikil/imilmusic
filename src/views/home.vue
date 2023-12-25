<template>
  <section class="container home text-center">
    <!-- <img src="@/assets/imgs/sheets.svg" alt="" class="sheets-background"> -->
    <div class="hero-container">
      <form class="message-box"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7m5jbJeIyGfLR0BM2uTFs6LX_qPRwITaxiEN1eGa_tnOOGQ/formResponse">
        <img src="@/assets/imgs/sheetsWhite.svg" alt="" class="sheets-background">
        <h3>Leave us your details now</h3>
        <p>Or <router-link to="/contact" class="bold"> Contact with us</router-link></p>
        <input type="text" placeholder="name" name="entry.730517852">
        <input type="text" placeholder="email/phone" name="entry.592601501">
        <input type="text" placeholder="subject" name="entry.211603254">
        <button type="submit">send</button>
      </form>
      <div class="details">
        <h2>come learn with us</h2>
        <p>היי, אנחנו יצחק ומרים, מוזיקאים נשואים
        </p>
        <p>
          עברנו לא מזמן לתל אביב העיר הגדולה ממושב קטן בשפלה.
          הכרנו בלימודי מוזיקה, והשאר היסטוריה...
          מזמינים אתכם ללמוד איתנו שיעורי נגינה בכלי שאתם רוצים
          החל מאנשים שמעולם לא נגעו בכלי נגינה, ועד אנשים שכבר למדו כמה שנים, ורוצים להעמיק עוד ולהתפתח. מילדים בגיל 6 ועד
          מבוגרים שמסכימים איתנו שאף פעם לא מאוחר ללמוד 😊
        </p>
        <div class="recommand-container">
          <div class="recommand" v-for="(recommand, idx) in recommandations"
            :class="{ 'active-recommand ': idx === activeRecommand, 'close-recommand': idx === nextRecommand }">
            <p>{{ recommand.rec }}</p>
            <p>- <span class="bold">{{ recommand.name }} </span> {{ recommand.age }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="instruments-container">
      <div v-for="instrument in instruments" :key="instrument.name" class="instrument">
        <router-link :to="`/lesson/` + instrument.name" class="img-container">
          <h4 :data-trans=instrument.name>{{ instrument.name }}</h4>
          <img :src=instrument.img alt="pic">
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { i18Service } from '../services/i18n-service.js'
export default {
  name: 'home',
  data() {
    return {
      instruments: [
        { name: 'guitar', img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { name: 'piano', img: 'https://images.unsplash.com/photo-1612016410921-264f6afed556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { name: 'harmonica', img: 'https://images.unsplash.com/photo-1682271920907-781daffc09a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80' },
        { name: 'bass', img: 'https://images.unsplash.com/photo-1602900332980-6e6f13946a3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
      ],
      recommandations: [
        { name: 'Heni peni', rec: 'I loved those lessons i wish i  ', age: 20 },
        { name: 'Heni peni', rec: 'I loved those lessons i wish i  please ', age: 20 },
        { name: 'Heni ni', rec: 'I loved those lessons i wish i caoud lean more please ', age: 20 },
        { name: 'He peni', rec: 'I loved those lessons i wish i caoud lean m ', age: 20 },
        { name: 'Heni peni', rec: 'I loved those lessons  i caoud lean more please ', age: 20 },
      ],
      activeRecommand: 0,
      nextRecommand: 1
    }
  },
  created() {
  },
  mounted() {
    i18Service.setLang()
    i18Service.doTrans()
    setInterval(this.animateBoxes, 5000);
  },
  computed: {
  },
  methods: {
    animateBoxes() {
      this.activeRecommand = (this.activeRecommand + 1) % this.recommandations.length;
      this.nextRecommand = (this.activeRecommand + 1) % this.recommandations.length;
    }
  }

}
</script>
