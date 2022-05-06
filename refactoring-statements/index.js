function statement (invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD",
            minimumFractionDigits: 2 }).format;

    for (let xxx of invoice.performances) {
        const play = plays[xxx.playID];
        let v = 0;
        switch (play.type) {
            case "tragedy":
                v = 40000;
                if (xxx.audience > 30) {
                    v += 1000 * (xxx.audience - 30);
                }
                break;
            case "comedy":
                v = 30000;
                if (xxx.audience > 20) {
                    v += 10000 + 500 * (xxx.audience - 20);
                }
                v += 300 * xxx.audience;
                break;
            default:
                throw new Error(`unknown type: ${play.type}`);
        }
        // add volume credits
        volumeCredits += Math.max(xxx.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === play.type) volumeCredits += Math.floor(xxx.audience / 5);
        // print line for this order
        result += ` ${play.name}: ${format(v/100)} (${xxx.audience} seats)\n`;
        totalAmount += v;
    }
    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}

module.exports = statement;