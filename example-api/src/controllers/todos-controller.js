const todos = require("../data/todos");

getAllTodos=()=>{// geriye tüm veriyi döndürür
    return todos;
}

getTodosByUserId=(userId)=>{
    return todos.filter(todo=>todo.userId==userId);
}
module.exports={getAllTodos, getTodosByUserId};