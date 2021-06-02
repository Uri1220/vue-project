<template>
  <div>
    <popup v-if="paymentVisible">     
      <v-card class="mx-auto" :width="popWidth">
        <!-- <v-img
          class="white--text align-end"
          height="300px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjhOoE7SeCk-obH0-5XSFQsUFWaTfqJgwsOA&usqp=CAU"
        >
          <v-card-title>Доставка Полоцк Новополоцк</v-card-title>
        </v-img> -->

        <v-card-subtitle class="pb-0">Оплата производится...</v-card-subtitle>

        <!-- <v-card-text class="text--primary">
          <div>Грузоподъемность...</div>

          <div>При заказе свыше 250 руб. доставка осуществляется бесплатно.</div>
        </v-card-text> -->
      </v-card>
    </popup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Popup from "../components/Linoleum/LinoleumParts/Popup";

export default {
  name: "Payment",

  components: {
    Popup
  },

  data: () => ({}),

  computed: {
    paymentVisible() {
      return this.payment;
    },
    ...mapGetters(["payment"]),

    /*eslint-disable*/
    popWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220px";
        case "sm":
          return "350px";
        case "md":
          return "600px";
        case "lg":
          return "600px";
        case "xl":
          return "700px";
      }
    }
  },
  methods: {
    ...mapActions(["getPaymentFalse", "getPaymentTrue"])
  },
  async mounted() {
    this.getPaymentTrue;
    // console.log("from Payment" + this.payment);    
  }
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}
.pointer {
  cursor: pointer;
}
</style>
 
