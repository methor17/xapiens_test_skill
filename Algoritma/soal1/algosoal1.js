const zeroSuffix = (num) => {
    const digitArr = Array.from(String(num))
    let zeroLeft = digitArr.length -1 
    let zeroToAdd = ""
    for(let i in digitArr){
        for(let j = 0; j < zeroLeft; j++){
            zeroToAdd += "0"
        }
        console.log(digitArr[i] + zeroToAdd)
        zeroLeft--
        zeroToAdd = ""
    }
}
//menambah kan 0
zeroSuffix(1234567)