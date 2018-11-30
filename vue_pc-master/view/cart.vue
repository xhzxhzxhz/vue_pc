<template>
    <div class="my-cart">
        <div class="cart_title">
            <h1>您的购物袋</h1>
            <img src="../img/print.png" alt="">
        </div>

        <div class="cart_left">
            <table>
                <tbody>
                    <tr v-show="cart_item" style="text-align:center;font-size:20px"><td style="text-align:center;font-size:20px;font-weight:600">您的购物车空空如也</td></tr>
                    <tr v-for="(item,index) in goodlist">
                        <td><img :src="item.sm"></td>
                        <td class="cart_info">
                            <a href="#" v-text="item.pc_title"></a>
                            <p>产品：<span v-text="item.pc_bh" ></span></p>
                            <p>颜色：<span v-text="item.pc_color"></span></p>
                            <p>尺码：<span>38</span></p>
                            <div class="control">
                                <a href="#">编辑</a>
                                <a @click.prevent="delete_goods(item.iid,index)">删除</a>
                                <a href="#">移入心愿单</a>
                            </div>
                        </td>
                        <td style="cursor: pointer;">有货</td>
                        <td>¥<span v-text="item.pc_price"></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="double_btn">
            <router-link to="/index">继续浏览</router-link>
            <a href="#">安全结账</a>
        </div>
        <div class="cart_right">
            <h2>摘要</h2>
            <table>
                <tbody>
                    <tr>
                        <td>小计</td>
                        <td>¥<span v-text="count_price"></span></td>
                    </tr>
                    <tr>
                        <td>预计发货</td>
                        <td>¥0.00</td>
                    </tr>
                    <tr>
                        <td>估计的税额</td>
                        <td>¥0,00</td>
                    </tr>
                    <div class="hr"></div>
                    <tr>
                        <td>估计总额</td>
                        <td>¥<span v-text="count_price"></span></td>
                    </tr>
                </tbody>
            </table>
            <a href="#" class="jz">安全结账</a>
        </div>
        <div class="cart_help">
            <p>需要帮助？</p>
            <p>请通过电子邮件、电话 +86 4006888116或联系表单与我们的客服团队取得联系。</p>
            <p>每周一至周五上午 10:00 时至18:00 时（北京时间），我们的客服团队将竭诚为您服务。</p>
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){
            return {pid:this.$route.params.pid,
            goodlist:['sm:{},pc_color:{},pc_title:{},pc_price:{},iid:{},pcid:{}'],count_price:0,cart_item:true}
        },
        methods:{
            fn(){
                this.$http.get("http://127.0.0.1:3002/cart/add",{params:{pid:this.pid}}).then(res=>{           
                    this.cart_product=res.data;
                    //console.log(res.data);
                 })
            },
            delete_goods(iid,index){
                this.goodlist.splice(index,1);              
                this.$http.get("http://127.0.0.1:3002/cart/update",{params:{iid:iid,count:1}}).then(res=>{  
                    this.cart_list=res.data;
                })
                location.reload();
            },
            cart_show(){
                if(this.goodlist){
                    this.cart_item=false;
                }else{
                    this.cart_item=true;
                }
            }
        },
        created() {
            var res=JSON.parse(localStorage.getItem("data"));
            var uid=res.user_datas;
            this.$http.get("http://127.0.0.1:3002/cart/items",{params:{uid:uid}}).then(res=>{  
                this.goodlist=res.data;
                for(var i=0;i<this.goodlist.length;i++){
                    this.count_price+=this.goodlist[i].pc_price;
                }
            
            });
            this.cart_show(); 
        }
        
    }
</script>
<style>
.my-cart{
    width:1740px;
    margin:0 auto;
    margin-top:200px;
}
.cart_title>h1{
    font-size:20px;
    display:inline-block;
}
.cart_title>img{
    float:right;
}
.cart_left{
    margin-right:45px;
    width:1200px;
    border-top:1px solid #d2d2d2;
    border-bottom:1px solid #d2d2d2;
    padding:10px 0;
}
.cart_left img{
    width:110;
    height:165px;
    margin-right:20px;
}
.cart_left a{
    text-decoration:underline;
    line-height:3;
}
.control a{
    font-size:13px;
    margin-left:5px;
    display:inline-block;
    font-weight:normal;
    cursor:pointer;
}

.cart_info{
    margin-right:400px;
    display:block;
}
.cart_left tbody p{
    font-size:15px;
    font-weight:600;
}
.cart_left tbody p span{
    font-size:12px;
    font-weight:normal;
}
.cart_left tbody tr{
    border-bottom:1px solid #aaa;
}
.cart_left tbody tr td{
    vertical-align:top;
    cursor:pointer;
}
.cart_left tbody tr td:last-child{
    margin-left:200px;
    display:block;
    margin-top:-15px;
}
.cart_right{
    width:400px;
    height:264px;
    background-color: rgba(0,0,0,.85);
    padding:15px;
    float:right;
    /*position:relative;*/
    right:0;
}
.cart_right h2{
    font-size:17px;
    color:#fff;
}
.cart_right table {
   width:100%;
   padding-right:20px;
}
.cart_right table td{
    color: #fff;
    line-height:2;
}
.cart_right table td>span{
     color: #fff;
    line-height:2;
}
.cart_right>table>tbody>tr>td:last-child{
    text-align:right;
}
.hr{
    width:214%;
    border:1px solid #fff;
}
.jz{
    background-color: #fff;
    border-color: #fff;
    color: #515151;
    width:322px;
    text-align: center;
    font-weight: 700;
    display:block;
    padding: 11px 30px 9px;
    margin-top:20px;
}
.cart_help{
    width:432px;
    background:#ddd;
    margin-left:1310px;
    margin-top:20px;
    height:150px;
    padding:15px;
    box-sizing:border-box;
    clear:both;
}
.cart_help>p:first-child{
    font-size:17px;
    padding-top:0;
    font-weight:700;
}
.cart_help>p:not(first-child){
    font-size:14px;
}
.double_btn{
    position:relative;
    left:0;
    width:1200px;
}
.double_btn a{
    display:inline-block;
    border:1px solid #000;
    padding: 11px 30px;
    text-align:center;
    height:16px;
    width:80px;
    margin-top:20px;
}
.double_btn a:last-child{
    float:right;
}
.double_btn a:hover{
    background:#000;
    color:#fff;
}
</style>