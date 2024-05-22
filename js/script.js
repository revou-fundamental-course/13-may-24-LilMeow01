document.getElementById('hitung-luas').addEventListener('click', function() {
    let alas = parseInt(document.getElementById("alas").value);
    let tinggi = parseInt(document.getElementById("tinggi").value);

    let luas = alas*tinggi*0.5;

    var keterangan_l = "L = 1/2 x a x t"
    var dik_l   = "L = 1/2 x" + alas + " x " + tinggi
    var hasil_l = "L = " + luas
    var jawaban_l = "Jadi Luas Segitiga tersebut adalah "+luas

    
    document.getElementById('keterangan_l').innerText = keterangan_l;
    document.getElementById('dik_l').innerText = dik_l;
    document.getElementById('hasil_l').innerText = hasil_l;
    document.getElementById('jawaban_l').innerText = jawaban_l;    
});


document.getElementById('hitung-kell').addEventListener('click', function() {
    let a = parseInt(document.getElementById("sisiA").value);
    let b = parseInt(document.getElementById("sisiB").value);
    let c = parseInt(document.getElementById("sisiC").value);

    let kell = a+b+c;

    var keterangan_k = "Kell = A + B + C"
    var dik_k   = "Kell = " + a + " + " + b +  " + " + c
    var hasil_k = "Kell = " + kell
    var jawaban_k = "Jadi Keliling Segitiga tersebut adalah "+ kell

    
    document.getElementById('keterangan_k').innerText = keterangan_k;
    document.getElementById('dik_k').innerText = dik_k;
    document.getElementById('hasil_k').innerText = hasil_k;
    document.getElementById('jawaban_k').innerText = jawaban_k;    
});



document.getElementById('reset-btn-luas').addEventListener('click', function() {
    document.getElementById('alas').value = ""; // Mengosongkan input alas
    document.getElementById('tinggi').value = ""; // Mengosongkan input tinggi

    // Mengosongkan konten dalam div keterangan
    document.getElementById('ket_l').style.display = 'none';
});


document.getElementById('reset-btn-kell').addEventListener('click', function() {
    document.getElementById('sisiA').value = ""; // Mengosongkan input sisi A
    document.getElementById('sisiB').value = ""; // Mengosongkan input sisi B
    document.getElementById('sisiC').value = ""; // Mengosongkan input sisi C

    // Mengosongkan konten dalam div keterangan
    document.getElementById('ket_k').style.display = 'none';
});

