<template>
    <div class="my-product">
        <div class="shop-nav">
            <p>首页 > 女士 > 成衣系列 >女士连衣裙 （找到25个结果）</p>
        </div>
        <div class="shop-title">
            <h1>女士连衣裙</h1>
            <p>靓丽盛装。适合任何场合的完美连衣裙静待您的探索。超长连衣裙、不对称连衣裙、迷你连衣裙、鸡尾酒会连衣裙或晚礼服，从真丝到卡迪面料，材质广泛，印花丰富，更有刺绣或缀饰，凸显身材，美化体型。</p>
        </div>
        <div class="lx_select">
            <div class="lb_select">
                <span>类别：</span>
                <span>女士连衣裙<b @click="lb_show">﹀</b></span>
                <div class="lb_content cc" v-show="lb_content">
                    <ul>
                        <li>女士连衣裙</li>
                        <li>印花连体服</li>
                        <li>T恤</li>
                        <li>运动衫</li>
                        <li>针织衫</li>
                    </ul>
                </div>
            </div>
            <div class="color_select">
                <span>筛选：</span>
                <span>颜色<b @click="color_show">﹀</b></span>
                <div class="color_content cc" v-show="color_content">
                    <ul>
                        <li>黑色</li>
                        <li>粉</li>
                        <li>金</li>
                        <li>印花</li>
                        <li>中性</li>
                    </ul>
                </div>
            </div>
            <div class="order_select">
                <span>排序：</span>
                <span>推荐产品<b @click="order_show">﹀</b></span>
                <div class="order_content cc" v-show="order_content">
                    <ul>
                        <li>新品上市</li>
                        <li>推荐产品</li>
                        <li>从高到低</li>
                        <li>从低到高</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="close_containt" @scroll="handleScroll()">
            <div class="close_list">
                <ul>
                    <li v-for="item in product_list" :key="item.pid">
                        <div>
                            <router-link class="sm" :to="'/shop/'+item.pid">
                                <img :src="item.pic1">
                                <img :src="item.pic2">
                            </router-link>
                            <router-link :to="'/shop/'+item.pid" class="fast_look"><span>+</span></router-link>
                            <div class="close_info">
                                <a href="#" v-text="item.title"></a>
                                <a href="#" v-text="item.price"></a>  
                            </div>
                        </div>
                    </li>
          
                </ul>
            </div>
            <div  class="show_more">
                <p href="#" @click="getMore" v-text="show_more">点击加载更多</p>
            </div>
           
            <p v-show="product_list.length===0" style="display:none" class="none-jl">对不起，你查询的商品暂无记录</p>
        </div>
    </div> 
</template>

<script>
    export default {
        data:function(){
            return {lb_content:false,color_content:false,order_content:false,pno:0,     
                kwords:this.$route.params.kwords,   
                product_list:[],//商品列表
                pageIndex:0,   //属性显示当前页数
                pageSize:0,    //页大小
                hasMore:true,  //是否存在下一页数据
                pageCount:0,   //总页数
                show_more:""
            }
        },
        methods:{
            lb_show(){
                this.lb_content=!this.lb_content;
            },
            color_show(){
                this.color_content=!this.color_content;
            },
            order_show(){
                this.order_content=!this.order_content;
            },
                 //加载更多
            getMore(){
               
                this.axios.get("http://127.0.0.1:3002/products/",{params:{kwords:this.kwords,pno:this.pageIndex      
                }}).then( (res) => {
                    var rows = this.product_list.concat(res.data.products);
                    this.product_list= rows;
                    this.pageCount = res.data.pageCount;   
                     this.pageIndex++;
                    //判断是否有下一页的数据
                    this.hasMore = this.pageIndex <= this.pageCount;
                     this.show_more="点击加载更多"
                    //如果没有下一页数据，停止函数执行
                    if(!this.hasMore){
                        this.show_more="没有更多了"
                        return
                    }
                });
             
            }
           
        },
        created(){
            this.getMore();
        }, 

    }
</script>
<style>
    .my-product{
        width:1740px;
        margin:0 auto;
        margin-top:200px;
    }
    .shop-title{
        text-align:center;
    }
   .shop-title h1{
       font-size:20px;
   }
   .lx_select{
       margin-top:20px;
       position:relative;
       z-index:20;
   }
   .lb_select{
      position:absolute;
      left:0;
   }
   .color_select{
      right:830px;
      position:absolute;
    }
    .order_select{
       right:0;
       position:absolute;
    }
    .cc>ul{
    padding: 15px 10px;
    font-size: 0;
    letter-spacing: 0;
    background: rgba(0,0,0,.85);
    }
    .cc>ul>li{
        color:#fff;
        line-height:2;
    }
    .lx_select b{
        display:inline-block;
        height:15px;
        width:15px;
        border:1px solid #aaa;
        border-radius:50%;
        background:#aaa;
        color:#fff;
        cursor:pointer;
    }
     .close_containt{
        position:relative;
        margin-top:80px;
        width:1740px;
        margin-bottom:200px;
        
    }
    .close_list>ul>li{
        height:666px;
        float:left;
        width:25%;
        position:relative;
    }
    .fast_look{
        display:block;
        height:23px;
        width:23px;
        background-color:gray;
        color:#000;
        border-radius:50%;
        padding:5px 5px 5px 5px;
        box-sizing:border-box;
        position:absolute;
        top:12px;
        right:50px;
        z-index:15;

    }
     .fast_look:hover{
        background:#aaa;
     }
    .fast_look>span{
        font-size:22px;
        margin:-11px 0 11px -4px ;
        display:block;
        color:#fff;
        padding:1px;
    }
    .close_info{
        clear:both;
        margin-top:550px;
    }
    .close_info>a{
        display:block;
        margin-left:0;
        font-size:15px;
        color:#000;
        font-family:"Simhei";
        font-weight:normal;
        line-height:2;
    }
    a:hover{
        color:#aaa;
    }
    .sm{
        position:relative;
    }
    .sm>img{
        position:absolute;
        top:0;
        left:0;
        width:400px;
        height:516px;
    }
    .sm>img:first-child{
        z-index:10;
    }
    .sm>img:last-child{
        z-index:5;
    }
    .sm:hover>img:first-child{
        z-index:1;  
    }
    .none-jl{
        text-align:center;
        font-size:20px;
        font-weight:700px;
        line-height:8;
    }
    .show_more{
        clear:both;
        text-align:center;
       
    }
    .show_more>p{
        font-size:18px;
        font-weight:700px;
        line-height:8;
        text-decoration:underline;
        cursor:pointer;
    }
</style>