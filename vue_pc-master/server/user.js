const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//**********************************用户登录*****************************
router.post('/login',(req,res)=>{
  var obj=req.body;
  var $phone=obj.phone;
  var $upwd=obj.upwd;
  if(!$phone){
    res.send('用户名不能为空');
	return;
  }
  if(!$upwd){
    res.send('密码不能为空');
	return;
  }
  var sql='select * from user where phone=? and upwd=?';
  pool.query(sql,[$phone,$upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send('登录成功');
    }else{
      res.send('用户名或密码错误');
    }
  
  });
});
//*******************************用户注册******************************
router.post('/register',(req,res)=>{
  var obj=req.body;
  var $phone=obj.phone;
  var $uname=obj.uname;
  var $upwd=obj.upwd;
  var $email=obj.email;
  var sql='insert into user values(null,?,?,?,?)';
  pool.query(sql,[$uname,$upwd,$phone,$email],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send('1');
     
    }else{
      res.send('0');
    }
  });
});

//*****************注册时检查手机号在数据库中是否已存在
router.get('/checkPhone',(req,res)=>{
  var $phone=req.query.phone;
  if(!$phone){
    res.send('手机号不能为空');
	return;
  }
  var sql="select * from user where phone=?";
  pool.query(sql,[$phone],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send('1');//手机号已存在
	}else{
	  res.send('0');//手机号可用
	}
  });
});
//*****************注册时检查邮箱在数据库中是否已存在
router.get('/checkEmail',(req,res)=>{
  var $email=req.query.email;
  var sql="select * from user where email=?";
  pool.query(sql,[$email],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send('1');//邮箱已存在
	}else{
	  res.send('0');//邮箱可用
	}
  });
});

router.post("/signin",(req,res)=>{
  var email=req.body.email;
  var upwd=req.body.upwd;
  var sql= "select * from user where upwd=? and email=?";
  pool.query(sql,[upwd,email],(err,result)=>{
      if(err) console.log(err);
      if(result.length>0){
        res.writeHead(200);
        var user=result[0];
        //req.session.uid=user.uid;
        res.write(JSON.stringify({
         ok:1,email:user.email,upwd:user.upwd,uid:user.uid
        }))
      }else{
        res.write(JSON.stringify({
          ok:0,
          msg:"用户名或密码错误！"
        }))
      }
      res.end();
    }
  )
})
//********************判断是否登录*************************
router.get("/islogin",(req,res)=>{
  res.writeHead(200);
  if(req.session.uid===undefined){
    res.write(JSON.stringify({ok:0}))
    res.end()
  }else{
    var uid=req.session.uid;
    var sql=
     "select * from user where uid=?"
    pool.query(sql,[uid],(err,result)=>{
      if(err) console.log(err);
      var user=result[0];
      res.write(JSON.stringify({
        ok:1,uid:user.uid,uname:user.uname,
      }))
      res.end()
    })
  }

})
router.get("/signout",(req,res)=>{
  req.session["uid"]=undefined;
  res.end();
})
//测试：
//http://localhost:3000/users/islogin ok:0
//.../users/signin?uname=dingding&upwd=123456 ok:1
//.../users/islogin ok:1
//.../users/signout
//.../users/islogin ok:0





module.exports=router;
