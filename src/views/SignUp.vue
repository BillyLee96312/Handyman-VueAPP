<template>
  <v-container
    fill-height
    fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8">
        <material-card
          color="green"
          title="Sign up"
          text=" ">
          <v-form>
            <v-container class="py-0">
              <v-row justify="center">
                <v-col cols="6">
                    <v-btn class="ma-2" outlined color="Black" @click="signUpHomeOwner" >Home Owner</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn  class="ma-2" outlined color="Black" @click="signUpHandyman">Handy Man</v-btn>
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
    methods:{
      signUpHandyman(){
        this.$router.push('sign-up-handyman')
      },
      signUpHomeOwner(){
        this.$router.push('sign-up-homeowner')
      }
  }
}
</script>
