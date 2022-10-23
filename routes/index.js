import express from 'express'
import { getProducts, getProductById, saveProduct, updateProduct, deleteProduct } from '../controllers/productController.js'

// memanggil module express router
const router = express.Router()

// menggunakan express router dengan variable router yang telah dibuat
router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', saveProduct)
// PUT = metode update dengan harus mengisikan semua kolom
// PATCH = metode update yang bisa melakukan update 1 kolom, misal hanya ingin update nama/no telepon saja
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

// export variabel router agar dapat digunakan oleh file lainnya
export default router