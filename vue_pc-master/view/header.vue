
<template>
    <div class="header" @keyup.13="search_product">
        <nav>
            <ul class="lang">
                <li>中国 &nbsp;|&nbsp;中文(元)</li>
                <li>精品店</li>
                <li>客户服务</li>
            </ul>
            <ul class="lgs">
                <li> <a  title="登录 / 注册" @click.prevent='toLogin' style="cursor:pointer">登录&nbsp;/&nbsp;注册</a></li>
                <li class="cart" @mouseenter="cart_show1">
                    <span><img src="../img/cart.png">购物袋</span>
                </li>
            </ul>
        </nav>
        <h1><img src="../img/h1_logo.png" alt=""> </h1>
        <div class="dh">
            <ul>
                <li @mouseenter="mi11" @mouseleave="mi12"><span>女士</span><i class="i1" v-show="i1"></i> 
                    <div class="item1" v-show="item1" @mouseleave="mi13">
                        <ul>
                            <li>
                                <span>新品系列</span>
                                <a href="">
                                    <img src="../img/nav1.png" alt="">
                                </a>
                                <a href="#">最新上市</a>
                                <a href="#">Versace Tribute Collection </a>
                                <a href="#">PALAZZO EMPIRE 手袋 </a>
                            </li>
                            <li>
                                <span>成衣系列</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>包袋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>女鞋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>包袋&配饰</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>系列</span>
                                <a href="#">
                                    <img src="../img/nav2.png" alt="">
                                </a>
                                <a href="#">秋冬系列时装秀</a>
                                <a href="#">春夏系列时装秀 </a>
                                <a href="#">PALAZZO EMPIRE系列运动鞋</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li @mouseenter="mi21" @mouseleave="mi22">男士 <i class="i2" v-show="i2"></i>
                    <div class="item1" v-show="item2"  @mouseleave="mi23">
                        <ul>
                            <li>
                                <span>新品系列</span>
                                <a href="">
                                    <img src="../img/nav3.png" alt="">
                                </a>
                                <a href="#">最新上市</a>
                                <a href="#">Versace Tribute Collection </a>
                                <a href="#">PALAZZO EMPIRE 手袋 </a>
                            </li>
                            <li>
                                <span>成衣系列</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>包袋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>女鞋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>包袋&配饰</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>系列</span>
                                <a href="">
                                    <img src="../img/nav4.png" alt="">
                                </a>
                                <a href="#">秋冬系列时装秀</a>
                                <a href="#">春夏系列时装秀 </a>
                                <a href="#">PALAZZO EMPIRE系列运动鞋</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li @mouseenter="mi31" @mouseleave="mi32">VERSACE HOME 家居精品<i class="i3" v-show="i3"></i>
                    <div class="item1" v-show="item3"  @mouseleave="mi33">
                        <ul>
                            <li>
                                <span>新品系列</span>
                                <a href="">
                                    <img src="../img/nav5.png" alt="">
                                </a>
                                <a href="#">最新上市</a>
                                <a href="#">Versace Tribute Collection </a>
                                <a href="#">PALAZZO EMPIRE 手袋 </a>
                            </li>
                            <li>
                                <span>成衣系列</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>包袋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                          
                            <li>
                                <span>系列</span>
                                <a href="">
                                    <img src="../img/nav1.png" alt="">
                                </a>
                                <a href="#">秋冬系列时装秀</a>
                                <a href="#">春夏系列时装秀 </a>
                                <a href="#">PALAZZO EMPIRE系列运动鞋</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li @mouseenter="mi41" @mouseleave="mi42">Versus<i class="i4" v-show="i4"></i>
                    <div class="item1" v-show="item4"  @mouseleave="mi43">
                        <ul>
                            <li>
                                <span>新品系列</span>
                                <a href="">
                                    <img src="../img/nav5.png" alt="">
                                </a>
                                <a href="#">最新上市</a>
                                <a href="#">Versace Tribute Collection </a>
                                <a href="#">PALAZZO EMPIRE 手袋 </a>
                            </li>
                            <li>
                                <span>成衣系列</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>包袋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>女鞋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                           
                            <li>
                                <span>系列</span>
                                <a href="">
                                    <img src="" alt="">
                                </a>
                                <a href="#">秋冬系列时装秀</a>
                                <a href="#">春夏系列时装秀 </a>
                                <a href="#">PALAZZO EMPIRE系列运动鞋</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li @mouseenter="mi51" @mouseleave="mi52">World of Versace<i class="i5" v-show="i5"></i>
                    <div class="item1" v-show="item5" @mouseleave="mi53">
                        <ul>
                            <li>
                                <span>新品系列</span>
                                <a href="">
                                    <img src="" alt="">
                                </a>
                                <a href="#">最新上市</a>
                                <a href="#">Versace Tribute Collection </a>
                                <a href="#">PALAZZO EMPIRE 手袋 </a>
                            </li>
                            <li>
                                <span>成衣系列</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>包袋</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                          
                            <li>
                                <span>包袋&配饰</span>
                                <a href="#">女士连衣裙</a>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">印花连衣裙</a>
                                <a href="#">运动衫</a>
                                <a href="#">针织衫</a>
                                <a href="#">半身裙</a>
                                <a href="#">T恤</a>
                            </li>
                            <li>
                                <span>系列</span>
                                <a href="">
                                    <img src="../img/nav3.png" alt="">
                                </a>
                                <a href="#">秋冬系列时装秀</a>
                                <a href="#">春夏系列时装秀 </a>
                                <a href="#">PALAZZO EMPIRE系列运动鞋</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
         <span class="search" @click="openSearch"><img src="../img/search.png" alt=""></span>
         <div class="search-box" v-show="search">
            <div>
                <img src="../img/x.png" alt="" @click="closeSearch">
                <div>
                    <h2>搜索</h2>
                    <input type="text" placeholder="搜索" v-model="kwords">
                    <img src="../img/search1.png" @click="search_product">
                </div>
            </div>
         </div>
          <div class="cart_bag" v-show="look_cart" @mouseleave="cart_show2">
            <div>
                <div class="goods_num">
                    <h1>商品已添加</h1>    
                </div>
                
                <div class="bag_box" v-for="(cart_item,i) in cart_list">
                    <img :src="cart_item.sm"/>
                    <div class="good_info">
                        <p class="goods_title" v-text="cart_item.pc_title"></p>
                        <p class="goods_color">颜色：<span v-text="cart_item.pc_color"></span></p>
                    </div>
                    <div class="goods_control">
                        <p @click="delete_goods(cart_item.iid,i)"><span>×</span></p>
                        <p>￥<span v-text="cart_item.pc_price"></span></p>
                    </div>                   
                </div>
                <div class="sj">
                    <span>小计</span>
                    <span>￥<i v-text="count_price"></i></span>
                </div>
                <a class="jz">结账</a>
                <router-link class="ck_cart" to="/cart">查看购物袋</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    
           
    export default{
        data:function(){
            return {look_cart:false,i1:false,i2:false,i3:false,i4:false,i5:false,item1:false,item2:false,item3:false,item4:false,item5:false,search:false,kwords:"",cart_list:['sm:{},pc_color:{},pc_title:{},pc_price:{},iid:{}'],count_price:0,}
        },
        methods:{
            toLogin(){
                this.$router.push("/login");
            },
            cart_show1(){
                this.look_cart=true;
            },
            cart_show2(){
                this.look_cart=false;
            },
            openSearch(){
                this.search=true;
            },
            closeSearch(){
                this.search=false;
            },
            mi11(){
                this.i1=true;
                this.item1=true;
            },
           
            mi21(){
                this.i2=true;
                this.item2=true;
            },
             mi31(){
                this.i3=true;
                this.item3=true;
            },
            mi41(){
                this.i4=true;
                this.item4=true;
            },
            mi51(){
                this.i5=true;
                this.item5=true;
            },
            mi12(){
                this.i1=false;
            },
            mi22(){
                this.i2=false;
            },
             mi32(){
                this.i3=false;
            },
            mi42(){
                this.i4=false;
            },
            mi52(){
                this.i5=false;
            },
            mi13(){
                this.item1=false;
            },
            mi23(){
                this.item2=false;
            },
            mi33(){
                this.item3=false;
            },
            mi43(){
                this.item4=false;
            },
            mi53(){
                this.item5=false;
            },
            search_product(){
                this.$router.push("/product/"+this.kwords);
                location.reload();
            },
            delete_goods(iid,i){
                this.cart_list.splice(i,1);              
                this.$http.get("http://127.0.0.1:3002/cart/update",{params:{iid:iid}}).then(res=>{  
                    this.cart_list=res.data;
                })
                location.reload();
            },
          
        },
        created(){
            var res=JSON.parse(localStorage.getItem("data"));
            var uid=res.user_datas;
            this.$http.get("http://127.0.0.1:3002/cart/items",{params:{uid:uid}}).then(res=>{  
                this.cart_list=res.data;
                console.log(res.data);
                for(var i=0;i<this.cart_list.length;i++){
                    this.count_price+=this.cart_list[i].pc_price;
                }
            }); 
        },
        mounted() {
        }
    }
    
