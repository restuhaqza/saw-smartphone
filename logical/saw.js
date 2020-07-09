const config = require("../config/config.json")
const { Sequelize, DataTypes } = require("sequelize")
const KriteriaModel = require("../models/kriteria")
const MatrikModel = require("../models/matriks")
const ProductModel = require("../models/product")

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "mysql",
    logging: console.log,
  }
)

const matrikModel = MatrikModel(sequelize, DataTypes)
const kriteriaModel = KriteriaModel(sequelize, DataTypes)
const productModel = ProductModel(sequelize, DataTypes) 

// get matriks data
async function getMatriks() {
  const data = await matrikModel.findAll()
  return data
}

// get kriteria data
async function getKriteria() {
  const data = await kriteriaModel.findAll()
  return data
}

// get product data
async function getProduct(){
  const data = await productModel.findAll()
  return data
}

async function calcutateNormalisasi(k = [], matriks = [], product = []) {
  let newMatriks = []
  let newNormalisasi = []

  let kriteria = {}
  let type = {}
  let sifat = {}
  for (let i = 0; i < k.length; i++) {
    switch (k[i].kode) {
      case "K1":
        kriteria["k1"] = k[i].value
        sifat["k1"] = []
        type["k1"] = k[i].type
        break
      case "K2":
        kriteria["k2"] = k[i].value
        sifat["k2"] = []
        type["k2"] = k[i].type
        break
      case "K3":
        kriteria["k3"] = k[i].value
        sifat["k3"] = []
        type["k3"] = k[i].type
        break
      case "K4":
        kriteria["k4"] = k[i].value
        sifat["k4"] = []
        type["k4"] = k[i].type
        break
      case "K5":
        kriteria["k5"] = k[i].value
        sifat["k5"] = []
        type["k5"] = k[i].type
        break
      default:
        break
    }
  }
  console.log(`Nilai Kriteria`)
  console.table(kriteria)
  
  console.log(`Tipe Kriteria`)
  console.table(type)

  matriks.forEach((data, index) => {
    sifat["k1"].push(data["k1"])
    sifat["k2"].push(data["k2"])
    sifat["k3"].push(data["k3"])
    sifat["k4"].push(data["k4"])
    sifat["k5"].push(data["k5"])
  })
  let sifatMinMax = {
    k1: type.k1 == "cost" ? Math.min(...sifat["k1"]) : Math.max(...sifat["k1"]),
    k2: type.k2 == "cost" ? Math.min(...sifat["k2"]) : Math.max(...sifat["k2"]),
    k3: type.k3 == "cost" ? Math.min(...sifat["k3"]) : Math.max(...sifat["k3"]),
    k4: type.k4 == "cost" ? Math.min(...sifat["k4"]) : Math.max(...sifat["k4"]),
    k5: type.k5 == "cost" ? Math.min(...sifat["k5"]) : Math.max(...sifat["k5"]),
  }
  let temp = []
  product.forEach(data => temp.push(data.get()))
  console.log(`Data Produk`)
  console.table(temp)
  matriks.forEach((data, index) => {
    let parser = data.get()
    newMatriks[index] = {
      id_product: parser.id,
      k1:
        type.k1 == "cost"
          ? sifatMinMax.k1 / parser.k1
          : parser.k1 / sifatMinMax.k1,
      k2:
        type.k2 == "cost"
          ? sifatMinMax.k2 / parser.k2
          : parser.k2 / sifatMinMax.k2,
      k3:
        type.k3 == "cost"
          ? sifatMinMax.k3 / parser.k3
          : parser.k3 / sifatMinMax.k3,
      k4:
        type.k4 == "cost"
          ? sifatMinMax.k4 / parser.k4
          : parser.k4 / sifatMinMax.k4,
      k5:
        type.k5 == "cost"
          ? sifatMinMax.k5 / parser.k5
          : parser.k5 / sifatMinMax.k5,
    }

    newNormalisasi[index] = {
      id_product: parser.id,
      k1: newMatriks[index].k1 * kriteria.k1,
      k2: newMatriks[index].k2 * kriteria.k2,
      k3: newMatriks[index].k3 * kriteria.k3,
      k4: newMatriks[index].k4 * kriteria.k4,
      k5: newMatriks[index].k5 * kriteria.k5,
    }
  })

  console.log(`Martriks Awal`)
  console.table(newMatriks)

  console.log(`Normalisasi`)
  console.table(newNormalisasi)

  let total = []

  newNormalisasi.forEach((data) => {
    let { k1, k2, k3, k4, k5 } = data
    total.push({ id_product: data.id_product, sum: k1 + k2 + k3 + k4 + k5 })
  })

  total.sort((a,b)=>b.sum - a.sum)
  console.log(`Hasil Akhir`)
  console.table(total)
}

module.exports = {
  getMatriks,
  getKriteria,
  getProduct,
  calcutateNormalisasi,
}
