const redis = require('redis');
const manipulaLista = require('./manipula-lista');
const allowlist = redis.createClient({ prefix: 'allowlist-refresh-token:' });
allowlist.connect();
module.exports = manipulaLista(allowlist);