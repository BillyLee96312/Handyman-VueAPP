<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-row justify="center">
      <v-col cols="12">
        <material-card
          color="green"
          title="Simple Table"
          text="Here is a subtitle for this table"
        >
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
  import axios from 'axios';

  export default {
    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'Username',
          value: 'username'
        },
        {
          sortable: false,
          text: 'Email',
          value: 'email'
        },
        {
          sortable: false,
          text: 'User Type',
          value: 'usertype'
        }
      ],
      items: []
    }),

    created(){
      axios.get('/api/v1/json/users').then((res) =>{
        res.data.data.forEach(user => {
          this.items.push({
            username: user.user_name,
            email: user.email,
            usertype: user.user_type
          })
        });
      })
    }
  }
</script>
