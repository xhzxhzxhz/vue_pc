
const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
  var pid=req.query.pid;
   var output={product:{},pics:[],specs:[]};

   var sql1="SELECT * FROM product_details_pic where pid=?";//查当前商品图片列表
   var sql2="SELECT * FROM products_info where pid=?";//查当前商品信息
   Promise.all([
    new Promise(function(open){
      pool.query(sql1,[pid],(err,result)=>{
        if(err) console.log(err);
        output.pics=result;
        open();
      })
    }),
    new Promise(function(open){
      pool.query(sql2,[pid],(err,result)=>{
        if(err) console.log(err);
        output.product=result;
        open()
      })
    }),
   
  ]).then(function(){
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output));
    res.end();
  })
})

module.exports=router;


