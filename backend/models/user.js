const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const joi=require('joi');
const passwordComplexity=require('joi-password-complexity');
const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true}
});
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    return token;
};
const User=mongoose.model('user',userSchema);
const validate=(data)=>{
    const schema=joi.object({
        username:joi.string().min(3).max(30).required(),
        email:joi.string().email().required(),
        phone:joi.string().min(10).max(15).required(),
        password:passwordComplexity().required(),
        confirmPassword:joi.string()
            .valid(joi.ref('password')) // Ensure confirmPassword matches password
            .required()
            .messages({ 'any.only': 'Passwords do not match' }) // Custom error message
    });
    return schema.validate(data);
};
module.exports={User,validate};