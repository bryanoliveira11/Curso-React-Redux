const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/todo", {
    useMongoClient: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
