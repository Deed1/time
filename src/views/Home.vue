<template>

  <div class="world">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="list in lists">
        <img :src="'http://images.canon4ever.com/'+list.image" style="width: 100%">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="boxs" >
        <li v-for="pic in pics">
          <img :src="'http://images.canon4ever.com/'+pic.image" alt=""  style="width: 100%">
        </li>
    </div>

    <div class="info" v-for="info in infos">
        <li>
          <img src="../../img/xp.png" alt="" style="width: 70px;position: absolute;top: 10%;left: -3%">
          <img :src="'http://images.canon4ever.com/'+info.image" alt=""  style="width:5%;">
          <dl>
            <dt>
              <h3><span>{{info.name}}</span></h3>
            </dt>
            <dt>
              <p>{{info.description}}</p>
            </dt>
            <dt>
              ￥<span class="last">{{info.price}}元起</span>
            </dt>
          </dl>
        </li>
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
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        lists:[],
        pics:[],
        infos:[],
      }
    },
    created(){
      this.axios.get('http://localhost:8000/api').then(res=>{
        console.log(res);
        this.lists = res.data.slides;
        this.pics = res.data.banners;
        this.infos =res.data.recommends
      });
    }
  }
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .world{
    background-color: #f4f3f3;
    font-size: 12px;
      .boxs {
          width: 100%;
          display: flex;
          li{
              list-style: none;
              flex: 1;
              margin: 5px;
          }
      }
      .info{
          display: flex;
          width: 100%;
          li{
              width: 100%;
              position: relative;
              list-style: none;
              display: flex;
              margin: 3px 0;
              img{
                  flex: 1;
              }
              dl{
                  display: flex;
                  flex-direction: column;
                  flex: 2;
                  background-color: white;
                  justify-content:center;
                  p{
                      opacity: 0.6;
                  }
                  .last{
                      color: red;
                  }
              }
          }
      }
  }
</style>