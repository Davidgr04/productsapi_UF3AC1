const express = require('express');
const slugify = require('slugify'); // Añadimos la dependencia slugify
const products_routes = require('./routes/products.js');

// Instancia del servidor
const app = express();
const PORT = process.env.PORT || 5000;

// Configuración del servidor: motor de plantillas
app.set('views', './views');
app.set('view engine', 'pug');

// Corregimos el middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware
app.use(express.json());
app.use('/', products_routes);

// Slugizamos el mensaje de bienvenida
const welcomeMessage = '¡Bienvenido a mi servidor Express!';
const slugifiedMessage = slugify(welcomeMessage, { replacement: '*', lower: true });

// Ruta para el mensaje de bienvenida
app.get('/', (req, res) => {
  res.send(slugifiedMessage);
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
