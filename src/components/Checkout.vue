<template>
  <v-container>
    <v-layout column>
      <v-flex xs12 sm6 md4 class="text-xs-center pt-5" v-if="loading">
        <!-- loader: -->
        <div class="text-center">
        <v-progress-circular
            :size="80"
            :width="4"
            color="blue"
            indeterminate
        ></v-progress-circular>
        </div>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text-xs-center  mb-3 ">Заказы</h1>
        <v-list  
          subheader
          two-line
        >
          <v-list-item 
            
            v-for="(order, i) in orders"
            :key="i"
          >
            <v-list-item-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title><b>Имя:</b>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle><b>Телефон:</b>{{ order.phone }}</v-list-item-subtitle>
              <v-list-item-subtitle><b>Коллекция:</b>{{ order.collection }}</v-list-item-subtitle>
              <v-list-item-subtitle><b>Товар:</b>{{ order.productId }}</v-list-item-subtitle>
              <v-list-item-subtitle><b>Количество:</b>{{ order.quantity }}</v-list-item-subtitle>
            </v-list-item-content>
            
            <v-list-item-action  >
              <v-btn 
              class="primary"
              @click="orderDelete(order)"
               
              >&times;</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-flex xs12 class="text-xs-center" v-else>
        <h1 class="text--secondary">Заказов нет...</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Checkout",
  data(){
    return{
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders    
    }
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
      .then(() => {
        order.done = true
      })
      .catch(() => {})
     },
    orderDelete (order) {
      //  if(orders.lenght)
        this.$store.dispatch('orderDelete', order.id)
       
       .then(() => {
        //  if delete success
       this.$store.dispatch('fetchOrders')
         
      })
      .catch(() => {})
     }
    
  },
  created () {   
    this.$store.dispatch('fetchOrders')    
  },

  
  
}
</script>
<style scoped>



</style>

