<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/"> <span role="img" aria-label="logo" :class="{ active: $route.path === '/' }">I & M</span>
        </router-link>
        <!-- <button @click="translate" class="trans-btn"><img src="../assets/imgs/language-icon.svg" alt=""></button> -->
        <button @click="translate" class="trans-btn"><img src="../assets/imgs/google-translate-icon.svg" alt=""></button>
        <!-- <button @click="translate" class="trans-btn"><img src="../assets/imgs/earth-icon.svg" alt=""></button> -->
      </div>
      <div :class="['link-container', navDieraction]">
        <div class="header-line"></div>
        <router-link to="/lesson" data-trans="Lessons" :class="{ active: isLessonActive }">Lessons</router-link>
        <router-link to="/media" data-trans="Media" :class="{ active: $route.path === '/media' }">Media</router-link>
        <router-link to="/contact" data-trans="Contact"
          :class="{ active: $route.path === '/contact' }">Contact</router-link>
        <router-link to="/about" data-trans="About" :class="{ active: $route.path === '/about' }">About</router-link>
        <div class="header-line"></div>
        <!-- <router-link to="/review">Reviews</router-link>
        <router-link to="/chat">Chat</router-link> -->
      </div>
    </nav>
    <!-- <section class="loggedin-user" v-if="loggedInUser">
      <router-link :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </router-link>
      <span>{{ loggedInUser.score.toLocaleString() }}</span>
      <img :src="loggedInUser.imgUrl" />
    </section> -->
  </header>
</template>

<script>
import { i18Service } from '../services/i18-service.js';

export default {
  data() {
    return {
      currLang: i18Service.getTransLang()
    }
  },
  created() {
  },
  mounted() {
    i18Service.setLang()
    i18Service.doTrans()
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    navDieraction() {
      return this.currLang === 'he' ? 'rtl' : ''
    },
    isLessonActive() {
      return this.$route.path.startsWith('/lesson');
    }
  },
  methods: {
    translate() {
      let lang = i18Service.getTransLang()
      lang = (lang === 'en' || lang === 'en-US') ? 'he' : 'en'
      i18Service.setLang(lang)
      i18Service.doTrans()
      this.currLang = i18Service.getTransLang()
      this.$store.commit('setRtl', lang);
    },
  }
}
</script>