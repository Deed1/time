<template>
    <div class="container">
        <div class="logo">
            <img src="../../img/mi-logo.png" alt="">
            <div class="explain">小米账号注册</div>
        </div>

        <div class="info">
            <input type="email" placeholder="请输入邮箱账号" v-model="ruleForm.email">
            <span>{{errors.email}}</span>
            <input type="password" placeholder="请输入密码" v-model="ruleForm.password">
             <span>{{errors.password}}</span>
        </div>

        <div class="top">
            <div class="one" @click="checking()">立即注册</div>
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
                ruleForm:{
                    email:'',
                    password: ''
                },
                errors:{
                    email:'',
                    password: ''
                }
            }
        },
        methods:{
            checking(){
                // let data = {
                //     emali: this.ruleForm.emali,
                //     password: this.ruleForm.password
                // };
                this.axios.post('http://localhost:8000/api/register',this.ruleForm).then(res=>{
                    console.log(res);
                    alert('注册成功');
                    this.$router.replace({name:'enroll'})
                }).catch(error=>{
                    console.log(error);
                    this.errors.email = error.errors.email ?'请输入邮箱':'';
                    this.errors.password = error.errors.password ?'请输入密码':'';
                })
            }
        }
    }


</script>


<style lang="scss">
    .container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
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
            span{
                color: #00CC66;
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
                color: #FFFFFF;
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
        #footer{
            display: flex;
            width: 100%;
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