<template>
<v-app>
  <!-- <v-app> -->
    <Navbar 
    v-bind:goods="goods"
    />

     <!-- <v-main-wrapper /> -->

    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="10000"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn
          dark
          text
          @click.native="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
 
    <v-content class="mx-2">    
      <router-view></router-view>
    </v-content> 

    <!-- <Footer /> -->
  <!-- </v-app> -->
  </v-app>
</template>

<script>
 import Navbar from "../src/views/Navbar";
 //import vMainWrapper from './components/v-main-wrapper'
// import Footer from "../src/views/Footer";
export default {
  name: "App",
  components: {
     Navbar,
    // vMainWrapper
    // Footer,
  },
  data: () => ({ 
   
    goods: [
        {
          title: "Линолеум",
          // url_title: "/linoleum/",
          // active:true,
          active:false,
          items: [
            { title: "Синтерос(РФ)", url: "/linoleum/sinteros/" },
            { title: "Juteks (РФ)", url: "/linoleum/juteks/" },
            // { title: 'IVC "ИВК-Восток"(РФ)', url: "/linoleum/ivc/" },
            // { title: "Комитекст Лин(РФ)", url: "/linoleum/komitex/" },
            // { title: "Polystyl(РФ)", url: "/linoleum/polystyl/" }
          ]
        },
        {
          title: "Ламинат",
          //  url_title: "/laminat/",
          // active: true,
          items: [
            { title: "Kronostar(РФ)", url: "/laminat/kronostar/" },
             { title: "Egger(РФ)", url: "/laminat/egger/" },
            // { title: "Classen(Германия)", url: "/laminat/classen/" },
            // { title: "Kronopol()", url: "/laminat/kronopol/" },
            // { title: "VIVAFLOOR(РБ)", url: "/laminat/vivaflor/" }
          ]
        }
    ],
  }),
    methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  }
};
</script>