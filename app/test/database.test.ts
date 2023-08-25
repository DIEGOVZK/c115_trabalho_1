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
});
