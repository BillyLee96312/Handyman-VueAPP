// https://vuex.vuejs.org/en/actions.html

export default {
  //
  storeToekn: (state, token) => {
      sessionStorage.setItem('token', token) // store the token in localstorage
      state.commit('AUTH_SUCCESS', token)
  }
}
