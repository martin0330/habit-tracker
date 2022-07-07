const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/habit-tracker", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

module.exports = mongoose.connection;
