import Product from '../models/Product.js'

export const getProducts = async (req, res) => {
    try {
        // find seperti getAll() pada laravel
        const products = await Product.find()

        res.json(products)
    } catch (error) {
        // 500 = internal server error (kesalahan dari server)
        res.status(500).json({ message: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        // find seperti getAll() pada laravel
        const product = await Product.findById(req.params.id)

        res.json(product)
    } catch (error) {
        // 500 = internal server error (kesalahan dari server)
        res.status(404).json({ message: error.message })
    }
}

export const saveProduct = async (req, res) => {
    // Product = model
    const product = new Product(req.body)
    try {
        // find seperti getAll() pada laravel
        const saveProduct = await product.save()

        // 201 = success created
        res.status(201).json(saveProduct)
    } catch (error) {
        // 400 = bad request (kesalahan sisi client, mungkin dari inputan json salah)
        res.status(400).json({ message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id)
    if (!cekId) return res.status(404).json({ message: "Data not found" })
    try {
        const updatedProduct = await Product.updateOne({ _id: req.params.id }, { $set: req.body })

        res.status(200).json(updatedProduct)
    } catch (error) {
        // 400 = bad request (kesalahan sisi client, mungkin dari inputan json salah)
        res.status(400).json({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id)
    if (!cekId) return res.status(404).json({ message: "Data not found" })
    try {
        const deletedProduct = await Product.deleteOne({ _id: req.params.id })

        res.status(200).json(deletedProduct)
    } catch (error) {
        // 400 = bad request (kesalahan sisi client, mungkin dari inputan json salah)
        res.status(400).json({ message: error.message })
    }
}
