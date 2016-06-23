const User = require('../models/user');

exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    
    //判断email是否存在
    User.findOne({email: email }, function(err, existingUser){
        if(err) { return next(err); }
        
        //如果email存在，就返回一个error
        if(existingUser){
            return res.status(422).send({error: 'Email is in use'});
        }
        
        //如果email不存在，创建并保存用户信息
        const  user = new User({
            email: email,
            password: password
        });
        
        user.save(function(err){
            if(err){ return next(err); }
            
            //并响应表明用户已经创建
            res.json({ success: true });
        });
        
        
    });    
    
}