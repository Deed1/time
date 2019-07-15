import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists:[],
  },
  mutations: {
    setCarts(state,payload) {
      state.lists = payload
    },
    changenum(state, payload) {
      payload.type == 'inc' ? payload.list.num++ : payload.list.num--
    }
  },
  actions: {
    //改变商品数量
    changenum({commit},payload){
      //判断数量如果等于1，则不能继续点击
      if (payload.list.num==1 && payload.type == 'dec'){
        return false
      }
     axios.patch(`api/cart`,{cart_id:payload.list.id,type:payload.type}).then(res=>{
       commit('changenum',payload)
      });
    },

    //请求购物车列表
    getAllCarts({commit}){
      axios.get(`api/cart`).then(res=>{
        console.log(res);
        //请求到商品列表后 发送到mutations的setCarts   只要出现commit  就提交给mutations
        commit('setCarts',res.data.carts)
      })
    },

    //删除商品
    handleDelete({commit},id){
      axios.delete(`api/cart?cart_id=${id}`).then(res=>{
        commit('setCarts',res.data.carts)
      })
    },

  }
})
