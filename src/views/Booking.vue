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
          title="Booking"
          text=" "
        >
          <v-form>
            <v-container class="py-0">
              <v-row justify="center">
                <v-col
                  class="align"
                  cols="6"
                >
                Booking created successfully!
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
  export default {
    metaInfo () {
      return {
        title: 'Booking'
      }
    },
    methods: {
    }
  }
</script>
