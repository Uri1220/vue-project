import Vue from 'vue'
import { Set } from 'core-js';
import 'firebase/database';

export default {
  state:{
    sale:[],
    colsale:[] 
  },
  mutations:{
    SET_SALE(state,payload){
      state.sale=payload
    },
    SET_COL_SALE(state,payload){
      state.colsale=payload
    },   
  },
 
  actions: {  
     // READ BASE DATA  
    async fetchSale({commit}) {
      try {        
        Vue.$db.collection('Sale').get().then((querySnapshot) => {
          let saleitems=[]
           let uniq=[]
        
          querySnapshot.forEach((doc) => {           
            const data= doc.data()
            let item={
             id:doc.id,
              cn:data.cn,
              im:data.im,
              pr:data.pr,
              ed:data.ed,
              tx:data.tx,
              op:data.op,
              st:data.st,
              des:data.des

            } 
            let uniqitem={
              cn:data.cn,
            }           
            saleitems.push(item)
             uniq.push(uniqitem)              
          });
          commit('SET_SALE',saleitems)

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
         commit('SET_COL_SALE',uni)                 
          
        });

      } catch (e) {
        console.log (e)
        
      }
   }, 

 },
     
   getters:{
    getSale:(state)=>state.sale,
    getColSale:(state)=>state.colsale,   

  }
}