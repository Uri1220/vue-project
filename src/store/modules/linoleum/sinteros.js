import Vue from 'vue'
import { Set } from 'core-js';
import 'firebase/database';

export default {
  state:{
    sin:[], 
    colsin:[],
  },
  mutations:{
    SET_SINT(state,payload){
      state.sin=payload
    },
    SET_COL_SINT(state,payload){
    state.colsin=payload},


  },
 
  actions: {  
     // READ BASE DATA  
    async fetchSinteros({commit}) {
      try {        
        Vue.$db.collection('Sinteros').get().then((querySnapshot) => {
          let linitems=[]
           let uniq=[]
        
          querySnapshot.forEach((doc) => {           
            //  console.log(`${doc.id} => ${doc.data()}`);
            const data= doc.data()
            let linitem={
             id:doc.id,
              cn:data.cn,
              im:data.im,
              pr:data.pr,
              descr:data.descr,
              str:data.str

            } 
            let uniqitem={
              cn:data.cn,
            }           
            linitems.push(linitem)
             uniq.push(uniqitem)              
          });
          commit('SET_SINT',linitems)

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
         commit('SET_COL_SINT',uni)                 
          
        });

      } catch (e) {
        console.log (e)
        
      }
   },

   

 },
     
   getters:{
    getSinteros:(state)=>state.sin,
    getColSin:(state)=>state.colsin,


  }
}