<template>
    <div class="my-shop">
        <div class="title">
            <span>首页 > 男士 > 男鞋 > 休闲运动鞋</span>
        </div>
        <div class="section-top">
            <div class="section">
                <div class="section-left">
                    <div class="middle-list">
                        <div v-for="(pic,index) in pic_list" @click="bigImg(index)"><img :src="pic.sm"></div>
                    </div>
                    <div class="big-list">
                        <span class="prev" @click="prev"><img src="../img/prev.png"></span>
                        <div class="big-tp">
                            <div>
                                <img :src="pic_list[num].sm">
                            </div>
                        </div>
                        <span class="jxl" @click="next"><img src="../img/next.png"></span>
                    </div>
                </div>
                <div class="section-right">
                    <h1 v-text="info[0].ps_title"></h1>
                    <p class="price" v-text="info[0].ps_price"></p>
                    <p class="color">颜色：<span>金</span></p>
                    <span>尺码：</span>
                    <ul class="size">
                        <li v-for="(size,index) in product_size" @click='selectSize(index)' class="size_children">
                           <span v-text="size" class="size_children_span"></span>
                        </li>
                    </ul>
                    <!--<router-link :to="'/cart/'+info[0].pid" class="jr_cart" :key="info[0].pid">加入购物袋</router-link>-->
                    <a href="#" class="jr_cart" @click.prevent="addCart">加入购物袋</a>
                    <a href="#" class="wish_list">♡加入心愿单</a>
                    <div class="info">
                        <p> 此款 Chain Reaction 运动鞋体现了强烈的 Versace 特征元素。折中主义细节打造出独一无二的鞋履，采用超轻材质、链条样式橡胶鞋底，鞋底灵感来自 Versace 经典链式珠宝。此款最新式 Versace 运动鞋采用的标志性元素包括经典的希腊回纹图案、“Chain Reaction”logo 贴饰和布莱叶 “love”字母，表达“爱是盲目的”概念。</p>
                    </div>
                    <div class="we">
                        <img src="../img/chat.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="section-bottom">
            <h1>最近查看</h1>
            <div class="near_look">
                <div class="look_list">
                    <a href="#"><img src="../img/b1.png" alt=""></a>
                    <div class="near_info">
                        <a href="#">Barocco印花Hercules运动鞋</a>
                        <p>¥6,500.00</p>
                    </div>
                </div>
                <div class="look_list">
                    <a href="#"><img src="../img/b1.png" alt=""></a>
                    <div class="near_info">
                        <a href="#">Barocco印花Hercules运动鞋</a>
                        <p>¥6,500.00</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){
            return {pid:this.$route.params.pid,pic_list:['sm:{}'],info:['pid:{},ps_price:{},ps_title:{},ps_size:{}'],product_size:[],
                showBigImg:false, num:0,cart_num:[]}
        },
        methods:{
            selectSize(index){
                var sizes=document.getElementsByClassName('size_children');
                var s= sizes[index];
                console.log(s);
                s.setAttribute("style","background:black");
                var spans=document.getElementsByClassName('size_children_span');
                var span=spans[index];
                span.setAttribute("style","color:#fff");
            },
            fn(){
                this.$http.get("http://127.0.0.1:3002/details/",{params:{pid:this.pid}}).then(res=>{  
                    this.pic_list=res.data.pics;
                    this.info=res.data.product;
                    this.product_size=res.data.product[0].ps_size.split(",");
                })
            },
            bigImg(index){
                this.showBigImg = true;
                this.num = index;
            },
            prev(){
                if(this.num==0){
                    this.num =this.pic_list.length;
                }
                this.num--;
                console.log(this.num)
            },
            next(){
                if(this.num==this.pic_list.length){
                    this.num=-1;
                }
                this.num++;
            },
            addCart(){
                var res=JSON.parse(localStorage.getItem("data"));
                var uid=res.user_datas;
                if(uid!==""){
                    this.$http.get("http://127.0.0.1:3002/cart/add",{params:{pid:this.pid,uid:uid}}).then(res=>{ 
                        this.cart_num.push(this.info[0].pid);   
                    })
                }
                location.reload();
            },
        },
        created() {
            this.fn();
        }
        
    }
    
</script>
<style>
    .my-shop{
        height:1500px;
        width:1740px;
        margin-top:200px;
        padding-left:100px;
    }
    .title{
        margin-bottom:20px;
    }
    .section{
        height:774px;
        width:100%;
    }
    .section-left{
        height:100%;
        width:1200px;
        float:left;
    }
    .middle-list{
        width:140px;
        height:100%;
        float:left;
        overflow:hidden;
    }
    .middle-list div{
        position: relative;
        overflow: hidden;
        padding: 0;
        border: 2px solid transparent;
        text-align: center;
        cursor: pointer;
        height:25%;
        width:auto!important;
        border:1px solid #aaa;
        margin-bottom:2px;
    }
    .middle-list img{
        height:100%;
        width:100%;
    }
    .big-list{
        width:1050px;
        height:100%;
        float:left;
        position:relative;
    }
    .prev{
        position:absolute;
        top:50%;
        left:15px;
    }
    .jxl{
        position:absolute;
        top:50%;
        right:15px;
    }
    .big-tp{
        width:530px;
        height:750px;  
        margin:0 auto;
          
    }
    .big-tp img{
        width:530px;
        height:750px;  
    }
    .section-right{
        float:right;
        margin-right:50px;
        width:450px;
    }
    .info{
        width:460px;
    }
    .section-right h1{
        font-size:25px;
        font-weight:600;
        font-family:"simhei"!important;
        margin-bottom:10px;
    }
    .section-right p.price{
        font-family:"Gillsans"!important;
        line-height:4;
    }
    .section-right p.color{
        font-weight:600;
    }
    .section-right>span{
        font-weight:600;
        line-height:4;
    }
    .size{
        margin-bottom:90px;
        display:block;
    }
    .size>li{
        float:left;
        display: block;
        height: 100%;
        margin: 0 2px 8px;
        border: 1px solid #515151;
        min-width: 31px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        cursor: pointer;
    }
    .jr_cart,.wish_list{
        background: transparent;
        border: 1px solid #242424;
        color: #242424;
        display:block;
        width: 100%;
        margin: 20px 0 20px;
        text-align: center;
        font-weight: 700;
        line-height: 1;
        cursor: pointer;
        padding:15px 0;
        clear:both;
        font-size:20px;
        font-family:"simhei";
        transition:all 0.3s linear;
        
    }
    .jr_cart:hover,.wish_list:hover{
        color:#fff;
        background:#000;
    }
    .we{
        margin-top:30px;
    }
    .section-bottom{
        display: block;
        background: #515151;
        height:650px;
        margin:50px 0;
        text-align:center;
        box-sizing:border-box;
        padding:20px 50px;
    }
    .section-bottom>h1{
        color:#ededed;
        font-size:20px;
    }
    .near_look{
        float: right;
        width: 100%;
        margin: 30px 0 50px -100%;
        overflow: hidden;
        max-width: 1740px;
    }
    .look_list {
         width:390px;
        height:500px;
        background:#f5f5f5;
        float:left;
        margin-right:20px;
    }
    .look_list img{
        width:390px;
        height:410px;
    }
    .look_list .near_info{
        border-top:1px solid #aaa;
        padding:10px 0 10px;
    }
   
</style>