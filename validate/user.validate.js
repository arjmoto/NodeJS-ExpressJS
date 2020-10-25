module.exports.postCreate = (req, res, next)=>{
    const errors = [];
    if(!req.body.name){
        errors.push('Name is required.');
    }
    if(!req.body.phone){
        errors.push('Phone is required.');
    }
    if(errors.length){//falesy
        res.render('users/create',{ 
            errors,
            values: req.body 
        });
        return;
    }

    res.locals.success = true;
    
    next();
}