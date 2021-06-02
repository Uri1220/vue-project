export default {
    state: {
       deliveryVisible:false,
       paymentVisible:false,
       contactVisible:false,
      
    },
    mutations: {
      setDeliveryFalse (state) {
        state.deliveryVisible = false
      },
      setDeliveryTrue (state) {
        state.deliveryVisible = true
      },
      setPaymentFalse (state) {
        state.paymentVisible = false
      },
      setPaymentTrue (state) {
        state.paymentVisible = true
      },
      setContactFalse (state) {
        state.contactVisible = false
      },
      setContactTrue (state) {
        state.contactVisible = true
      },
     
    },
    actions: {
      getDeliveryFalse({commit},) {
        commit('setDeliveryFalse')
      },
      getDeliveryTrue({commit},) {
        commit('setDeliveryTrue')
      },
      getPaymentFalse({commit},) {
        commit('setPaymentFalse')
      },
      getPaymentTrue({commit},) {
        commit('setPaymentTrue')
      },
      getContactFalse({commit},) {
        commit('setContactFalse')
      },
      getContactTrue({commit},) {
        commit('setContactTrue')
      },
     
    },
    getters: {
      
      delivery(state){
        return state.deliveryVisible
      },
      payment(state){
        return state.paymentVisible
      },
      contact(state){
        return state.contactVisible
      }
      
    }
  }
  