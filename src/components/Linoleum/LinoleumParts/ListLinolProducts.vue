
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
             class="border"

            
             >

              <v-img :src="product_data.im" 
              @click="showPopupInfo"
              height="250px"
               class="white--text align-end pointer"
               gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
               >
                 <v-card-title>{{product_data.id}}</v-card-title>
               </v-img> 

              <v-card-subtitle 
                  class=" mt-n3 mb-n5"
              >
             <v-sheet tag="span" class="pr">Цена: {{product_data.pr}} руб/м2</v-sheet> 
             <v-sheet tag="span" class="op ml-3" > {{product_data.op}}  </v-sheet>    
              </v-card-subtitle>

              

              <v-card-actions>
              <div class="ml-1 mb-1">
                <app-buy-dial 
                :product="product_data"              
                >
                </app-buy-dial>               
              </div>

               <v-btn outlined color="blue lighten-1"
                  @click="showPopupInfo"
                  class="ml-2 mb-1 pt-1"
                  >
                  <v-icon size="32"
                    class="material-icons"
                    >zoom_in
                  </v-icon>                
               </v-btn>        

               </v-card-actions>             
            </v-card>
          </v-hover>
      
  </div>
</template>

<script>
import Popup from './Popup'
 
export default {
  name: "ListProducts",
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
}
.pr{
  font-size: 18px;
}

</style>