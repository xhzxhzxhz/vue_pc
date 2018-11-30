<template>
    <div class="footer">
        <div class="footer-top">
            <div class="getNews">
                <h1>获取我们的最新资讯</h1>
                <form>
                    <label>
                        <span class="radio"></span>
                        <span>Versacea</span>
                    </label>
                     <label>
                        <span class="radio r1"></span>
                        <span>Versuses</span>
                    </label>
                </form>
                <div class="email">
                    <input type="text" placeholder="请输入电邮地址" v-model="email">
                    <span @click="checkEmail"><img src="../img/jt.png" alt=""></span>
                    <p v-show="ce">必填字段</p>
                </div>
                <div class="lxfs">
                    <img src="../img/wb.png" alt="">
                </div>
            </div> 
        </div>
         <div class="footer-bottom">
            <div class="bottom-top">
                <div class="sm">
                    <ul>
                        <li>
                            <span>店铺分布</span>
                            <a href="#">搜索精品店</a>
                            <a href="#">Versace腕表门店</a>
                            <a href="#">Versace腕表门店</a>
                            <a href="#">Versace Home商店</a>
                        </li>
                        <li>
                            <span>客户服务</span>
                            <a href="#">联系我们</a>
                            <a href="#">帮助/常见问题</a>
                            <a href="#">销售条款与细则</a>
                            <a href="#">订单及配送</a>
                            <a href="#">退货和退款</a>
                            <a href="#">产品验证</a>
                        </li>
                        <li>
                            <span>关于我们</span>
                            <a href="#">企业简介</a>
                            <a href="#">个人数据保护</a>
                            <a href="#">企业数据</a>
                            <a href="#">加入我们</a>
                        </li>
                        <li>
                            <span>细则及条款</span>
                            <a href="#">法律声明</a>
                            <a href="#">道德标准</a>
                            <a href="#">隐私政策</a>
                            <a href="#">Cookie政策</a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="bottom-bottom">
                <div>
                    <img src="../img/wwt.png" alt="">
                </div>
            </div>
         </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {email:"",ce:false }
        },
        methods:{
            checkEmail(){
              
                if(this.email==""){
                    this.ce=true
                }
            }
        }
    }
    
</script>
<style>
    .footer{
        width:100%;
        height:1337px;
        clear:both;
    }
    .footer-top{
        background: #fff;
        padding: 38px 0 20px;
        padding-top: 90px;
        padding-bottom: 72px;

    }
    .getNews{
      
        text-align:center;
    }
    .getNews>h1{
        font-size:25px!important;
    }
     .getNews>form{
        margin-top:50px;
     }
    .getNews>form>label{
        display:block;
        margin-top:15px;
      
    }
    .getNews>form>label>span.radio{
        display:inline-block;
        width:10px;
        height:10px;
        border:1px solid #000;
        border-radius:50%;
        margin-right:5px;
        background:#000;
    }
    .getNews>form>label>span.r1{
        background:#fff;
    }
    .email{
        margin-top:50px;
    }
    a:hover{
        color:#aaa;
    }
    .email>input{
        width:300px;
        min-width: auto;
        border: none;
        border-bottom: 1px solid #242424;
        text-align: center;
        font-size: .92rem;
        outline:none;
        color: #de6a54;
    }
    .email>p{
         color: #de6a54;
    }
    .email>span{
        margin-left:-12px;
        cursor:pointer;
    }
    .lxfs{
        margin-top:50px;
    }
    .footer-bottom{
        padding: 75px 0;
        background: #f5f5f5;
        height:688px;
    }
    .sm{
        width:1082px;
        margin:0 auto;
        padding-left:200px;
        padding-bottom:100px;
    }
    .sm ul li{
        float:left;
        margin-right:100px;
    }
    .sm ul li span{
        display:block;
        margin-bottom:50px;

    }
    .sm ul li a{
        display:block;
        font-weight:200;
        margin-bottom:10px;
        font-size:13px;
    }
    .bottom-bottom{
        clear:both;
        border-top:1px solid #aaa;
        padding-top:50px;
        text-align:center;
    }
</style>