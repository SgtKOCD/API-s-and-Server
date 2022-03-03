// Gerekli kütüphaneyi çağır
const http = require("http");
const kişiler=require("./data.json");//data.json dosyasından verileri çekme
// serveri oluştur
const server = http.createServer((request,response)=>{
    console.log(request.url);
    response.statusCode=200; // 200 durum kodunu göster
    response.setHeader("Content-Type","application/json"); // serverin client e cevabı örn burada json formatında
    response.write(JSON.stringify(kişiler))// json string formatında yazdırma
})

//port nuumarasını belirle
const PORT=5000;

//serveri dinlemeye başla
server.listen(PORT, ()=>console.log(`server ${PORT} portu üzerinde çalışmaya başladı.`));