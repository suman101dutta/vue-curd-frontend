<template>
<v-content>
    <div class="text-right">
    <v-btn class="mx-2" fab dark small  color="indigo" to="/add">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    </div>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">#</th>
        <th class="text-left">NAME</th>
        <th class="text-left">DEPARTMENT</th>
        <th class="text-left">PHONE</th>
        <th class="text-center">ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, index) in posts" v-bind:key="post._id">
        <td >{{index}}</td>
        <td><router-link :to="`/detail/${post._id}`">{{post.name}}</router-link></td>
        <td>{{post.department}}</td>
        <td>{{post.phone}}</td>
        <td width="10%">
            <v-btn class="mx-2" fab dark x-small color="cyan" :to="`/add/${post._id}`">
                <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark x-small color="red" v-on:click="del(`${post._id}`)">
                <v-icon dark>mdi-minus</v-icon>
            </v-btn>
        </td>
        </tr>
    </tbody>
  </v-simple-table>
</v-content>
</template>

<script>
import axios from 'axios'

import {
mdiAccount,
mdiPencil,
mdiShareVariant,
mdiDelete,
} from '@mdi/js'

export default {
name: 'List',
data(){
    return{
        id: 1 ,
        alert:'',
        msg:'',
        icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
    }
},
props: ["posts"],
methods: {
    del: function (id) {
        this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.value) {
          const API_URL = `http://127.0.0.1:8000/api/delData/`+id;
        axios.delete(API_URL) 
        .then((response) => {
            this.posts = response.data;       
        })
        .catch( (error)=> {
            this.errors =error.data;
        })
          this.$swal.fire(
            'Deleted!',
            'Account has been deleted.',
            'success'
          )
        }
      })





        
    }
},
created : function () {
  this.$swal.fire(
            'Deleted!',
            'Account has been deleted.',
            'success'
          )
},
}

</script>

<style>

</style>
