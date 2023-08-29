export const info = {
    definition: {
        openapi: '3.0.0',   // version de openapi
        info: {
            title: 'API News',
            version: '1.0.0',
            description: 'Tecnologías utilizadas: Node, Express, MongoDB'
        },
        servers: [  //va a ser la url de la o las apis, en este caso tenemos una sola,
                    //podriamos tener el servidor subido a la nube, entonces podriamos agregar
                    //otro y cuando se seleccione este, las peticiones van a apuntar a esa url
            {
                url: 'http://localhost:8080'
            }
        ]
    },
    //tenemos que indicar en que archivos va a estar la documentacion
    apis: ['./src/docs/*.yml']
}

//! --> ahora tenemos que importar este archivo en el server y pasarselo al swaggerJSDoc