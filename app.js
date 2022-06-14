const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./yargs/yargs');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado correctamente`.green))
    .catch(err => console.log(err));