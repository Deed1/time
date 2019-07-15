<template>
  <div class="about">
    <div id="world" v-for="list in lists">

      <div id="title" style="font-size: 14px">
        <span>{{list.name}}</span>
      </div>

      <div id="bottom">
        <div v-for="item in list.children">


          <li @click="Jump(item.id)">
            <img :src="'http://images.canon4ever.com/'+item.image" alt=""  style="width:40%">
            <br>
            <span>{{item.name}}</span>
          </li>


        </div>


      </div>

    </div>

    <Footer></Footer>
   </div>
</template>
<script>
  import Footer from './Footer'
  export default {
    components:{
      Footer
    },
    data() {
      return {
        lists:[]
      };
    },
    created(){
      this.axios.get('http://localhost:8000/api/category').then(res=>{
        console.log(res);
        this.lists = res.data;
      })
    },
    methods:{
      Jump(val){
        this.$router.push({name:'product_list',params:{id:val}})
      }
    }
  }
</script>
<style lang="scss">

.about{
  background-color: #f4f3f3;
}
  #world{
    display: flex;
    border: 1px solid #f4f3f3;
    flex-direction: column;
    background-color: white;
    justify-content:space-around;
    flex-wrap:wrap;
    height: 200px;
    margin: 0 10px 10px;
    #bottom{
      display: flex;
      justify-content: center;
      align-items: center;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
      }
    }
  }
</style>
















<!--<style lang="scss">-->
<!--  .about{-->
<!--    background-color: #f4f3f3;-->
<!--    #title{-->
<!--      flex: 1;-->
<!--      height: 25px;-->
<!--      line-height: 70px;-->
<!--    }-->
<!--    #bottom{-->
<!--      display: flex;-->
<!--      margin: 10px;-->
<!--      height: 200px;-->
<!--      div{-->
<!--        width: 100%;-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        background-color: white;-->
<!--        li{-->
<!--          padding-top: 70px;-->
<!--          list-style: none;-->
<!--          width: 100%;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--</style>-->

