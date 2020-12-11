const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla d emultiplicar', opts)
    .command('crear', 'Genera un archivo con la tablaonsola la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}