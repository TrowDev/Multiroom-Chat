const app = require('./config/server');

const PORT = process.env.PORT || 80;

var server = app.listen(PORT,()=>{
    console.log("Servidor rodando na porta 80.");
});

var io = require('socket.io').listen(server);

app.set('io',io);

io.on('connection',(socket)=>{
    console.log("Usuário conectou!");

    socket.on('disconnect',()=>{
        console.log('Usuário desconectou!');
    });

    socket.on('disparaServidor', (data)=>{
        socket.emit('notificaUsuarios',data);
        socket.broadcast.emit('notificaUsuarios',data);
        
        if(parseInt(data.apelido_atualizado)==0){
            socket.emit('updateMembros',data);
            socket.broadcast.emit('updateMembros',data);
        }
    });

});
