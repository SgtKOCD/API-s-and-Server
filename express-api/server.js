const express = require("express"); //expres özelliklerii kullanmak için tanımlanan library
const res = require("express/lib/response");
const posts = require("./data/posts.json") // data klasöründeki posts isimli json dosyası
const users = require("./data/users.json") // ""       ""       users   ""   ""
const app = express();
app.get("/users", (request, response) => {
    console.log(request.query);
    if (request.query.id) { //query string ifadesinde id değeri için koşul
        let item = users.filter(x => x.id == request.query.id); // eğer id varsa ve data da bulunuyorsa filtrele
        response.send(item) //itemi göster
    } else {
        response.send(users) //id yoksa direkt tüm kullanıcıları göster
    }
})

//--------USERS QUERY ID bitişi------------------

app.get("/users/:id", (request, response) => { // rota ile id değerini bulmak için bu formatta yapılır. rota yolu belirtildi
    console.log(request.params.id)
    let result = users.filter(x => x.id == request.params.id); // id değerini filtreledik
    response.send(result); // filtrelenen değer gösterildi

})
app.get("/users", (req, res) => { // rotaya id yazılmaz ise tüm listeyi gösterir
    res.send(users);
})

//--------USERS ROUTE ID bitişi------------------

app.get("/posts", (request, response) => {
    console.log(request.query);
    if (request.query.id) { //query string ifadesinde id değeri için koşul
        let item = posts.filter(x => x.id == request.query.id); // eğer id varsa ve data da bulunuyorsa filtrele
        response.send(item) //itemi göster
    } else {
        response.send(posts) //id yoksa direkt tüm kullanıcıları göster
    }
});

//--------POSTS QUERY ID bitişi------------------

app.get("/posts/:postId", (request, response) => { // rota ile id değerini bulmak için bu formatta yapılır. rota yolu belirtildi
    console.log(request.params.postId)
    let result = posts.filter(x => x.id == request.params.postId); // id değerini filtreledik
    response.send(result); // filtrelenen değer gösterildi

})
app.get("/posts", (req, res) => { // rotaya id yazılmaz ise tüm listeyi gösterir
    res.send(posts);
})

//--------POSTS ROUTE ID bitişi------------------

const PORT = 5000;
app.listen(PORT);