const Product = require('../models/product.model');

const routes = [
    {
        url: '/products',
        method: 'GET',
        handler: async(request, reply) => {
            const products = await Product.find();
            return products;
            // reply.send('products');
        }
    },
    {
        url: '/products',
        method: 'POST',
        handler: async(request, reply) => {
            const newProduct = new Product(request.body);
            await newProduct.save();
            reply.code(201).send(newProduct);
            // reply.send('Creating a product');
        }
    },
    {
        url: '/products/:id',
        method: 'GET',
        handler: async(request, reply) => {
            const { id } = request.params;
            const product = await Product.findById(id);
            if (!product) {
                reply.code(404).send('Product not found');
            }
            reply.send(product);
            // reply.send('Getting a product');
        }
    },
    {
        url: '/products/:id',
        method: 'PUT',
        handler: async(request, reply) => {
            const { id } = request.params;
            const product = await Product.findByIdAndUpdate(id, request.body, { new: true });
            if (!product) {
                reply.code(404).send('Product not found');
            }
            reply.send(product);
            // reply.send('Updated product');
        }
    },
    {
        url: '/products/:id',
        method: 'DELETE',
        handler: async (request, reply) => {
            const rta = await Product.findByIdAndDelete(request.params.id);
            if(rta) {
                reply.code(204).send({'message': `Product deleted`});
            } else {
                reply.code(404).send({'message': `Product not found`});
            }
            // reply.send('Deleted product');
        }
    },
]

module.exports = routes;










