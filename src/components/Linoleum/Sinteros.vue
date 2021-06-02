<template>
  <div >
    <!-- BREADCRUMBS -->    
      <div class="bc ">
        <div>
          <v-breadcrumbs :items="bread_items"></v-breadcrumbs>
        </div>
        <div class="cc ml-n2">
          <!-- <v-icon small>mdi-chevron-right</v-icon> -->
          /{{ bottomNav }}
        </div>
      </div>
                 <p style="text-align:center ">КОЛЛЕКЦИИ</p>
      <!-- Bottom Navigations -->
       <bottom-navigation 
        :list_collection="getColSin"
        @getBotNav="getBotNavigation"        
        />
     
      <!-- DESCRIPTION  -->
      <description
        :brand="brand"
        :bottomNav="bottomNav"
        :descriptionImg="descriptionImg"
        :descriptionInfo="descriptionInfo"

      />   
   
    <!-- //////////////////////////////////////////////////// -->
       <p style="text-align:center;margin-top: 10px; ">ДИЗАЙНЫ</p>
        <v-container grid-list-md >
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3
              v-for="product in filteredProd"
              :key="product.id"
            >
              <list-products                           
                :product_data="product"
              />
            </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import ListProducts from '../Linoleum/LinoleumParts/ListLinolProducts'
import BottomNavigation from '../Linoleum/LinoleumParts/BottomNavigation'
import Description from '../Linoleum/LinoleumParts/Description'
import { mapGetters } from "vuex";
export default {
  name: "Juteks",
  data: () => ({
     brand:'ЛИНОЛЕУМ СИНТЕРОС',
     jut: [],
    bottomNav: "Horizon",
    bread_items: [
      {
        text: "Главная",
        disabled: false,
        href: "/"
      },
      {
        text: "Линолеум",
        disabled: true,
        href: "/linoleum/"
      },
      {
        text: "Синтерос",
        disabled: true,
        href: "/linoleum/sinteros/"
      }
    ]
  }),
  components:{
    ListProducts,
    BottomNavigation,
    Description
  },
  async mounted() {
    if (!this.jut.length) this.jut = await this.$store.dispatch("fetchSinteros");
  },
  computed: {
    ...mapGetters(["getSinteros", "getColSin"]),
    filteredProd() {
      let products = this.getSinteros;
      if (this.bottomNav)
        products = products.filter(p => p.cn === this.bottomNav);
      return products;
    },
    descriptionInfo() {
      let prod = [];
      let products = this.getSinteros;
      if (this.bottomNav) prod = products.filter(p => p.id === this.bottomNav);
      const arrFromString = prod.map(p => {
        return p.descr.split("`");
      });
      return arrFromString[0];
    },
    descriptionImg() {
      let prod = [];
      let products = this.getSinteros;
      if (this.bottomNav) prod = products.filter(p => p.id === this.bottomNav);
      //  console.log(prod[0]);
      return prod;
    }
  },
  methods: {
    getBotNavigation(l){
      this.bottomNav=l
    }
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