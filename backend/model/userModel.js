
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  
  email :{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required : true,
  },
  
  isAdmin: {
    type: Boolean,
    default: false,

},
  

});

const users =  mongoose.model('users', userSchema);
module.exports = users;