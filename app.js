const express = require('express');
const products_routes = require('./routes/products.js');

// Instancia del servidor
const app = express();
const PORT = process.env.PORT || 5000;

// Configuración del servidor: motor de plantillas
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

// Middleware
app.use(express.json());
app.use('/', products_routes);


// Inicio del servidor
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});

