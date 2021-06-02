<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-layout row>
          <!-- {{button_items}} -->
          <div>
            <v-breadcrumbs large :items="bread_items">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </div>
          <!-- Справа от крошек прилепляю -->
          <div pt-5>
            <!-- <v-icon>mdi-chevron-right</v-icon>
            {{collection}} -->
            <v-icon>mdi-chevron-right</v-icon>
            {{ bottomNav }}
          </div>
          
        </v-layout>
      </v-flex>
      <!-- button navigation -->
      <!-- :to="'/product/'+product.id" -->
      <v-flex>
        Selected value: {{ bottomNav }}
        <!-- если нет  :value="link.title"  тоздесь выводятся цифры-номера -->
           <!-- router :to="link" -->
        <v-bottom-navigation v-model="bottomNav">
          <v-btn
            v-for="(link,i) in getColSin"
            :key="i"
          
            :value="link"
            @click="onSubmit"
          >
            <span>{{link}}</span>
            <!-- <v-icon>mdi-home</v-icon> -->
          </v-btn>
        </v-bottom-navigation>
      </v-flex>


    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    
//   props: ["button_items", "collection"],
  data: () => ({
    bottomNav: "",
    title:'',
    bread_items: [
      {
        text: "Главная",
        disabled: false,
        href: "/"
      },
      {
        text: "Каталог",
        disabled: false,
        href: "/catalog/"
      },
      {
        text: "Линолеум",
        disabled: false,
        href: "/catalog/linoleum/"
      }
    ]
   
  }),
  methods: {
    onSubmit(){
       console.log('OnSubmit:',this.bottomNav)
    //   if(this.bottomNav.trim()){
    //   this.$emit('onSub',this.bottomNav)}
    }
   
  },
  computed: {
    ...mapGetters(["getSinteros",
    "getColSin"]),

    
    }
};
</script>

