const saw = require('./logical/saw')

async function main(){
  const kriteria = await saw.getKriteria()
  const matriks = await saw.getMatriks()
  const product = await saw.getProduct()
  console.log(`\n\n\n==========================================================`)
  console.log(`| 1. Restu Haqqi Muzakir - 17.62.0106                    |`)
  console.log(`| 2. Fayami Bunga Savira - 17.62.0109                    |`)
  console.log(`| 3. Ahmad Subekti - 17.62.0099                          |`)
  console.log(`==========================================================`)
  console.log(`\n`)


  saw.calcutateNormalisasi(kriteria, matriks, product)
}

main()