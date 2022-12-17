<template>
  <div class='home-frame' style=''>
    <img
      src="@/assets/images.jpeg"
    />
    <div>
      <a class="button-add" v-on:click="KayıtOl()">
          Kayıt Ol
      </a>
      <a class="button-add" v-on:click="GirisYap()">
          Hasta Girişi
      </a>
      <div class="lower-page-div">
        <h1>HASTANEMİZE HOŞGELDİNİZ</h1>
        <p></p>
      </div>
      <img class="tobb-etu-png" src="@/assets/tobbetu.png"/>   

    
    </div>  

    <!-- <SearchCar/> -->
  </div>
</template>

<script>

import SearchCar from '@/components/SearchCar.vue'

export default {
  name: 'Home',
  components: {
    SearchCar,
  },
  methods: {
    GirisYap() {
      this.$router.push({
          name: 'UserPage',
          params: {
          }
      });     
    },
    KayıtOl() {
      this.$router.push({
          name: 'KayitPage',
          params: { 
          }
      });     
    }
  }
}

</script>

<style>

.lower-page-div {
  position: absolute;
  bottom: 0;
  text-align: center;
  padding-left: 38%;
}
.tobb-etu-png {
  position: absolute;
  bottom: 0;
  width: 5%;
  right: 0;
}



</style>
