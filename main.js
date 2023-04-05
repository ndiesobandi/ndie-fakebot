let nama = 'Ndie Muhammad' //string
let usia = 30 //integer / number
let tinggiBadan = 172.0 //double float
let beratBadan
let pacar = 2

beratBadan = 55

// if (pacar == null) {
//     pacar = 'belum punya'
// } else {
//     pacar = 'Sudah punya dong'
// }

switch (pacar) {
    case 1 :
        pacar = "punya 1 aja"
    break;
    case 2 :
        pacar = "punya 2, aku playboy"
    break;
    default :
        pacar = "belum punya pacar"
    break;
}

let saldoAwal = 50000
let saldoTambahan = 80000
let hutang = 20000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

alert(
    `nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`
)
alert(`saldo awal saya sebesar Rp.${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp.${saldoTambahan} jadi total saldo saya sebesar Rp.${saldoAkhir}`)