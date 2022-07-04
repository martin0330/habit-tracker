const { Schema } = require('mongoose');

const habitSchema = new Schema(
    {
        name: {
            type: String
        },
        streak: {
            type: Number
        }
    }
)


const Habit = model('Habit', habitSchema)

module.exports = Habit;