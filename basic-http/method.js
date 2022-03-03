const getValues = (callback) => { // veri çekme methodu

    var durum = true // verinin alınıp alınmama durumu
    try {
        if (durum) {// bağlantı durumunun true olma durumu
            callback(undefined, "Method OK");
        } else {// false olma durumu
            callback("veri getirilemedi", undefined);
        }
    
    } catch (error) {// hata durumu
        callback("veri getirilemedi",undefined);
    }
}

getValues((err, data) => {
    // hata alınması durumunda çalışacak kodlar
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})