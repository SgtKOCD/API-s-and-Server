const http = require("http");
const users = require("./data/users.json");
const posts = require("./data/posts.json");


const server = http.createServer((request, response) => {
    console.log(`Talep geldi : ${request.url}`)
    if (request.url === "/users") {
        //Users geriye dönülecek
        
        response.setHeader("Content-Type", "application/json")
        response.write(JSON.stringify(users));
        response.end();
    } else if (request.url === "/posts") {
        //post geriye dönülecek
        
        response.setHeader("Content-Type", "application/json")
        response.write(JSON.stringify(posts));
        response.end();
    } else {
        //404 dönecek
        response.writeHead(404, "Content-Type", "application/json")
        response.end(JSON.stringify({
            message: "Yönlendirme Hatalı"
        }))
    }


})

//port nuumarasını belirle
const PORT = 5000;

//serveri dinlemeye başla
server.listen(PORT, () => console.log(`server ${PORT} portu üzerinde çalışmaya başladı.`));