import promptSync from 'prompt-sync';
import WebSocket from 'ws';

const prompt = promptSync();

async function main() {
    const ws = new WebSocket('ws://localhost:3000');

    ws.on('open', async function () {
        console.log('Connected to server');

        ws.send('getQuestions');

        ws.on('message', function (data) {
            const questions = JSON.parse(data);

            let correctAnswers = 0;

            for (let i = 0; i < questions.length; i++) {
                console.log(`\nPergunta ${i + 1}: ${questions[i].questions}`);
                console.log(`A) ${questions[i].answerslist[0]}`);
                console.log(`B) ${questions[i].answerslist[1]}`);
                console.log(`C) ${questions[i].answerslist[2]}`);
                console.log(`D) ${questions[i].answerslist[3]}`);

                const answer = prompt(`Digite sua resposta para a pergunta ${i + 1} (A, B, C ou D): `).toUpperCase();

                if (answer === 'A' && questions[i].correctid === 0 ||
                    answer === 'B' && questions[i].correctid === 1 ||
                    answer === 'C' && questions[i].correctid === 2 ||
                    answer === 'D' && questions[i].correctid === 3) {
                    correctAnswers++;
                }
            }

            console.log(`\nVocê acertou ${correctAnswers} de ${questions.length} perguntas.\n`);

            for (let i = 0; i < questions.length; i++) {
                console.log(`Pergunta ${i + 1}: ${questions[i].questions}`);
                console.log(`Resposta correta: ${questions[i].answerslist[questions[i].correctid]}\n`);
            }

            ws.close();
        });
    });
}

main();