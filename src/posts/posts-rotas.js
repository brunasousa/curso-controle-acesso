const postsControlador = require('./posts-controlador')
const { middlewaresAutenticacao } = require('../usuarios')
const autorizacao = require('../middewares/autorizacao');
const tentarAutenticar = require('../middewares/tentarAutenticar');
const tentarAutorizar = require('../middewares/tentarAutorizar');

module.exports = app => {
  app
    .route('/post')
    .get(
      [tentarAutenticar, tentarAutorizar('post', 'ler')],
      postsControlador.lista
    )
    .post(
      [middlewaresAutenticacao.bearer,
      autorizacao('post', 'criar')],
      postsControlador.adiciona
    )

  app.route('/post/:id')
    .get(
      [middlewaresAutenticacao.bearer,
      autorizacao('post', 'ler')],
      postsControlador.obterDetalhes
    )
    .delete(
      [middlewaresAutenticacao.bearer,
      middlewaresAutenticacao.local,
      autorizacao('post', 'remover')],
      postsControlador.remover
    )
}
