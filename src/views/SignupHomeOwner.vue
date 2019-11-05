<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <material-card v-if="!showLoginInfo"
          color="green"
          title="Create Profile"
          text="Complete your profile">
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"
                    v-model="fname"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"
                    v-model="lname"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Adress"
                    class="purple-input"
                    v-model="address"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Phone"
                    class="purple-input"
                    v-model="phone"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="City"
                    class="purple-input"
                    v-model="city"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Country"
                    class="purple-input"
                    v-model="country"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    v-model="pcode"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn color="success" @click="ShowLogin">
                    Next
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>

         <material-card v-if="showLoginInfo"
          color="green"
          title="Create Profile"
          text="Select your username and password">
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" >
                    <v-text-field
                    v-model="userName"
                    class="purple-input"
                    label="User Name"/>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="Email Address"
                    v-model="email"
                    class="purple-input"/>
                </v-col>
                <v-col cols="12" >
                    <v-text-field
                    class="purple-input"
                    v-model="password"
                    label="Password"
                    type="password"/>
                </v-col>
                 <v-col
                  cols="12"
                  class="text-right">
                  <v-btn color="success" @click="createUser">
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        fname: '',
        lname: '',
        address: '',
        city : '',
        pcode: '',
        phone:'',
        showLoginInfo: false,
        userName: '',
        email:'',
        password:''
      }
    },

    methods:{
      createUser(){
        let reqBody = {
          personalInfo:{
            fname: this.fname,
            lname: this.lname,
            address: this.address,
            city : this.city,
            pcode: this.pcode,
            phone: this.phone,
            userType: 1 //db has 2 assigned for homeowner
          },
          loginInfo:{
            userName: this.userName,
            email: this.email,
            password: this.password
          },
        }
        axios.post('/api/v1/json/users/add', reqBody).then((res) =>{
            console.log(res)
        })
      },

      ShowLogin(){
        this.showLoginInfo = true
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
