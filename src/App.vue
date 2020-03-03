<template>
  <v-app>
    <Header/>
  <router-view>
    <v-content> 
      
      <Home />
    </v-content>
    </router-view>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Home from '@/views/Home.vue';
import Footer from '@/components/Footer.vue';




export default {
  name: 'App',
  components: {
    Header,Home,Footer
  },
  data: () => ({
    //
  }),
};
</script>
