<template>
    <div>
        <div class="cart-list">
            <ul>
                <li class="item" v-for="list in lists">
                    <div class="ui-box">
                        <div class="imgProduct"><a href="/1/#/product/view?product_id=1153200008"><img
                                :src="'http://images.canon4ever.com/'+list.product.image"></a></div>
                        <div class="info ui-box-flex">
                            <div class="name">
                                <span>{{list.product.name}}</span>
                            </div>
                            <div class="price">
                                <p>
                                    <span>售价：</span><span>{{list.product.price}}</span>
                                    <span>合计：</span><span>{{list.product.price*list.num}}</span>
                                </p>
                                <div class="tip">
                                    <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                                </div>
                            </div>
                            <div class="num">
                                <div class="xm-input-number">
                                    <div class="input-sub" @click="changenum({list:list,type:'dec'})"></div>
                                    <div class="input-num"><span>{{list.num}}</span></div>
                                    <div class="input-add active"  @click="changenum({list:list,type:'inc'})"></div>
                                </div>
                                <div class="delete">
                                    <a href="javascript:;">
                                        <span class="icon-iconfontshanchu" @click="handleDelete(list.id)"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="append"></div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
    import { mapState,mapActions } from 'vuex'
    export default {
        computed:{
            //解包vuex里面的state里面的数据
            ...mapState([
                'lists'
            ])
        },

        //页面未加载完成时 请求vuex里面的init方法
        //请求购物车列表的数据
        created(){
            this.$store.dispatch('getAllCarts')
        },

        methods:{
            ...mapActions([
                'changenum',
               'handleDelete'
            ]),
            // init(){
            //     this.axios.get(`http://localhost:8000/api/cart`).then(res=>{
            //         console.log(res);
            //         this.lists=res.data.carts;
            //     })
            // },
            // handleDelete(list){
            //     console.log(list.id);
            //     this.axios.delete(`api/cart?cart_id=${list.id}`).then(res=>{
            //         this.init();
            //     })
            // },
            // handleDec(list,type){
            //     this.axios.patch(`api/cart`,{cart_id:list,type:'dec'}).then(res=>{
            //         console.log(res);
            //         this.init();
            //     })
            // },
            // handleInc(list,type){
            //     this.axios.patch(`api/cart`,{cart_id:list,type:'inc'}).then(res=>{
            //         console.log(res);
            //         this.init();
            //     });
            // },

        }

    }
</script>
