const { Schema } = require('mongoose');

const dateSchema = new Schema(
    {
        date: String,
        complete: Boolean
    }
)

const Date = model('Date', dateSchema)

module.exports = Date;