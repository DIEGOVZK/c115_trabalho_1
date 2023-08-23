import { expect } from 'chai';
import 'mocha';

import Database from '../src/database.ts';

describe('Test suite description', () => {
    beforeEach(() => {
        // Code to run before each test case
    });

    afterEach(() => {
        // Code to run after each test case
    });

    before(() => {
        // Code to run before all test cases
    });

    after(() => {
        // Code to run after all test cases
    });

    context('Validação de conexão', () => {
        it('Deve validar a conexão com o banco de dados', () => {
            const databaseInstance = Database.getInstace();
            let queryRes = databaseInstance.query('SELECT 1');
            expect(queryRes).to.be.true;
        });
    });

    context('Validação de existência das tabelas', () => {
        it('Deve garatir que a tabela de questionário existe', () => {
            const databaseInstance = Database.getInstace();
            let tableValRes = databaseInstance.query(`SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'questions');`);
            expect(tableValRes).to.be.true;
        });

        it('Deve garatir que a tabela de respostas existe', () => {
            const databaseInstance = Database.getInstace();
            let tableValRes = databaseInstance.query(`SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'answers');`);
            expect(tableValRes).to.be.true;
        });

        it('Deve garatir que a tabela de temas existe', () => {
            const databaseInstance = Database.getInstace();
            let tableValRes = databaseInstance.query(`SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'themes');`);
            expect(tableValRes).to.be.true;
        });

        it('Deve garatir que a tabela de usuário existe', () => {
            const databaseInstance = Database.getInstace();
            let tableValRes = databaseInstance.query(`SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users');`);
            expect(tableValRes).to.be.true;
        });
    });


    context('Validação de funcionalidade de funções', () => {
    it('Deve garatir que o usuário possa resgistrar uma resposta através da stored function (registerRes), com o número de acertos incluso', () => {
        const databaseInstance = Database.getInstace();
        let funcValRes = databaseInstance.query(`SELECT EXISTS (SELECT 1 FROM pg_proc WHERE proname = 'registerRes');`)
        let funcExecRes = databaseInstance.query(`SELECT registerRes ('João', 87)`)
        expect(funcValRes).to.be.true;
        expect(funcExecRes).to.be.null;
    });

    it('Deve garatir que novas questões possam ser implementadas no banco de dados', () => {
        const databaseInstance = Database.getInstace();
        
        
    });

    it('Another test case description', () => {
        // Another test case code
        expect(false).to.equal(false);
    });
});
