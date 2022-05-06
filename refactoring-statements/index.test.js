const statement = require('./index');

describe('statement', () => {
    test('example statement', () => {
        const invoice = {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        };
        const plays = {
            "hamlet": { "name": "Hamlet", "type": "tragedy" },
            "as-like": { "name": "As You Like It", "type": "comedy" },
            "othello": { "name": "Othello", "type": "tragedy" }
        };
        expect(statement(invoice, plays)).toMatchSnapshot();
    });

    test('statement with new play types', () => {
        const invoice = {
            "customer": "BigCoII",
            "performances": [
                {
                    "playID": "henry-v",
                    "audience": 53
                },
                {
                    "playID": "as-like",
                    "audience": 55
                }
            ]
        };
        const plays = {
            "henry-v": { "name": "Henry V", "type": "history" },
            "as-like": { "name": "As You Like It", "type": "pastoral" }
        };
        expect(() => { statement(invoice, plays) }).toThrow(/unknown type/);
    });
});