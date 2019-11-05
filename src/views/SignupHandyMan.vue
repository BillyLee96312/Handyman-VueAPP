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
        <material-card
          color="green"
          title="Sign up"
          text=" "
        >
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="userName"
                    class="purple-input"
                    label="User Name"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="Email Address"
                    class="purple-input"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    class="purple-input"
                    label="Password"
                    type="password"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    @click="createUser"
                  >
                    Sign up
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    metaInfo () {
      return {
        title: 'Register Handyman'
      }
    },
    data () {
      return {
        userName: '',
        email: '',
        password: '',
        userType: 2
      }
    },
    methods: {
      createUser () {
        // We are using axios to communicate with server. It has get, pust, post, delete function
        axios.post('/api/v1/json/user/add', {
          userName: this.userName,
          email: this.email,
          password: this.password,
          userType: this.userType
        })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
