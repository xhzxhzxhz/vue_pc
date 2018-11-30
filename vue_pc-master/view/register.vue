<template>
    <div class="my-register">
        <div class="register-title">
            <h1>注册</h1>
            <span>您是否需要帮助？请通过联系表与我们的客户服务专员联系</span>
        </div>
        <div class="rigister-box">
            
            <div class="box-left">
                <form> 
                    <div class="reg_input">
                        <p class="dd">称谓<span>*</span></p>
                        <select @focus="changeBorder1" v-bind:style="border1" @blur="checkCw" v-model="cw">
                            <option value="0">请选择</option>
                            <option value="mr">先生</option>
                            <option value="mrs">夫人</option>
                            <option value="ms">女士</option>
                        </select>
                        <p class="notice_info" v-show="is_cw">请输入称谓</p>
                    </div>
                    <div class="reg_input">
                        <p class="dd">姓氏<span>*</span></p>
                        <input type="text" placeholder="请输入您的姓氏" @focus="changeBorder2" v-bind:style="border2" @blur="checkXs" v-model="xs">
                        <p class="notice_info" v-show="is_Xs">请输入您的姓氏</p>
                    </div>
                    <div class="reg_input">
                        <p class="dd">名字<span>*</span></p>
                        <input type="text" placeholder="请输入您的名字" @focus="changeBorder3" v-bind:style="border3" @blur="checkMz" v-model="mz">
                        <p class="notice_info" v-show="is_mz">请输入您的名字</p>
                    </div>
                    <div class="reg_input">
                        <p class="dd">电子邮件<span>*</span></p>
                        <input type="text" placeholder="请输入电子邮件地址" @focus="changeBorder4" v-bind:style="border4" @blur="checkEmail" v-model="email">
                        <p class="notice_info" v-show="is_email" v-text="text_email"></p>
                    </div>
                    <div class="reg_input">
                        <p class="dd">确认电子邮件地址<span>*</span></p>
                        <input type="text" placeholder="请再次输入电子邮件地址" @focus="changeBorder5" v-bind:style="border5" @blur="checkCemail" v-model="cemail">
                        <p class="notice_info" v-show="is_cemail" v-text="text_cemail"></p>
                    </div>
                    <div class="reg_input">
                        <p class="dd">密码<span>*</span></p>
                        <input type="password" placeholder="请输入新密码" @focus="changeBorder6" v-bind:style="border6" @blur="checkPwd" v-model="pwd">
                        <p class="notice_info" v-show="is_pwd" v-text="text_pwd"></p>
                    </div>
                    <div class="reg_input">
                        <p class="dd">确认密码<span>*</span></p>
                        <input type="password" placeholder="请再次输入新密码" @focus="changeBorder7" v-bind:style="border7" @blur="checkCpwd" v-model="cpwd">
                        <p class="notice_info" v-show="is_cpwd" v-text="text_cpwd"></p>
                    </div>
                    <div class="reg_input">
                        <p class="dd">电话号码<span>*</span></p>
                        <input type="text" placeholder="请输入您的电话号码" @focus="changeBorder8" v-bind:style="border8" @blur="checkPhone" v-model="phone">
                        <p class="notice_info" v-show="is_phone" v-text="text_phone"></p>
                    </div>
                    <div class="reg_input">
                        <input type="checkbox"> 
                        <span>
