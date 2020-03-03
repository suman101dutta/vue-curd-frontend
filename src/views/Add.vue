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
                <v-toolbar-title>Add Account</v-toolbar-title>
                <div class="flex-grow-1"></div>
                
              </v-toolbar>
              <v-form @submit="formSubmit">
              <v-card-text>
                
                  <v-text-field
                    id="name"
                    label="Name"
                    name="name"
                    type="text"
                    v-model="userinfo.name"
                    ref="name"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="department"
                    label="Department"
                    name="department"
                    type="text"
                    ref="department"
                    v-model="userinfo.department"
                  ></v-text-field>
                  <v-text-field
                    id="phone"
                    label="Phone"
                    name="phone"
                    type="text"
                    ref="phone"
                    v-model="userinfo.phone"
                  ></v-text-field>
                
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1">
                <v-btn color="primary" type="submit" >Save</v-btn>
                <v-btn color="default" @click="$router.push('/')">Back</v-btn>
                </div>
              </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import router from '@/router'
import axios from 'axios'
export default {
    data() {
        return {
                id: this.$route.params.id,
                alert:'',
                userinfo: {
                    id: '',
                    name: '',
                    department: '',
                    phone: ''
                }
        };
    },
    
    methods: {
        formSubmit(e) {
            if (!this.userinfo.name) {
                this.$refs.name.focus();
                this.$swal({
                  type: 'warning',
                  title: 'Please fill mandatory fields!!',
                  toast: true,
                  position: 'top',
                  showConfirmButton: false, 
                  timer: 3000
                  
                });
                e.preventDefault();
                return false;
            }
            if (!this.userinfo.department) {
                this.$refs.department.focus();
                this.$swal({
                  type: 'warning',
                  title: 'Please fill mandatory fields!!',
                  toast: true,
                  position: 'top',
                  showConfirmButton: false, 
                  timer: 3000
                  
                });
                e.preventDefault();
                return false;
            }
            
            e.preventDefault();
            let currentObj = this;

                const API_URL = !this.id ? `http://127.0.0.1:8000/api/saveData` :  `http://127.0.0.1:8000/api/editData/`+this.id;
            if(!this.id){
                this.axios.post(API_URL, {
                name: this.userinfo.name,
                department: this.userinfo.department,
                phone:this.userinfo.phone,
                })
                .then(function (response) {
                    currentObj.output = response.data;
                    
                    currentObj.$swal({
                      type: 'success',
                      title: 'Account Successfully Created !!',
                      toast: true,
                      position: 'top',
                      showConfirmButton: false,
                      timer: 3000
                      
                    });
                    router.push({ path: '/' });
                    //this.$emit('myEvent','1'); 
                    e.preventDefault();
                })
                .catch(function (error) {
                    currentObj.$swal({
                      type: 'error',
                      title: error.message,
                      toast: true,
                      position: 'top',
                      showConfirmButton: false,
                      timer: 3000
                      
                    });
                });
            }else{
              this.axios.put(API_URL, {
              name: this.userinfo.name,
              department: this.userinfo.department,
              phone:this.userinfo.phone,
              })
              .then(function (response) {
                currentObj.output = response.data;
                // currentObj.$session.start();
                // currentObj.$session.set('result','Fail');
                //currentObj.$session.flash.set('alert', 'hi!');
                currentObj.$swal({
                    type: 'success',
                    title: 'Account Successfully Updated !! ',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000
                    
                  });
                  router.push({ path: '/' });
                  
                  //this.$emit('myEvent','1');  
                  e.preventDefault();
                  
              })
              .catch(function (error) {
                  currentObj.$swal({
                    type: 'error',
                    title: error.message,
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000
                    
                  });
              });
            }
            
        },
    },
    created: function () {
      if(this.id){
        const API_URL = `http://127.0.0.1:8000/api/getDataById/`+this.id;
        axios.get(API_URL) 
        .then((response) => {
          this.userinfo.name = response.data.name;
          this.userinfo.department = response.data.department;
          this.userinfo.phone = response.data.phone;
          this.userinfo.id = this.id;
        })
        .catch((error)=> {
          this.errors =error.data;
        })
      }
    }
}
</script>

<style>

</style>
