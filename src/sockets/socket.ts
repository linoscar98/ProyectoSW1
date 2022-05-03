import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
}

//escuchar los datos de los diagramas
export const diagrama = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('emite-datos', (data: any) => {
        //console.log(data);
        io.emit('obtiene-datos', data);
        cliente.broadcast.emit('obtiene-datos', data);
    });
}