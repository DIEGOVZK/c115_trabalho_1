import Database from "./database";

class Forms {

    database = Database.getInstace();
    listQA: { [key: string]: [string, number] };

    constructor() {

    }

    async getR3QA(): Promise<any> {
        const getQuery: string = `SELECT questions, answersList, correctID
                            FROM QuestionsAndAnswers
                            ORDER BY RANDOM()
                            LIMIT 3;`;

        const result = await this.database.query(getQuery);
        return result;
    }

    verify(answers: [number]) { };
}

export default Forms;