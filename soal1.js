// require dari file calc.js
const calc = require('./calc.js')

// menampilkan luas persegi
console.log("Luas Persegi : ", calc.luasPersegi(5));

// menampilkan keliling persegi 
console.log("Keliling persegi :",calc.kelilingPersegi(10));

// menampilkan luas persegi panjang
console.log("Luas persegi panjang :",calc.luasPersegiPanjang(10,5));

// menampilkan keliling persegi panjang
console.log("Keliling persegi panjang :",calc.kelilingPersegipanjang(10,5));