const mutations = {
  setUser (state, userObj) {
    state.userObj = userObj
  },
  resetVuex (state) {
  	state.userObj = {}
  }
}

export default mutations
