'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ 
    host: "localhost",
    port: 3000 
});


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./public/index.html');
        }
    });
});

server.route({
    method: 'GET',
    path: '/app.jsx',
    handler: {
        file: './public/app.jsx'
    }
});

server.route({
    method: 'GET',
    path: '/qwest.min.js',
    handler: {
        file: './public/qwest.min.js'
    }
});

server.route({
    method: 'GET',
    path: '/style.css',
    handler: {
        file: './public/style.css'
    }
});

// handle submissions
server.route({
    method: 'POST',
    path: '/',
    handler: function(req, reply){ 
        
        console.log( req.payload );
        return reply();
        req.payload.issues.forEach(function(item, index){
            console.log( item );
        });
        return reply();
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});