import io from 'socket.io-client';
import { SocketURL } from './API';

let socket = io(SocketURL, { reconnect: true });
export { socket };
