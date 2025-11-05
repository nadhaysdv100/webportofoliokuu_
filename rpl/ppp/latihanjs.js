let angka1 = document.getElementById("angka1")
let angka2 = document.getElementById("angka2")
let tambah = document.getElementById("tambah")
let textHasil = document.getElementById("hasil")

function penjumlahan() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a + b;
    textHasil.innerHTML = "hasil = " + hasil;
}
function perkalian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a * b;
    textHasil.innerHTML = "hasil = " + hasil;
}
function pembagian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a / b;
    textHasil.innerHTML = "hasil = " + hasil;
}
function pengurangan() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil = a - b;
    textHasil.innerHTML = "hasil = " + hasil;
}
tambah.onclick = penjumlahan
kali.onclick = perkalian
bagi.onclick = pembagian
kurang.onclick = pengurangan