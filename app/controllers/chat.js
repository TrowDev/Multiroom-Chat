module.exports.iniciarChat = (app,req,res) => {

    var dadosForm = req.body;

    req.assert('apelido','Digite o seu apelido!').notEmpty();
    req.assert('apelido','O seu apelido precisa ter entre 4 e 40 caracteres!').len(4,40);

    var erros = req.validationErrors();

    if(erros){
        res.render("index",{valida:erros});
        return;
    }

    res.render("chat");
}