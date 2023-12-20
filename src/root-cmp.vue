<template>
  <section class="root-container">
    <user-msg />
    <app-header />
    <router-view />
  </section>
</template>

<script>


import { store } from './store/store'
import appHeader from './cmps/app-header.vue'
import userMsg from './cmps/user-msg.vue'
import { userService } from './services/user.service'
import { i18Service } from './services/i18n-service'


export default {

  created() {
    console.log('Vue App created')
    
    const user = userService.getLoggedinUser()
    if (user) store.commit({ type: 'setLoggedinUser', user })
  },
  components: {
    appHeader,
    userMsg
  },
}
</script>