<template>
  <v-app light>
    <v-content>
      <v-toolbar class="white">
        <v-toolbar-title
          class="mx-0"
          v-text="title"
        />
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            text
            class="lighten-3"
            @click="signup"
          >
            Sign up
          </v-btn>
          <v-btn
            text
            class="grey lighten-1"
            @click="login"
          >
            Sign In
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <section>
        <v-parallax
          src="../../public/banner1.jpg"
          max-height="500px"
        >
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-2 text-center heroHeading">
              One stop to find all your home services.
            </h1>
            <div class="white--text subheading mb-3 text-center">
              Be worry free
            </div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              @click="signup"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <v-container>
        <v-row
          align="center"
          justify="center"
          class="service-row"
        >
          <div class="text-center">
            <h2 class="headline">
              Services
            </h2>
          </div>
        </v-row>
        <v-row
          align="center"
          justify="center"
          wrap
          align-center
        >
          <!-- Iterate each services using for loop with v-for directive -->
          <v-col
            v-for="service in services"
            :key="service.service_id"
            cols="4"
          >
            <v-card class="elevation-4 transparent">
              <v-card-title
                primary-title
                class="layout justify-center"
              >
                <div class="headline text-center">
                  {{ service.service_name }}
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Hire now
                </v-btn>
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
    name: 'Home',
    data: function () {
      return {
        title: 'Handy Man',
        services: []
      }
    },
    created () {
      debugger
      axios.get('/api/v1/json/services').then((data) => {
        this.services = data.data.data
      })
    },
    metaInfo () {
      return {
        title: 'Home'
      }
    },
    methods: {
      signup () {
        this.$router.push('sign-up')
      },

      login () {
        this.$router.push('login')
      }
    }
  }
</script>

<style scoped>
.subheading{
  font-weight: 900;
  text-shadow: 2px 2px #000000;
  font-size:20px;
}

.heroHeading{
  font-weight: 900;
  text-shadow: 3px 2px #000000
}
.service-row{
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
