<template>
    <List v-bind:posts="posts" />
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    List
  },
  data(){
    return{
      posts : [], 
      errors : [] ,
    }
  },
  props: ["alert"],
  created: function () {
    const API_URL = `http://127.0.0.1:8000/api/getData`;
    axios.get(API_URL) 
    .then((response) => {
      this.posts = response.data;
    })
    .catch( (error)=> {
      this.errors =error.data;
    })
  }
}
</script>
