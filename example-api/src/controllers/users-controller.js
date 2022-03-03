const users = require("../data/users");

getAllUsers=()=>{
    return users;// tüm kullanıcıları gösteren method
}
getUserById=(userId)=>{
    return users.filter(x=>x.id==userId);
}
module.exports={getAllUsers, getUserById};
