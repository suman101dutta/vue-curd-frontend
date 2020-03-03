<template>
    <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Account Detail</v-toolbar-title>
                <div class="flex-grow-1"></div>

              </v-toolbar>
              <v-card-text>
                <label class="control-label col-sm-6" ><b>Name:</b></label>
                <label class="control-label col-sm-6">{{post.name}}</label>
              </v-card-text>
              <v-card-text>
                <label class="control-label col-sm-6" ><b>Department:</b></label>
                <label class="control-label col-sm-6">{{post.department}}</label>
              </v-card-text>
              <v-card-text>
                <label class="control-label col-sm-6" ><b>Phone:</b></label>
                <label class="control-label col-sm-6" >{{post.phone}}</label>
              </v-card-text>
              <v-card-actions>
                <div class="align-center">
                <v-btn color="primary" @click="$router.push({name: 'add', params: { id: `${post._id}` },})">Edit</v-btn>
                 <v-btn color="default" @click="$router.push('/')">Back</v-btn>
                 </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
name: 'Detail',
data(){
    return{
        id: this.$route.params.id,
        post:[],
        errors:[]
    }
},
created: function () {
const API_URL = `http://127.0.0.1:8000/api/getDataById/`+this.id;
axios.get(API_URL) 
.then((response) => {
    this.post = response.data;
})
.catch( (error)=> {
    this.errors =error.data;
})
}
}
</script>

<style>

</style>
