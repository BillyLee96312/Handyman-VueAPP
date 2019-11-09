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
          <v-select
              :items="itemList"
              :search-input.sync="searchInput"
              item-text="name"
              autocomplete
          />

          <v-autocomplete
            v-model="selected"
            :loading="loading"
            :items="fetched_data"
            :search-input.sync="search"
            @change="dataSelected()"
            placeholder="here"
            color="black"
            class="black--text"
            flat
            item-text="name"
            item-value="id"
            hide-no-data
            outline
            hide-details
            label="Search"
            return-object
        >
        </v-autocomplete>
            <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
          />
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
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
      itemList: [
        {name: 'Service Name'}, 
        {name: 'Skill Name'}, 
        {name: 'Available Area'}
      ],
      searchInput: "",
      items: []
    }),

    // Vue by default call this method once this component is loaded on page.
    // We are fetching all users from database using /api/v1/json/handyman. This is defined inside server/index
    created () {
      axios.get('/api/v1/json/handyman').then((res) => {
        res.data.data.forEach(service => {
          this.items.push({
            firstName: service.first_name,
            lastName: service.last_name,
            serviceName: service.service_name,
            skillName: service.skill_name,
            skillLicenseNo: service.skill_license_no,
            avaliableArea: service.work_avaliable_area
          })
        })
      })
    }
  }
</script>
