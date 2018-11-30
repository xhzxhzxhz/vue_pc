<template>
    <div class="my-index">
        <div class="tp1">
            <img src="../img/index1.jpg" alt="">
        </div>
        <div class="container1">
            <div class="container1-box">
                <h1>格子图案大家庭</h1>
                <p>这是个为追求平等、多元和包容价值观而走到一起的大家庭。<br>他们共同全力支持这些价值观。</p>
                <p>探秘新品</p>
                <div>
                    <a href="#">女装</a>
                    <a href="#">男装</a>
                </div>
            </div>
        </div>
        <div class="container2">
            <h3>新品</h3>
            <h1>来自秀场</h1>
        </div>
        <div class="container3">
            <div class="container3-box">
                <div class="swiper" v-bind:style="currentUl">
                    <div class="sp s1" >
                        <div>
                            <a href="#">女士</a>
                            <div>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">牛仔裤</a>
                            </div>
                        </div>
                        <a href="#"><img src="../img/s1.png" alt=""></a>
                    </div>
                    <div class="sp s2">
                        <div>
                            <a href="#">男士</a>
                            <div>
                                <a href="#">夹克</a>
                                <a href="#">裤子</a>
                            </div>
                        </div>
                        <a href="#"><img src="../img/s2.png" alt=""></a>
                    </div>
                    <div class="sp s3">
                        <div>
                            <a href="#">女士</a>
                            <div>
                                <a href="#">外套&大衣</a>
                                <a href="#">半身裙</a>
                            </div>
                        </div>
                        <a href="#"><img src="../img/s3.png" alt=""></a>
                    </div>
                    <div class="sp s4">
                        <div>
                            <a href="#">男士</a>
                            <div>
                                <a href="#">大衣</a>
                                <a href="#">围巾</a>
                            </div>
                        </div>
                        <a href="#"><img src="../img/s4.png" alt=""></a>
                    </div>
                    <div class="sp s1" >
                        <div>
                            <a href="#">女士</a>
                            <div>
                                <a href="#">衬衫&上衣</a>
                                <a href="#">牛仔裤</a>
                            </div>
                        </div>
                        <a href="#"><img src="../img/s1.png" alt=""></a>
                    </div>
                </div>
                <span class="next" @click="next"><img src="../img/jt.png" alt=""></span>
            </div>
        </div>
        <div class="container4">
            <a href="#"><img src="../img/c4.png" alt=""></a>
            <div>
                <h1>摇滚和巴洛克</h1>
                <h2>夸张张扬：VERSACE </h2>
                <div>
                    <a href="#">BAROCCO 扣饰腰带</a>
                    <a href="#">所有腰带</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>  
    export default{
        data(){
            return { 
               currentUl:"",
               num:1,
            }
        },
        methods:{
           next(){
               var cs=this.num++;
               var ml=cs*(-1371);
               if(cs<4){
                    this.currentUl=`margin-left:${ml}px;transition:all 0.2s linear`;
               }else{
                   this.currentUl="margin-left:0px;";
                   this.num=1;
               }
             
           },
          
        },
        created() {
         

        },
    }
    
</script>
<style>
  .my-index{
      margin-top:100px;
      width:2000px;
  }
  .tp1{
      text-align:center;
  }
  .tp1>img{
      width:1800px;
  }
 .container1{
     position:relative;
     border-bottom:1px solid #aaa;

 }
 .container1-box{
    padding: 85px 80px 90px;
    max-width: 1010px;
    margin: 0 auto;
    background: #fff;
    text-align: center;
    color: #252525;
    text-transform: uppercase;
 }
 .container1-box h1{
    font-size: 2.46rem;
    max-width: none;
    margin-bottom: 35px;
    color: #252525;
    letter-spacing: .16em;
    text-transform: uppercase;
 }
 .container1-box p{
     margin:30px 0 0;
 }
 .container1-box div{
     display:flex;
     justify-content:center;
     margin-top:30px;
 }
  .container1-box div>a{
    font-size: 1rem;
    margin: 0 -1px;
    min-width: 215px;
    padding: 17px 20px;
    background: #fff;
    color: #252525;
    text-transform: uppercase;
    border: 1px solid #515151;
 }
  .container1-box div>a:hover{
    background: #000;
    color:#fff;
    transition:.2s linear;
    
  }
  .container2{
      text-align:center;
      padding-top:20px;
  }
  .container2 h1{
    font-size: 3.08rem;
    padding-bottom: 40px;
    font-weight: 700;
    letter-spacing: .12em;
    line-height: 1.3;
    margin-top:20px;
  }
  .container3{
    background: #fafafa;
    padding: 90px 0;
    margin-bottom: 85px;
    height:1126px;
    width:100%;
    overflow:hidden;
  
  }
 .container3-box{
    width:100%;
    overflow:hidden;
    /*transform: translate3d(-2334px, 0px, 0px);*/
 }
 .swiper{
     width:8000px;
    
 }
 .sp{
    width: 1030px;
    padding: 0 0 0 340px;
    border-right: 1px solid #ededed;
    float:left;
    position:relative;
 }
 .sp>div>a{
    font-size:25px;
    margin: 0 0 60px;
    font-weight: 700;
    line-height: 80px;
 }
 .sp>div{
     float:left;
     position:absolute;
     left:50px;
     top:400px;
     
 }
 .sp>div>div>a{
    font-size: 1rem;
    display: block;
    margin: 0 0 -1px;
    width: 180px;
    padding: 17px 20px;
    border-color: #242424;
    background: none;
    color: #252525;
    text-align:center;
    border: 1px solid #242424;

 }
 .sp>div>div>a:hover{
    background: #000;
    color:#fff;
    transition:.2s linear;
 }
 .next{
    font-size: .77rem;
    top: 50%;
    bottom: auto;
    margin: -27px 70px 0;
    width: 54px;
    height: 54px;
    text-align: center;
    line-height: 54px;
    background: #fff;
    border-radius: 50%;
    color: #000;
    border:1px solid #000;
    display:block;
    position:relative;
    top:600px;
    left:1650px;
 }
 .next>img{
     position:absolute;
     top:25%;
     left:25%;
     height:25px;
 }
.container4{
    position:relative; 
    top:20px;
    height:1126px;
 }
.container4 img{
    width:1900px;
    height:1000px;
}
.container4>div{
    float:right;
    position:absolute;
    left:1200px;
    top:500px;
}
.container4>div>h1{
    font-size:25px;
    font-weight:normal;
}
.container4>div>h2{
    font-size:25px;
    font-weight:700;
}
.container4>div>div>a{
    font-size: 1rem;
    display: block;
    margin: 0 0 -1px;
    width: 215px;
    padding: 17px 20px;
    border-color: #242424;
    background: none;
    color: #252525;
    border:1px solid #242424; 
}
.container4>div>div>a:hover{
    background: #000;
    color:#fff;
    transition:.2s linear;
}
</style>
