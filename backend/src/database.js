const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Data base mongo Connected", db.connection.name);
  })
  .catch((err) => {
    console.error(err);
  });
