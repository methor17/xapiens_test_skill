//define array
const numArr = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]

//buat 3 kelompok
const kelompok1 = numArr.slice(0, 10)
const kelompok2 = numArr.slice(10,21)
const kelompok3 = numArr.slice(21, numArr.length)

//sort 3 kelompok dari terbesar ke terkecil
kelompok1.sort((a, b) => b - a)
kelompok2.sort((a, b) => b - a)
kelompok3.sort((a, b) => b - a)
const kelompok = [kelompok1, kelompok2, kelompok3]
const sumValue = (accumulator, current) => accumulator + current

//Sorting
const showKelompokSorted = () => {
    for(let i in kelompok){
        console.log(`Kelompok ${parseInt(i) + 1} : ${kelompok[i]}`)
    }
}
//Total
const sum = () => {
    for(let i in kelompok){
        console.log(`Jumlah data kelompok ${parseInt(i) + 1}: ${
            kelompok[i].reduce(sumValue)
        }`)
    }
}
//Rata-rata
const rateArr = () => {
    for(let i in kelompok){
        console.log(`Nilai rata-rata kelompok ${parseInt(i) + 1}: ${kelompok[i].reduce(sumValue) / kelompok[i].length}`)
    }
}
//Tertinggi-terendah
const minAndMax = () => {
    for(let i in kelompok){
        console.log(`kelompok ${parseInt(i) + 1} => Tertinggi: ${Math.max.apply(Math, kelompok[i])} || Terendah: ${Math.min.apply(Math, kelompok[i])}`)
    }
}

showKelompokSorted()
sum()
rateArr()
minAndMax()