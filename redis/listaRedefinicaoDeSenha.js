const redis = require('redis')
const conexao = redis.createClient({ prefix: 'redefinicao-de-senha', legacyMode: true })
conexao.connect();
const manipulaLista = require('./manipula-lista')
module.exports = manipulaLista(conexao)