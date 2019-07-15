<template>
    <div id="wrapper" style="display: block">
        <div class="page-product-view" data-log="商品详情">

            <div class="header"><div class="left"><a onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-346f31c749f6e40d', '', 'pcpid']);history.go(-1)" class="home" data-stat-id="346f31c749f6e40d"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></a><!--vue-if--><!--vue-if--></div><div class="tit"><!--vue-if--></div><div class="right"><a href="javascript:;" data-event="30000000110001001" data-stat-id="6c93ea1c6bb6eb01" onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-6c93ea1c6bb6eb01', 'javascript:;', 'pcpid']);"><div class="icon icon-search"></div></a></div></div>

            <div class="product-view">
                <div class="b1">
                    <img :src="'http://images.canon4ever.com/'+lists.image">
                </div>
                <div class="b2">
                    <div class="b21">
                        <div class="b211">
                            <div class="name"><p>{{lists.name}} </p></div>
                            <div class="price"><strong>{{lists.price}}</strong></div>
                        </div>
                        <div class="b212">
                            <div class="icon-fenxiang"></div>
                        </div>
                    </div>
                    <div class="b22">
                        <p>{{lists.description}}</p>
                    </div>
                </div>
                <div class="mt20" style="display: none;"></div>

                <!--<ul class="b3">-->
                <!--<li><span class="on">白色</span></li>-->
                <!--</ul>-->

                <ul class="b3" style="display: none;">
                    <li><span>通用</span></li>
                </ul>

                <div class="ui-b7">
                    <h3>为您推荐</h3>
                    <div class="ui-carousel-container">
                        <div class="ui-carousel-viewport">
                            <a v-for="item in items">
                                <img :src="'http://images.canon4ever.com/'+item.image" @click="skip(item.id)">
                            </a>

                        </div>
                    </div>
                </div>
                <div class="b5">
                    <div class="b51"></div>
                    <div class="b52">
                        <div class="blc" v-html="lists.markdown_html_code">
                        </div>
                    </div>
                </div>
                <div class="b7">
                    <div class="b70">
                        <a href="/1/#/index">
                            <div class="icon-home"></div>
                        </a>
                    </div>
                    <div class="b72">
                        <!--<a href="javascript:;" class="off">暂时缺货</a>-->
                        <a @click="leap">添加到购物车</a>
                    </div>

                    <div class="b73">
                        <a href="/1/#/cart/index">
                            <div class="icon-gouwuche"></div>
                        </a>
                    </div>
                </div>
                <a href="javascript:;" id="top" style="visibility: visible;">
                    <img src="http://s1.mi.com/m/images/m/top.png">
                </a>
            </div>
            <div class="share-component"></div>
        </div>
    </div>
</template>
<style>
    a{
        height: 20%;
    }
</style>

<script>
    export default {
        data() {
            return {
                lists:[],
                items:[]
            }
        },
        created(){
           this.init();
        },
        methods:{
            init(){
                let id = this.$route.params.id;
                this.axios.get(`http://localhost:8000/api/product/view?id=${id}`).then(res=>{
                    // console.log(res);
                    this.lists=res.data.product;
                    this.items=res.data.recommends;
                })
            },
            leap(){
                let id = this.$route.params.id;
                this.axios.post(`api/cart`,{product_id:id}).then(res=>{
                    console.log(res);
                    this.$router.push({name:'cart'})
                })
            },
            skip(id){
                this.$router.push('/product_view/'+id);
                this.init()
            }
        }
    }


</script>