阅读信息公告后，我同意通过自动和传统的宣传方式获取促销活动信息（目录邮寄广告、活动邀请、以及有关全新系列、直销、市场研究的信息）；</span>
                    </div>
                    <div class="reg_input">
                        <a href="#" class="login_btn" @click.stop="registerPass">注册</a>
                    </div>
                </form>
            </div>
            <div class="box-right">
                <img src="../img/register.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return { border1:"",border2:"",border3:"",border4:"",border5:"",border6:"",border7:"",border8:"",cw:"",is_cw:false,xs:"",is_Xs:false,email:"",is_email:false,mz:"",is_mz:false,cemail:"",is_cemail:false,pwd:"",is_pwd:false,cpwd:"",is_cpwd:false,phone:"",is_phone:false,text_email:"",text_cemail:"",text_pwd:"",text_cpwd:"",text_phone:"",ok:false}
        },
        methods:{
            changeBorder1(){
                this.border1="outline: 1px solid #de6a54;"
            },
            changeBorder2(){
                this.border2="outline: 1px solid #de6a54;"
            },
            changeBorder3(){
                this.border3="outline: 1px solid #de6a54;"
            },
            changeBorder4(){
                this.border4="outline: 1px solid #de6a54;"
            },
            changeBorder5(){
                this.border5="outline: 1px solid #de6a54;"
            },
            changeBorder6(){
                this.border6="outline: 1px solid #de6a54;"
            },
            changeBorder7(){
                this.border7="outline: 1px solid #de6a54;"
            },
             changeBorder8(){
                this.border8="outline: 1px solid #de6a54;"
            },
            checkCw(){
                if(this.cw==""){
                    this.is_cw=true;
                    this.ok=false;
                }else{
                     this.is_cw=false;
                     this.ok=true;
                }
            },
            checkXs(){
                if(this.xs==""){
                    this.is_Xs=true;
                    this.ok=false;
                }else{
                    this.is_Xs=false;
                    this.ok=true;
                }
            },
            checkMz(){
                if(this.mz==""){
                    this.is_mz=true;
                    this.ok=false;
                }else{
                    this.is_mz=false;
                    this.ok=true;
                }
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
                else{
                    this.is_email=false;
                    this.ok=true;
                }
                this.axios.get("http://127.0.0.1:3002/user/checkEmail",{params:{email:this.email}}).then(res=>{ 
                    if(res.data==1){
                        this.is_email=true;
                        this.text_email="该邮箱已被注册";
                        this.ok=false;
                    }   
                })
            },
            checkCemail(){
                if(this.cemail==""){
                    this.is_cemail=true;
                    this.text_cemail="请确认电子邮件地址";
                    this.ok=false;
                }else if(this.cemail!=this.email){
                    this.is_cemail=true;
                    this.text_cemail="电子邮件不匹配";
                    this.ok=false;
                }else{
                    this.is_cemail=false;
                    this.ok=true;
                }
            },
            checkPwd(){
                var reg=/^\w{8,}$/
                if(this.pwd==""){
                    this.is_pwd=true;
                    this.text_pwd="请输入密码";
                    this.ok=false;
                }else if(reg.test(this.pwd)==false){
                    this.is_pwd=true;
                    this.text_pwd="密码必须是8个字符或更多";
                    this.ok=false;
                }
                else{
                    this.is_pwd=false;
                    this.ok=true;
                }
            },
            checkCpwd(){
                if(this.cpwd==""){
                    this.is_cpwd=true;
                    this.text_cpwd="请确认密码";
                    this.ok=false;
                }else if(this.cpwd!=this.pwd){
                    this.is_cpwd=true;
                    this.text_cpwd="密码不一致，请输入相同的密码";
                    this.ok=false;
                }
                else{
                    this.is_cpwd=false;
                    this.ok=true;
                }
            },
            checkPhone(){
                var reg=/^\d{11}$/;
                if(this.phone==""){
                    this.is_phone=true;
                    this.text_phone="请输入电话号码";
                    this.ok=false;
                }else if(reg.test(this.phone)==false){
                    this.is_phone=true;
                    this.text_phone="请输入有效的电话号码";
                    this.ok=false;
                }
                this.axios.get("http://127.0.0.1:3002/user/checkPhone",{params:{phone:this.phone}}).then(res=>{
                    console.log(res.data);   
                    if(res.data==1){
                        this.is_phone=true;
                        this.text_phone="该手机号已注册";
                        this.ok=false;
                    } else{
                        this.is_phone=false;
                        this.ok=true;
                    }
                })
            },
            
            registerPass(){
                if(this.ok==true){
                     this.axios.post("http://127.0.0.1:3002/user/register",Qs.stringify({phone:this.phone,uname:this.mz,upwd:this.pwd,email:this.email})).then(res=>{
                       this.$router.push("/login");
                    })
                }
                   
            }
        }
    }
    
</script>
<style>
    .my-register{
        width:1740px;
        height:971px;
        margin:0 auto;
        margin-top:200px;
    }
    .register-title{
       
    }
    .register-title h1{
        float:left;
        font-size:20px;
    }
    .register-title span{
        float:right;
        margin-right:50px;
        display:inlie-block;
    }
    .rigister-box{
        clear:both;
        padding-top:50px;
    }
    .box-left{
        float:left;
        width:850px;
        height:100%;
    }
    .box-right{
        float:right;
        margin-right:50px;
    }
    .reg_input{
        margin-bottom:20px;
    }
    .reg_input input,.reg_input select{
        width: 430px;
        border-color: #de6a54;
        /*outline: 1px solid #de6a54;*/
        color: #de6a54;
        height: 25px;
        border: 1px solid #d2d2d2;
        padding: 6px 10px;
        outline:none;
    }
    .reg_input select>option{
        color: #de6a54;
    }
    .reg_input select{
        width:450px;
        height: 35px;
    }
</style>