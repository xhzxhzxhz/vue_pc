const express=require("express")
const router=express.Router()
const pool=require("../pool")
//http://localhost:3000/user/signin?uname=dingding&upwd=123456
//http://localhsot:3000/cart/add?psid=6&count=5
router.get("/add",(req,res)=>{
    var pid=req.query.pid;
    var count=1;
    var uid=req.query.uid;
    console.log(uid,pid);
    var sql="select * from product_cart_item where uid=? and pid=?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        if(result.length==0){//如果该用户购物车中无此条商品的购物记录，则在购物车中直接插入
            pool.query("insert into product_cart_item values(null,?,?,1,0)",[uid,pid],(err,result)=>{
                if(err) console.log(err);
                res.end();
            })
        }else{//如果该用户购物车中已有此条商品的购物记录，则将购物车中该商品的数量累加
            pool.query("update product_cart_item set count=count+? where uid=? and pid=?",[count,uid,pid],(err,result)=>{
                if(err) console.log(err);
                res.end();
            })
        }
    })
})
//http://localhost:3000/user/signin?uname=dingding&upwd=123456
//http://localhsot:3000/cart/items
router.get("/items",(req,res)=>{
    var uid=req.query.uid;
    var sql="SELECT *,(select sm from product_details_pic where pid=product_cart_item.pid limit 1) as sm FROM product_cart_item inner join product_cart_info on product_cart_info.pid=product_cart_item.pid where uid=?";//从数据库查询商品信息，商品图片
    pool.query(sql,[uid],(err,result)=>{
        if (err) throw err;
        res.writeHead(200);
        res.write(JSON.stringify(result));
        res.end();
    });
})
//http://localhost:3000/user/signin?uname=dingding&upwd=123456
//http://localhsot:3000/cart/update?iid=35&count=5
//更新购物车
router.get("/update",(req,res)=>{
    var iid=req.query.iid;
    var count=req.query.count;
    if(count>0){
        var sql="update product_cart_item set count=? where iid=?"
        var data=[count,iid]
    
    }else{
        var sql="delete from product_cart_item where iid=?";
        var data=[iid]
    }
     pool.query(sql,data,(err,result)=>{
         if(err) console.log(err);
         res.end();
     })   
    
})
module.exports=router;