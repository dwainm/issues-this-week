'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });


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
    path: '/style.css',
    handler: {
        file: './public/style.css'
    }
});

// handle submissions
server.route({
    method: 'POST',
    path: '/issues',
    handler: function(req, reply){ 
        console.log( req.payload);
        //console.log( request );
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});