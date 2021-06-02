import Vue from 'vue'
import { Set } from 'core-js';
import 'firebase/database';

export default {
  state:{
    egger:[], 
    colegger:[],
  },
  mutations:{
    SET_EGGER(state,payload){
      state.egger=payload
    },
    SET_COL_EGGER(state,payload){
    state.colegger=payload},

  },
 
  actions: {  
     // READ BASE DATA  
    async fetchEgger({commit}) {
      try {        
        Vue.$db.collection('Egger').get().then((querySnapshot) => {
          let linitems=[]
           let uniq=[]
        
          querySnapshot.forEach((doc) => {           
            const data= doc.data()
            let linitem={
             id:doc.id,
              cn:data.cn,
              im:data.im,
              pr:data.pr,
              descr:data.descr,
              str:data.str,
              op:data.op

            } 
            let uniqitem={
              cn:data.cn,
            }           
            linitems.push(linitem)
             uniq.push(uniqitem)              
          });
          commit('SET_EGGER',linitems)

          // console.log(uniq)
         // uniq.forEach(i=>console.log(i))

          //массив только с коллекциями
         const arr= uniq.map(i=>{
           return i.cn 
         }) 
         // убрали null
          const arrnotnull=arr.filter(p=>{if(p !=null){
            return true
          }}) 
          // массив с уникальными значениями
         let uni = [...new Set(arrnotnull)]
         commit('SET_COL_EGGER',uni)                 
          
        });

      } catch (e) {
        console.log (e)
        
      }
   },

  

 },
     
   getters:{
    getEgger:(state)=>state.egger,
    getColEgger:(state)=>state.colegger,   

  }
}