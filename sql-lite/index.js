class SQLEngine {
    constructor(data) {
        this._data = data;
    }
    execute(query) {
        const fields = query.match(/(?<=select ).+(?= from)/gi)[0].split(', ');
        const table =  query.match(/(?<=from ).+(?= where)/gi) || query.match(/(?<=from ).+/gi);
        const filter = query.match(/(?<=where ).+/gi);

        const queryResult = this._data[table].map(element => {
            if (fields[0] === '*') return element;
            const result = {};
            fields.forEach((field) => {
                result[field] = element[field];
            })
            return result;
        });

        return queryResult.filter((field) => field);
    }
}

module.exports = SQLEngine;