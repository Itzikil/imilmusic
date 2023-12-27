<template>
  <section class="container home text-center">
    <div class="hero-container">
      <iframe name="hiddenConfirm" id="hiddenConfirm" style="display: none;"
        onload="if(this.submitted){widow.location='imilmusic.com/lesson'}"></iframe>
      <form class="message-box" id="myForm" method="POST" target="hiddenConfirm" @submit="this.submitted = true"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7m5jbJeIyGfLR0BM2uTFs6LX_qPRwITaxiEN1eGa_tnOOGQ/formResponse">
        <img src="@/assets/imgs/sheetsWhite.svg" alt="" class="sheets-background">
        <h3 data-trans="Leave us your details">Leave us your details</h3>
        <p><span data-trans="Or Contact with us"> Or Contact with us </span> <router-link to="/contact" class="bold"
            data-trans="Here"> Here </router-link>
        </p>
        <input type="text" placeholder="name" name="entry.730517852" data-trans="name" v-model="formInputs.name">
        <input type="text" placeholder="email/phone" name="entry.592601501" data-trans="tel/email"
          v-model="formInputs.email">
        <input type="text" placeholder="subject" name="entry.211603254" data-trans="subject" v-model="formInputs.subject">
        <button type="submit" data-trans="send">send</button>
      </form>
      <div v-if="this.submitted" class="submitted-container">
        <!-- <p data-trans="Thank you">Thank you for your message we will back to you asap</p> -->
        <p data-trans="Thank you">תודה שפניתם אלינו נחזור אליכם בהקדם</p>
        <button @click="closeConfirm" data-trans="Close">סגור</button>
        <!-- <button @click="closeConfirm" data-trans="Close">Close</button> -->
      </div>
      <div class="details">
        <h2 data-trans="Come learn with us">Come learn with us</h2>
        <p>אנחנו יצחק ומרים, זוג מוזיקאים</p>
        <p>
          מזמינים אתכם ללמוד איתנו שיעורי נגינה בכלי שאתם רוצים לנגן בו. החל מאנשים שמעולם לא נגעו בכלי נגינה ועד אנשים
          שכבר למדו כמה שנים, ורוצים להעמיק עוד ולהתפתח. מילדים בגיל 6 ועד מבוגרים שמסכימים איתנו שאף פעם לא מאוחר ללמוד.
          שיעורים באווירה ביתית, סבלנית ונעימה
        </p>
        <div class="recommand-container" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation"
          @touchstart="pauseAnimation" @touchend="resumeAnimation">
          <div class="container-cover"></div>
          <div class="recommand" v-for="(recommand, idx) in recommandations"
            :class="{ 'active-recommand ': idx === activeRecommand, 'close-recommand': idx === nextRecommand }">
            <p :class="recFontSize(recommand.rec)">{{ recommand.rec }}</p>
            <p><span class="bold">{{ recommand.name }} </span> {{ recommand.age }} - </p>
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
        {
          name: 'נעם אביסדריס', rec: `זכיתי ללמוד אצל יצחק גיטרה, יצחק מורה מדהים מלמד מצוין משקיע ומסביר טוב
יש לו המון סבלנות ואנרגיות טובות`, age: 13
        },
        {
          name: 'חני', rec: `החלטתי בגיל 50 להגשים חלום ילדות, ללמוד לנגן בפסנתר. זו היתה בשבילי התחלה חדשה, וחיפשתי מישהי שתלמד אותי.
         ב''ה הגעתי למרים המתוקה, שקיבלה אותי תמיד בחיוך מאיר, שלימדה אותי שלב אחרי שלב במקצועיות ובסבלנות,
         עודדה ותיקנה ודייקה. נהנתי מכל שיעור, שמחתי להגיע וללמוד, ממליצה בחום....בהצלחה לכולם`, age: 51
        },
        {
          name: 'שרה', rec: `מרים מורה סבלנית, מקצועית, מתייחסת בצורה נעימה ואיכפתית מאוד!
מלמדת בצורה ברורה ומובנת. נהנתי מאוד ללמוד אצל מרים, וממליצה בחום!`, age: 14
        },
        { name: 'עקיבא לבנדה', rec: 'הבן שלי למד גיטרה עם יצחק לוי. הוא מורה מקסים וקידם את הבן שלי בצורה משמעותית, ממליצה בחום', age: 13 },
        {
          name: 'שניאור', rec: `ברצוננו להמליץ על המורה לנגינה יצחק, בנינו הבכור
           לומד אצלו מדי שבוע ומתקדם מאוד יפה, יחס אישי וסבלנות רבה ממליצים בחום`, age: 12
        },
      ],
      activeRecommand: 0,
      nextRecommand: 1,
      isPaused: false,
      submitted: false,
      formInputs: {
        name: '',
        email: '',
        subject: ''
      }
    }
  },
  created() {
  },
  mounted() {
    i18Service.setLang()
    i18Service.doTrans()
    this.animationInterval = setInterval(() => {
      if (!this.isPaused) {
        this.animateBoxes();
      }
    }, 6000);
  },
  computed: {
  },
  methods: {
    animateBoxes() {
      this.activeRecommand = (this.activeRecommand + 1) % this.recommandations.length;
      this.nextRecommand = (this.activeRecommand + 1) % this.recommandations.length;
    },
    pauseAnimation() {
      this.isPaused = true;
    },
    resumeAnimation() {
      this.isPaused = false;
    },
    recFontSize(p) {
      if (p.length > 200) {
        return 'fs12'
      } else if (p.length > 100) {
        return 'fs14'
      } else if (p.length > 50) {
        return 'fs16'
      } else return 'fs18'
    },
    closeConfirm() {
      this.submitted = false
      this.formInputs = {
        name: '',
        email: '',
        subject: ''
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.animationInterval);
  }
}
</script>