</script>
<style>
    *{
        margin:0;
        padding:0;
       
        font-family: "微软雅黑";
        font-size:14px;
        color: #252525;
        line-height: 1.5;
        margin: 0;
        letter-spacing: .09em;
    }
    a{
        text-decoration:none;
        color:#000;
        font-weight:700;
    }
    ul{
        list-style:none;
    }
    .header{
        position: fixed;
        z-index: 999;
        top: 0!important;
        left: 0;
        width: 100%;
        height:173px;
        padding-top:15px;
        box-sizing:border-box;
        z-index:100;
        background:#fff;
        border-bottom:1px solid #f5f5f5;
        box-shadow:10px 4px 3px #f5f5f5;
    }
    .header>h1>img{
        margin-left:174px;
        display:block;    
    }
    nav ul li{
        float:left;
        padding: 0 5px;
        vertical-align: top;
        margin:0 5px;
        
    }
    nav ul.lang{
        margin-left:50px;
    }
    nav ul.lgs{
        float:right;
        margin-right:80px;
    }
    .cart>span>img{
        vertical-align:middle;
    }
    .header h1{
        display:flex;
        margin-top:25px;
        justify-content:center;
    }
    .dh{
        max-width: 1800px;
        padding-left: 30px;
        padding-right: 80px;
        display:flex;
        margin-top:25px;
        justify-content:center;
    }
    .dh img{
        width:200px;
        height:250px;
    }
    .dh{
        
    }
    .dh>ul>li{
        float:left;
        margin-right:30px;
        font-weight:500;
        padding-bottom:20px;
        cursor:pointer;
      
    }
    .dh ul li i{
        position:absolute;
        top:170px;
        border:0.5px solid #000;
    }
    .dh ul li .i1,.dh ul li .i2{
        display:block;
        width:30px;
    }
     .dh ul li .i3{
        display:block;
        width:190px;
    }
     .dh ul li .i4{
        display:block;
        width:52px;
    }
     .dh ul li .i5{
        display:block;
        width:140px;
    }
    .item1{
        width:100%;
        height:350px;
        position:absolute;
        top:173px;
        left:0;
        margin:0 auto;
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;
        padding: 40px 300px 50px;
    }
    .item1 ul li{
        float:left;
        margin-right:50px;
    }
    .item1 ul li a{
        display:block;
        font-weight:400;
    }
    span.search{
        float:right;
        margin-right:100px;
        margin-top:-46px;
    }
    .search-box{
        display: flex;
        flex-direction: column;
        position: fixed!important;
        z-index: 999;
        top: 0!important;
        left: 0!important;
        right: 0!important;
        bottom: 0!important;
        margin: 150px auto 0;
        /*display: none;*/
        background: #f5f5f5;
        overflow: auto;
        height: 100;
        line-height: 1.5;
        letter-spacing: normal;
    }
    .search-box>div>img{
        float:right;
        margin-right:100px;
        margin-top:100px;
    }
    .search-box>div>div{
        position: relative;
        width: 600px;
        clear: both;
        border: 0;
        text-align: center;
        margin:0 auto;
    }
    .search-box>div>div>h2{
        font-weight: 400;
        text-transform: uppercase;
        line-height: 1;
        letter-spacing: .09em;
        margin: 0;
        font-size: 1.31rem;
        font-weight: 700;
        display: inline-block;
        clear: right;
        margin-bottom: 30px;
        padding-top: 0;
        text-align: center;
        cursor:pointer;
    }
    .search-box>div>div>input{
        display: block;
        width: 600px;
        border: 0;
        border-bottom: 1px solid #242424;
        height: 39px;
        padding: 0 0;
        letter-spacing: normal;
        font-size: 1.08rem;
        background-color:#f5f5f5;
        margin:0 auto;
        outline:none;
        color:#000;
    }
    .search-box>div>div>img{
       position: absolute;
       right:0;
        padding: 7px 10px;
        border: 0;
        font-size: 20px;
        line-height: 1;
        color: inherit;
        float:right;
        margin-top:-41px;
    }
     .cart_bag{
        padding:22px;
        background-color:#f5f5f5;
        border:1px solid #fff;
        width:400px;
        position:fixed;
        top:70px;
        right:20px;
        z-index:200;
        text-align:center;
    }
    .goods_num{
        padding-top: 15px;
        padding-bottom: 35px;
        margin: 0 -22px;
        font-weight: 700;
        text-align:center;
    }
    .goods_num>h1{
        font-size: 18px;
    }
    .bag_box{
        position: relative;
        padding: 22px 0;
        border-top: 1px solid #dbdcdc;
        border-bottom: 1px solid #dbdcdc;
        overflow: hidden;
        display: flex;
        font-size: 1rem;
        line-height: 17px;
       
    }
    .bag_box>img{
        float: left;
        width: 60px;
        margin: 0 22px 0 0;
        height:84px;
    }
    .good_info{
        float:left;
        margin-right:170px;
    }
    .goods_control{
        float:right;
        position:relative;
        right:60px;
    }
    .goods_control>p:first-child{
        width:20px;
        height:20px;
        display:block;
        background:#fff;
        text-align:center;
        border-radius:50%;
        cursor:pointer;
    }
    .goods_control>p:last-child{
        top:40px;
        position:absolute;
    }
    .cart_bag .jz{
        display:block;
        width:85%;
        height:30px;
        border:1px solid #000;
        margin-bottom:10px;
        
    }
    .cart_bag .jz:hover{
        background:#000;
        color:#fff;
    }
    .ck_cart{
        text-decoration:underline;
        
    }
    .sj{
        text-align: center;
        margin: 0 -22px;
        padding: 22px;
        border-top: 1px solid #242424;
        overflow: hidden;
        font-size: 1rem;
    }
    .sj>span:first-child{
        float:left;
    }
    .sj>span:last-child{
        float:right;
        dispaly:inline-block;
        margin-right:20px;
    }
</style>