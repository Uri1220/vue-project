<template>
  <div>
    <!-- <v-app-bar app flat dark src="../assets/images/carusel1.jpg"> -->
    <v-app-bar app flat dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
     

         <!-- BUTTON -->
      <v-app-bar-nav-icon
        color="white"
        @click="drawer=!drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
          <!-- PHONE -->
      <v-toolbar-items>
        <v-btn text>
          <v-icon left>mdi-phone</v-icon>+375(29)000-0000
        </v-btn>
      </v-toolbar-items>
          <!-- BUTTONS -->
     <v-btn-toggle
          class="hidden-md-and-down"
        v-model="toggle_exclusive"        
        group     
        
         >
        <v-btn :value="1" text
         :to="{name:'Sale'}"
         >
          <v-icon left size="22">mdi-star</v-icon>
          распродажа
        </v-btn>

        <v-btn :value="2" text
         :to="{name:'Delivery'}"
        @click="isDeliveryVisible"
        >
         <v-icon left size="26" >mdi-truck-outline</v-icon>
          доставка
        </v-btn>

        <v-btn :value="3" text
         :to="{name:'Payment'}"
        @click="isPaymentVisible"
        >        
          <v-icon left size="26" class="material-icons">attach_money</v-icon>
            оплата
        </v-btn>      
      </v-btn-toggle>       

      <v-spacer></v-spacer>

      <!-- dropdown menu1 -->
      <v-menu offset-y >
        <template  v-slot:activator="{ on }">
          <v-btn text v-on="on" color="white" class="hidden-md-and-up">
            <!-- <v-icon left>mdi-dots-vertical</v-icon> -->
             <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item 
           router :to="{name:'Sale'}"       
           >
            <v-list-item-title>Распродажа</v-list-item-title>
          </v-list-item>          
       
         
          <v-list-item 
           @click="isDeliveryVisible"
           router :to="{name:'Delivery'}"       
           >
            <v-list-item-title>Доставка</v-list-item-title>
          </v-list-item> 

           <v-list-item 
            @click="isPaymentVisible"          
           router :to="{name:'Payment'}"       
           >
            <v-list-item-title>Оплата</v-list-item-title>
          </v-list-item>

          <v-list-item 
           @click="isContactVisible"
           router :to="{name:'contact'}"       
           >
            <v-list-item-title>Контакты</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>

     

      <!-- dropdown menu2 -->
      <v-menu offset-y >
        <template  v-slot:activator="{ on }">
          <v-btn text v-on="on" color="white" >
            <v-icon left>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item 
           router :to="{name:'checkout'}"       
           >
            <v-list-item-title>Заказы</v-list-item-title>
          </v-list-item>

         
        </v-list>
      </v-menu>
    </v-app-bar>

    

    <!-- //////////////////////////////////////////////////////////////////////// -->

    <v-navigation-drawer v-model="drawer" app>
      <v-system-bar></v-system-bar>

      <v-list flat>
        <!-- ВЕРХУШКА -->
        <!-- <v-subheader class="ml-5 mt-n2" >ТЦ "Стрелецкий Капитал"</v-subheader> -->
        <!-- <v-divider></v-divider> -->

        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="ml-4"  v-text="name"></v-list-item-title>
            <v-list-item-subtitle>ТЦ "Стрелецкий Капитал</v-list-item-subtitle>
            <v-list-item-subtitle class="ml-6">павильон №12</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

                        <!-- CONTACTS -->

                <v-btn 
                  :to="{name:'contact'}"
                    color="blue darken-1"
                    block 
                    outlined
                    class="mt-n2"
                    @click="isContactVisible"
                    >
                  Контакты       
                </v-btn>
        
       

      <v-divider></v-divider>
      <!-- //////////////GOODS////////////////////////// -->
      <v-list flat>
        <v-list-group v-for="item in goods" :key="item.title" v-model="item.active" no-action>
          <!-- когда раскыта   v-model="item.active" == true -->
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item router :to="item.url_title">
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.items" :key="subItem.title" router :to="subItem.url">
            <v-list-item-content>
              <v-list-item-title v-model="linItem" v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
           
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default{

  name: "Navbar",
  props: {
    goods: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      name: "ИП Семеш М.Э.",
       menu: false,

      drawer: true,
      linItem: "",

       toggle_exclusive: 1,      
    };
  },
  methods: {  
    closeContact(){
      this.menu =false     
    },
    isDeliveryVisible(){
       this.$store.dispatch("getDeliveryTrue")
    },
    isPaymentVisible(){
       this.$store.dispatch("getPaymentTrue")
    },
    isContactVisible(){
       this.$store.dispatch("getContactTrue")
    }
  },
 
};
</script>

<style  scoped>
.pointer {
  cursor: pointer;
}
.text-img{
  font-size: 16px;
}
</style>