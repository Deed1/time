<template>
    <div>
        <div id="wrapper">
            <div class="page-list" data-log="商品列表">
                <!--
                <div class="header">
                    <div class="left">
                        <a class="home"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></a>
                    </div>
                    <div class="tit"><h2 data-log="HEAD-标题-商品列表"><span class="title">商品列表</span></h2></div>

                    <div class="right">
                        <a href="/1/#/search/index">
                            <div class="icon icon-search"></div>
                        </a>
                    </div>
                </div>
                -->
                <ol class="version">
                    <li v-for="list in lists">
                        <a class="version-item"  @click="item(list.id)">
                            <div class="version-item-img">
                                <img :src="'http://images.canon4ever.com/'+list.image">
                            </div>
                            <div class="version-item-intro" >
                                <div class="version-item-name"><p>{{list.description}}</p></div>
                                <div class="version-item-intro-price"><span>{{list.price}}</span></div>
                            </div>
                        </a>
                    </li>
                </ol>

            </div>
        </div>

    </div>
</template>
<style lang="scss">
   a{
        height: 100px;

    }
</style>
<script>
    export default {
        data() {
            return {
                lists:[]
            }
        },
        created(){
            let id = this.$route.params.id;
            this.axios.get(`http://localhost:8000/api/product/list?id=${id}`).then(res=>{
                console.log(res);
                this.lists=res.data;
            })
        },
        methods:{
            item(val){
                this.$router.push({name:'product_view',params:{id:val}})
            }
        }
    }
</script>