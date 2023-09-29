// luas persegi
exports.luasPersegi = function (sisi){
    return sisi * sisi;
};

exports.kelilingPersegi = function (sisi){
    return 4 * sisi;
};

exports.luasPersegiPanjang = function (panjang, lebar){
    return panjang * lebar;
};

exports.kelilingPersegipanjang = function (panjang,lebar){
    return ( 2 * panjang) + (2 * lebar);
}