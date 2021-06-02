<template>
  <div>  
    
             <p class="mt-4" style="text-align:center ">РАСПРОДАЖА КУСКОВ И ОСТАТКОВ </p>
      <!-- Bottom Navigations -->
       <bottom-navigation 
        :list_collection="getColSale"
        @getBotNav="getBotNavigation"              
        />

       

        <!-- ///////////////////////////////////////// -->
        <v-container grid-list-lg class="mt-4 mr-2">
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3
              v-for="product in filteredProd"
              :key="product.id"
            >
              <list-sale                            
                :product_data="product"
              />
            </v-flex>
         </v-layout>
      </v-container>
      
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BottomNavigation from '../components/Linoleum/LinoleumParts/BottomNavigation'
import ListSale from '../components/Linoleum/LinoleumParts/ListSale'

 
export default {
  name: "Sale",

  components:{
    BottomNavigation,
    ListSale
  },

  data: () => ({
    sale:[]
      }),

 async mounted() {
    if (!this.sale.length) this.sale = await this.$store.dispatch("fetchSale");
  },
  computed: {
    ...mapGetters(["getSale", "getColSale"]),
    filteredProd() {
      let products = this.getSale;
      if (this.bottomNav)
        products = products.filter(p => p.cn === this.bottomNav);
      return products;
    }, 
    
  
  },
  methods: {
    getBotNavigation(l){
      this.bottomNav=l
    },
     showPopupInfo() {
         this.isInfoPopupVisible = true;
      },
         closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
  }
   
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bc {
  display: grid;
  grid-template-columns: 278px 1fr;
  margin-top: 5px;
}
.cc {
  align-self: center;
  font-size: 14px;
}

</style>
 
