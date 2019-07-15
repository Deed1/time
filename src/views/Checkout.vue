<template>
    <div class="wrap">

        <div class="page-order-checkout">
            <div class="page-order-checkout-wrap" >
                <div class="b1 icon_arrow" v-show="lists!=null">
                    <a @click="go">
                        <div class="b11"><p><span>{{lists.name}}</span><span>{{lists.tel}}</span></p></div>
                        <div class="b13"><p>{{lists.province+lists.city+lists.area+lists.detail}}</p></div>
                    </a>
                </div>

                <div class="b1 icon_arrow" v-show="lists==null">
                    <router-link :to="{name:'go_address'}">
                        <div class="b11"><p>没有收货地址</p></div>
                        <div class="b13"><p style="color: red;">亲，请先填写一个收货地址~</p></div>
                    </router-link>
                </div>


                <div class="ui_line"></div>
                <div class="b2">
                    <ul>
                        <li class="on"><a href="javascript:;" class="alipaywap">微信支付</a></li>
                        <li class=""><a href="javascript:;" class="">货到付款</a></li>
                    </ul>
                </div>
                <div class="ui_line"></div>

                <div class="b3 icon_arrow">
                    <dl>
                        <dt><span>电子发票</span><strong>发票类型</strong></dt>
                    </dl>
                </div>
                <div class="b3 icon_arrow">
                    <dl>
                        <dt><span>不限送货时间</span><strong>送货时间</strong></dt>
                    </dl>
                </div>
                <div class="ui_line"></div>

                <div class="b8">
                    <div class="b8w"  v-for="item in items">
                        <div class="b81">
                            <div class="img"><img :src="'http://images.canon4ever.com/'+item.product.image">
                            </div>
                        </div>
                        <div class="b82">
                            <div class="name"><p>
                                <span>{{item.product.name}}</span></p></div>
                        </div>
                        <div class="b83">
                            <div class="price"><strong>{{item.product.price}}</strong></div>
                        </div>
                    </div>
                   <!--v-repeat-cart.list--></div>
                <div class="ui_line"></div>
                <div class="b5">
                    <div class="b51"><p><strong>商品价格：</strong><span>{{val.total_price}}元</span></p></div>
                    <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
                </div>
                <div class="b7">
                    <div class="b71"><span>共{{val.num}}件 合计: </span><strong>{{val.total_price}}</strong></div>
                    <div class="b72"><a href="javascript:;" class="ui-button"><span>去付款</span></a></div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                lists:{},
                items:{},
                val:{}
            }
        },
        created(){
            this.axios.get(`api/order/checkout`).then(res=>{
                this.lists=res.data.address;
                this.items=res.data.carts;
                this.val=res.data.count;
                console.log(res);
            })
        },
        methods:{
            go(){
                this.$router.push({name:'address_list'})
            }
        }
    }



</script>