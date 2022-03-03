const xhr = new XMLHttpRequest //XMLHttpReaquest ön tanımlı nesnesinden yeni bir nesne türetildi

xhr.addEventListener("readystatechange", ()=>{ // xhr'ın event durumunu gösteren bir method ayarlandı
    if(xhr.readyState == 4){
        console.log(xhr.responseText)
    }
})

xhr.open("GET", "https://jsonplaceholder.typicode.com/users")// get isteği ile url açıldı
xhr.send();//url kullanıcıya gösterildi