let count = 0

const guessNumber = async (num) => {
    try{
        const mulai = await bisaMulai(num)
    }catch(error) {

    }
}

const bisaMulai = (num) => {
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const random = Math.floor(Math.random() * 100)
      console.log(`Sedang menerawang,  nomernya adalah ${random}`)
      count++
      
      //error hanler
      if(count > 100 ){
        throw new Error('Tebakan gagal, feeling anda lemah')
    }
     num === random ? resolve(console.log(`Berhasil menebak nomornya = ${random}.. tebakan Sebanyak ${count} kali`)) : bisaMulai(num)
    }, 1000)
  }).then((resolve, reject) => {
      
  })
  .catch(error => {
      console.log(error.message)
  })
}


//masukan nomor untuk ditebak
guessNumber(85)