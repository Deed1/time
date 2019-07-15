<template>
    <div id="wrapper">
        <div class="cart-index" v-if="header">
            <div class="cart-index-wrap">
                <Cart_list></Cart_list>

                <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>

                <Cart_count></Cart_count>
<!--                <div class="bottom-submit ui-box">-->
<!--                    <div class="price"><span>共{{num.num}}件 金额：</span><br><strong>{{num.price}}</strong><span>元</span></div>-->
<!--                    <div class="btn"><router-link to="/about"><a class="ui-button ui-button-disable"-->
<!--                                                                 href="/1/#/product/category"><span>继续购物</span></a></router-link></div>-->
<!--                    <div class="btn"><a class="ui-button" @click="handlego()"><span>去结算</span></a></div>-->
<!--                </div>-->
            </div>
        </div>

        <div class="cart-index" v-show="bottom">
            <div style="height:1rem;"></div>

            <div class="cart-index-wrap">
                <div class="empt">
                    <div class="b3">
                        <a href="/1/#/product/category" class="ui-button ui-button-disable">
                            <span>全部商品</span>
                        </a>
                        <a href="/1/#/index/recommend" class="ui-button">
                            <span>精选商品</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  Cart_list from './Cart_list'
    import  Cart_count from './Cart_count'
    import { mapState} from 'vuex'
    export default {
        components:{
            'Cart_list':Cart_list,
            'Cart_count':Cart_count
        },
        computed:{
            //解包vuex里面的state里面的数据
            //上面的页面可以直接用 这个页面拿这个数据做了循环
            ...mapState([
                'lists'
            ])
        },
        data() {
            return {
                header:false,
                bottom:false
            }
        },
        created(){
            this.$store.dispatch('getAllCarts')
        },

        watch:{
            lists:function(){
                //如果lists的长度等于0的时候就为假
                this.header = this.lists.length == 0 ?false:true;

                //如果lists的长度等于0的时候就为真
                this.bottom = this.lists.length == 0 ?true:false
            }
        },

    }
</script>