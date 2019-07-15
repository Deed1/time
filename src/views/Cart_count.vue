<template>
    <div>
        <div class="bottom-submit ui-box">
            <div class="price"><span>共{{num.num}}件 金额：</span><br><strong>{{num.price}}</strong><span>元</span></div>
            <div class="btn"><router-link to="/about"><a class="ui-button ui-button-disable"
                                                         href="/1/#/product/category"><span>继续购物</span></a></router-link></div>
            <div class="btn"><a class="ui-button" @click="handlego()"><span>去结算</span></a></div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {

        computed:{
            ...mapState([
                'lists'
            ]),
            num:function () {
                var num = 0;
                var price = 0;
                this.lists.map(res=>{
                     price += res.num * res.product.price;
                });
                this.lists.map(res=>{
                     num += res.num;
                });
                return {price:price,num:num}
            }
        },
        methods:{
            handlego(){
                this.$router.push({name:'checkout'})
            },
        }

    }
</script>