<template>
  <v-container
    class="fill-height"
    fluid
    grid-list-xl
  >
    <v-row justify="center">
      <v-col cols="12">
        <material-card
          color="green"
          title="Searching HandyMan"
          text="This is a handyman searching page for homeowner"
        >
        
          <v-data-table :headers="headers" :items="items"
             item-key="worklocation" :search="search"
             :custom-filter="filterOnlyLocation">
            
          
            <template v-slot:top>

              <v-container fluid>
                <v-row>
                  <v-col cols="3">
                      <v-row class="pa-3">
                          <!-- Filter for dessert name-->
                          <v-text-field v-model="search" type="text" label="Work Location">
                          </v-text-field>
                      </v-row>
                  </v-col>

                  <v-col cols="3">
                      <v-row class="pa-3">
                          <!-- Filter for dessert name-->
                          <v-select
                              :items="skills"
                              v-model="skillsFilterValue"
                              v-on:change="skillsFilter(skillsFilterValue)"
                              label="Skills"
                          >
                          </v-select>

                      </v-row>
                  </v-col>

                  <v-col cols="3">
                      <v-row class="pa-3">
                          <!-- Filter for calories -->

                          <!--  <v-text-field v-model="catalogueFilterValue" type="text" label="Skill"></v-text-field> -->

                      </v-row>
                  </v-col>
                </v-row>
              </v-container>

            </template>


          </v-data-table>



        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import axios from 'axios'

  export default {
    data: () => ({
      search: '',
      skillsFilterValue: '',
      headers: [
        {
          sortable: false,
          text: 'First Name',
          value: 'firstName'
        },
        {
          sortable: false,
          text: 'Last Name',
          value: 'lastName'
        },
        {
          sortable: false,
          text: 'Work Location',
          value: 'worklocation'
        },
        {
          sortable: false,
          text: 'Service Name',
          value: 'serviceName'
        },
        {
          sortable: false,
          text: 'Skill Name',
          value: 'skillName'
        },
        {
          sortable: false,
          text: 'Skill License No',
          value: 'skillLicenseNo'
        },
        {
          sortable: false,
          text: 'Avaliable Area',
          value: 'avaliableArea'
        }
      ],
      skills: [],
      items: []
    }),
    // Vue by default call this method once this component is loaded on page.
    // We are fetching all users from database using /api/v1/json/handyman. This is defined inside server/index
    created () {
      
      axios.get('/api/v1/json/handymen').then((res) => {
        res.data.data.forEach(
        service => { 
          this.items.push({
            firstName: service.first_name,
            lastName: service.last_name,
            worklocation: service.work_location,
            serviceName: service.service_name,
            skillName: service.skill_name,
            skillLicenseNo: service.skill_license_no,
            avaliableArea: service.work_avaliable_area
          })
        })
      }) 
      axios.get('/api/v1/json/skills').then((data) => {
        data.data.data.forEach(skill => {
          this.skills.push(skill.skill_name)
        })
      })
    },
    methods: {
      /**
       * Filter for dessert names column.
       * @param value Value to be tested.
       * @returns {boolean}
       */

       filterOnlyCapsText(value, search, item){
        return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
       },
       worklocationFilter(value) {
        // If this filter has no value we just skip the entire filter.
        if (!this.FilterValue) {
          return true;
        }

        // Check if the current loop value (The dessert name)
        // partially contains the searched word.
        return value.toLowerCase().includes(this.dessertFilterValue.toLowerCase());
      }
       ,
       skillsFilter(){
          console.log("--- skillsFilter ----" + skillsFilterValue)
          //this.push()
          // If this filter has no value we just skip the entire filter.
          
       }
    }
  }
</script>

