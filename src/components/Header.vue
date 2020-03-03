<template>
  <div>
    <v-toolbar dark color="blue">
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text  to="/">Home</v-btn>
         <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-btn text to="/about">About</v-btn>
      </v-toolbar-items>

      <!-- <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template> -->
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data(){
    return{
      title: 'Vue Project'
    } 
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
