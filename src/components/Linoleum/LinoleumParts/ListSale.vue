
<template>
  <div>  
          <popup v-if="isInfoPopupVisible"         
            :popupTitle="product_data.id"
            @closePopup="closeInfoPopup"            
            >                     

            <img :src="product_data.im"
            :width="popWidth"                   
             >                      
          </popup>

          <v-hover v-slot:default="{ hover }">              
            <v-card max-width="344"
            :elevation="hover ? 12 : 2" 
             :class="{ 'on-hover': hover } "
                       
             >

              <v-img :src="product_data.im" 
              @click="showPopupInfo"
              height="250px"
               class="white--text align-end pointer"
               gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
               >
                 <v-card-title>{{product_data.id}}</v-card-title>
                  <v-card-subtitle class="white--text" >{{product_data.st}}</v-card-subtitle>
               </v-img> 

               <v-card-subtitle class=" mt-n3 mb-n5">
                 <v-sheet tag="span" class="pr">Цена: {{product_data.pr}} руб/{{product_data.ed}}</v-sheet> 
                 <v-sheet tag="span" class="op ml-3" > {{product_data.op}}руб/{{product_data.ed}}</v-sheet>    
              </v-card-subtitle>
               <v-divider class="mt-1"></v-divider>

               <v-card-text class="text--primary mt-n4">
                  <div>{{product_data.tx}}</div>
                  <v-divider class=""></v-divider>

                  <div>{{product_data.des}}</div>
                  <v-divider class=""></v-divider>
               </v-card-text>          


                <v-card-actions>
                  <div class="ml-1 mb-n1 mt-n5">
                    <app-buy-dial 
                    :product="product_data"              
                    >
                    </app-buy-dial>               
                  </div>                        
               </v-card-actions>

          
            
          </v-card>
          </v-hover>
      
  </div>
</template>

<script>
import Popup from './Popup'
 
export default {
  name: "ListSale",
  props:{ 
   product_data: {
        type: Object,
        default() {
          return {}
        }
      } 
  },
  components:{
    Popup
  },
  data: () => ({ 
    isInfoPopupVisible:false
  }),
 computed: {
   /*eslint-disable*/ 
      popWidth () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '220px'
          case 'sm': return '350px'
          case 'md': return '600px'
          case 'lg': return '600px'
          case 'xl': return '800px'
        }
      },
   },
  methods: {
    imgclick(i){
      console.log(i)
    },
     showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
       closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
  },
   
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.8;
}
.pointer{
  cursor:pointer
}
.op{
  text-decoration:line-through;
   color:#42A5F5;
}
.pr{
  font-size: 18px;
  color:#42A5F5;
}


</style>