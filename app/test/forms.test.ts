import { expect } from 'chai';
import 'mocha';

import Forms from '../src/forms'

describe('Forms testing...', () => {
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

    context('Validação da seleção das questões', () => {
        it('Deve buscar 3 questões do banco de dados', async () => {
            const formsInstance = new Forms();
            const resQuery = await formsInstance.getR3QA();
            expect(resQuery).to.length(3);
        });
    });
});
