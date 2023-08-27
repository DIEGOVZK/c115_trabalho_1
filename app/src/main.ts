import Forms from './forms';
import WebSocket from 'ws';

async function main() {

    const forms = new Forms();
    const questions = await forms.getR3QA();

    const server = new WebSocket.Server({ port: 3000 });

    server.on('connection', (socket) => {
        console.log('Client connected');

        socket.on('message', async (message: WebSocket.Data) => {
            if (message == 'getQuestions') {
                socket.send(JSON.stringify(questions));
            }
        });

        socket.on('close', () => {
            console.log('Client disconnected');
        });
    });
}

main();