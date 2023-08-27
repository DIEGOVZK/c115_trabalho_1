import { expect } from 'chai';
import 'mocha';

import Database from '../src/database';

describe('Database testing...', () => {
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
        it('Deve validar a conexão com o banco de dados', async () => {
            const databaseInstance = Database.getInstace();
            const queryRes = await databaseInstance.query('SELECT 1');
            const value = queryRes[0]['?column?'];
            expect(value).to.equal(1);
        });
    });
});
