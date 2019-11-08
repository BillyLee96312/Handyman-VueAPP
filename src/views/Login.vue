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
          title="Login"
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
                    @click="login"
                  >
                    Sign In
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
        title: 'Login'
      }
    },
    data () {
      return {
        userName: '',
        email: '',
        password: '',
        userType: ''
      }
    },
    methods: {
      login () {
        // We are using axios to communicate with server. It has get, pust, post, delete function
        axios.post('/api/v1/json/user', {
          userName: this.userName,
          password: this.password
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
