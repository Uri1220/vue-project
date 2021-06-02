import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from '../src/store/index';
import BuyDialogComponent from '@/components/BuyDialog'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'material-design-icons-iconfont'

Vue.component('app-buy-dial', BuyDialogComponent)
Vue.config.productionTip = false

const firebaseApp=firebase.initializeApp({apiKey: "AIzaSyDx2acOEd3EXtE3-ejjRmf4_n2QW1Dcxdg",
authDomain: "work-app66.firebaseapp.com",
databaseURL: "https://work-app66.firebaseio.com",
projectId: "work-app66",
storageBucket: "work-app66.appspot.com",
messagingSenderId: "547049300667",
appId: "1:547049300667:web:3982cb15d30ecf4c963f9e",
measurementId: "G-15R9YQ9NZK"})
 var db= firebaseApp.firestore()
 
 
Vue.$db=db


let app

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app=new Vue({
      router,
      vuetify,
      store,
      render: h => h(App),
      created(){
        // this.$store.dispatch('fetchCategories')
      }
    }).$mount('#app')
  }
})