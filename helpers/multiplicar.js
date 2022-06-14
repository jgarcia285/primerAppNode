const fs = require('fs');
const colors = require('colors')


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${i * base}\n`);
        }

        if (listar) {
            console.log(salida.blue);
        }

        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);

        return `tabla${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}