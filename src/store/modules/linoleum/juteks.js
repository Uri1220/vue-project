import Vue from 'vue'
import { Set } from 'core-js';
import 'firebase/database';

export default {
  state:{
    jut:[], 
    coljut:[],
  },
  mutations:{
    SET_JUT(state,payload){
      state.jut=payload
    },
    SET_COL_JUT(state,payload){
    state.coljut=payload},

  },
 
  actions: {  
     // READ BASE DATA  
    async fetchJuteks({commit}) {
      try {        
        Vue.$db.collection('Juteks').get().then((querySnapshot) => {
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
              str:data.str,
              op:data.op

            } 
            let uniqitem={
              cn:data.cn,
            }           
            linitems.push(linitem)
             uniq.push(uniqitem)              
          });
          commit('SET_JUT',linitems)

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
         commit('SET_COL_JUT',uni)                 
          
        });

      } catch (e) {
        console.log (e)
        
      }
   },

  //  async fetchJutDes ({commit}) {
  //   commit('setLoading', true)
  //   commit('clearError')

  //  try {
  //    const jutDes  = (await firebase.database().ref(`/jutDescr`).once('value')).val()||{}
  //      // console.log(jutDes)
  //    return Object.keys(jutDes).map(key=>({...jutDes[key],id:key}))

  //      // commit('setLoading', false)
  //  } catch (error) {
  //     commit('setError', error.message)
  //    // commit('setLoading', false)
  //  }
  // },

 },
     
   getters:{
    getJuteks:(state)=>state.jut,
    getColJut:(state)=>state.coljut,   

  }
}