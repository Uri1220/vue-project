<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class='v-popup ' >
   
      <div class="v-popup__header">
        <span  class="headline ml-3">{{popupTitle}}</span>
       
         <v-icon size="40"
           class="material-icons"
           @click="closePopup"
           >close
          </v-icon>     
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
     
    </div>
  </div>
</template>

<script>
  export default {
    name: "Popup",
    props: {
      popupTitle: {
        type: String,
        default: ''
      },
     
    },
    data() {
      return {}
    },
    methods: {
      
      closePopup() {
        this.$emit('closePopup')
          this.$store.dispatch('getDeliveryFalse')
          this.$store.dispatch('getPaymentFalse')
          this.$store.dispatch('getContactFalse')
      }
    },
     
    // mounted() {
    //   let vm = this;
    //   document.addEventListener('click', function (item) {
    //     if (item.target === vm.$refs['popup_wrapper']) {
    //       vm.closePopup()
    //     }
    //   })
    // },
  }
</script>

<style lang="scss">
  .popup_wrapper {
    background: rgba(64,64,64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .wid{
         width: 200px;

  }
  .v-popup {
     border:1px solid #2196F3;
     padding: 1px; 
    position: fixed;
    top: 50px;
    // width: 600px;
    background:whitesmoke;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  }
</style>
