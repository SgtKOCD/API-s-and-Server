const express = require("express");
const postController = require("./src/controllers/posts-controller");
const usersController = require("./src/controllers/users-controller");
const todosController = require("./src/controllers/todos-controller");
const app= express();


app.get("/posts",(req,res)=>{// tüm postları gösteriri
    // controller çağırma
    let posts = postController.getAllPosts();

    //data return
    res.send(posts);
});

app.get("/posts/:postId",(req,res)=>{//route da id si verilen postu gösterir
    let post=postController.getPostById(req.params.postId);
    res.send(post);
});

app.get("/users",(req,res)=>{// tüm kullanıcıları verir
    let users = usersController.getAllUsers();
    res.send(users);
});

app.get("/users/:userId",(req,res)=>{// route ı girilen kullanıcı id sini verir
    let user=usersController.getUserById(req.params.userId);
    res.send(user);
});
app.get("/todos",(req,res)=>{// tüm kullanıcıları verir
    let todos;
    if (req.query.userId) {
      todos=todosController.getTodosByUserId(req.query.userId);

    }
    else{
        todos = todosController.getAllTodos();
    }

    res.send(todos);
});
app.listen(5000);//5000. portu dinler olan biteni vs.