<template>
        <div class="footer">
            <ul>
                <router-link to="/" tag="li" exact>
                    <img src="../../img/home.png" style="width:30px">

                        <dl>
                            <dt>首页</dt>
                        </dl>

                </router-link>


                <router-link to="/about" tag="li" exact>

                        <img src="../../img/f.png" style="width:30px">

                        <dl>
                            <dt>分类</dt>
                        </dl>


                </router-link>

                <router-link to="/cart" tag="li" exact>
                    <img src="../../img/g.png" style="width: 30px">

                        <dl>
                            <dt>购物车</dt>
                        </dl>

                </router-link>


                <router-link to="/user" tag="li" exact>
                    <img src="../../img/h.png" style="width: 30px">

                        <dl>
                            <dt>服务</dt>
                        </dl>
                </router-link>

            </ul>
        </div>



</template>

<style lang="scss">
   .footer{
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        border: 1px solid #f4f3f3;
        z-index: 999;
        ul{
            width: 100%;
            display: flex;
            list-style: none;
        }
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            color: black;
            &.active{
                color: #f78b52;
            }
            img{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            dt{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 12px;
            }
        }
    }
</style>