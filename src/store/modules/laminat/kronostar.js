import Vue from 'vue'
import { Set } from 'core-js';
import 'firebase/database';

export default {
  state:{
    kron:[], 
    colkron:[],
  },
  mutations:{
    SET_KRON(state,payload){
      state.kron=payload
    },
    SET_COL_KRON(state,payload){
    state.colkron=payload},

  },
 
  actions: {  
     // READ BASE DATA  
    async fetchKronostar({commit}) {
      try {        
        Vue.$db.collection('Kronostar').get().then((querySnapshot) => {
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
          commit('SET_KRON',linitems)

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
         commit('SET_COL_KRON',uni)                 
          
        });

      } catch (e) {
        console.log (e)
        
      }
   },

  //  async fetchJutDes ({commit}) {
  //   commit('setLoading', true)
  //   commit('clearError')

  //  try {
  //    const kronDes  = (await firebase.database().ref(`/kronDescr`).once('value')).val()||{}
  //      // console.log(kronDes)
  //    return Object.keys(kronDes).map(key=>({...kronDes[key],id:key}))

  //      // commit('setLoading', false)
  //  } catch (error) {
  //     commit('setError', error.message)
  //    // commit('setLoading', false)
  //  }
  // },

 },
     
   getters:{
    getKronostar:(state)=>state.kron,
    getColKronostar:(state)=>state.colkron,   

  }
}