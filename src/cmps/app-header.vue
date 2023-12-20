<template>
  <header>
    <nav>
      <div>
        <router-link to="/"> <span role="img" aria-label="logo">I & M</span>
          <!-- <img src="../assets/logo.svg" alt="" class="logo">  -->
        </router-link>
        <button @click="translate">translate</button>
      </div>
      <div class="link-container">
        <!-- <router-link to="/review">Reviews</router-link>
        <router-link to="/chat">Chat</router-link> -->
        <div class="header-line"></div>
        <router-link to="/media" data-trans="Media">Media</router-link>
        <router-link to="/lesson" data-trans="Lessons">Lessons</router-link>
        <router-link to="/contact" data-trans="Contact">Contact</router-link>
        <router-link to="/about" data-trans="About">About</router-link>
        <div class="header-line"></div>
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
import { i18Service } from '../services/i18n-service.js';

export default {
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
  },
  methods: {
    translate() {
      let lang = i18Service.getTransLang()
      console.log(lang);
      lang = (lang === 'en' || lang === 'en-US') ? 'he' : 'en'
      i18Service.setLang(lang)
      i18Service.doTrans()
    }
  }
}
</script>