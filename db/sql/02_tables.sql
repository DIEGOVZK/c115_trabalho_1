DROP TABLE IF EXISTS QuestionsAndAnswers;

CREATE TABLE QuestionsAndAnswers (
    id SERIAL PRIMARY KEY,
    questions VARCHAR(512),
    answersList VARCHAR(512)[],
    correctID int
);