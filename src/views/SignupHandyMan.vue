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
          title="Create Profile"
          text="Complete your profile"
        >
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
                 <v-col cols="12"> 
                     <label class="typo__label">Skills</label>
                    <multiselect 
                      v-model="value" 
                      :options="skills" 
                      multiple=true 
                      placeholder="Select skills"
                      open-direction="bottom"
                      ></multiselect>
                 </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn color="success" @click="createUser">
                    Submit
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
  import Multiselect from 'vue-multiselect';
  import axios from 'axios'

  export default {
    // OR register locally
    components: { Multiselect },
    data () {
      return {
        value: null,
        skills: [],
        fname: '',
        lname: '',
        address: '',
        city : '',
        pcode: '',
        phone:''
      }
    },
    created () {
      debugger
      axios.get('/api/v1/json/skills').then((data) => {
        debugger
        data.data.data.forEach(skill => {
          this.skills.push(skill.skill_name)
        });
      })
    },

    methods:{
      createUser(){
        console.log(this.$data)
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
