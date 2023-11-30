<template>
  <section class="container home text-center">
    <!-- <h1>I & M</h1> -->
    <!-- <img src="@/assets/imgs/sheets.svg" alt="" class="sheets-background"> -->
    <div class="hero-container">
      <form class="message-box">
        <h3>leave us your details now</h3>
        <input type="text">
        <input type="text">
        <input type="text">
        <button>send</button>
      </form>
      <div class="details">
        <h2>come learn with us</h2>
        <p>bla bla bla</p>
        <img
          src="https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="pic">
      </div>
    </div>
    <div class="instruments-container">
      <div v-for="instument in instruments" :key="instument.name" class="instrument">
        <h4>{{ instument.name }}</h4>
        <div class="img-container">
          <img :src=instument.img alt="pic">
        </div>
      </div>
    </div>
    <!-- <h5 class="text-center">
      Powered up Frontend 
    </h5> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </section>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      instruments: [
      { name: 'guitar', img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'},
      {  name: 'piano', img: 'https://images.unsplash.com/photo-1612016410921-264f6afed556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'},
      {  name: 'harmonica', img: 'https://images.unsplash.com/photo-1682271920907-781daffc09a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'},
      {  name: 'bass', img: 'https://images.unsplash.com/photo-1602900332980-6e6f13946a3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
      ]
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }

}
</script>
