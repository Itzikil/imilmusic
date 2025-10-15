<template>
  <section class="container home text-center">
    <div class="hero-container">
      <iframe name="hiddenConfirm" id="hiddenConfirm" style="display: none;"
        onload="if(this.submitted){widow.location='imilmusic.com/lesson'}"></iframe>
      <form :class="['message-box']" id="myForm" method="POST" target="hiddenConfirm" @submit.prevent="handleSubmit"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7m5jbJeIyGfLR0BM2uTFs6LX_qPRwITaxiEN1eGa_tnOOGQ/formResponse">
        <img src="@/assets/imgs/sheetsWhite.svg" alt="" class="sheets-background">
        <h2 data-trans="Leave us your details">Leave us your details</h2>
        <p><span data-trans="Or contact us"> Or contact us </span> <router-link to="/contact" class="bold"
            data-trans="here"> here </router-link>
        </p>
        <input type="text" placeholder="name" name="entry.730517852" data-trans="name" v-model="formInputs.name">
        <input type="text" placeholder="email/phone" name="entry.592601501" data-trans="tel/email"
          v-model="formInputs.email">
        <input type="text" placeholder="subject" name="entry.211603254" data-trans="subject"
          v-model="formInputs.subject">
        <button type="submit" data-trans="send">send</button>
      </form>
      <div v-if="this.submitted" class="submitted-container">
        <p><span data-trans="Thank you">Thank you </span> {{ this.formInputs.name }} <span data-trans="for your"> for
            your
            message we will back to you asap</span></p>
        <button @click="closeConfirm" data-trans="Close">Close</button>
      </div>
      <div class="details">
        <h2 data-trans="Come learn with us">Come learn with us</h2>
        <div class="p-container">
          <p data-trans="music-couple">אנחנו יצחק ומרים, זוג מוזיקאים</p>
          <p data-trans="home p1">
            מזמינים אתכם ללמוד איתנו שיעורי נגינה במגוון כלים, בין אם מעולם לא נגעתם בכלי נגינה ובין אם אתם
            מנגנים כבר שנים ורוצים להעמיק עוד ולהתפתח
          </p>
          <p data-trans="home p2">
            ילדים בגיל 6 ועד מבוגרים שמסכימים איתנו שאף פעם לא מאוחר ללמוד, מוזמנים לשיעורים באווירה ביתית, סבלנית
            ונעימה
          </p>
        </div>
        <div class="recommand-container" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation"
          @touchstart="pauseAnimation" @touchend="resumeAnimation">
          <div class="container-cover"></div>
          <div class="recommand" v-for="(recommand, idx) in recommandations"
            :class="{ 'active-recommand ': idx === activeRecommand, 'close-recommand': idx === nextRecommand }">
            <p :class="recFontSize(recommand.rec)" :data-trans="recommand.name">{{ recommand.rec }}</p>
            <p> - <span class="bold" :data-trans="`${recommand.name}1`">{{ recommand.name }} </span> {{ recommand.age }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="instruments-container">
      <div v-for="instrument in instruments" :key="instrument.name" class="instrument">
        <router-link :to="`/lesson/` + instrument.name" class="img-container">
          <h4 :data-trans=instrument.name>{{ instrument.name }}</h4>
          <img :src=instrument.img alt="מורה פרטי לגיטרה, מורה פרטית לפסנתר בתל אביב">
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { i18Service } from '../services/i18-service.js'
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
        // { name: 'עקיבא לבנדה', rec: 'הבן שלי למד גיטרה עם יצחק לוי. הוא מורה מקסים וקידם את הבן שלי בצורה משמעותית, ממליצה בחום', age: 13 },
        {
          name: 'חני', rec: `החלטתי בגיל 50 להגשים חלום ילדות, ללמוד לנגן בפסנתר. זו היתה בשבילי התחלה חדשה, וחיפשתי מישהי שתלמד אותי.
          ב''ה הגעתי למרים המתוקה, שקיבלה אותי תמיד בחיוך מאיר, שלימדה אותי שלב אחרי שלב במקצועיות ובסבלנות,
          עודדה ותיקנה ודייקה. נהנתי מכל שיעור, שמחתי להגיע וללמוד, ממליצה בחום... בהצלחה לכולם`, age: 51
        },
        {
          name: 'נעם אביסדריס', rec: `זכיתי ללמוד אצל יצחק גיטרה, יצחק מורה מדהים מלמד מצוין משקיע ומסביר טוב
יש לו המון סבלנות ואנרגיות טובות`, age: 13
        },
        {
          name: 'שרה', rec: `מרים מורה סבלנית, מקצועית, מתייחסת בצורה נעימה ואיכפתית מאוד!
          מלמדת בצורה ברורה ומובנת. נהנתי מאוד ללמוד אצל מרים, וממליצה בחום!`, age: 14
        },
        {
          name: 'רננה', rec: `יצחק יודע ללמד בגובה העיניים ונכון לשלב שבו התלמיד נמצא, ולדייק בדיוק לרמה. אני כבר שנים לימדתי את עצמי  , התחלתי לקחת עם יצחק שיעורים והוא כבר מקפיץ אותי ברמות ויודע לאבחן בדיוק מה הפערים, מקצוען רציני`, age: 23
        },
        { name: 'חן', rec: `אני לומדת פסנתר אצל מרים כבר כמה חודשים, מורה נהדרת וסבלנית מלמדת ברמה גבוהה, ואני רואה התקדמות כבר מההתחלה עם הרבה יחס אישי`, age: 20 },
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
      },
    }
  },
  watch: {
    submitted(newValue, oldValue) {
      if (newValue && !oldValue) {
        setTimeout(() => {
          i18Service.doTrans()
        }, 1)
      }
    },
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
    isRtl() {
      return this.$store.getters.isRtl === 'he' ? 'rtl-about' : ''
    }
  },
  methods: {
    handleSubmit(e) {
      if (!this.formInputs.email.trim()) {
        alert("Please enter your phone or email before sending. בבקשה להזין טלפון או אימייל לפני השליחה");
        return;
      }

      // Passed validation → submit the form
      this.submitted = true;
      e.target.submit(); // continue with real submit to Google Form
    },
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
    },
  },
  beforeDestroy() {
    clearInterval(this.animationInterval);
  }
}
</script>
