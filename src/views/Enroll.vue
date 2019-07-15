<template>
    <div class="container">
        <div class="logo">
            <img src="../../img/mi-logo.png" alt="">
            <div class="explain">小米账号登录</div>
        </div>

        <div class="info">
            <input type="text" placeholder="请输入邮箱账号" v-model="ruleForm.username">
            <input type="password" placeholder="邮箱验证码" v-model="ruleForm.password">
        </div>

        <div class="top">
           <div class="one"><router-link to="/register">立即注册</router-link></div>
            <div class="two" @click="go()">登录</div>
        </div>

            <fieldset id="one">
                <legend id="two">其他方式登录</legend>
            </fieldset>

        <div class="bottom">
            <img src="../../img/w.png" alt="" width="10%" style="padding-right: 10px">
            <img src="../../img/z.png" alt="" width="10%">
        </div>

        <div id="footer">
          <ul>
              <li><a href="javascript:;">简体</a>|</li>
              <li><a href="javascript:;">繁体</a>|</li>
              <li><a href="javascript:;">English</a>|</li>
              <li><a href="javascript:;">常见问题</a>|</li>
              <li><a href="javascript:;">隐私政策</a></li>
          </ul>
        </div>


    </div>

</template>
<script>
    export default {
        data() {
            return {
                ruleForm:{}
            }
        },
        methods:{
            go(){
                //赋值五个参数 固定格式
                let data = {
                    grant_type: 'password',
                    client_id: 1,
                    client_secret: 'DI4TzBdeOQw6vRot5zHP3IrvSwEk8nBSgSNHpSzd',
                    username: this.ruleForm.username,
                    password: this.ruleForm.password
                };
                this.axios.post(`http://localhost:8000/oauth/token`,data).then(res=>{
                    console.log(res);
                    localStorage.access_token = res.data.access_token;
                    localStorage.token_type = res.data.token_type;
                    this.$router.replace({name:'home'})
                })
            }
        }
    }
</script>






<style lang="scss">
    .container{
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        min-height: 100%;
        height: auto;
        .logo{
            padding: 30px 0;
            img{
                background-color: #ff6700;
                width:12%;
                border-radius: 2px;
            }
            .explain{
                font-size:.35rem;
                padding-top: 5px;
                font-weight: normal;
            }
        }
        .info{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            input{
                width: 80%;
                padding: .16rem 0;
                height: .4rem;
                line-height: normal;
                display: block;
                font-size: .18rem;
                border: none;
                border-bottom: 1px solid #d3d3d3;
            }
        }
        .top{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
          .one{
              width: 80%;
              font-size: 14px;
              border: 1px solid #ff6700;
              background-color:#ff6700 ;
              border-radius: 6px;
              height: 35px;
              line-height: 35px;
              margin-top: 10px;
              a{
                  color: #FFFFFF;
              }
           }
            .two{
                width: 80%;
                font-size: 14px;
                border: 1px solid #d3d3d3;
                background-color:#fff ;
                border-radius: 6px;
                color: #000000;
                height: 35px;
                line-height:35px;
                margin-top: 10px;
            }
        }
        fieldset{
            border-top: 1px solid #f2f2f2;
            padding-top: 10px;
            margin-top: 40px;
            legend{
                opacity: .4;
            }
        }
        #footer{
            display: flex;
            width: 100%;
            margin-top: 105px;
            height: 100px;
            ul{
                width: 100%;
                list-style: none;
                display: flex;
                flex-direction: row;
                justify-content: center;
                a{
                    padding:0 5px;
                    font-size: .22rem;
                }
            }
        }
    }

</style>
