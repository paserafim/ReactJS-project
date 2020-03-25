

module.exports = {
    async this.create(request, response){
    // para do corpo do request
    const { name, email, whatsapp, city, uf } = request.body;
    // const params = request.params;      // para parametros /:id
    //const params = request.query;    // para buscar variaveis da query

    //Criar o ID encriptado
    const id = crypto.randomBytes(4).toString('HEX');

    //Conexao a BD e inserir registo
    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    })

    return response.json({ id });
    }
};