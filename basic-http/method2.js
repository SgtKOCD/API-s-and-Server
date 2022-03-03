const getValue = () => {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest //XMLHttpReaquest ön tanımlı nesnesinden yeni bir nesne türetildi

            xhr.addEventListener("readystatechange", () => { // xhr'ın event durumunu gösteren bir method ayarlandı
                if (xhr.readyState == 4) {// ready state durumu 4 olduğunda bknz: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
                    resolve(xhr.responseText) //Text formatında yanıt getirir.
                } 
            });

            xhr.open("GET", "https://jsonplaceholder.typicode.com/users") // get isteği ile url açıldı
            xhr.send(); //url kullanıcıya gösterildi  
        } catch (error) { // hata durumu
            reject(error);
        }
    });
};


getValue().then(result => {// resolve durumunda
    console.log(result);
}).catch(err => {// reject durumunda
    console.log(err);
}).finally(fin => {// herdaim çalışır örn: switch case de ki default gibi
    console.log("Her zaman çalışır");
})