const posts = require("../data/posts");

getAllPosts=()=>{// geriye tüm veriyi döndürür
    return posts;
}

getPostById=(postId)=>{//postId filtreleyebilmek için yapılan method
    return posts.filter(x=>x.id==postId);
}

module.exports={getAllPosts, getPostById};//bu method/ları kullanabilmek için export etmek gerekir