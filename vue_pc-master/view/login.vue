<template>
    <div class="my-login">
        <div class="login-title">
            <h1>登录</h1>
            <span>您是否需要帮助？请通过联系表与我们的客户服务专员联系</span>
        </div>
        <div class="login-box">
            <div class="box-1">
                <div class="box_login">
                    <h1>老顾客</h1>
                    <p>如果您是我们的注册客户，请输入您的电子邮件及密码。</p>
                    <form>
                        <div class="emeil">
                            <p class="dd">电子邮件地址<span>*</span></p>
                            <input type="text" placeholder="请输入您的电子邮件地址" @focus="changeBorder9" v-bind:style="border9" @blur="checkEmail" v-model="email">
                            <p class="notice_info" v-show="is_email" v-text="text_email"></p>
                        </div>
                        <div class="pwd">
                            <p class="dd">密码<span>*</span></p>
                            <input type="password" placeholder="请输入您的密码" @focus="changeBorder10" v-bind:style="border10" @blur="checkPwd" v-model="pwd">
                            <p class="notice_info" v-show="is_pwd" v-text="text_pwd"></p>
                        </div>
                        <div class="remb">
                            <input type="checkbox"> 
                            <span>下一次记住我</span>
                        </div>
                        <div class="br">
                            <a href="#" class="login_btn" @click.stop="loginPass">登录</a>
                            <a href="#">忘记密码？</a>
                        </div>
                    </form>
                </div>
                <div class="box_register">
                    <h1>创建新账户</h1>
                    <p>注册 Versace 在线商城，悦享多重账户权益：</p>
                    <div>
                        <ul>
                            <li>最新动态和独家特惠</li>
                            <li>订单历史和地址簿</li>
                            <li>将商品保存至心愿单</li>
                        </ul>
                    </div>
                    <router-link to="/register" class="register_btn">创建新账户</router-link>
                    <span>隐私政策</span>
                </div>
            </div>
            <div class="box-2">
                <div class="box_order">
                    <h1>检查订单</h1>
                    <p>即使您不是注册用户，也可以跟踪您的订单。</p>
                    <form>
                        <div class="orderid">
                            <p class="dd">订单号<span>*</span></p>
                            <input type="text" placeholder="请输入您的订单号" @click="changeBorder11" v-bind:style="border11">
                            <p class="notice_info">请输入您的订单号</p>
                        </div>
                        <div class="emeil">
                            <p class="dd">电子邮件地址<span>*</span></p>
                            <input type="text" placeholder="请输入您的电子邮件地址" @click="changeBorder12" v-bind:style="border12">
                            <p class="notice_info">请输入您的电子邮件地址</p>
                        </div>
                        <div class="br">
                            <a href="#" class="login_btn">检查状态</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return { border9:"",border10:"",border11:"",border12:"",is_email:false,email:"",is_pwd:false,pwd:"",text_email:"",ok:false,text_pwd:""}
        },
        methods:{
            changeBorder9(){
                this.border9="outline: 1px solid #de6a54;"
            },
            changeBorder10(){
                this.border10="outline: 1px solid #de6a54;"
            },
            changeBorder11(){
                this.border11="outline: 1px solid #de6a54;"
            },
             changeBorder12(){
                this.border12="outline: 1px solid #de6a54;"
            },
            checkEmail(){
                var reg=/^[a-zA-Z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]+)+$/;
                if(this.email==""){
                    this.is_email=true;
                    this.text_email="请输入电子邮件地址";
                    this.ok=false;
                }else if(reg.test(this.email)==false){
                    this.is_email=true;
                    this.text_email="请输入正确的电子邮件地址";
                    this.ok=false;
                }
            },
            checkPwd(){
                if(this.pwd==""){
                    this.is_pwd=true;
                    this.text_pwd="请输入密码";
                    this.ok=false;
                }
                this.axios.post("http://127.0.0.1:3002/user/signin",Qs.stringify({upwd:this.pwd,email:this.email})).then(res=>{
                    if(res.data.ok==0){
                        this.is_pwd=true;
                        this.text_pwd="邮件地址与密码不匹配";
                        this.ok=false;
                    }else{
                        this.is_pwd=false;
                        this.ok=true;
                        //this.$store.commit('SET_baseinfo',res.data);
                        var uid=res.data.uid;
                        this.$store.commit('SET_baseinfo',uid);
                        this.$router.push('/');
                    }
                })
               
            },
            loginPass(){ 
                if(this.ok==true){
                  this.$router.push("/index");
                }  
            },
            outlogin(){
                this.$store.commit('CLEAR_baseinfo');
            },
            log_off(){
                var log=confirm('是否确认退出登录');
                if(log===true){
                    this.outlogin();
                }
            }
        },
        mounted() {
        },
    }
    
</script>

<style>
    .my-login{
        width:1740px;
        height:880px;
        margin:0 auto;
        margin-top:200px;
    }
    .login-title{
        margin-bottom:10px;
    }
    .login-title h1{
        float:left;
        font-size:20px;
    }
    .login-title span{
        float:right;
        margin-right:50px;
        display:inlie-block;
    }
    .login-box{
        margin:50px 0;
    }
    .box-1{
        height:410px;
        clear:both;

    }
    .box_login,.box_register{
        width:840px;
        height:100%;
        border: 1px solid #d2d2d2;
        box-sizing:border-box;
        padding:50px;
        float:left;
        margin-right:20px;
    }
    .box_order{
        width:840px;
        height:410px;
        border: 1px solid #d2d2d2;
        box-sizing:border-box;
        padding:50px;
        margin-top:20px;
    }
    .box_login>h1,.box_login>p,.box_register>h1,.box_order>h1{
        line-height:4;
    }
    .box_login>p,.box_register>p,.box_order>p{
        line-height:2;
    }
    form p.dd{
        font-weight:600;
    }
    form p.dd>span,.notice_info{
        color: #de6a54;
    }
    form input{
        width: 300px;
        max-width: 100%;
        border-color: #de6a54;
        /*outline: 1px solid #de6a54;*/
        color: #de6a54;
        height: 34px;
        border: 1px solid #d2d2d2;
        background-color: transparent;
        padding: 3px 8px;
        outline:none;
    }
    form>div{
        margin-bottom:10px;
    }
    form input[type=checkbox]{
        display:inline-block;
        height:15px;
        width:15px;
        outline:none;
        border:1px solid #000;
        background:transparent;
        margin-right:5px;
    }
    .login_btn,.register_btn{
        display: inline-block;
        position: relative;
        padding: 11px 30px 9px;
        border: 1px solid #242424;
        text-align: center;
        font-weight: 700;
        line-height: 1;
        margin-right:20px;
    }
    .login_btn:hover,.register_btn:hover{
        color:#fff;
        background:#000;
    }
    .br a:last-child,.box_register span{
        font-size:13px;
        font-weight:normal;
        text-decoration:underline;
    }
    .box_register>div{
        margin-top:10px;
        margin-bottom:10px;
    }
    .box_register ul{
        list-style:initial!important;
        padding:5px 30px;
    }
</style>