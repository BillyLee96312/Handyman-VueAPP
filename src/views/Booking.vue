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
        <material-card v-if="!bookingConfirmed"
          color="green"
          title="Verify booking details"
          text=" "
        >
          <v-form>
            <v-container class="py-0">
              <v-row justify="center">
                <v-col
                  class="align"
                  cols="12"
                >
                <h2>Booking Details</h2>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :value="itemToRequest.firstName"
                    label="First name"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :value="itemToRequest.lastName"
                    label="Last name"
                    disabled
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    :value="itemToRequest.serviceName"
                    label="Service"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn small color="primary" dark @click="confrimBooking()">Confirm</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
        <material-card v-if="bookingConfirmed"
          color="green"
          title="Booking confimed"
          text=" ">
          <v-row>
            <v-col cols="12">
              <h2>Your booking has been confirmed!</h2>
            </v-col>
           </v-row>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data(){
      return{
        bookingConfirmed: false
      }
    },
    metaInfo () {
      return {
        title: 'Booking'
      }
    },
    methods: {
      confrimBooking(){
        this.bookingConfirmed = true;
      }
    },
    computed:{
      itemToRequest(){
        return this.$route.params.itemToRequest;
      }
    }
  }
</script>
