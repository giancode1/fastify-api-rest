const ProductController = require('../controllers/product.controller')

const routes = [
    {
        url: '/products',
        method: 'GET',
        handler: ProductController.getProducts
    },
    {
        url: '/products',
        method: 'POST',
        handler: ProductController.createProduct
    },
    {
        url: '/products/:id',
        method: 'GET',
        handler: ProductController.getProduct
    },
    {
        url: '/products/:id',
        method: 'PUT',
        handler: ProductController.updateProduct
    },
    {
        url: '/products/:id',
        method: 'DELETE',
        handler: ProductController.deleteProduct
    },
]

module.exports = routes;










