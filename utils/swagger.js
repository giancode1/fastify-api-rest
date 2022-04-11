exports.options = {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'GC Fastify MongoDB Swagger API',
            description: 'Simple API with fastify, mongodb, and swagger',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            {
                name: 'products',
                description: 'Products operations'
            }
        ],
    }
}















