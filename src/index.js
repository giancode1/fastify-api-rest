const producRoutes = require("../routes/products.routes");
require('../utils/mongoose');
const mySwagger = require('../utils/swagger');

const fastify = require("fastify")({
    logger: true, // Logs to console
    // trustProxy: true, // Trusts X-Forwarded-* headers
});

fastify.register(require('fastify-swagger'), mySwagger.options);


fastify.get("/", async (request, reply) => {
    return { hello: "world" };
});

producRoutes.forEach(route => {
    fastify.route(route);
})

const start = async () => {
    try {
        await fastify.listen(3000, '0.0.0.0'); //expose to the network
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (error) {
        fastify.log.error(err)
        process.exit(1)
    }
};

start();
