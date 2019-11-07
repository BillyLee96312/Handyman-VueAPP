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
          title="Search Handyman"
          text=" "
        >
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="3">
                  <v-row>
                    <v-text-field
                      v-model="pcode"
                      label="Postal Code"
                      class="purple-input"
                    />
                  </v-row>
                  <v-row>
                    <label class="typo__label">Skills</label>
                    <multiselect
                      v-model="selectedSkills"
                      :options="skills"
                      placeholder="Select skills"
                      open-direction="bottom"
                    />
                  </v-row>
                  <v-row>
                    <v-btn
                      color="success"
                      @click="searchHandyman"
                    >
                      Search
                    </v-btn>
                  </v-row>
                </v-col>
                <v-col cols="6">

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
  import Multiselect from 'vue-multiselect'
  import axios from 'axios'

  export default {
    // Set title of page
    metaInfo () {
      return {
        title: 'Search Handyman'
      }
    },

    components: { Multiselect },

    // Create initial dynamic data object
    data () {
      return {
        pcode: '',
        skills: [],
        selectedSkills: ''
      }
    },

    // On page create, get list of skills for dropdown
    created () {
      axios.get('/api/v1/json/skills').then((data) => {
        data.data.data.forEach(skill => {
          this.skills.push(skill.skill_name)
        })
      })
    },

    methods: {
      // OnClick search button
      searchHandyman () {
        // Gather user input into object
        // TODO: Use more filters
        let reqBody = {
          searchFilters: {
            pcode: this.pcode
          },
          abilities: {
            selectedSkills: this.selectedSkills
          }
        }

        // Send data to API
        axios.post('/api/v1/json/searchHandyman', reqBody).then((res) => {
          // Display all results
          // TODO: Display these results on page instead of console
          res.data.data.forEach(user => {
            console.log(user.user_name)
          });
        })
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
