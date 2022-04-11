const Product = require("../models/product.model");

const getProducts = async (request, reply) => {
    const products = await Product.find();
    return products;
}

const createProduct = async(request, reply) => {
    const newProduct = new Product(request.body);
    await newProduct.save();
    reply.code(201).send(newProduct);
}

const getProduct = async(request, reply) => {
    const { id } = request.params;
    const product = await Product.findById(id);
    if (!product) {
        reply.code(404).send('Product not found');
    }
    reply.send(product);
}

const updateProduct = async(request, reply) => {
    const { id } = request.params;
    const product = await Product.findByIdAndUpdate(id, request.body, { new: true });
    if (!product) {
        reply.code(404).send('Product not found');
    }
    reply.send(product);
}

const deleteProduct = async (request, reply) => {
    const rta = await Product.findByIdAndDelete(request.params.id);
    if(rta) {
        reply.code(204).send({'message':'Product deleted'});
    } else {
        reply.code(404).send({'message': 'Product not found'});
    }
}

module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}